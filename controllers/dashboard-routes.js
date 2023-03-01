const router = require('express').Router();
const { User, BlogPost } = require('../models')

router.get('/', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }

    const userBlogpostData = await User.findOne({
        where: {
            id: req.session.user_id
        },
        attributes: {exclude: ['password']},

        include: { model: BlogPost }
    });
    
    const blogPosts = userBlogpostData.get({ plain: true });
    console.log(blogPosts)
        res.render('dashboard', {
            blogPosts,
            loggedIn: req.session.loggedIn,
            username: req.session.username
        });
});

router.delete('/', async (req, res) => {
    try {
        console.log(req.body.postId)
    const deleteBlogpost = await BlogPost.destroy({
        where: {
            id: req.body.postId
        },
    });
    console.log(deleteBlogpost);
    res.status(200).json(deleteBlogpost)
    } catch (err) {
        res.status(500).json(err);
    }
    
});

module.exports = router;