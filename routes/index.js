var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});
/* GET home page. */
router.get('/Home', function(req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});
/* GET About page. */
router.get('/About', function(req, res, next) {
  res.render('index', {
    title: 'About'
  });
});
/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
  res.render('index', {
    title: 'Projects'
  });
});
/* GET Contacts page. */
router.get('/Contacts', function(req, res, next) {
  res.render('index', {
    title: 'Contacts'
  });
});
module.exports = router;



