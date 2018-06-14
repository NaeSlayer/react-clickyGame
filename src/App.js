import React, { Component } from 'react';
import pics from "./pics.json";
import './App.css';
import PicCard from './components/PicCard';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Wrapper from './components/Wrapper';

let clickedArr = [];

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pics,
    score: 0,
    topScore: 0,
    guess: "Click an image to begin!"
  };
  // test test
  checkTopScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      })
    }
  }

  handleClickEvent = id => {

    // check clickedArr to see if id is there
    if (clickedArr.indexOf(id) !== -1) {
      // if yes -> game over, reset game
      this.checkTopScore();
      this.setState({
        score: 0,
        guess: "You Guessed Incorrectly!"
      });
      clickedArr = [];
      console.log("Array: " + clickedArr)

    } else {
      clickedArr.push(id);
      this.setState({
        score: this.state.score + 1,
        guess: "You Guessed Correctly"
      })
    }
    console.log(clickedArr);
    // shuffle pics will get called here
  }

  shuffleCards = cards => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }


  render() {
    return (
      <div className="App">
        <NavBar score={this.state.score} topScore={this.state.topScore} guess={this.state.guess} />
        <Hero />
        <Wrapper>
          {this.state.pics.map(pic => (
            <PicCard
              onClick={() => this.handleClickEvent(pic.id)}
              id={pic.id}
              key={pic.id}
              image={pic.image}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}

export default App;
