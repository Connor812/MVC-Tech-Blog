const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            include: [
                {
                    model: Comment
                },
                {
                    model: User
                },
            ],
        });
        const blogPosts = blogPostData.map((blogpost) =>
            blogpost.get({ plain: true })
        );
        res.render('homepage', {
            blogPosts,
            loggedIn: req.session.loggedIn
        });

        // res.status(200).json(blogPostData);
    } catch (err) {
        res.status(500).json(err)
    }
})










module.exports = router;