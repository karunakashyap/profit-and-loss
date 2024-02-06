import React from 'react';
import Columns from '../Components/UI/AllData/Columns';
import TableData from '../assets/Jsons/TableData.json'
const AllData = () => {
    const monthName = ['APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUEST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER', 'JANUARY', 'FEBUARY', 'MARCH']
    return (
        <div className=' p-10'>
            <div className="row flex mt-10" >
                <div className="column1 border-2 w-44 p-2"></div>
                <div className="flex"> {monthName.map((month) => (
                    <div className="column2 border-2 w-28 p-2 font-bold text-center">{month}</div>
                ))}</div>
            </div>
            <Columns Data={TableData.form_fields} font={'text-2xl'} />
        </div>
    )
}
export default AllData
