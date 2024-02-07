import React from 'react';
import Columns from '../Components/UI/AllData/Columns';
import TableData from '../assets/Jsons/TableData.json';
const AllData = () => {
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
    );
};
export default AllData;
