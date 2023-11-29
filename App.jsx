import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MapComponent from './MapComponent';
import NavBar from './NavBar';
import SideBar from './SideBar';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <NavBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <MapComponent />
      <KeyboardDoubleArrowRightIcon className="toggle-sidebar-button" onClick={toggleSidebar}>
      &times;
      </KeyboardDoubleArrowRightIcon>
      <SideBar isSidebarOpen={isSidebarOpen} onCloseSidebar={toggleSidebar} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
