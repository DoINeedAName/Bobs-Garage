const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const db = require('../models');
const {blogSchema} = require('../config/validationSchema')
const router = express.Router();
const {Blog} = db.sequelize.models;

// Add new blog
router.post('/blog/add', async(req, res) => {
  console.log('api/blog/add - post');
  const {heading, image, content} = req.body;

  try {
    // Validation
    const result = await blogSchema.validateAsync(req.body)
    const blog = await Blog.create({
      heading,
      image,
      content
    })
    console.log(blog.toJSON());

    res.send(blog);
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Server error. Failed to save blog')
  }
});

// Edits a blog
router.put('/blog/edit/:id', async(req, res) => {
  console.log('/api/blog/edit/:id - put');
  let B_id = req.params.id;
  B_id = parseInt(B_id);
  const {heading, image, content} = req.body
  try {
    // Validation
    // const result = await blogSchema.validateAsync(req.body)
    const blog = await Blog.update({heading, image, content}, {
      where: {B_id: B_id}
    });
    console.log(blog);
    res.send(blog);
  }
  catch (error){
    console.error(error.message);
    res.status(500).send('Server error. Failed to update blog')
  }
})

// Deletes a blog
router.delete('/blog/:id', (req, res) => {
  console.log('api/blog/:id - delete');
  let id = req.params.id;
  id = parseInt(id);
  console.log(id)
  try{
    Blog.destroy({
      where: {
        B_id: id
      }
    });
    res.send(`ID ${id} deleted`)
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Server error. Failed to delete blog')
  }
});

// Get a single blog
router.get('/blog/:id', async(req, res) => {
  console.log('api/blog/:id - get');
  let B_id = req.params.id;
  B_id = parseInt(B_id);

  try{
    const blog = await Blog.findByPk(B_id);
    console.log(blog);
    res.send(blog);
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Server error. Failed to retrieve blog')
  }
});

// Get all blogs
router.get('/blogs', async(req, res) => {
  console.log('/api/blogs - get');
  try {
    const list = await Blog.findAll();
    res.send(list);
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Server error. Failed to retrieve blogs')
  }
})

module.exports = router;