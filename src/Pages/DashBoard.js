import React from 'react';
import LineChart from '../Components/UI/Charts/LineChart';
import PieChart from '../Components/UI/Charts/PieChart';
const MonthlyLabels = [' ', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const MonthlyData = {
    labels: MonthlyLabels,
    datasets: [
        {
            borderColor: 'gray',
            data: [
                { x: -80, y: -60 },
                { x: -60, y: -25 },
                { x: 0, y: 65 },
                { x: 40, y: 100 },
                { x: 100, y: 120 },
            ],
        },
    ],
};

const MonthlyOptions = {
    plugins: {
        title: {
            display: true,
            position: 'center',
        },
        legend: {
            display: false,
        },
    },

    scales: {
        x: {
            min: -100,
            max: 100,
            grid: {
                lineWidth: 2,
                color: 'gray',
            },
            position: 'center',
            border: {
                dash: [4, 8],
                width: 3,
                color: 'gray'
            },
            ticks: {
                font: {
                    weight: 'bold'
                }
            }
        },
        y: {
            min: -100,
            max: 100,
            grid: {
                lineWidth: 2,
                color: 'gray',
            },
            border: {
                dash: [4, 8],
            },
        },
    },
};
const QuaterlyLabels = [' ', 'Q1', 'Q2', 'Q3', 'Q4'];
const QuaterlyData = {
    labels: QuaterlyLabels,
    datasets: [
        {
            borderColor: 'gray',
            data: [
                { y: 0, y: 0 },
                { x: -60, y: -25 },
                { x: 0, y: 65 },
                { x: 40, y: 100 },
            ],
        },
    ],
};
const QuaterlyOptions = {
    plugins: {
        title: {
            display: true,
            position: 'center',
        },
        legend: {
            display: false,
        },
    },

    scales: {
        x: {
            min: -140,
            max: 140,
            grid: {
                lineWidth: 2,
                color: 'gray',
            },
            position: 'center',
            border: {
                dash: [4, 8],
                width: 3,
                color: 'gray'
            },
            ticks: {
                font: {
                    weight: 'bold'
                }
            }
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
            },
        },
    },
};
const pieLabels = ['2022', '2023', '2024'];
const pieData = {
    labels: pieLabels,
    datasets: [
        {
            label: 'Pnl Data',
            backgroundColor: ['#1a102c', '#1a2d2c', '#1a203c'],
            borderColor: 'white',
            borderWidth: 6,
            data: [5090, 5000, 5111],
        },
    ],
};
const pieOptions = {
    plugins: {
        legend: {
            display: true,
        },
    },
};
const DashBoard = () => {
    return (
        <div className="flex flex-col justify-center items-center p-5">
            <LineChart data={MonthlyData} options={MonthlyOptions} />
            <LineChart data={QuaterlyData} options={QuaterlyOptions} />
            <div className="w-full mb-36">
                <h1 className=" text-gray-400">Overall Revenue</h1>
                <div className="grid grid-cols-2 w-full border-4 p-5">
                    <div className="w-full ml-4 font-bold p-5">
                        <PieChart data={pieData} options={pieOptions} />
                        <div className="font-bold mt-16 text-center">PROFIT</div>
                    </div>
                    <div className="w-full ml-4 font-bold p-5">
                        <PieChart data={pieData} options={pieOptions} />
                        <div className="font-bold mt-16 text-center">LOSS</div>
                    </div>
                </div>
                <div className="w-full border-t-0 border-x-4 border-b-4 p-5 h-16 flex font-bold space-x-20">
                    <h1 className="float-right">TOTAL REVENUE INR 20,000</h1>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
