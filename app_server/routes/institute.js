var express = require('express');
var router = express.Router();

var ctrl = require('../controllers/inst_controller');

router.get('/:inst/', ctrl.index);
router.get('/:inst/dashboard', ctrl.dashboard);


module.exports = router;
