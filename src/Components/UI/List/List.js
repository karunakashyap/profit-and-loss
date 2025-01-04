import React, { useState } from 'react';
import ListData from '../../../assets/Jsons/List.json'
import CreatePnlPopup from '../CreatePnlPopup/CreatePnlPopup';
import MonthsFilter from '../MonthsFilter/MonthsFilter';
import { Link } from 'react-router-dom';
import YearFilter from '../YearFilter/YearFilter';

const List = () => {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthIndex = (new Date().getMonth());
    let currentMonth = monthNames[monthIndex];

    const currentYear = new Date().getFullYear()
    return (
        <div className='p-10 list_table'>
            <div className='flex justify-center items-center'>
                <div className="grid grid-cols-3 gap-4 w-[800px]">
                    <div className="...">
                        <YearFilter/>
                    </div>
                    <div className="...">
                        <MonthsFilter />
                    </div>
                    <div className="...">
                        <div><Link to={`/pnl/${currentYear}/${currentMonth}`}><button className='w-44 text-center bg-blue-700 text-white h-10 rounded'>{currentMonth} {currentYear}</button></Link></div>
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
                                <Link to={`/pnl/${items.year}/${items.month}`}><div className='border-l-2 border-r-2 cursor-pointer border-b-2 w-56 p-2'>{items.month}</div></Link>
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
