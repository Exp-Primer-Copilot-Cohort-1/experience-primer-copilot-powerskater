// Create web server
// Handle the GET request for getting all comments
// Handle the POST request for adding a new comment
// Handle the PUT request for updating a comment
// Handle the DELETE request for deleting a comment

// Import the express module
const express = require('express');
// Create a router object
const router = express.Router();
// Import the Comment model
const Comment = require('../models/Comment');

// GET request handler for getting all comments
router.get('/', (req, res) => {
  // Use the Comment model to find all comments
  Comment.find()
    .then((comments) => {
      // If the promise is resolved successfully return the comments in JSON format
      res.json(comments);
    })
    .catch((err) => {
      // If the promise is rejected return the error
      res.json(err);
    });
});

// POST request handler for adding a new comment
router.post('/', (req, res) => {
  // Create a new comment using the Comment model
  const comment = new Comment({
    // Set the comment properties using the values sent in the request body
    comment: req.body.comment,
