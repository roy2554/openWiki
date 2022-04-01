const express = require('express');
const router = express.Router();

router.use('/auth', require('./router/auth'));
router.use('/api', require('./router/api'));

module.exports = router;

export {};