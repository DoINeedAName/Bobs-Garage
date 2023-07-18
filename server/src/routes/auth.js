const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models');
const auth = require('../middleware/auth');
const { jwt } = require('jsonwebtoken');

const router = express.Router();
const {User} = db.sequelize.models;

// Gets user
router.get('/', auth, async(req, res) => {
  try{
    const user = await User.findByPk(req.user.u_id);
    res.json(user);
  }
  catch(error) {
    console.log(error.message);
    res.status(500).send('Server error, failed to get user');
  }
})

// Auth route for logging in
router.post('/', async(req, res) => {
  console.log('/api/auth - post');
  const {email, password} = req.body;

  try{
    // checks if user is in users table
    let user = await User.findOne({where: {email: email} });
    // If user is not in table send a message to client
    if(!user) {
      // sends status code 400 which means client side error
      return res.status(400).json({errors: [{ msg: 'Invalid credentials'}]})
    };
    // CHecks to see if entered password is same as one stored in database
    const isMatch = await bcrypt.compare(password, user.password);
    // If match is false we send back a message
    if(!isMatch) {
      return res.status(400).json({errors: [{ msg: 'Invalid Credentials'}] });
    };
    // This generates a token to send to client
    const payload = {
      user: {
        u_id: user.U_id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      }
    };

    const token = User.prototype.signToken(payload);
    res.json({token});

    // Creates object to send back without password
    // const userRes = {
    //   U_id: user.U_id,
    //   name: user.name,
    //   email: user.email,
    //   isAdmin: user.isAdmin,
    //   createdAt: user.createdAt,
    //   updatedAt: user.updatedAt
    // }
    // res.send(userRes);
  }
  catch (error) {
    // Status code 500 means there's a server error
    console.error(error.message);
    res.status(500).send('Server error, failed to log user in')
  }
})

module.exports = router;