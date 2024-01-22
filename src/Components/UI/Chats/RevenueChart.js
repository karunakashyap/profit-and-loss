import React from "react";
import MonthlyPieChart from "./OverallRevenue/MonthlyPieChart";
import QuaterlyPieChart from "./OverallRevenue/QuaterlyPieChart";
const PieChart = () => {
    return (
        <div className=" mb-16">
            <h1 className=" text-gray-400">Overall Revenue</h1>
            <div className="grid grid-cols-2 w-[900px] border-4 p-4">
                <div className="... w-96 ml-4 font-bold"><MonthlyPieChart /><div className=" text-center font-bold mt-16">PROFIT</div></div>
                <div className="... w-96 font-bold ml-3"><QuaterlyPieChart /><div className=" text-center font-bold mt-16">LOSS</div></div>
            </div>
            <div className="w-[900px] border-4 p-4 h-16 flex font-bold space-x-20">
                <h1 className=" ml-[400px]">TOTAL REVENUE</h1>
                <h1>INR 20,000</h1>
            </div>

        </div>
    );
};
export default PieChart;