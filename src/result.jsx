import React from 'react';

const Result = (props) => {
  return (
    <div id="result-container">
      <h1 id="result-header">Your points</h1>
      <h2>{props.points + "/" + props.maxRange}</h2>
    </div>
  )
}
export default Result;