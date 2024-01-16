import React from 'react';
import { ReactComponent as ExclamationCircle } from '../../../assets/Icons/ExclamationCircle.svg';

const FormInput = ({ titleName, fontSize, type, source, value }) => {
    return (
        <div className="p-2">
            <form action="">
                <div class="grid grid-cols-2 mt-1">
                    <div className="w-[200px]">
                        <div className="flex space-x-1 mt-1">
                            <label
                                for="name"
                                className={`text-gray-400 mb-2`}
                                style={{ fontSize: fontSize }}
                            >
                                {titleName}&nbsp;
                                <ExclamationCircle class="inline" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <input
                                type={type}
                                value={value}
                                name="number"
                                id="number"
                                step=".0"
                                disabled={source !== 'INPUT' ? true : false}
                                placeholder="Type Here..."
                                required
                                class="p-2 border rounded py-2 px-4 w-72 text-gray-400"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormInput;
