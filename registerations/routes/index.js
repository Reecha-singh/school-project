var express = require('express');
var User = require('./users');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/register', function(req, res){
    var newUser = new User({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    Username : req.body.Username,
    
  })

User.register(newUser, req.body.Password)
   .then(function(registeredUser){
     passport.authenticate('local')(req, res, function(){
       res.redirect('profile');
    })
  })
});

router.get('/profile',function(req,res){
  res.send('registered');
});

 module.exports = router;
