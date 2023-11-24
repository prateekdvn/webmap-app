import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import MapComponent from './MapComponent';
import NavBar from './NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <MapComponent />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
