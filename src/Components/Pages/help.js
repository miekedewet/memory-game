import React from 'react';
import '../Pages/help.css'
  
const Help = () => {
  return (
    <div className="rules-div"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
      }}
    >
      <h1 className='game-rules'>Rules of the Game</h1>
      <ul className='rules-list'>
        <li>Smiley faces are shuffled and placed face down at the start of each game.</li>
        <li>Start by turning over each card and matching it with the same card.</li>
        <li>You will only be able to turn over two cards at a time, after which  both will be flipped back.</li>
        <li>After all cards have been matched, you will have the option to start again!</li>
      </ul>
      <h3>Have fun!</h3>
    </div>
  );
};
  
export default Help;