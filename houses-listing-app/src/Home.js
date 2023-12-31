import React, { useState } from 'react';


const Home = () => {
  const [result, setResult] = useState('');
  const [userInput, setUserInput] = useState('');

  const handleButtonClick1 = () => {
    // Set the result to the user input
    setResult("Welcome " + userInput.toUpperCase() + ". What would you like to do today? Please choose from the menu above. ");
  };

  const handleInputChange = (event) => {
    // Update the user input state as the user types
    setUserInput(event.target.value);
  };

  return (
    <div>
      <h1>Welcome To The House Rental App</h1>
      
      <input type="text" value={userInput} onChange={handleInputChange} placeholder='Your Name' />
      <button id='submit' onClick={handleButtonClick1}>SUBMIT</button>
      
      {/* Display the result */}
      {result && <p>{result}</p>}
    </div>
  );
};

export default Home;
