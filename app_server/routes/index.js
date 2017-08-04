var express = require('express');
var router = express.Router();
var mainCrtl = require('../controllers/main');

router.get('/', mainCrtl.index);

module.exports = router;

//Dashboard
router.get('/dashboard', mainCrtl.dashboard);

router.get('/_dashboard', mainCrtl._dashboard);


//Challeneges
router.get('/challenges', mainCrtl.challeneges);

router.get('/_challenges', mainCrtl._challeneges);


//Project
router.get('/project', mainCrtl.project);

//Archived
router.get('/challenges/archived', mainCrtl.archived_challenges);


//Lab
router.get('/lab', mainCrtl.lab);

//Profile
router.get('/profile', mainCrtl.profile);
