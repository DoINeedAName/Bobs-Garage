const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const db = require('../models');
const {serviceSchema} = require('../config/validationSchema')

const router = express.Router();
const {Service} = db.sequelize.models;

// Code for adding new service
router.post('/service/add', async(req, res) => {
  console.log('/api/service/add - post');
  console.log(req.body);
  const {name, image, description, price} = req.body;
  console.log(name)
  console.log(description)
  console.log(price)

  try{
    // Validation
    const result = await serviceSchema.validateAsync(req.body)
    
    const service = await Service.create({
      name,
      image,
      description,
      price
    })
    console.log(service.toJSON());
    
    res.send(service);
  }
  catch (error){
    console.error(error.message);
    res.status(500).send('Server error')
  }
  
})

  // get all services
router.get('/services', async(req, res) => {
  console.log('/api/services - get');
  try {
    const list = await Service.findAll();
    // console.log(list);
    res.send(list);
  }
  catch (error){
    console.error(error.message);
    res.status(500).send('Server error')
  }
  
});

  // Get single service
router.get('/service/:id', async(req, res) => {
  console.log('/api/service/:id - get');
  let id = req.params.id;
  id = parseInt(id);
  try {
    const service = await Service.findByPk(id);
    console.log(service);
    res.send(service);
  }
  catch (error){
    console.error(error.message);
    res.status(500).send('Server error')
  }
  
})

// Edits a service
router.put('/service/edit/:id', async(req, res) => {
  console.log('/api/service/edit/:id - put');
  let id = req.params.id;
  id = parseInt(id);
  const {name, image, description, price} = req.body
  try {
    // Validation
    //const result = await serviceSchema.validateAsync(req.body)
    
    const service = await Service.update({name, image, description, price}, {
      where: {S_id: id}
    });
    console.log(service);
    res.send(service);
  }
  catch (error){
    console.error(error.message);
    res.status(500).send('Server error')
  } 
})

// Delete service
router.delete('/service/:id', (req, res) => {
  console.log('/api/service/:id - delete');
  let id = req.params.id;
  id = parseInt(id);
  console.log(id);
  try {
    Service.destroy({
      where: {
        S_id: id
      }
    });
    res.send(`Id ${id} deleted`)
  }
  catch (error){
    console.error(error.message);
    res.status(500).send('Server error')
  }
  
});

//Sort in ascending order
router.get('/services/order-a', async(req, res) => {
  console.log('/api/services/order-a - get');
  try {
    const list = await Service.findAll(
      {order: [['price', 'ASC']]}
    );
    res.send(list);
  }
  catch(error) {
    console.error(error.message);
    res.status(500).send('Server error')
  }
  
});

// Sort in descending order
router.get('/services/order-d', async(req, res) => {
  console.log('/api/services/order-d - get');
  try {
    const list = await Service.findAll(
      {order: [['price', 'DESC']]}
    );
    res.send(list);
  }
  catch(error) {
    console.error(error.message);
    res.status(500).send('Server error')
  }
})

module.exports = router;