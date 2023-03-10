const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login', {
        loggedIn: req.session.loggedIn,
        username: req.session.username
    }
    )
});

module.exports = router;