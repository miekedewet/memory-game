  
import React from "react";
import Game from "../Game";
import EndGame from "../EndGame";

// create class component to serve all components to App.js
class Home extends React.Component {
  // use state to show endgame component
  state = {
    showEndGame: false,
    score: 0,
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };
  render() {
    const { showEndGame } = this.state;
    return (
      <div>
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Game endGame={this.handleEndGame} />
      </div>
    );
  }
}

export default Home;