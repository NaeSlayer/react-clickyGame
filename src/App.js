import React, { Component } from 'react';
import friends from "./friends.json";
import './App.css';
import PicCard from './components/PicCard';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Wrapper from './components/Wrapper';

const clickedArr = [];

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0
  };



  handleClickEvent = id => {
    // check clickedArr to see if id is there
    if (clickedArr.indexOf(id) !== -1) {
      // if yes -> game over, reset game
      alert("Game over");
    } else {
      clickedArr.push(id);
      // this.setState({
      //   this.state.score: this.state.score += 1,
      // })
    }
    console.log(clickedArr);

    // if no -> push id to clickedArr
    //          add 1 to score
    //          shuffle pics
    //          if score > top score then replace top score


  }


  render() {
    return (
      <div className="App">
        <NavBar score={this.state.score} topScore={this.state.topScore} />
        <Hero />
        <Wrapper>
          {this.state.friends.map(friend => (
            <PicCard
              onClick={() => this.handleClickEvent(friend.id)}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}

export default App;
