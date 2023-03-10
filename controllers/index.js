const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const loginRoutes = require('./login-routes');
const dashboardRoutes = require('./dashboard-routes');
const signupRoutes = require('./signup-routes');
const createBlogpostRoutes = require('./create-blogpost');
const createCommentRoutes = require('./create-comment');

router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/signup', signupRoutes);
router.use('/create_blogpost', createBlogpostRoutes);
router.use('/create_comment', createCommentRoutes);
router.use('/', homeRoutes);

module.exports = router;