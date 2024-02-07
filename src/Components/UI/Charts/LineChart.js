import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const LineChart = ({data,options}) => {
    return (
        <div className="mt-4 mb-10 w-[1000px]">
            <h1 className=" text-gray-400  text-[16px]">Monthly Profit and Loss</h1>
            <div className="border-4 p-5 ">
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default LineChart
