const express = require('express');
const router = express.Router();
const Post = require('../models/Post.model');


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});




module.exports = router;
