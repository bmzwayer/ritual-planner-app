var express = require('express');
var router = express.Router();
var passport = require('passport');
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'ritual',
    user: req.user,
    name:req.query.name
  });
}); 
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users',
    failureRedirect : '/'
  }
));
 // OAuth logout route
 router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});
module.exports = router;