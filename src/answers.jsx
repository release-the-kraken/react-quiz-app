import React from 'react';

class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.addPointsAndGetNextQuestion = this.addPointsAndGetNextQuestion.bind(this);
  }

  getNextQuestion() {
    this.props.getNextQuestion();
  }
  addPointsAndGetNextQuestion() {
    this.props.getNextQuestion();
    this.props.addPoints();
  }
  render() {
    let answers = this.props.answers.map((choice, index) => {
      if (choice.isCorrect) {
        return <li key={index}>
          <button
            className="button"
            onClick={this.addPointsAndGetNextQuestion}>
            {choice.answer}
          </button>
        </li>
      } else {
        return <li key={index}><button
          className="button"
          onClick={this.getNextQuestion}>
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