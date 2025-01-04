import React,{useState} from 'react';
import TableData from '../../../assets/Jsons/TableData.json';
const Columns = ({ Data, font }) => {
    
    return (
        <div>
            {Data?.map((title) => {
                return (
                    <div className={`${font}`}>
                        {title.title && (
                            <h1 className={`border-b-2 text-wrap text-center font-bold`}
                                style={{
                                    "width": "95rem"
                                }}>
                                {title.title}
                            </h1>
                        )}
                        {title.sub_fields && (
                            <Columns
                                Data={title.sub_fields}
                                font={'text-lg'}
                                border={'border-l-2 border-r-2 border-t-0 border-b-0'}
                            />
                        )}
                        {title.form_fields && <Columns Data={title.form_fields} font={'text-sm'} />}
                        <div className={`flex`}>
                            <h1
                                className="min-w-44 text-wrap font-bold border-b-2"
                                style={{ wordWrap: 'break-word', height: 'auto' }}
                            >
                                {title.element_name}
                            </h1>
                            <div className="flex">
                                {TableData.column_data.map((item) =>
                                    item.form_field_id === title.form_field_id
                                        ? item.data.map((v) => (
                                            <div className="border-b-2 border-l-2 w-28 p-2">{v.value}</div>
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
