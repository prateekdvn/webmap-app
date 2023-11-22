import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MapComponent from './MapComponent';
import logo from './image.png';
import curr from './currency.png';
import lang from './language.png';
import profileImage from './person.jpg';

const App = () => {
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

  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement('div', { className: 'top-bar' },
      React.createElement('img', { src: logo, className: 'logo', alt: '' }),

      // Currency dropdown
      React.createElement('div', { className: 'dropdown' },
        React.createElement('img', { src: curr, className: 'curr', alt: '', onClick: toggleCurrDropdown }),
        currDropdownOpen && (
          React.createElement('div', { className: 'dropdown-content' },
            React.createElement('p', null, 'INR'),
            React.createElement('p', null, 'USD')
          )
        )
      ),

      // Language dropdown
      React.createElement('div', { className: 'dropdown' },
        React.createElement('img', { src: lang, className: 'lang', alt: '', onClick: toggleLangDropdown }),
        langDropdownOpen && (
          React.createElement('div', { className: 'dropdown-content' },
            React.createElement('p', null, 'Hindi'),
            React.createElement('p', null, 'English'),
            React.createElement('p', null, 'Japanese'),
          )
        )
      ),

      React.createElement('div', { className: 'dropdown' },
      React.createElement('img', { src: profileImage, className: 'profile', alt: 'Aditya Jain', onClick: toggleProfileDropdown }),
      React.createElement('span', {onClick: toggleProfileDropdown}, 'Aditya Jain'),
      profileDropdownOpen && (
        React.createElement('div', { className: 'dropdown-content' },
          React.createElement('p', null, 'My Profile'),
          React.createElement('p', null, 'Log Out')
        )
      )
    )

    ),
    React.createElement(MapComponent, null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
