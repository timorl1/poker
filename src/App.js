import React, { Component } from 'react';
import Card from './components/Card/Card';
import { cards } from './cards'
import classes from './App.css';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        {
          cards.deck.map(card => {
            return (
              <Card
                key={ card.id }
                suit={ card.suit }
                value={ card.value }/>
            )
          })
        }
      </div>
    );
  }
}

export default App;
