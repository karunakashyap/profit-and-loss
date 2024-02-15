import React, {useState} from 'react'

const MonthsFilter = () => {
    // Define state to hold options and selected options
  const [options, setOptions] = useState([
    { id: 1, label: 'January' },
    { id: 2, label: 'February' },
    { id: 3, label: 'March' },
    {id:4,label:'April'},
    {id:5,label:'May'},
    {id:6,label:'June'},
    {id:7,label:'July'},
    {id:8,label:'Auguest'},
    {id:9,label:'September'},
    {id:10,label:'October'},
    {id:11,label:'November'},
    {id:12,label:'December'}
    // Add more options as needed
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to handle checkbox selection
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
       <div onClick={toggleDropdown}>
        <input type='text' value={selectedOptions.join(',')} className='border-2 p-2 rounded'></input>
      </div>
      {showDropdown && (

        <div className=' border-l-2 border-r-2  border-t-2 mt-1 rounded overflow-scroll h-28 w-[200px]'>
          {options.map((option) => (
            <div key={option.id} className=' border-b-2  rounded p-1'>
              <label htmlFor={option.id}>{option.label}</label>
              <input
                type="checkbox"
                id={option.id}
                value={option.id}
                checked={selectedOptions.includes(option.id)}
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
