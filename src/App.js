import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';
import { cards } from './cards'


class App extends Component {

  render() {
    return (
      <div className="App">
        {
          cards.deck.map(card => {
            return (
              <Card
                key={ card.id }
                land={ card.suit }
                value={ card.value }/>
            )
          })
        }
      </div>
    );
  }
}

export default App;
