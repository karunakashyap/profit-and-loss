import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["January", "February", "March"];
const data = {
    labels: labels,
    datasets: [
        {
            color: 'red',
            label: "My First dataset",
            backgroundColor: "black",
            borderColor: "white",
            borderWidth: 6,
            data: [5, 5, 5],
        },
    ],
};
const options = {
    plugins: {
        legend: {
            display: false,
        }
    }

}


const QuaterlyPieChart = () => {
    return (
        <div className=" mb-16">
            <div className="w-96 ml-4 font-bold"> <Pie data={data} options={options} /><span className=" relative bottom-80">2021</span><span className=" relative bottom-80 left-80">2022</span><span className=" ml-24">2023</span></div>
        </div>
    )
}

export default QuaterlyPieChart
