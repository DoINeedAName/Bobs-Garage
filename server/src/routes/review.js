const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const db = require('../models');
const {reviewSchema} = require('../config/validationSchema')
const router = express.Router();
const {Review} = db.sequelize.models;

// Add new review
router.post('/review/add', async(req, res) => {
  console.log('/api/review/add - post');
  const {U_id, username, heading, description, rating} = req.body;

  try {

    const review = await Review.create({
      U_id,
      username,
      heading,
      description,
      rating
    })
    console.log(review.toJSON());

    res.send(review);
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Server error. Failed to save review')
  }
});

// Delete review
router.delete('/review/:id', (req, res) => {
  console.log('/api/delete/:id - delete');
  let id = req.params.id;
  id = parseInt(id);
  console.log(id);
  try{
    Review.destroy({
      where: {
        R_id: id
      }
    });
    res.send(`Id ${id} deleted`)
  }
  catch (error){
    console.error(error.message);
    res.status(500).send('Server error, failed to delete review')
  }
})

// Get single review
router.get('/review/:id', async(req, res) => {
  console.log('api/review/:id - get');
  let id = req.params.id;
  id = parseInt(id);

  try{
    const review = await Review.findByPk(id);
    consolelog(review);
    res.send(review);
  }
  catch (error){
    console.error(error.message);
    res.status(500).send('Server error. Failed to retrieve review')
  }
});

// Get all reviews
router.get('/reviews', async(req, res) => {
  console.log('/api/reviews - get');
  try {
    const list = await Review.findAll();
    res.send(list);
  }
  catch (error){
    console.error(error.message)
    res.status(500).send('Server error. Failed to retrieve reviews')
  }
})

module.exports = router;