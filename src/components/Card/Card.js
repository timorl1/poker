import React from 'react';
import classes from './Card.css'

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <h2>{ props.land }</h2>
      <p>{ props.value }</p>
    </div>
  )
};

export default Card;
