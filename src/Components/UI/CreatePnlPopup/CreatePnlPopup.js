import React, {useState} from 'react'

const CreatePnlPopup = ({ onClose }) => {
    const monthName = ['January', 'February', 'March', 'April', 'May', 'june', 'July', 'Auguest', 'September', 'October', 'November', 'December']
    const [inputYear, setInputYear] = useState('');
    const [showYearList, setShowYearList] = useState(false);
    const handleInputYearChange = (e) => {
        setInputYear(e.target.value);
    };
    const showYearsList = () => {
        setShowYearList(true)
    }
    const handleYearSelect = (year) => {
        setInputYear(year);
        setShowYearList(false);
    };
    return (
        <div className=''>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded shadow-lg">
                    <div>
                       <div>
                       <input
                type='text'
                value={inputYear}
                onChange={handleInputYearChange}
                onClick={showYearsList}
                className='border-2 p-2 rounded w-48'
            />
            {showYearList && (
                <ul className="year-list border-2 rounded mt-1 w-48 p-2" >
                    {monthName.map((data) => (
                        <li key={data} onClick={() => handleYearSelect(data)}>
                            {data}
                        </li>
                    ))}
                </ul>
            )}                        </div> 
                       <div><input type='number' className='border-2 w-60 h-10 mt-10 rounded  p-4 required'></input></div> 
                    </div>
                    <button className="px-4 py-2 mt-10 w-60 bg-blue-700 text-white rounded hover:bg-blue-700" onClick={onClose}>
                        Create Pnl
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreatePnlPopup
