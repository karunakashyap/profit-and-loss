import React from 'react';
import { ReactComponent as RigthBigView } from '../../../assets/Icons/RightBigView.svg';

const ViewDetails = () => {
    return (
        <div>
            <button className="bg-red-400  hover:bg-red-500 font-bold-200  py-2 px-2 rounded inline-flex items-center">
                <div className=" mr-2">
                    <RigthBigView />
                </div>
                <span className="text-white">View Details</span>
            </button>
        </div>
    );
};

export default ViewDetails;
