import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

const labels = [" ", "Q1", "Q2", "Q3", "Q4"];
const data = {
    labels: labels,
    datasets: [
        {
            borderColor: "gray",
            data: [
                { y: 0, y: 0 },
                { x: -60, y: -25 },
                { x: 0, y: 65 },
                { x: 40, y: 100 },            ],
        },
    ],

};
const options = {
    plugins: {
        title: {
            display: true,
            position: 'center'
        },
        legend: {
            display: false,
        }
    },

    scales: {
        x: {
            min: -140,
            max: 140,
            grid: {
                lineWidth: 2,
                color: 'gray',

            },
            position: "center",
            border: {
                dash: [4, 8],
            },
        },
        y: {
            min: -140,
            max: 140,
            grid: {
                lineWidth: 2,
                color: 'gray',
            },
            border: {
                dash: [4, 8],

            }
        },
    },
}
const QuaterlyChart = () => {
  return (
    <div className="mb-10 mt-4">
            <h1 className=" text-gray-400  text-[16px]">Quaterly Profit and Loss</h1>
            <div className="border-4 p-5 ">
            <Line data={data} options={options} />

            </div>
        </div>
  )
}

export default QuaterlyChart
