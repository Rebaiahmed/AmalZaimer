import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class DetectlostComponent extends Component {





  render() {
    return (
<div className="container">


  <p><i class="fas fa-angle-double-left"></i> Vous avez Trouvé Votre Chemin ??.<i className="fas fa-angle-double-right"></i></p>
<button className="button button3" onClick={this.handleMap("Non")}>Oui</button>
 <button className="button button4" onClick={this.handleMap("Oui")}>Non</button>

</div>


    );
  }
}

export default  DetectlostComponent ;