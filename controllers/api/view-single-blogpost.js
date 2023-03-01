const { BlogPost } = require('../../models');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
    console.log("working <<<<<<<<<<<<<<<<<<<<<<<<<<<")
    const commentOnBlogpost = await BlogPost.findOne({
        where: {
            id: req.params.id
        },
    });
    
    const blogPostData = commentOnBlogpost.get({ plain: true });
    console.log(blogPostData)
    res.status(200).json;
});

module.exports = router;