var express = require('express');
var router = express.Router();

var labCtrl = require('../controllers/lab-api');


router.post('/:institute/labs', labCtrl.createLab);
router.get('/:institute/labs', labCtrl.getAllLabs);
router.get('/:institute/labs/:labslug', labCtrl.getThisLab);

router.post('/:institute/labs/create-batch', labCtrl.saveBatch);
router.post('/:institute/labs/create-gs', labCtrl.saveGS);


router.post('/institute/sign-up', labCtrl.saveInstitute);


module.exports = router;
