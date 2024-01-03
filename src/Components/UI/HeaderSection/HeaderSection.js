import React from 'react';
import { ReactComponent as MenuBar } from '../../../assets/Icons/menubar.svg';
import { ReactComponent as ChevronUp } from '../../../assets/Icons/ChevronUp.svg';


const HeaderSection = () => {
    return (
        <div>
            <div className='flex justify-center mt-8 space-x-3 p-1'>
                <div className=' p-1 bg-gray-300 border rounded'><MenuBar /></div>
                <h1 className=' font-bold mt-1'>Payout Structures List</h1>
                <div className=' mt-[6px]'><ChevronUp /></div>
            </div>
        </div>
    )
}

export default HeaderSection
