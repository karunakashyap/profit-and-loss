import React from 'react';
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
    return (
        <div className="p-2">
            <form action="">
                <div className="grid grid-cols-2 mt-1">
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
                                type={type}
                                defaultValue={value || 0}
                                id={formFieldId}
                                step={type !== 'DECIMAL' ? '1' : '.2'}
                                disabled={
                                    source == 'MONTHLY_CONSTANT' && monthlyConstantEnable
                                        ? false
                                        : source !== 'INPUT'
                                          ? true
                                          : false
                                }
                                placeholder="Type Here..."
                                className="p-2 border rounded py-2 px-4 w-72 text-gray-400"
                                onBlur={onFormFieldBlur}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormInput;
