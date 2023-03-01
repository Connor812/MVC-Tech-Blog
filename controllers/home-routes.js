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

        if (blogPosts.length == 0) {
            res.render('no-blogposts', {
                loggedIn: req.session.loggedIn,
                username: req.session.username
            });
            return;
        }
        console.log(req.session.username)
        res.render('homepage', {
            blogPosts,
            loggedIn: req.session.loggedIn,
            username: req.session.username
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;