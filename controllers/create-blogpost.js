const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create-blogpost', {
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router;