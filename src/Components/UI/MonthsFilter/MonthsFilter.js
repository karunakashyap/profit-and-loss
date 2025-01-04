import React, { useState } from 'react'

const MonthsFilter = () => {
  const [options, setOptions] = useState([
    { id: 1, label: 'January' },
    { id: 2, label: 'February' },
    { id: 3, label: 'March' },
    { id: 4, label: 'April' },
    { id: 5, label: 'May' },
    { id: 6, label: 'June' },
    { id: 7, label: 'July' },
    { id: 8, label: 'Auguest' },
    { id: 9, label: 'September' },
    { id: 10, label: 'October' },
    { id: 11, label: 'November' },
    { id: 12, label: 'December' }
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div onClick={toggleDropdown}>
        <input type='text' value={selectedOptions.join(',')} className='border-2 p-2 rounded'></input>
      </div>
      {showDropdown && (

        <div className='border-l-2 border-r-2  border-t-2 mt-1  overflow-x-hidden overflow-y-scroll max-h-28 w-[200px]' style={{ scrollbarWidth: 'thin' }}>
          {options.map((option) => (
            <div key={option.id} className=' border-b-2  rounded p-1'>
              <label htmlFor={option.id}>{option.label}</label>
              <input
                type="checkbox"
                id={option.id}
                value={option.id}
                checked={selectedOptions.includes(option.label)}
                onChange={() => handleCheckboxChange(option.label)}
                className=' float-end mt-2 p-4'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MonthsFilter
