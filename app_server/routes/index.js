var express = require('express');
var router = express.Router();
var mainCrtl = require('../controllers/main');

router.get('/', mainCrtl.index);

module.exports = router;

router.get('/dashboard', mainCrtl.dashboard);

router.get('/_dashboard', mainCrtl._dashboard);


//challeneges
router.get('/challeneges', mainCrtl.challeneges);

router.get('/_challeneges', mainCrtl._challeneges);
