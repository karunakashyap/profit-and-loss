import React from 'react';
import TableData from '../../../assets/Jsons/TableData.json';
const Columns = ({ Data, font, border }) => {
    return (
        <div>
            {Data?.map((title) => {
                return (
                    <div className={`${font}`}>
                        <h1 className={`border w-full font-bold ${border} `}>{title.title}</h1>
                        <div>
                            {title.sub_fields && (
                                <Columns
                                    Data={title.sub_fields}
                                    font={'text-lg'}
                                    border={'border-l-2 border-r-2'}
                                />
                            )}
                        </div>
                        <div>
                            {' '}
                            {title.form_fields && (
                                <Columns Data={title.form_fields} font={'text-sm'} />
                            )}
                        </div>
                        <div className=" border-2 flex">
                            <h1 className=" w-44">{title.element_name}</h1>
                            <div className="flex">
                                {TableData.column_data.map((item) =>
                                    item.form_field_id === title.form_field_id
                                        ? item.data.map((v) => (
                                              <div className=" border-l-2 w-28 p-2">{v.value}</div>
                                          ))
                                        : ''
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Columns;
