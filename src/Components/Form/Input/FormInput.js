import React from 'react'
import {ReactComponent as ExclamationCircle} from '../../../assets/Icons/ExclamationCircle.svg';

const FormInput = () => {
    return (
        <div>
           <form action="">
                <div class="flex flex-col items-center mt-4">
                   <div className='flex mr-24 space-x-1'><label for="name" className=' text-gray-400  mb-2'>Payout Structure Name</label>
                    <div className=''><ExclamationCircle/></div></div> 
                    <input type="text" name="name" id="name" placeholder='Enter Structures Name' required class="peer p-2 border rounded py-2 px-4 w-72 text-gray-400 border-r-4 " />
                    <i class="invisible peer-invalid:visible text-red-700 font-light  mr-20 mb-2">
                        Please Enter Structure Name
                    </i>
                </div>
            </form>
        </div>

    )
}

export default FormInput


