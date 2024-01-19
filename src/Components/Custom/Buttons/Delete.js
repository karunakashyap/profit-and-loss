import React, { useState } from 'react';
import { ReactComponent as WhiteDelete } from '../../../assets/Icons/WhiteDelete.svg';
const Delete = () => {
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
                <WhiteDelete />
                {animated && <span className="text-white ml-1">Delete</span>}
            </button>
        </div>
    );
};

export default Delete;
