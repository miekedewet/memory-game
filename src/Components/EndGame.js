import React from "react";
import { messages } from "./messages";

// create component for game finish - show random end message and restart button
class EndGame extends React.Component {
  handleClick = () => {
    this.props.newGame(false);
  };
  render() {
    messages.sort(() => Math.random() - 0.5);
    return (
      <div className="end-game">
        <div className="message">
          <h2>{messages[0].title}</h2>
          <p>{messages[0].message}</p>
          <button className="btn-primary" onClick={this.handleClick}>
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default EndGame;