// Twilio Credentials
const accountSid = 'ACc775a98a39f5e4f3cfec8a61010cfe10';
const authToken = 'd182cb5f397af450faf76196be37ca64';
var geocoding = new require('reverse-geocoding');
var NodeGeocoder = require('node-geocoder');

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);



var options = {
    provider: 'google',
  
    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'dMe0oTQEz12jTzBtn2J4WvhTGXdorFt2', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
  };
  
  var geocoder = NodeGeocoder(options);

exports.SendSmsnotification = function(pos)
  {

 //__________Run our code as a Promise ( asynchronous code )   
return new Promise((resolve, reject) => {


   

 client.messages.create(
    {
      from: '(707)368-4630',
      to: '+21620140428',
      body: "Votre Maladie est Perdu dans l'adresse," + pos
    },
    (err, message) => {
      console.log('message' + message);
      return resolve(message);
      if(err)
      {
        console.log('err' +err);
        return reject(err);
      }
    }
  );//___end client*/








 
      





  
 
    })
  }