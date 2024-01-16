import React, { useState } from 'react';
import FormInput from '../../Form/Input/FormInput';
import HeaderSection from './HeaderSection';
import { ReactComponent as ChevronUp } from '../../../assets/Icons/ChevronUp.svg';
import { ReactComponent as ChevronDown } from '../../../assets/Icons/ChevronDown.svg';

const SubFieldSection = ({ field, index, fontSize = 20 }) => {
    const [showSectionData, setShowSectionData] = useState(false);
    const showSection = (indexValue) =>
        setShowSectionData(indexValue === showSectionData ? null : indexValue);

    fontSize = fontSize < 14 ? 14 : fontSize;

    return (
        <div>
            {(() => {
                if (field.title != null) {
                    return (
                        <div>
                            <HeaderSection
                                chevron={
                                    showSectionData === index ? <ChevronUp /> : <ChevronDown />
                                }
                                showSection={() => showSection(index)}
                                title={field?.title}
                                fontSize={fontSize}
                            />
                        </div>
                    );
                }
            })()}
            {showSectionData === index && (
                <div>
                    <div className="mt-10">
                        {field?.sub_fields.map((field, index) => {
                            return (
                                <SubFieldSection
                                    field={field}
                                    index={index}
                                    key={field.sequence + index}
                                    fontSize={fontSize - 2}
                                />
                            );
                        })}
                    </div>
                    {field?.form_fields?.map((formField, index) => {
                        return (
                            <div className="mt-2" key={formField?.form_field_id}>
                                <FormInput
                                    titleName={formField?.element_name}
                                    type={formField.data_type}
                                    source={formField.source}
                                    value={formField.value}
                                    fontSize={fontSize}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SubFieldSection;
