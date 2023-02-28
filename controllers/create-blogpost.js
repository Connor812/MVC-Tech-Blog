const { BlogPost } = require('../models');
const date = require('../utils/helpers');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create-blogpost', {
        loggedIn: req.session.loggedIn,
    });
});

router.post('/', async (req, res) => {
    // console.log(req)
    try{

        const createBlogpost = await BlogPost.create({
            user_id: req.session.user_id,
            title: req.body.title,
            description: req.body.description,
            date: date()
        })
        console.log(createBlogpost);
    res.status(200).json(createBlogpost);

    } catch (err) {
        res.status(500).json(err)
    }
    



})




module.exports = router;