import React, {useState} from 'react';
import {ReactComponent as Light} from '../../../assets/Icons/IconEdit/Light.svg';

const Edit = () => {
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
                <Light />
                {animated && <span className='text-white'>Edit</span>}
            </button>
        </div>
    )
}

export default Edit
