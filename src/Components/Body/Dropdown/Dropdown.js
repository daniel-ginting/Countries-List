import { useState } from "react";
import './Dropdown.css';
import { FaCaretDown } from 'react-icons/fa';

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Africa", "Americas", "Asia", 'Europe', 'Oceania', 'None'];
  return (
    <div className="dropdown">
      <div 
        className="dropdown-btn" 
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected} {isActive ? <FaCaretDown style={{transform: 'rotate(180deg)'}}/> : <FaCaretDown/>}
        
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div 
          className="dropdown-content"
        >
          {options.map((option) => (
            <div
            key={option}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
