import React from 'react';
import './App.css';

const questions = [
  {
    question: "Po ile kilogram obywatela z wyższym wykształceniem?", choices: [
      { answer: "A.Po 200", isCorrect: false },
      { answer: "B. Piątaka", isCorrect: false },
      { answer: "C. 75", isCorrect: true }
    ]
  },
  {
    question: "Ile stoi osób?", choices: [
      { answer: "A. 4", isCorrect: false },
      { answer: "B. 121", isCorrect: true },
      { answer: "C. 127", isCorrect: false }
    ]
  },
  {
    question: "Kto dzwonił do Prezesa Ochódzkiego z Londynu?", choices: [
      { answer: "A. Królowa", isCorrect: false },
      { answer: "B. Polański", isCorrect: true },
      { answer: "C. Wajda", isCorrect: false }]
  },
  {
    question: "Jak nazywał się chłopiec, który mówił brzydkie wyrazy?", choices: [
      { answer: "A. Tomek Mazur", isCorrect: true },
      { answer: "B. Jarek Azot", isCorrect: false },
      { answer: "C. Lech Ryś", isCorrect: false }
    ]
  },
  {
    question: "A mąż Zofii?", choices: [
      { answer: "A. Jan Kowalski", isCorrect: false },
      { answer: "B. Zdzisław Dyrman", isCorrect: true },
      { answer: "C. Stanisław Paluch", isCorrect: false }
    ]
  },
  {
    question: "W jakich filmach widziała Pana Reżysera mama Robusia?", choices: [
      { answer: "A. Przygodowych, sensacyjnych, komediach", isCorrect: false },
      { answer: "B. Dokumentalnych", isCorrect: false },
      { answer: "C. Polskich, zagranicznych i amerykańskich", isCorrect: true }
    ]
  },
  {
    question: "Za kogo chciał być chłopiec ze wsi?", choices: [
      { answer: "A. Za Heroda", isCorrect: true },
      { answer: "B. Za Mikołaja", isCorrect: false },
      { answer: "C. Za trzech króli", isCorrect: false }
    ]
  },
  {
    question: "Co też jest obowiązkowe?", choices: [
      { answer: "A. Higiena", isCorrect: false },
      { answer: "B. Szatnia", isCorrect: true },
      { answer: "C. Jak się wchodzi to się puka", isCorrect: false }
    ]
  },
  {
    question: "O czym nie wspomniał przedstawiciel brygady młodziezowej?", choices: [
      { answer: "A. Musztarda", isCorrect: true },
      { answer: "B. Keczup", isCorrect: false },
      { answer: "C. Sos czosnkowy", isCorrect: false }
    ]
  },
  {
    question: "Które miejsce zajął wnuk Ministra?", choices: [
      { answer: "A. 3", isCorrect: false },
      { answer: "B. 2", isCorrect: false },
      { answer: "C. 1", isCorrect: true }
    ]
  }
];

const App = () => {
  return (
    <main >
      <QuizContainer />
    </main>
  );
}
const WelcomeScreen = (props) => {
  return (
    <div id="welcome-container">
      <h1 id="welcome-header">Welcome to quiz</h1>
      <button id="start-button" onClick={props.toggleDisplay}>Take the quiz</button>
    </div>
  )
}
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
        <Result points={this.state.totalPoints} />
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

const Question = (props) => {
  return (
    <div>
      <h1 id="quiz-header">{props.question}</h1>
    </div>
  )
}
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
const Result = (props) => {
  return (
    <div id="result-container">
      <h1 id="result-header">Your points</h1>
      <h2>{props.points + "/" + questions.length}</h2>
    </div>
  )
}
export default App;