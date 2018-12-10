import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Webcam from "react-webcam";
import io from "socket.io-client";



class FaceDetectionComponent extends Component {




constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { locationName: '', imageSrc :'' };
        this.socket = io('http://localhost:3001/');
        
      }

//__________________________//      
setRef = webcam => {
        this.webcam = webcam;
};

capture = () => {
 const imageSrc = this.webcam.getScreenshot();

this.setState({'imageSrc':imageSrc})
 var msg ={}
 msg.data = imageSrc;

 this.socket.emit('SEND_FACE_IMAGE', {
  msg
});
};


  render() {

    
let {imageSrc} = this.state ;
console.log('imagRC' + imageSrc);
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };

  let imagecpatured =
  <div className="row">
<img src={"data:image/jpeg;" + imageSrc} />
<h4>Cette Personne est  <span class="badge badge-secondary">Ahmed Rebai votre Enfant</span></h4>
</div>


    return (
<div className="container">

<figure className="snip1113 red">
<Webcam
          audio={false}
          height={200}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
  />
  <figcaption>
    
    
  </figcaption>
</figure>

<div className="row">
<button className="button button3" onClick={this.capture}>Capter</button>
</div>


{ imagecpatured }
      
</div>


    );
  }
}

export default FaceDetectionComponent ;