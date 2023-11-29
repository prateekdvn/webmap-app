import React from 'react';
import './SideBar.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const SideBar = ({ isSidebarOpen, onCloseSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      
      {/* Close button */}
      <KeyboardDoubleArrowLeftIcon className="close-button" onClick={onCloseSidebar} />

      {/* Sidebar Content */}
      <div className='sidebar-firstrow'>
        <div className="sidebar-dropdown">
            <label className="dropdown-label">Zo</label>
            <select>
                <option value='default' className='dropdown-content' placeholder='Select'>Select</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 1</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 2</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 3</option>
            </select>
        </div>

        <div className="sidebar-dropdown">
            <label className="dropdown-label">Ro</label>
            <select>
                <option value='default' className='dropdown-content' placeholder='Select'>Select</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 1</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 2</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 3</option>
            </select>
        </div>

        <div className="sidebar-dropdown">
            <label className="dropdown-label">Dealer</label>
            <select>
                <option value='default' className='dropdown-content' placeholder='Select'>Select</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 1</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 2</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 3</option>
            </select>
        </div>
      </div>
 
      <div className='sidebar-secondrow'>
        <div className="sidebar-dropdown">
            <label className="dropdown-label">State</label>
            <select>
                <option value='default' className='dropdown-content' placeholder='Select'>Select</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 1</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 2</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 3</option>
            </select>
        </div>

        <div className="sidebar-dropdown">
            <label className="dropdown-label">District</label>
            <select>
                <option value='default' className='dropdown-content' placeholder='Select'>Select</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 1</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 2</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 3</option>
            </select>
        </div>
    </div>

    <div className='sidebar-thirdrow'>
        <div className="sidebar-dropdown">
            <label className="dropdown-label">Sub District</label>
            <select>
                <option value='default' className='dropdown-content' placeholder='Select'>Select</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 1</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 2</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 3</option>
            </select>
        </div>

        <div className="sidebar-dropdown">
            <label className="dropdown-label">Village</label>
            <select>
                <option value='default' className='dropdown-content' placeholder='Select'>Select</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 1</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 2</option>
                <option value='default' className='dropdown-content' placeholder='Select'>Option 3</option>
            </select>
        </div>
    </div>

    <div className='sidebar-dropdown'>
        <button className='button'>  
            <span className='button_text'>Reset</span>
        </button>
    </div>

    </div>
  );
};

export default SideBar;
