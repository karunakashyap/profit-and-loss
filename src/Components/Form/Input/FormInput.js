import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { ReactComponent as ExclamationCircle } from '../../../assets/Icons/ExclamationCircle.svg';

const filterNum = require('../../../Helpers/FilterNumber');

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

    const checkSpecialChar = (e) => {
        if (/\W/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <div className="p-2">
            <form action="">
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
                            {type === 'currency' && (
                                <CurrencyInput
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
                                    intlConfig={{ locale: 'en-IN', currency: 'INR' }}
                                />
                            )}
                            {type === 'number' && (
                                <input
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
                            )}
                            {type === 'decimal' && (
                                <CurrencyInput
                                    allowDecimals
                                    value={numericValue}
                                    name={`${formFieldId}_${titleName}`}
                                    id={formFieldId}
                                    decimalsLimit={2}
                                    fixedDecimalLength={2}
                                    decimalScale={2}
                                    step={0.01}
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
                                    disableGroupSeparators={true}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormInput;
