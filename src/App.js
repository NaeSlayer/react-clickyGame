import React, { Component } from 'react';
import pics from "./pics.json";
import './App.css';
import PicCard from './components/PicCard';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Wrapper from './components/Wrapper';
import Row from './components/Row';
import Col from './components/Col';
import Container from './components/Container';

let clickedArr = [];

class App extends Component {

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
      if (clickedArr.length === 12) {
        this.setState({
          score: this.state.score + 1,
          guess: "You Win!!"
        })
      } else {
        this.setState({
          score: this.state.score + 1,
          guess: "You Guessed Correctly"
        })
      }
    }
    console.log(clickedArr);
    this.shufflePics(pics);
  }

  shufflePics = pics => {
    for (let i = pics.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pics[i], pics[j]] = [pics[j], pics[i]];
    }
  }


  render() {
    return (
      <div className="App">
        <NavBar score={this.state.score} topScore={this.state.topScore} guess={this.state.guess} />
        <Hero />
        <Wrapper>
          <Container className="container mx-5">
            <Row>

              {this.state.pics.map(pic => (
                <Col size="3" className="m-1">
                  <PicCard
                    onClick={() => this.handleClickEvent(pic.id)}
                    id={pic.id}
                    key={pic.id}
                    image={pic.image}
                  />
                </Col>
              ))}

            </Row>
          </Container>
        </Wrapper>

      </div>
    );
  }
}

export default App;
