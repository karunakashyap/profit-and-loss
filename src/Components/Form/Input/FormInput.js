import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { ReactComponent as ExclamationCircle } from '../../../assets/Icons/ExclamationCircle.svg';

const filterNum = require('../../../Helpers/filterNumber');

const FormInput = ({
    titleName,
    fontSize,
    type,
    source,
    value,
    formFieldId,
    onFormFieldBlur,
    monthlyConstantEnable,
}) => {
    const [numericValue, setNumericValue] = useState(value);

    const handleChange = (event) => {
        console.log('onValueChange fired', event.target.value);
        if (event.target.value === undefined) {
            setNumericValue(0);
        } else {
            setNumericValue(filterNum(event.target.value));
        }
    };

    const checkSpecialChar =(e)=>{
        if(!/[0-9a-zA-Z]/.test(e.key)){
         e.preventDefault();
        }
       };
      
    console.log('Title Name==>', titleName);
    console.log('value==>', value);
    console.log('type==>', type);
    console.log('numericValue==>', numericValue);

    return (
        <div className="p-2">
            <form action="">
                {/* grid grid-cols-2 */}
                <div className=" flex mt-1">
                    <div className="w-[200px]">
                        <div className="flex space-x-1 mt-1">
                            <label
                                htmlFor={`${formFieldId}_IN_CURRENCY_FORMAT`}
                                className={`text-gray-400 mb-2`}
                                style={{ fontSize: fontSize }}
                            >
                                {titleName}&nbsp;
                                <ExclamationCircle className="inline" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            {
                                type === 'currency' && <CurrencyInput
                                    allowDecimals
                                    value={numericValue}
                                    prefix="₹ "
                                    name={`${formFieldId}_${titleName}`}
                                    id={formFieldId}
                                    onChange={handleChange}
                                    step={type !== 'decimal' ? '1' : '.2'}
                                    disabled={
                                        source === 'MONTHLY_CONSTANT' && monthlyConstantEnable
                                            ? false
                                            : source !== 'INPUT'
                                            ? true
                                            : false
                                    }
                                    className="p-2 border rounded py-2 px-4 w-72 text-gray-400"
                                    onBlur={onFormFieldBlur}
                                />
                            }
                            {
                                type === 'number' && <input
                                    allowDecimals
                                    value={numericValue}
                                    name={`${formFieldId}_${titleName}`}
                                    id={formFieldId}
                                    onChange={handleChange}
                                    disabled={
                                        source === 'MONTHLY_CONSTANT' && monthlyConstantEnable
                                            ? false
                                            : source !== 'INPUT'
                                            ? true
                                            : false
                                    }
                                    className="p-2 border rounded py-2 px-4 w-72 text-gray-400"
                                    onBlur={onFormFieldBlur}
                                    onKeyDown={checkSpecialChar}
                                />
                            }
                            {
                                type === 'decimal' && <input
                                    allowDecimals
                                    value={numericValue}
                                    name={`${formFieldId}_${titleName}`}
                                    id={formFieldId}
                                    step='0.2'
                                    onChange={handleChange}
                                    disabled={
                                        source === 'MONTHLY_CONSTANT' && monthlyConstantEnable
                                            ? false
                                            : source !== 'INPUT'
                                            ? true
                                            : false
                                    }
                                    className="p-2 border rounded py-2 px-4 w-72 text-gray-400"
                                    onBlur={onFormFieldBlur}
                                    onKeyDown={checkSpecialChar}
                                />
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormInput;
