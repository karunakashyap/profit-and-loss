import React, { useState } from 'react'
import FormInput from '../Components/Form/Input/FormInput'
import jsonData from '../assets/Jsons/Data.json'
import HeaderSection from '../Components/UI/HeaderSection/HeaderSection';

const PnlForm = () => {
    const [showDownData, setShowDownData] = useState(null);
    const showJsonData = (indexValue) => {
        setShowDownData(indexValue === showDownData ? null : indexValue)
        setChevronup(false)
        setChevronDown(true)
    }
    const [showDownData1, setShowDownData1] = useState(null);
    const showJsonData1 = (indexValue) => {
        setShowDownData1(indexValue === showDownData ? null : indexValue);
        setChevronup(false)
        setChevronDown(true)
    }
    const [showDownData2, setShowDownData2] = useState(null);
    const showJsonData2 = (indexValue) => {
        setShowDownData2(indexValue === showDownData ? null : indexValue);
        setChevronup(false)
        setChevronDown(true)
    }
    const [chevronup, setChevronup] = useState(true);
    const [chevronDown, setChevronDown] = useState(false)

    return (
        <div>
            <div className='border-2 p-4 w-[750px] ml-[350px] mb-32'>

                {jsonData.map((field, index) => {
                    return (
                        <div>
                            {(() => {
                                if (field.title != null) {
                                    return <div><HeaderSection chevronDown={chevronDown} chevronup={chevronup} showJsonData={() => showJsonData(index)} title={field?.title} /></div>;
                                }
                            })()}
                            {showDownData === index &&
                                <div>{field?.form_fields?.map((formField, index) => {
                                    return (
                                        <div className=' mt-2'><FormInput titleName={formField?.element_name} type={formField.data_type} source={formField.source} value={formField.value} /></div>
                                    )
                                })}
                                    {field?.sub_fields?.map((subField, index) => {
                                        return (<div>{
                                            (() => {
                                                if (subField?.title != null) {
                                                    return <div className=' ml-10'>
                                                        <HeaderSection chevronDown={chevronDown} chevronup={chevronup} title={subField?.title} showJsonData={() => showJsonData1(index)} />
                                                        {showDownData1 === index && <div> {subField?.form_fields?.map((formField, index) => {
                                                            return (
                                                                <div className='mt-2'><FormInput titleName={formField?.element_name} type={formField.data_type} source={formField.source} value={formField.value} /></div>
                                                            )
                                                        })}
                                                        </div>}

                                                    </div>
                                                }
                                            })()}
                                            {subField?.sub_fields?.map((subField2, index) => {
                                                return (<div className='ml-16'>
                                                    {(() => {
                                                        if (subField2.title != null) {
                                                            return <div>
                                                                <HeaderSection chevronDown={chevronDown} chevronup={chevronup} showJsonData={() => showJsonData2(index)} title={subField2.title} />
                                                                {showDownData2 === index && <div> {subField2?.form_fields?.map((formField, index) => {
                                                                    return (
                                                                        <div>
                                                                            <div className='mt-2'><FormInput titleName={formField?.element_name} type={formField.data_type} source={formField.source} value={formField.value} /></div>
                                                                        </div>
                                                                    )
                                                                })}
                                                                </div>}

                                                            </div>

                                                        }
                                                    })()}

                                                </div>)
                                            })}
                                        </div>)
                                    })}
                                </div>}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default PnlForm
