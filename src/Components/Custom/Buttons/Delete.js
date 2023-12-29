import React, { useState } from 'react';
import {ReactComponent as White} from '../../../assets/Icons/IconDelete/White.svg';
const Delete = () => {
    const [animated,setAnimated]=useState(false);
    const showText=()=>{
        setAnimated(true)
    }
    const notShowText=()=>{
        setAnimated(false)
    }

    return ( 
        <div style={{ marginTop: '20px' }} onMouseEnter={showText} onMouseLeave={notShowText}>
            <button className="bg-red-400 hover:bg-red-500 font-bold-200  py-2 px-2 rounded inline-flex items-center">
                <White />
                {animated && 
                <span className='text-white'>Delete</span>
}
            </button>
        </div>
    )
}

export default Delete
