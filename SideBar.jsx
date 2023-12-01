import React, {useState} from 'react';
import './SideBar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const MultiSelectOptions = ({ options, onSelect, selectedOptions }) => {
    const handleOptionClick = (option) => {
      const isSelected = selectedOptions.includes(option);
      if (isSelected) {
        onSelect(selectedOptions.filter((selected) => selected !== option));
      } else {
        onSelect([...selectedOptions, option]);
      }
    };
  
    return (
        <div className="multi-select-options">
          {options.map((option) => (
            <div key={option} className="option-container">
              <label htmlFor={option}>{option}</label>
              <input
                type="checkbox"
                id={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionClick(option)}
              />
            </div>
          ))}
        </div>
      );
    };

const SideBar = ({ isSidebarOpen, onCloseSidebar}) => {

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


      const [showOptions1, setShowOptions1] = useState(false);
      const [showOptions2, setShowOptions2] = useState(false);
      const [selectedOptions1, setSelectedOptions1] = useState([]);
      const [selectedOptions2, setSelectedOptions2] = useState([]);
    
      const options1 = ['Hospitals', 'Schools', 'Industrial Centres', 'Banks', 'APMCS', 'APMCS'];
      const options2 = ['Express Way', 'Natural Highways', 'State Highways', 'District Roads', 'Rural Roads', 'Border Roads'];
    
      const [isButton1Selected, setIsButton1Selected] = useState(false);
      const [isButton2Selected, setIsButton2Selected] = useState(false);
    
      const handleButtonClick1 = () => {
        setShowOptions1(!showOptions1);
        setShowOptions2(false);
        setIsButton1Selected(!isButton1Selected);
        setIsButton2Selected(false);
      };
    
      const handleButtonClick2 = () => {
        setShowOptions2(!showOptions2);
        setShowOptions1(false);
        setIsButton2Selected(!isButton2Selected);
        setIsButton1Selected(false);
      };
    
      const handleApplyOptions1 = (selectedOptions) => {
        setSelectedOptions1(selectedOptions);
      };
    
      const handleApplyOptions2 = (selectedOptions) => {
        setSelectedOptions2(selectedOptions);
      };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    {isSidebarOpen ? (
        <KeyboardDoubleArrowLeftIcon className="close-button" onClick={onCloseSidebar} />
    ) : (
        <KeyboardDoubleArrowRightIcon className='open-button' onClick={onCloseSidebar}/>
    )}

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

      <p style={{marginLeft: '5%', fontWeight: '400'}}>Total Sales</p>
      <div className='sidebar-fifthrow'>
        <p className='sales-box'>Sales Count: 20</p>
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

      <div className='sidebar-sixthrow'>
      <div className='sidebar-dropdown'>
          <button className={`navigation-button ${isButton1Selected ? 'selected' : ''}`} onClick={handleButtonClick1}>
          <span className={`button_text ${isButton1Selected ? 'selected' : ''}`}>POI</span>
          </button>
          {showOptions1 && (
            <MultiSelectOptions
              options={options1}
              onSelect={handleApplyOptions1}
              selectedOptions={selectedOptions1}
            />
          )}
        </div>

        <div className='sidebar-dropdown'>
          <button className={`navigation-button ${isButton2Selected ? 'selected' : ''}`} onClick={handleButtonClick2}>
            <span className={`button_text ${isButton2Selected ? 'selected' : ''}`}>Road</span>
          </button>
          {showOptions2 && (
            <MultiSelectOptions
              options={options2}
              onSelect={handleApplyOptions2}
              selectedOptions={selectedOptions2}
            />
          )}
        </div>
      </div>

    </div>
  );
};

export default SideBar;
