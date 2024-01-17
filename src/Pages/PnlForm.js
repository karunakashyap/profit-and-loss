import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SubFieldSection from '../Components/UI/Sections/SubFieldSection';
import BreadCrumbs from '../Components/UI/BreadCrumbs/BreadCrumbs';

const PnlForm = () => {
    const [formFields, setFormFields] = useState([]);
    const [rerender, setRerender] = useState(true);

    useEffect(() => {
        console.log('API Call Happening');
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: 'http://localhost:4000/pnl/fields?month=1&year=2024',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                },
                data: {},
                crossDomain: true,
            });
            console.log('response.data==>', response.data.data);
            setFormFields(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const getAllFormFields = (obj, aggregator = []) => {
        if (obj && obj?.length > 0) {
            for (const field of obj) {
                if (field?.sub_fields?.length > 0) {
                    aggregator = getAllFormFields(field?.sub_fields, aggregator);
                }

                if (field?.form_fields?.length > 0) {
                    aggregator = [...aggregator, ...field.form_fields];
                }
            }
        }

        return aggregator;
    };

    const allFormFields = getAllFormFields(formFields);
    console.log('allFormFields==>', allFormFields);
    const year = 2024;
    const month = 1;

    const submitPnl = async (event) => {
        try {
            console.log('submitPnl, Invoked...');
            const postBody = {
                year,
                month,
                status: 'DRAFT',
                fields: [],
            };

            for (let field of allFormFields) {
                let formFieldElement = document.getElementById(field?.form_field_id);
                if (formFieldElement.type?.toLowerCase() == 'number') {
                    field.value = parseInt(formFieldElement.value);
                } else if (formFieldElement.type?.toLowerCase() == 'decimal') {
                    field.value = parseFloat(formFieldElement.value);
                } else {
                    field.value = formFieldElement.value;
                }
                postBody?.fields.push(field);
            }

            const response = await axios({
                method: 'POST',
                url: 'http://localhost:4000/pnl',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                },
                data: postBody,
                crossDomain: true,
            });
            setFormFields((formFields) => [...response.data.data]);
            setRerender(false);
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 100);
            });
            setRerender(true);
            console.log('Updated formFields', formFields);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    if (!formFields) return null;

    return (
        <div>
            <BreadCrumbs></BreadCrumbs>
            {rerender && (
                <div
                    className="border-2 p-4 w-[700px] mb-32"
                    style={{
                        transform: 'translate(-50%)',
                        position: 'absolute',
                        left: '50%',
                    }}
                >
                    {formFields.map((field, index) => {
                        return (
                            <SubFieldSection
                                field={field}
                                index={index}
                                key={field.sequence + index}
                                onFormFieldBlur={submitPnl}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PnlForm;
