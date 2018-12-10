var express = require('express');
var buffer = require('buffer');
var path = require('path');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.post('/analyze/image', function(req,res,next){

console.log('data from camera' + JSON.stringify(req.body));

var buf = Buffer.from(req.body.ima,'base64');

  fs.writeFile(path.join(__dirname,'/public/','image.png'), buf, function(error){
    if(error){
      console.log('error error !!')
      throw error;
    }else{
      console.log('File created from base64 string!');
      return true;
    }
});

res.json("ok");




})

module.exports = router;
