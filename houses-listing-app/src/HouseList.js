import React, { useState, useEffect } from 'react';
import House from './House';

const HouseList = () => {
  const [houses, setHouses] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3002/houses')
      .then((response) => response.json())
      .then((data) => setHouses(data));
  }, []);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="house-list">
      <button onClick={toggleList}>
        {showList ? 'Hide House List' : 'Show House List'}
      </button>
      {showList && (
        <div>
          <h2>Houses List</h2>
          {houses.map((house) => (
            <House key={house.id} house={house} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HouseList;
