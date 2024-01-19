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
    const [numericValue, setNumericValue] = useState('');

    const onChange = (event) => {
        const inputText = event.target.value;
        const newNumericValue = parseInt(inputText.replace(/[^0-9]/g, ''), 10) || 0;
        const formattedValue = newIntlNumberFormat().format(newNumericValue);
        setNumericValue(formattedValue);
    };

    const newIntlNumberFormat = () => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    };
    return (
        <div className="p-2">
            <form action="">
            {/* grid grid-cols-2 */}
                <div className=" flex mt-1">
                    <div className="w-[200px]">
                        <div className="flex space-x-1 mt-1">
                            <label
                                htmlFor={formFieldId}
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
                                value={numericValue}

                                id={`${formFieldId}_IN_CURRENCY_FORMAT`}
                                onChange={onChange}
                                type={type}
                                defaultValue={value || 0}
                                // id={formFieldId}
                                step={type !== 'DECIMAL' ? '1' : '.2'}
                                // disabled={
                                //     source == 'MONTHLY_CONSTANT' && monthlyConstantEnable
                                //         ? false
                                //         : source !== 'INPUT'
                                //           ? true
                                //           : false
                                // }
                                placeholder="Type Here..."
                                className="p-2 border rounded py-2 px-4 w-72 text-gray-400"
                                onBlur={onFormFieldBlur}
                            />
                            <input
                                type='number'
                                id={formFieldId}
                                value={numericValue}
                                onChange={() => { }}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormInput;
