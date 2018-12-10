import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class WelcomeComponent extends Component {





  render() {
    return (
<div className="container">

<img src="./logo.png" width="100px" height="50px" />
<b />
  <p><i className="fas fa-angle-double-left"></i> welcome in our website .....<i className="fas fa-angle-double-right"></i></p>
<button className="button button2" onClick={this.props.DisplayQuizz}>Quizz</button>
 <button className="button button2" onClick={this.props.DisplayMap}>Je suis Perdu</button>
 <button className="button button2" onClick={this.props.DisplayAlertes}>Mes Alertes</button>
 <button className="button button2" onClick={this.props.DisplayWbeCam}>Qui Vous etes ?</button>

</div>


    );
  }
}

export default  WelcomeComponent ;