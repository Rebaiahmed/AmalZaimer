/*
___________________utils function to help our 
chatbot search througth our database elasticsearch_____


*/
//_____import the necessary packages________//

var apiai = require('apiai')

var appBot = apiai('fabbf3c8880b42d7ad7aced5e47eb4d7');


//_____export the appBot_______________________//
exports.appBot = appBot






//_________function to get user text and get response from api.ai agent


exports.askQuestion = function(text,options)
  {

 //__________Run our code as a Promise ( asynchronous code )   
return new Promise((resolve, reject) => {
     var defaultOptions = {
        sessionId: '<unique session id>', // use any arbitrary id - doesn't matter
};
  
 //_________get the request from the chatbot agent_______//     
let request = appBot.textRequest(text, Object.assign(defaultOptions, options));

//______  if there is response ----> resolve it________//
request.on('response', (response) => {
return resolve(response);
});
  
//______  if there is error  ----> reject-it________//
request.on('error', (error) => {
    return reject(error);
});

//____end of request____________________//
request.end();
    })
  }
