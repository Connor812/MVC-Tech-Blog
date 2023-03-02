const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            order: [['id', 'DESC']],
            include: [
                {
                    model: Comment
                },
                {
                    model: User,
                    attributes: {
                        exclude: ['password']
                    }
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
        res.render('homepage', {
            blogPosts,
            loggedIn: req.session.loggedIn,
            username: req.session.username
        });

    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/blogpost', async (req, res) => {
    const blogpostId = req.query.id;
    console.log(blogpostId);

    const blogpost = await BlogPost.findOne({
        where: {
            id: blogpostId
        },
        include: [
            {
                model: Comment
            },
            {
                model: User,
                attributes: {
                    exclude: ['password']
                }
            },
        ],
        
        
    });

    const renderBlogpost = blogpost.get({ plain: true });
    console.log(renderBlogpost);
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    res.render('comment', {
        renderBlogpost,
        loggedIn: req.session.loggedIn,
        username: req.session.username
    });
});










module.exports = router;