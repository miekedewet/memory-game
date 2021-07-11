import React from "react";
import { images } from "../Images/index";

// create Images component to sort images at start of game
class Images extends React.Component {
  characters = [];
  //functionality to show matched cards by changing 'check; value to 'found'
  handleClick = (event) => {
    let character = event.target;
    if (character.getAttribute("check") === "found") {
      return;
    }

    if (character !== this.characters[0]) {
      this.switch(character);
      this.characters.push(character);
    } else {
      this.switch(character);
      this.characters = [];
    }

    if (this.characters.length > 2) {
      if (!this.checkName(this.characters[0], this.characters[1])) {
        this.switch(this.characters[0]);
        this.switch(this.characters[1]);
        this.characters.shift();
        this.characters.shift();
      } else {
        this.characters.shift();
        this.characters.shift();
      }
    }
    //if all pictured are flipped and have no 'image-blank' class, finish game and send true boolean to home
    let allPictures = document.getElementsByClassName("image-blank");
    if (allPictures.length < 1) {
      this.props.endGame(true);
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-blank");
        reset[i].setAttribute("check", "false");
        this.characters = [];
      }
    }
  };
  //if not matched - face down again and remove from array
  checkName = (character1, character2) => {
    if (character1.getAttribute("name") === character2.getAttribute("name")) {
      character1.setAttribute("check", "found");
      character2.setAttribute("check", "found");
      return true;
    }
    return false;
  };
  //use switch function remove classname of image-blank
  //if same image isclicked again it turns again - if/else
  switch = (target) => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("image-blank");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("image-blank");
    }
  };
  render() {
    return (
      <div className="images">
        {images
          // use sort method to randomize position of cards for every game
          .sort(() => Math.random() - 0.5)
          //use map to create new card from every image 
          .map((element) => {
            return (
              <div
              // create class for backside of cards, remove on each click
                className="image image-blank"
                name={element.name}
                style={{ background: `url(${element.pic})` }}
                check="false"
                onClick={this.handleClick} //use onclick to store card div into array
              />
            );
          })}
      </div>
    );
  }
}
export default Images;