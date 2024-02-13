import React from 'react'

const Filter = ({type,valueInput,handleInputChange,showListData,showList,listData,handleSelect}) => {
    return (
        <div className="...">
            <input
                type={type}
                value={valueInput}
                onChange={handleInputChange}
                onClick={showListData}
                className='border-2 p-2 rounded w-48'
            />
            {showList && (
                <ul className="year-list border-2 rounded mt-1 w-48 p-2" >
                    {listData.map((data) => (
                        <li key={data} onClick={() => handleSelect(data)}>
                            {data}
                        </li>
                    ))}
                </ul>
            )}</div>
    )
}

export default Filter
