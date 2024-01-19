import React, { useState } from 'react';
import { ReactComponent as LightEdit } from '../../../assets/Icons/LightEdit.svg';

const Edit = () => {
    const [animated, setAnimated] = useState(false);
    const showText = () => {
        setAnimated(true);
    };
    const notShowText = () => {
        setAnimated(false);
    };
    return (
        <div onMouseEnter={showText} onMouseLeave={notShowText}>
            <button className="bg-red-400  hover:bg-red-500 font-bold-200  py-2 px-2 rounded inline-flex items-center">
                <LightEdit />
                {animated && <span className="text-white ml-1">Edit</span>}
            </button>
        </div>
    );
};

export default Edit;
