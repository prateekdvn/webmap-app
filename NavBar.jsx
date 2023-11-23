import React, { useState } from 'react';
import './NavBar.css'; 
import logo from './maruti-logo.png';
import curr from './currency.png';
import lang from './language.png';
import profileImage from './person.jpg';

const NavBar = () => {
  const [currDropdownOpen, setCurrDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleCurrDropdown = () => {
    setCurrDropdownOpen(!currDropdownOpen);
    setLangDropdownOpen(false);
  };

  const toggleLangDropdown = () => {
    setLangDropdownOpen(!langDropdownOpen);
    setCurrDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    setCurrDropdownOpen(false);
    setLangDropdownOpen(false);
  };

  return (
    <div className="top-bar">
      <img src={logo} className="logo" alt="" />
      {/* Currency dropdown */}
      <div className="dropdown">
        <img src={curr} className="curr" alt="" onClick={toggleCurrDropdown} />
        {currDropdownOpen && (
          <div className="dropdown-content">
            <p>INR</p>
            <p>USD</p>
          </div>
        )}
      </div>

      {/* Language dropdown */}
      <div className="dropdown">
        <img src={lang} className="lang" alt="" onClick={toggleLangDropdown} />
        {langDropdownOpen && (
          <div className="dropdown-content">
            <p>Hindi</p>
            <p>English</p>
            <p>Japanese</p>
          </div>
        )}
      </div>

      {/* Profile dropdown */}
      <div className="dropdown">
        <img src={profileImage} className="profile" alt="Aditya Jain" onClick={toggleProfileDropdown} />
        <span onClick={toggleProfileDropdown} className="profile-name">Aditya Jain</span>
        {profileDropdownOpen && (
          <div className="dropdown-content">
            <p>My Profile</p>
            <p>Log Out</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
