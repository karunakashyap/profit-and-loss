import React, { useState } from 'react';
import { ReactComponent as ExclamationCircle } from '../../../assets/Icons/ExclamationCircle.svg';

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
    const newIntlNumberFormat = () => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    };

    const currencyFormat = (value) => {
        const newNumericValue = parseInt(value?.toString().replace(/[^0-9]/g, ''), 10) || 0;
        const formattedValue = newIntlNumberFormat().format(newNumericValue);
        return formattedValue;
    }

    const numberFormat = (value) => parseInt(value?.toString().replace(/[^0-9]/g, ''), 10) || 0;

    const [numericValue, setNumericValue] = useState(value);
    const [currencyFormatValue, setFormattedValue] = useState(currencyFormat(value));

    console.log('Title Name==>', titleName);
    console.log('value==>', value);
    console.log('numericValue==>', numericValue);
    console.log('currencyFormatValue==>', currencyFormatValue);

    const onChange = (event) => {
        const inputText = event.target.value;
        console.log('event==>', event)
        console.log('inputText==>', inputText)
        
        setFormattedValue(currencyFormat(inputText))
        setNumericValue(numberFormat(inputText));
    };

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
                            <input
                                value={currencyFormatValue}
                                name={`${formFieldId}_${titleName}`}
                                id={`${formFieldId}_IN_CURRENCY_FORMAT`}
                                onChange={onChange}
                                type={type.toLowerCase()}
                                step={type !== 'DECIMAL' ? '1' : '.2'}
                                disabled={
                                    source == 'MONTHLY_CONSTANT' && monthlyConstantEnable
                                        ? false
                                        : source !== 'INPUT'
                                          ? true
                                          : false
                                }
                                className="p-2 border rounded py-2 px-4 w-72 text-gray-400"
                                // onBlur={onFormFieldBlur}
                            />
                            <input
                                type='hidden'
                                id={formFieldId}
                                value={numericValue}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormInput;
