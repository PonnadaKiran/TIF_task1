import React from 'react';

const Card = ({ card: { image, title, description } }) => (
  <div className="card">
    <img src={image} alt="" />
    <div className="content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div className="buttonContainer">
      <button>Read More</button>
    </div>
  </div>
);

export default Card;
