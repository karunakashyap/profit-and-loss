import React, { useState } from 'react';
import Columns from '../Components/UI/AllData/Columns';
import TableData from '../assets/Jsons/TableData.json';
import { ReactComponent as ChevronRight } from '../assets/Icons/ChevronRight.svg';
import { ReactComponent as ChevronLeft  } from '../assets/Icons/ChevronLeft.svg';

const AllData = () => {
    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);

    const handleNextYear = () => {
        if (year < currentYear) {
            setYear(prevYear => prevYear + 1);
        }
    };

    const handlePreviousYear = () => {
        setYear(prevYear => prevYear - 1);
    };
    const monthName = [
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUEST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
        'JANUARY',
        'FEBUARY',
        'MARCH',
    ];
    return (
        <div>
            <div className='flex mt-7 justify-end mr-12'>
                <button onClick={handlePreviousYear} className='border-2 p-2'><ChevronLeft /></button>
                <h1 className='border-t-2 border-b-2 border-r-2 p-2'>{year-2}</h1>
                <h1 className='border-t-2 border-b-2 border-r-2 p-2'>{year-1}</h1>
                <h1 className='border-t-2 border-b-2  p-2'>{year}</h1>
                <button className='border-2 p-2' onClick={handleNextYear} disabled={year === currentYear}><ChevronRight/></button>
            </div>
        <div className="p-10 mb-12">
            
            <div
                className="overflow-scroll border-2"
                style={{
                    width: '100%',
                    overflowX: 'scroll',
                    overflowY: 'scroll',
                    whiteSpace: 'nowrap',
                }}
            >
                <div className="row w-full flex">
                    <div className="column1 border-b-2 min-w-44 p-2"></div>
                    <div className="flex">
                        {monthName.map((month) => (
                            <div className="column2 border-l-2 border-b-2 min-w-28 p-2 font-bold text-center">
                                {month}
                            </div>
                        ))}
                    </div>
                </div>
                <Columns Data={TableData.form_fields} font={'text-2xl'} />
            </div>
        </div>
        </div>
    );
};
export default AllData;
