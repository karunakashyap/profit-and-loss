import React from 'react';
import { Pie } from 'react-chartjs-2';
const PieChart = ({ data, options }) => {
    return (
        <div className="w-full font-bold" style={{
            'paddingRight': '10%',
            'paddingLeft': '10%'
        }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
