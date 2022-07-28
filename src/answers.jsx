import React from 'react';
import userAnswers from './user_answers';

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.addPointsAndGetNextQuestion = this.addPointsAndGetNextQuestion.bind(this);
    this.saveUserChoice = this.saveUserChoice.bind(this);
  }
  saveUserChoice(e){
    userAnswers.push(e.target.value);
  }
  getNextQuestion(e) {
    this.props.getNextQuestion();
    this.saveUserChoice(e);
  }
  addPointsAndGetNextQuestion(e) {
    this.props.getNextQuestion();
    this.props.addPoints();
    this.saveUserChoice(e);
  }
  render() {
    let userAnswers = [];
    let answers = this.props.answers.map((choice, index) => {
      if (choice.isCorrect) {
        return <li key={index}>
          <button
            className="button"
            value ={index}
            onClick={this.addPointsAndGetNextQuestion} >           
            {choice.answer}
          </button>
        </li>
      } else {
        return <li key={index}><button
          className="button"
          value ={index}                      
          onClick={this.getNextQuestion} >         
          {choice.answer}
        </button>
        </li>
      }
    });
    return (
      <div>
        <ul>
          {answers}
        </ul>
      </div>
    );
  }
}
export default Answers;