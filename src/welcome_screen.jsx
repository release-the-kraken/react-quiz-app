import React from 'react';

const WelcomeScreen = (props) => {
  return (
    <div id="welcome-container">
      <h1 id="welcome-header">Welcome to quiz</h1>
      <button id="start-button" onClick={props.toggleDisplay}>Take the quiz</button>
    </div>
  )
}
export default WelcomeScreen;