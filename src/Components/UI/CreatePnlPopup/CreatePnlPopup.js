import React from 'react'

const CreatePnlPopup = ({ onClose }) => {
    return (
        <div className=''>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded shadow-lg">
                    <div>
                       <div><input type='number' className='border-2 w-60 h-10 rounded p-4 required'></input></div> 
                       <div><input type='number' className='border-2 w-60 h-10 mt-10 rounded  p-4 required'></input></div> 
                    </div>
                    <button className="px-4 py-2 mt-10 w-60 bg-blue-700 text-white rounded hover:bg-blue-700" onClick={onClose}>
                        Create Pnl
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreatePnlPopup
