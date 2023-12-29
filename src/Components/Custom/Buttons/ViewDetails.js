import React from 'react';
import {ReactComponent as RigthBig} from '../../../assets/Icons/IconArrow/rightBig.svg'

const ViewDetails = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <button className="bg-red-400 hover:bg-red-500 font-bold-200  py-2 px-4 rounded inline-flex items-center">
                <RigthBig/>
                <span className='text-white'>View Details</span>
            </button>
        </div>
    )
}

export default ViewDetails
