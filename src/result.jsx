import React from 'react';
import userAnswers from './user_answers';
import questions from './questions';

const Result = (props) => {
  let correctAnswer = "bingo";
  let userChoices = userAnswers.map((choice, index) => {    
    if(!questions[index].choices[choice].isCorrect){
      for (let i = 0; i < questions[index].choices.length; i++) {
        if(questions[index].choices[i].isCorrect){
          correctAnswer = questions[index].choices[i].answer;
      }      
    }
    return <li key={index}>
      <h3>{questions[index].question}</h3>
        <p className="wrong-answer">
          {questions[index].choices[choice].answer}
        </p>
      <p className="right-answer">{correctAnswer}</p>
      </li>
     }
  }
    );
  return (
    <div id="result-container">
      <h1 id="result-header">You got {props.points + "/" + props.maxRange} answers right.</h1>
      <h2>Wrong answers:</h2>
      <ul>{userChoices}</ul>
    </div>
  )
}
export default Result;