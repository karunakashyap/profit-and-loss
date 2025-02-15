import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import { ReactComponent as ExclamationCircle } from '../../../assets/Icons/ExclamationCircle.svg';
const AutoComplete = () => {
    const [selectedOptions, setSelectedOptions] = useState();
    const optionList = [
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'blue', label: 'Blue' },
        { value: 'white', label: 'White' },
    ];
    function handleSelect(data) {
        setSelectedOptions(data);
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div className=" flex  text-gray-400 space-x-1 mr-44">
                <h2>Job Tittle</h2>
                <ExclamationCircle />
            </div>
            <div className="dropdown-container w-72 mt-2">
                <Select
                    className="peer"
                    required
                    options={optionList}
                    placeholder="Select one or more job tittle"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                />
            </div>
            <i className="invisible peer-invalid:visible text-red-700 font-light  mr-20 mb-2">
                Please Enter Structure Name
            </i>
        </div>
    );
};

export default AutoComplete;
