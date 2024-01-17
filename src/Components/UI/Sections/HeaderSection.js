import React from 'react';
import { ReactComponent as MenuBar } from '../../../assets/Icons/Menubar.svg';
const HeaderSection = ({ title, hideSection, chevron, fontSize }) => {
    return (
        <div onClick={hideSection}>
            <div className="flex  mt-8 space-x-3 p-1">
                <div className="p-1 bg-gray-300 border rounded">
                    <MenuBar />
                </div>
                <p className="font-bold mt-1" style={{ fontSize: fontSize }}>
                    {title}
                </p>
                <div className="mt-[6px]">{chevron}</div>
            </div>
        </div>
    );
};

export default HeaderSection;
