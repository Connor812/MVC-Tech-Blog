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
            offCreateBlogPost: true
        });
});


module.exports = router;