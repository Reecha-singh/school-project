var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/LoginpageStudent', function(req, res){
  res.render('student');
});

router.post('/studentpage', function(req, res){
    res.render('profileS');
  });

router.post('/LoginpageTeacher', function(req, res){
  res.render('teacher');
});

module.exports = router;
