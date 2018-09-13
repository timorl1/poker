import React from 'react';

const Card = (props) => {
  return (
    <div className="Card">
      <h2>{ props.land }</h2>
      <p>{ props.value }</p>
    </div>
  )
};

export default Card;
