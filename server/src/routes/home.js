const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const db = require('../models');

const router = express.Router();
const {Home} = db.sequelize.models;

app.put('/home/edit:id', async(req, res) => {
  console.log('/edit:id - put');
  let I_id = req.params.id;
  I_id = parseInt(I_id);
  const {image} = req.body
  try {
    const image = await Home.update({image}, {
      where: {I_id: I_id}
    });
    console.log(image);
    res.send(image);
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Server error, Failed to upload image')
  }
})

router.get('/home/:id', async (req, res) => {
  console.log('/api/home/:id - get');
  let id = req.params.id;
  id = parseInt(id);
  try {
    const image = await Home.findByPk(id);
    console.log(image);
    res.send(image);
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Server error, failed to retrieve image')
  }
})

router.post('/home/add', async(req, res) => {
  console.log('/api/home/add - post');
  console.log(req.body);

  try{
    const image = await Home.create({
      image
    })
    console.log(image.toJSON());

    res.send(image);
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Server error, failed to upload image')
  }
})

module.exports = router;