import React, { useState } from 'react';

const UserAddedHouses = () => {
  const [userListings, setUserListings] = useState([]);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]); // Store an array of selected image files
  const [showUserListings, setShowUserListings] = useState(false);

  const handleAddListing = () => {
    if (location && price && images.length > 0) {
      const newListing = {
        location,
        description,
        price,
        images: images.map((image) => URL.createObjectURL(image)), // Convert to blob URLs
      };

      setUserListings([...userListings, newListing]);

      // Clear input fields and selected images
      setLocation('');
      setDescription('');
      setPrice('');
      setImages([]);
    } else {
      alert('Please fill in all fields and select at least one image.');
    }
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files); // Convert FileList to an array
    setImages(selectedImages);
  };

  const toggleUserListings = () => {
    setShowUserListings(!showUserListings);
  };

  // Function to toggle the zoom effect class on an image
  const toggleZoom = (index) => {
    const updatedListings = [...userListings];
    updatedListings[index].zoomed = !updatedListings[index].zoomed;
    setUserListings(updatedListings);
  };

  const handleBuyClick = () => {
    alert('Thank you for your confirmation!');
  };

  return (
    <div className="user-added-houses">
      <h2><u>Add New Listing</u></h2>
      <div className="add-listing-form">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value.toUpperCase())}
        />
        
        <input 
           type="text" 
           placeholder='House Descrition' 
           value={description} 
           onChange={(e) => setDescription(e.target.value.toUpperCase())} 
        />
        
        <input
          type="text"
          placeholder="Price/month($)"
          value={price}
          onChange={(e) => setPrice(e.target.value.toUpperCase())}
        />
        <input id='choseFile'
          type="file"
          onChange={handleImageChange}
          multiple // Allow multiple file selection
        />
        <button id='add' onClick={handleAddListing}>Publish Listing</button>
      </div><br />
      <button id='viewList' onClick={toggleUserListings}>
        {showUserListings ? 'Hide Listings' : 'View Listings'}
      </button>
      {showUserListings && (
        <div className="user-listings">
          {userListings.map((listing, index) => (
            <div className={`user-listing ${listing.zoomed ? 'zoomed' : ''}`} key={index}>
              <h3><u>Location</u>: {listing.location}</h3>
              <p className="p"><u>Description</u>: {listing.description}</p>
              <p><u>Price</u>: ${listing.price}</p>
              <p><u>Images</u>: </p><br />
              <div className="image-gallery">
                {listing.images.map((image, i) => (
                  <img 
                    key={i} 
                    src={image} 
                    alt={`User-added house ${index} - Image ${i + 1}`} 
                    onClick={() => toggleZoom(index)} // Toggle zoom on click
                  />
                ))}
              </div>
              <button id='buy' onClick={handleBuyClick}>Confirm</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserAddedHouses;
