const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log(req)
    res.render('add-comment', {
        // blogpost_id: req.params.id,
        username: req.session.username
    });
});

module.exports = router;