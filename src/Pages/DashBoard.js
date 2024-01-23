import React from 'react'
import LineChart from '../Components/UI/Charts/LineChart';
import PieChart from '../Components/UI/Charts/PieChart';
const MonthlyLabels = [" ", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];

const MonthlyData = {
    labels: MonthlyLabels,
    datasets: [
        {
            borderColor: "gray",
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
            position: 'center'
        },
        legend: {
            display: false,
        }
    },

    scales: {
        x: {
            min: -100,
            max: 100,
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
            min: -100,
            max: 100,
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
const QuaterlyLabels = [" ", "Q1", "Q2", "Q3", "Q4"];
const QuaterlyData = {
    labels: QuaterlyLabels,
    datasets: [
        {
            borderColor: "gray",
            data: [
                { y: 0, y: 0 },
                { x: -60, y: -25 },
                { x: 0, y: 65 },
                { x: 40, y: 100 },],
        },
    ],

};
const QuaterlyOptions = {
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
const pieLabels = ["January", "February", "March"];
const pieData = {
    labels: pieLabels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "#1a202c",
            borderColor: "white",
            borderWidth: 6,
            data: [5, 5, 5],
        },
    ],
};
const pieOptions = {
    plugins: {
        legend: {
            display: false,
        }
    }

}
const DashBoard = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <LineChart data={MonthlyData} options={MonthlyOptions}/>
        <LineChart data={QuaterlyData} options={QuaterlyOptions}/>
        <div className=" mb-36">
            <h1 className=" text-gray-400">Overall Revenue</h1>
            <div className="grid grid-cols-2 w-[1000px] border-4 p-4">
                <div className="... w-96 ml-4 font-bold"><PieChart data={pieData} options={pieOptions}/><div className=" text-center font-bold mt-16">PROFIT</div></div>
                <div className="... w-96 font-bold ml-3"><PieChart data={pieData} options={pieOptions}/><div className=" text-center font-bold mt-16">LOSS</div></div>
            </div>
            <div className="w-[1000px] border-4 p-4 h-16 flex font-bold space-x-20">
                <h1 className=" ml-[400px]">TOTAL REVENUE</h1>
                <h1>INR 20,000</h1>
            </div>

        </div>
        
    </div>
  )
}

export default DashBoard
