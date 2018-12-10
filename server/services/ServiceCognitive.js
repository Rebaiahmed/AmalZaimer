'use strict';

const request = require('request');
var buffer = require('buffer');
var path = require('path');
var fs = require('fs');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '9054071f885948648b8250ba3d1be4e3';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/facelists';

const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';

// Request parameters.
const params = {
    'faceListId' :'tops',
    /*'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
        'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'*/
};

const para1 = {
    "name": "sample_list",
    "userData": "User-provided data attached to the face list."
};

const options = {
    uri: uriBase,
    //qs: params,
    //body: '{"url": ' + '"' + imageUrl + '"}',
   // body : para1,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};



exports.addImage = function(text,options)

{

    request.get(options, (error, response, body) => {
        if (error) {
          console.log('Error: ', error);
          return;
        }
        let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
        console.log('JSON Response\n');
        console.log(jsonResponse);
      });

}


exports.addImage = function(text,options)

{

    request.get(options, (error, response, body) => {
        if (error) {
          console.log('Error: ', error);
          return;
        }
        let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
        console.log('JSON Response\n');
        console.log(jsonResponse);
      });

}


exports.createList= function()

{

    // Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '9054071f885948648b8250ba3d1be4e3';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/facelists/tops';

const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';

// Request parameters.
const params = {
    'faceListId' :'tops',
    /*'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
        'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'*/
};

const para1 = {
    'name': 'sample_list',
    'userData': 'User-provided data attached to the face list.'
};

const options = {
    uri: uriBase,
    //qs: params,
    params: para1,
    //body: '{"url": ' + '"' + imageUrl + '"}',
    // body : params,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

    request.put(options, (error, response, body) => {
        if (error) {
          console.log('Error: ', error);
          return;
        }
        console.log('reponse is' + body);
        let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
        console.log('JSON Response\n');
        //console.log(jsonResponse);
      });

}



//___________________________________________________//
//__________________________________________________//
//______________________________________________________//

exports.getAllFamilyImages= function()

{

    // Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '9054071f885948648b8250ba3d1be4e3';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/facelists/tops';

const options = {
    uri: uriBase,

    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

    request.get(options, (error, response, body) => {
        if (error) {
          console.log('Error: ', error);
          return;
        }
        console.log('reponse is' + body);
        let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
        console.log('JSON Response\n');
        //console.log(jsonResponse);
      });

}



//___________________________________________________//
//__________________________________________________//
//______________________________________________________//

exports.addImage= function()

{

    // Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '9054071f885948648b8250ba3d1be4e3';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/facelists/tops/persistedfaces?userData=Maher Matmati ton enfant';


const para1 = {
    "url": "/home/ahmed/Desktop/Code_Your_Road_Acess/back-end/services/maher.jpg"

    
}

const options = {
    uri: uriBase,
    params: para1,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

    request.post(options, (error, response, body) => {
        if (error) {
          console.log('Error: ', error);
          return;
        }
        console.log('reponse is' + body);
        let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
        console.log('JSON Response\n');
        //console.log(jsonResponse);
      });

}














exports.AnalyzeImage= function()

{

    // Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '22c864dd982b49c9b630a9e1e945a419';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase =
    'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze';

const imageUrl =
    'http://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg';

// Request parameters.
const params = {
    'visualFeatures': 'Categories,Description,Color',
    'details': '',
    'language': 'en'
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);
});

}




exports.detectFace = function(imagebase64){

 console.log('get image')


 //__________Run our code as a Promise ( asynchronous code )   
 return new Promise((resolve, reject) => {
/*let base64Image = imagebase64.split(';base64,').pop();
console.log('base64image' + base64Image);*/
newImg= imagebase64.replace(/^data:image\/png;base64,/, "");
console.log('we are here !!!' + newImg);

fs.writeFile(path.join('file.jpeg'), newImg, 'base64', function(err) {
    if(err){
        console.log('err creating file!!' +err);
        return reject(error);
    }else{
      console.log('File created from base64 string!');
      return resolve("created success!!");
    }
});

//____convert imagebase64 to png 
/*var buf = Buffer.from(base64Image,'base64');

  fs.writeFile(path.join('test.png'), buf, function(error){
    if(error){
        console.log('err creating file!!')
        return reject(error);
    }else{
      console.log('File created from base64 string!');
      return resolve("created success!!");
    }
});*/
 



 

})//____end of Promise__________//
 




}