const express = require('express');
const router = require("express").Router();
const Post = require('../models/Post.model')
const User = require("../models/User.model");
const { isLoggedIn, isLoggedOut } = require("../middleware/route-guard.js");

// the creatorId is invidual for that user in that session
router.route('/create-post')
.get(isLoggedIn, (req, res)=>{
    res.render('post/create-post')
})
.post((req, res)=>{
    const content = req.body.content;
    const picName = req.body.picName;
    const picPath = req.body.picPath;
    const creatorId = req.session.currentUser._id;

    const posts = {content, picName, picPath, creatorId}

    Post.create(posts)
    .then(()=>{res.redirect('/')
    })
    .catch(err=> console.log(`something went wrong: ${err}`))
});



router
.get("/:id", (req, res) => {
    const id=req.params.id
    Post.findById(id)
    .then((post) => {
        console.log("object: ", post);
        res.render("post/post-detail", post)
    })
})



module.exports = router;