import React from 'react';
import './SideBar.css';

const SideBar = ({ isSidebarOpen, toggleSideBar }) => {

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>

      {/* Close Button */}
      <button className="close-button" onClick={toggleSidebar}>
        &times;
      </button>

      {/* Sidebar Content */}
      <div className="dropdown">
        <p className="dropdown-title">drop1</p>
        <div className="dropdown-content">
          <p>Option 1</p>
          <p>Option 2</p>
        </div>
      </div>

      <div className="dropdown">
        <p className="dropdown-title">drop2</p>
        <div className="dropdown-content">
          <p>Option A</p>
          <p>Option B</p>
        </div>
      </div>

      <div className="dropdown">
        <p className="dropdown-title">drop3</p>
        <div className="dropdown-content">
          <p>Choice X</p>
          <p>Choice Y</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
