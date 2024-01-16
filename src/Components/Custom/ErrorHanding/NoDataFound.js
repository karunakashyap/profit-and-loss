import React from 'react';
import { ReactComponent as WarningBlack } from '../../../assets/Icons/WarningBlack.svg';

const NoDataFound = () => {
    return (
        <div>
            <div className=" w-[700px] bg-gray-100 border flex rounded  p-2 mt-6">
                <div className=" mt-[2px]">
                    <WarningBlack />
                </div>
                <span className=" ml-3 text-gray-500">No Data Found</span>
            </div>
        </div>
    );
};

export default NoDataFound;
