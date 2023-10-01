import React, { useState } from "react";

import css from "../TransactionsDropdown/TransactionsDropdown.module.css";

function TransactionsDropdown({ options }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="custom-dropdown">
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOption || "Select a category"}
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionSelect(option)}
              className="dropdown"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionsDropdown;
