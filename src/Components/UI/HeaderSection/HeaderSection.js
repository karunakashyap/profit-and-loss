import React from 'react';
import { ReactComponent as MenuBar } from '../../../assets/Icons/Menubar.svg';
import { ReactComponent as ChevronUp } from '../../../assets/Icons/ChevronUp.svg';
import { ReactComponent as ChevronDown } from '../../../assets/Icons/ChevronDown.svg';



const HeaderSection = ({ title, showJsonData, chevron }) => {
    return (
        <div>
            <div className='flex  mt-8 space-x-3 p-1'>
                <div className=' p-1 bg-gray-300 border rounded'><MenuBar /></div>
                <h1 className=' font-bold mt-1'>{title}</h1>
                <div className=' mt-[6px]' onClick={showJsonData}>
                    {chevron}
                </div>
            </div>
        </div>
    )
}

export default HeaderSection
