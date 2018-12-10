import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class AlertsComponent extends Component {





  render() {
    return (
<div className="container">
  <button className="btn btn-danger" onclick="createAlert('Opps!','Something went wrong','Here is a bunch of text about some stuff that happened.','danger',true,false,'pageMessages');">
  Vous Avez un Rendez Vous avec le Docteur aujourdhui a 11H
  </button>
</div>


    );
  }
}

export default  AlertsComponent ;