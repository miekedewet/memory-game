  
import React from "react";
import Images from "../Components/Images";

// create layout for memory game and serve images
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Images endGame={this.props.endGame} />
      </div>
    );
  }
}

export default Game;