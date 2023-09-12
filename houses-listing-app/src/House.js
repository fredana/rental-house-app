import React from 'react';

const House = ({ house }) => {
  return (
    <div className="house-card">
      <img src={house.image} alt="House" />
      <h2>{house.location}</h2>
      <p>{house.price}</p>
    </div>
  );
};

export default House;
