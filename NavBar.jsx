import React, { useState } from 'react';
import './NavBar.css'; 
import logo from './maruti-logo.png';
import curr from './currency.png';
import lang from './language.png';
import profileImage from './person.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const NavBar = ({ isSidebarOpen, toggleSidebar }) => {
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
      {/* Sidebar toggle button */}
      <KeyboardDoubleArrowRightIcon className="toggle-sidebar-button" onClick={toggleSidebar}>
      &times;
      </KeyboardDoubleArrowRightIcon>
      
      <img src={logo} className="logo" alt="" />

      {/* Currency dropdown */}
      <div className="navbar-dropdown">
        <img src={curr} className="curr" alt="" onClick={toggleCurrDropdown} />
        {currDropdownOpen && (
          <div className="navbar-dropdown-content">
            <p>INR</p>
            <p>USD</p>
          </div>
        )}
      </div>

      {/* Language dropdown */}
      <div className="navbar-dropdown">
        <img src={lang} className="lang" alt="" onClick={toggleLangDropdown} />
        {langDropdownOpen && (
          <div className="navbar-dropdown-content">
            <p>Hindi</p>
            <p>English</p>
            <p>Japanese</p>
          </div>
        )}
      </div>

      {/* Profile dropdown */}
      <div className="navbar-dropdown">
        <img src={profileImage} className="profile" alt="Aditya Jain" onClick={toggleProfileDropdown} />
        <span onClick={toggleProfileDropdown} className="profile-name">Aditya Jain</span>
        <KeyboardArrowDownIcon onClick={toggleProfileDropdown} />
        {profileDropdownOpen && (
          <div className="navbar-dropdown-content">
            <p>My Profile</p>
            <p>Log Out</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
