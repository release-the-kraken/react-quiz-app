import React from 'react';

const Question = (props) => {
  return (
    <div>
      <h1 id="quiz-header">{props.question}</h1>
    </div>
  )
}
export default Question;