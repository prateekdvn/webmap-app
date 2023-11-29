import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MapComponent from './MapComponent';
import NavBar from './NavBar';
import SideBar from './SideBar';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <NavBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* <MapComponent /> */}
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        ☰
      </button>
      <SideBar isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
