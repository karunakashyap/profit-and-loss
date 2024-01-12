import React, { useState } from 'react'
import FormInput from '../Components/Form/Input/FormInput'
import jsonData from '../assets/Jsons/Data.json'
import HeaderSection from '../Components/UI/HeaderSection/HeaderSection';

const PnlForm = () => {
    const [showDownData, setShowDownData] = useState(false);
    const showJsonData = () => {
        setShowDownData(true)
        setChevronup(false)
        setChevronDown(true)
    }
    const [showDownData1, setShowDownData1] = useState(false);
    const showJsonData1 = () => {
        setShowDownData1(true);
        setChevronup(false)
        setChevronDown(true)
    }
    const [chevronup, setChevronup] = useState(true);
    const [chevronDown, setChevronDown] = useState(false)

    return (
        <div>
            <div className='border-2 p-4 w-[600px] ml-[500px] mb-32'>

                {jsonData.map((field, index) => {

                    return (
                        <div>
                            {(() => {
                                if (field.title != null) {
                                    return <div><HeaderSection chevronDown={chevronDown} chevronup={chevronup} showJsonData={showJsonData}  title={field?.title} /></div>;
                                }
                            })()}
                            {showDownData &&
                                <div>{field?.form_fields?.map((formField, index) => {
                                    return (
                                        <div className=' mt-2'><FormInput titleName={formField?.element_name} type={formField.data_type} source={formField.source} value={formField.value} /></div>
                                    )
                                })}
                                    {field?.sub_fields?.map((subField, index) => {
                                        return (<div>{
                                            (() => {
                                                if (subField?.title != null) {
                                                    return <div>
                                                        <HeaderSection chevronDown={chevronDown} chevronup={chevronup} title={subField?.title}  showJsonData={showJsonData1} />
                                                        {showDownData1 && <div> {subField?.form_fields?.map((formField, index) => {
                                                            return (
                                                                <div className='mt-2'><FormInput titleName={formField?.element_name} type={formField.data_type} source={formField.source} value={formField.value} /></div>
                                                            )
                                                        })}
                                                        </div>}

                                                    </div>
                                                }
                                            })()}
                                            {subField?.sub_fields?.map((subField2, index) => {
                                                return (<div>
                                                    {(() => {
                                                        if (subField2.title != null) {
                                                            return <div>
                                                                <HeaderSection chevronDown={chevronDown} chevronup={chevronup}  showJsonData={showJsonData1} title={subField2.title} />
                                                                {showDownData1 && <div> {subField2?.form_fields?.map((formField, index) => {
                                                                    return (
                                                                        <div className='mt-2'><FormInput titleName={formField?.element_name} type={formField.data_type} source={formField.source} value={formField.value} /></div>
                                                                    )
                                                                })}
                                                                </div>}
                                                            </div>;
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
