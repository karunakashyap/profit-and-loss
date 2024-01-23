import React from 'react';
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const PieChart = ({data,options}) => {
    return (
        <div>
            <div>
                <div className="w-96 font-bold"> <Pie data={data} options={options} /><span className=" relative bottom-80">2021</span><span className=" relative bottom-80 left-80">2022</span><span className=" ml-24">2023</span></div>
            </div>
        </div>
    )
}

export default PieChart
