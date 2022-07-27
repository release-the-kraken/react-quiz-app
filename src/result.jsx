import React from 'react';
import userAnswers from './user_answers';
import questions from './questions';

const Result = (props) => {
  let userChoices = userAnswers.map((choice, index) => {
    console.log("index: " + index + " | choice:" + choice + " | " + questions[index].choices[choice].isCorrect)
    if(questions[index].choices[choice].isCorrect){
      console.log("bingo");
    return <li key={index}>
      <h3>{questions[index].question}</h3>
        <p className="right-answer">
          {questions[index].choices[choice].answer}
        </p>
      </li>
    
    }else{
      return <li key={index}>
        <h3>{questions[index].question}</h3>
        <p className="wrong-answer">
        {questions[index].choices[choice].answer}
      </p>
        </li>
    }
  }
    );
  return (
    <div id="result-container">
      <h1 id="result-header">Your points</h1>
      <h2>{props.points + "/" + props.maxRange}</h2>
      <ul>{userChoices}</ul>
    </div>
  )
}
export default Result;