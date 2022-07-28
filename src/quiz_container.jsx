import React from 'react';
import questions from './questions';
import WelcomeScreen from './welcome_screen';
import Question from './question';
import Answers from './answers';
import Result from './result';
import userAnswers from './user_answers';

class QuizContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      totalPoints: 0,
      isWelcomeDisplayed: true
    }
    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.addPoints = this.addPoints.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  getNextQuestion() {
    this.setState({
      questionIndex: this.state.questionIndex + 1
    })
  }
  addPoints() {
    this.setState({
      totalPoints: this.state.totalPoints + 1
    })
  }
  toggleDisplay() {
    this.setState({
      isWelcomeDisplayed: false
    })
  }

  render() {
    if (this.state.isWelcomeDisplayed) {
      return (
        <WelcomeScreen toggleDisplay={this.toggleDisplay} />
      )
    }

    if (this.state.questionIndex == questions.length) {
      return (
        <Result points={this.state.totalPoints} maxRange={questions.length} />
      )
    } else {
      return (
        <div id="quiz-container">
          <Question question={questions[this.state.questionIndex].question} />
          <Answers answers={questions[this.state.questionIndex].choices} addPoints={this.addPoints} getNextQuestion={this.getNextQuestion} />
        </div>
      )
    }

  }
}
export default QuizContainer;