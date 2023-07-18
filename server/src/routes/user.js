const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models');
const config = require('../config/config')
const {authSchema} = require('../config/validationSchema')

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();
const {User} = db.sequelize.models;

// User route for registering
router.post('/new', async(req, res) => {
  console.log('/api/users/new - post');
  const {name, email, password} = req.body;
  console.log(req.body)
  try {
    // Validation
    const result = await authSchema.validateAsync(req.body)

    // Check is user is already registered
    let user = await User.findOne({where: {email: email} });
    // If user does exist send message to client
    if (user) {
      return res.status(400).json({errors: [{ msg: 'User already exists'}] });
    }
    // Creates new user
    const newUser = {
      name,
      email,
      password,
      isAdmin: false
    };
    // Encrypts our password with bcrypt
    // Bcrypt salts and encrypts the password
    const salt = await bcrypt.genSalt(10);
    // The bigger the number in genSalt the more secure but slower. 10 is default
    newUser.password = await bcrypt.hash(password, salt);
    console.log(newUser);

    // This saves user to the database
    const userRes = await User.create({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      isAdmin: false
    });
    console.log('user saved to database')
    console.log(userRes)

    // res.send(userRes);
    // After registering a new user send a token
    // This generates a token to send to client
    const payload = {
      user: {
        u_id: userRes.U_id,
        name: userRes.name,
        email: userRes.email,
        isAdmin: userRes.isAdmin
      }     
    };
    
    const token = User.prototype.signToken(payload);
    res.json({token});

  }
  catch (error) {
    // if(error.isJoi === true){
    //   res.status(422).send('Validation error, input data does not meet requirements')
    // }
    console.error(error.message);
    res.status(500).send('Server error, failed to register user')
  }
});

// Gets all users
router.get('/', [auth, admin], async (req, res) => {
  console.log('/api/users - get');
  const list = await User.findAll({attributes: {exclude: ["password"]} });
  res.send(list);
});

module.exports = router;