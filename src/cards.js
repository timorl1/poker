import shuffle from 'shuffle-array'

export const cards = (() => {
  const deck = [];

  const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  let index = 0

  for (let suit in suits) {
    for (let value in values) {
      deck.push({'suit': suits[suit], 'value': values[value], 'id': index})
      index++
    }
  }
  shuffle(deck)
  return {deck}
})()
