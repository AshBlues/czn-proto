var express = require('express');
var router = express.Router();

var labCtrl = require('../controllers/lab-api');


router.post('/:institute/labs', labCtrl.createLab);
router.get('/:institute/labs', labCtrl.getAllLabs);
router.get('/:institute/labs/:labslug', labCtrl.getThisLab);


module.exports = router;
