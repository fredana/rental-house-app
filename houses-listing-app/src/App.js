import React from 'react';
import './App.css';
import logo1 from './images/logo1.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router and related components
import HouseList from './HouseList';
import Home from './Home';
// import AddListing from './AddListing';
import UserAddedHouses from './UserAddedHouses';
// import House from './House';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        
          <h1><a
                className="App-link"
                href="https://kololi.com/"
                target="_blank"
                rel="noopener noreferrer"
              ><img src={logo1} className="App-logo" alt="logo1" /></a>Houses Listing App</h1>
          <ul>
            <li className='navbar'><Link to="/">Home</Link></li>
            <li className='navbar'><Link to="/user-added-houses">Add House</Link></li>
            <li className='navbar'>
              <a
                className="App-link"
                href="https://kololi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Availability
              </a>
        </li>
            
          </ul>
          
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-added-houses" element={<UserAddedHouses />} />
          <Route path="/house-list" element={<HouseList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
