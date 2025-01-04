import React, { useState } from 'react'

const YearFilter = () => {
  const [options, setOptions] = useState([
    { id: 1, label: '2021' },
    { id: 2, label: '2022' },
    { id: 3, label: '2023' },
  ]);
  const [selectedOptions, setSelectedOptions] = useState([new Date().getFullYear()]);
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
        <input type='number' value={selectedOptions.join(',')} className='border-2 p-2 rounded'></input>
      </div>
      {showDropdown && (

        <div className=' border-l-2 border-r-2 w-[200px] border-t-2 mt-1 rounded'>
          {options.map((option) => (
            <div key={option.id} className=' border-b-2  rounded p-1'>
              <label htmlFor={option.id}>{option.label}</label>
              <input
                type="checkbox"
                id={option.id}
                value={option.id}
                checked={selectedOptions.includes(option.label)}
                onChange={() => handleCheckboxChange(option.label)}
                className='float-end mt-2 p-4'
              />
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default YearFilter
