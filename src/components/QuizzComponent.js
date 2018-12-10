import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class QuizzComponent extends Component {





  render() {
    console.log('props' + JSON.stringify(this.props));
    let {Quizz} = this.props ;
    return (
<div className="conatiner">

<b /><p> <b>{ Quizz.question_content} </b> </p>
<button onClick={this.props.handleQuizz({"id_quizz":this.props.Quizz.id,"answer":1})} className="button button2">{Quizz.reponse1}</button>
 <button onClick={this.props.handleQuizz({"id_quizz":this.props.Quizz.id,"answer":2})} className="button button2">{Quizz.reponse2}</button>
 <button onClick={this.props.handleQuizz({"id_quizz":this.props.Quizz.id,"answer":3})} className="button button2">{Quizz.reponse3}</button>

</div>


    );
  }
}

export default QuizzComponent ;