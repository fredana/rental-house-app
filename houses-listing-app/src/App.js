import React from 'react';
import './App.css';
import logo from './logo.svg';
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
          <h1>Houses Listing App</h1>

          <img src={logo} className="App-logo" alt="logo" />
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
                View Houses
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
