import React, {useState} from 'react';
import './SideBar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const SideBar = ({ isSidebarOpen, onCloseSidebar }) => {

    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedFYYear, setSelectedFYYear] = useState(null);
    
    const handleMonthChange = (date) => {
        setSelectedMonth(date);
      };
    
      const handleFYYearChange = (date) => {
        setSelectedFYYear(date);
      };

      const handleSearch = () => {
        console.log('Searching...', selectedMonth, selectedFYYear);
      };

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

      {/* New Component for Month and FY Year */}
      <h4>Total Sales</h4>
      <div className='sidebar-fifthrow'>
        <p>Sales Count: 20</p>
        <div className='sidebar-dropdown'>
            <button className='search-button' onClick={handleSearch}>
            <span className='button_text'>Search</span>
            </button>
        </div>
      </div>

      <div className='sidebar-fourthrow'>
        <div className='sidebar-dropdown'>
        <label className='dropdown-label'>Count: </label>
                <DatePicker
                selected={selectedMonth}
                onChange={handleMonthChange}
                dateFormat='MMMM yyyy'
                placeholderText='Month'
                showMonthYearPicker
                />
        </div>

        <div className='sidebar-dropdown'>
            <DatePicker
            selected={selectedFYYear}
            onChange={handleFYYearChange}
            dateFormat='yyyy'
            placeholderText='FY Year'
            showYearPicker
            />
        </div>
      </div>

    </div>
  );
};

export default SideBar;
