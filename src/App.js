import React, { Component } from 'react';
import friends from "./friends.json";
import './App.css';
import PicCard from './components/PicCard';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Wrapper from './components/Wrapper';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };


  render() {
    return (
      <div className="App">
        <NavBar />
        <Hero />
        <Wrapper>
          {this.state.friends.map(friend => (
            <PicCard
              removeFriend={this.removeFriend}
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
