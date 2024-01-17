import React, { useState } from 'react';
const Tooltip = ({ label }) => {
    const [tooltip, setTooltip] = useState(false);
    const showToolTip = () => {
        setTooltip(true);
    };
    const notShowTooltip = () => {
        setTooltip(false);
    };
    return (
        <div className=" mt-4">
            <div className="relative">
                {tooltip && (
                    <span className="absolute bottom-7 left-30 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        Lorem Ipsum Dolor Aset
                    </span>
                )}
                <div onMouseEnter={showToolTip} onMouseLeave={notShowTooltip}>
                    <label
                        className="block text-gray-500 text-sm  mb-2 relative right-12"
                        htmlFor="username"
                    >
                        {label}
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Type Structure Name"
                        className="border border-r-2 rounded py-2 px-4 w-64 text-gray-700"
                    ></input>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
