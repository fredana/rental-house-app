import React, { useState } from 'react';

const AddListing = () => {
  const [newListing, setNewListing] = useState({
    location: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewListing({
      ...newListing,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3002/houses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newListing),
    }).then(() => {
      setNewListing({
        location: '',
        price: '',
        image: '',
      });
    });
  };

  return (
    <div className="add-listing">
      <h2>Add New Listing</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location">Location : </label>
          <input
            type="text"
            id="location"
            name="location"
            value={newListing.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Monthly Price : </label>
          <input
            type="text"
            id="price"
            name="price"
            value={newListing.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL : </label>
          <input
            type="file"
            id="image"
            name="image"
            value={newListing.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
};

export default AddListing;
