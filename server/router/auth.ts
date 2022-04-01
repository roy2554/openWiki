const express = require('express');
const router = express.Router();
const passport = require('passport');
const bodyParser = require('body-parser');

require('../Auth/authorize');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}))

router.get('/google/redirect', passport.authenticate('google'), (req: any, res: any) => {
    res.redirect('/');
})

router.get('/user', (req: any, res: any) => {
    if (req.user) {
        res.send([true, req.user]);
    } else {
        res.send([false, 'Not Logged In']);
    }
});

router.get('/logout', (req: any, res: any) => {
    req.logout();
    res.redirect('/');
});

module.exports = router

export {}