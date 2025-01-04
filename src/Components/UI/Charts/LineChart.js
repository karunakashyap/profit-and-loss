import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data, options }) => {
    return (
        <div className="mt-4 mb-10 w-full flex flex-col justify-center items-center">
            <h1 className=" text-gray-400  text-[16px]">Monthly Profit and Loss</h1>
            <div className="border-4 p-5 w-full">
                <Line data={data} options={options} className="w-full" />
            </div>
        </div>
    );
};

export default LineChart;
