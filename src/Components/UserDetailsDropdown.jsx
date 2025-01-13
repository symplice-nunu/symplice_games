import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowDown, MdLock, MdPerson, MdExitToApp } from 'react-icons/md';

const optionsWithIcons = [
  { label: 'Change Password', icon: <MdLock /> },
  { label: 'Change Profile', icon: <MdPerson /> },
  { label: 'Logout', icon: <MdExitToApp /> },
];

const UserDetailsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative font-quicksand" ref={dropdownRef}>
      <div onClick={handleToggle} className="text-[30px] mt-2">
        {selectedOption || <MdKeyboardArrowDown />}
      </div>
      {isOpen && (
        <div className="absolute mt-2 right-0 w-[200px] bg-white border font-quicksand border-gray-300 rounded">
          {optionsWithIcons.map((option) => (
            <div
              key={option.label}
              onClick={() => handleOptionClick(option.label)}
              className="flex items-center py-2 px-4 cursor-pointer hover:bg-gray-200"
            >
              <span className="mr-2 text-[20px] text-teal-500">{option.icon}</span>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDetailsDropdown;