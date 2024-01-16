import React,{useState} from 'react';
import FormInput from '../Components/Form/Input/FormInput'
import HeaderSection from '../Components/UI/HeaderSection/HeaderSection';
import { ReactComponent as ChevronDown } from '../assets/Icons/ChevronDown.svg';
import { ReactComponent as ChevronUp } from '../assets/Icons/ChevronUp.svg';

const PnlMonthlyConstant = ({monthlyConstant}) => {
    const [showDownData, setShowDownData] = useState(null);
    const showJsonData = (indexValue) => {
        setShowDownData(indexValue === showDownData ? null : indexValue)
    }
  return (
    <div>
      {monthlyConstant.map((field, index) => {
              console.log(field)
                    return (
                        <div>
                            {(() => {
                                if (field.title != null) {
                                    return <div><HeaderSection chevron={showDownData === index ? <ChevronUp /> : <ChevronDown />} showJsonData={() => showJsonData(index)} title={field?.title} /></div>;
                                }
                            })()}

                            {showDownData === index &&
                                <div>{field?.form_fields?.map((formField, index) => {
                                    console.log(formField)
                                    return (
                                        <div className=' mt-2'><FormInput titleName={formField?.element_name} type={formField.data_type} source={formField.source} value={formField.value} /></div>
                                    )
                                })}
                                    <div className=' mt-10'> {field.sub_fields && <PnlMonthlyConstant monthlyConstant={field.sub_fields} />}</div>
                                </div>
                            }
                        </div>
                    )
                })}
      
    </div>
  )
}

export default PnlMonthlyConstant
