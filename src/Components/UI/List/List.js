import React, { useState } from 'react';
import ListData from '../../../assets/Jsons/List.json'
import CreatePnlPopup from '../CreatePnlPopup/CreatePnlPopup';
import Filter from '../Filter/Filter';

const List = () => {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const years = [2022, 2023, 2024, 2025]
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
    const [inputmonth, setInputmonth] = useState('');
    const [showMonthList, setShowMonthList] = useState(false);

    const handleInputMonthChange = (e) => {
        setInputmonth(e.target.value);
    };
    const showMonthListData = () => {
        setShowMonthList(true)
    }
    const handleMonthSelect = (month) => {
        setInputmonth(month);
        setShowMonthList(false);
    };
    return (
        <div className='p-10 list_table'>
            <div className='flex justify-center items-center'>
                <div className="grid grid-cols-3 gap-4 w-[800px]">
                    <div className="...">
                        <Filter type={'text'} listData={monthName} valueInput={inputmonth}
                            showList={showMonthList} handleInputChange={handleInputMonthChange}
                            showListData={showMonthListData} handleSelect={handleMonthSelect} />
                    </div>
                    <div className="...">
                        <Filter type={'number'} listData={years} valueInput={inputYear}
                            showList={showYearList} handleInputChange={handleInputYearChange}
                            showListData={showYearsList} handleSelect={handleYearSelect} />
                    </div>
                    <div className="...">
                        <div><button className='w-44 text-center bg-blue-700 text-white h-10 rounded'>Febuary 2024</button></div>
                        <div><button onClick={togglePopup} className='w-44 text-center bg-blue-700 text-white h-10 rounded mt-6'>Create Pnl</button></div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center mt-8'>
                    <div className='border-2 w-56 p-2  font-bold'>Pnl Month</div>
                    <div className='border-2 w-56 p-2  font-bold'>Year</div>
                    <div className='border-2 w-56 p-2 font-bold'>Total Profit</div>
                    <div className='border-2 w-56 p-2 font-bold'>Total Loss</div>
                </div>
                <div>
                    {ListData?.data?.map((items, index) => {
                        return (
                            <div className='flex justify-center'>
                                <a href='/pnl/2024/January'><div className='border-l-2 border-r-2 cursor-pointer border-b-2 w-56 p-2'>{items.month}</div></a>
                                <div className=' border-r-2  border-b-2 w-56 p-2'>{items.year}</div>
                                <div className=' border-r-2  border-b-2 w-56 p-2'></div>
                                <div className=' border-r-2  border-b-2 w-56 p-2'></div>
                            </div>
                        )
                    })}

                </div>
            </div>
            {showPopup && <CreatePnlPopup onClose={togglePopup} />}
        </div>
    )
}

export default List
