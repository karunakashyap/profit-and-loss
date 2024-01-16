import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SubFieldSection from '../Components/UI/Sections/SubFieldSection';

const PnlForm = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('API Call Happening');
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: 'http://localhost:4000/pnl/fields?month=8&year=2023',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                },
                data: {},
                crossDomain: true,
            });
            console.log('response.data==>', response.data.data);
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (!data) return null;

    return (
        <div className="border-2 p-4 w-[700px] ml-[500px] mb-32">
            <div>
                {data.map((field, index) => {
                    return <SubFieldSection field={field} index={index} />;
                })}
            </div>
        </div>
    );
};

export default PnlForm;
