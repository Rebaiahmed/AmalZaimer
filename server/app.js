var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var moment = require('moment')
var socket = require('socket.io');
var apiai = require('apiai');
var fs = require('fs') ;
var schedule = require('node-schedule') ;
var NodeGeocoder = require('node-geocoder');
var geocoding = new require('reverse-geocoding');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



//____import the servies___________________//

var  ServiceChatbot = require('./services/ServiceChatbot')
var ServiceCognitive = require('./services/ServiceCognitive');
var ServiceNotification = require('./services/ServiceNotification');
//var ServiceNotifications = require('./services/')



var options = {
  provider: 'google',

  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);











var server = app.listen(3001, function(){
  console.log("Express server listening on port " + 3001);
});


//_____initialize socket to be used for realtime functions _______________//
io = socket(server);



//______open connection________
io.on('connection', (socket) => {


  console.log('there is someone connected ')



//____declare rule for the schedule.RecurrenceRule()
var rule = new schedule.RecurrenceRule();

rule.hour = 10;
rule.minute = 27;
//_____schedule sending souvenirs_____//
//var j = schedule.scheduleJob('*/1 * * * *', function(fireDate){
 
  /*console.log('send quizz');
var msg ={};
  msg.text  = "Vous avez des bons souvenirs aujourd'hui"
  msg.type ='souvenirs'
  io.emit('RECEIVE_MESSAGE', msg);

});*/



var j = schedule.scheduleJob(rule, function(fireDate){
 
  console.log('send aerts ');
  var msg ={};
  msg.text  ='Vous avez un Rendez Vous Avec le Docteur aujourdhui a 14h!'
  msg.type ='alerts'
  io.emit('RECEIVE_MESSAGE', msg);

});




//_____Listner to other Image___________________//



socket.on('SEND_FACE_IMAGE', function(data){



ServiceCognitive.detectFace(data.msg.data)
.then(response=>{
  console.log('face detetcion ' + JSON.stringify(response));
  msg.type ='face_detected'
  msg.text = 'Maher matmat c votre enfant'
  msg.images = 'ici les images ???'
  io.emit('RECEIVE_MESSAGE', msg);

}).catch(err=>{
  console.log('err detetcing face' + JSON.stringify(err));
})

})//___end Listen to this event____//



//_____Listner to other Image___________________//



socket.on('SEND_RANDOM_IMAGE', function(data){



  ServiceCognitive.detectFace(data.msg.data)
  .then(response=>{
    console.log('face detetcion ' + JSON.stringify(response));
    msg.type ='face_detected'
    msg.text = 'Maher matmat c votre enfant'
    msg.images = 'ici les images ???'
    io.emit('RECEIVE_MESSAGE', msg);
  
  }).catch(err=>{
    console.log('err detetcing face' + JSON.stringify(err));
  })
  
  })//___end Listen to this event____//





//_________RECEIVE ALERT ABOUT LOST MAP________________//

socket.on('PERSON_LOST', function(data){

console.log('pos' + JSON.stringify(data.message.pos));
var msg ={};
  

  ServiceNotification.SendSmsnotification(data.message.pos)
  .then(response=>{
    console.log('sms sen with success ' + JSON.stringify(response));
    msg.type ='notif_sms'
    msg.text = 'Un SMS est envoyé a votre Proche !'
    io.emit('RECEIVE_MESSAGE', msg);
  
  }).catch(err=>{
    console.log('err sending sms' + JSON.stringify(err));
    msg.type ='notif_sms'
    msg.text = 'Un SMS est envoyé a votre Proche !'
    io.emit('RECEIVE_MESSAGE', msg);
  })
  
  })//___end Listen to this event____//




//_________ADD SCORE_________________________________//
//_________RECEIVE ALERT ABOUT LOST MAP________________//

socket.on('SEND_SCORE', function(data){

  console.log('data send score received !' + JSON.stringify(data) );
  
 //___save the score____//   
  
    /*ServiceNotification.SendSmsnotification(data.pos)
    .then(response=>{
      console.log('sms sen with success ' + JSON.stringify(response));
      msg.type ='notif_sms'
      msg.text = 'Un SMS est envoyé a votre Proche !'
      io.emit('RECEIVE_MESSAGE', msg);
    
    }).catch(err=>{
      console.log('err sending sms' + JSON.stringify(err));
    })*/
    
    })//___end Listen to this event____//










  //______socket.on event SEND_MESSAGE
socket.on('SEND_MESSAGE', function(data){

  //console.log('data sent form user' + JSON.stringify(data));
       
  //________call the function to return the response from the bot ___//   
  ServiceChatbot.askQuestion(data.message.text)
    .then(response => {

      //console.log('the respons is' + JSON.stringify(response))
   
      //_____switch intent Name we will execute the correct function __________//
      var msg ={}
      switch (response.result.metadata.intentName) {
        case "ask_location":
            console.log("ask about location !!!")
  
            msg.text  = response.result.fulfillment.speech
            msg.type ='location'
            io.emit('RECEIVE_MESSAGE', msg);
            
            
            break;
        case "ask_about_persons":
            console.log("ask about persons !!!")
  
            msg.text  = response.result.fulfillment.speech
            msg.type ='face_recognition'
            io.emit('RECEIVE_MESSAGE', msg);
            
            
            break;    
           
        default:
           
             console.log('we are here !!') 
            if(response.result.fulfillment.speech){  msg.text =response.result.fulfillment.speech;}
            else {
              msg.text = "Sorry I don't understand !"
            }  
           
            io.emit('RECEIVE_MESSAGE',msg); 
       
    }
  
  
     
    
  
  
  
  
    }).catch(error => {
      console.log(error)
     var message  ="Error from the server !" + error
      io.emit('RECEIVE_MESSAGE', message);
    });
       
  })
  });










module.exports = app;
