import React from 'react'
import { ReactComponent as ExclamationCircle } from '../../../assets/Icons/ExclamationCircle.svg';

const FormInput = ({ titleName, fontSize, type, source, value }) => {
    return (
        <div>
            <form action="">
                <div class="grid grid-cols-2">
                    <div><div className='flex space-x-1 mt-1'><label for="name" className={` text-gray-400 mb-2  text-${fontSize}`}>{titleName}</label>
                        <div className=' mt-1'><ExclamationCircle /></div></div></div>
                    <div><div className='relative right-4'> {source == "input" ?
                        <input type={type} name="number" id="number" step=".0" placeholder='Type Here...' required class="p-2 border rounded py-2 px-4 w-72 text-gray-400" />
                        : <input type={type} value={value} name="number" id="number" step=".0" disabled placeholder='Type Here...' required class="p-2 border rounded py-2 px-4 w-72 text-gray-400" />
                    }</div></div>
                </div>
            </form>
        </div>

    )
}

export default FormInput


