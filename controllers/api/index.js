const router = require('express').Router();
const userRoutes = require('./user-routes');
const viewSingleBlogpost = require('./view-single-blogpost');

router.use('/users', userRoutes);
router.use('/comment', viewSingleBlogpost);

module.exports = router;
