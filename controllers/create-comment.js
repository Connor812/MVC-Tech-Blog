const router = require('express').Router();
const { Comment } = require('../models');
const date = require('../utils/helpers');

router.post('/', async (req, res) => {
try{
    const newComment = await Comment.create({
        blogPost_id: req.body.blogPost_id,
        commented_by: req.session.username,
        comment: req.body.comment,
        date: date()
      });

console.log(newComment);
res.status(200).json(newComment);

    } catch(err) {
        res.status(500).json(err);
    }
});




module.exports = router;