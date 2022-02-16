const express = require('express');
const router = express.Router();
const Post = require('../models/Post.model');

router.route('/')
.get((req, res) => {
    res.render('post/create-post')
})
.post((req, res) => {
    

    Post.create({
        username,
        email,
        passwordHash: hashedPassword
      })
})


module.exports = router;