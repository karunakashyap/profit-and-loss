
import React, { useState } from 'react';
import FormInput from '../../Form/Input/FormInput';
import HeaderSection from './HeaderSection';
import { ReactComponent as ChevronUp } from '../../../assets/Icons/ChevronUp.svg';
import { ReactComponent as ChevronDown } from '../../../assets/Icons/ChevronDown.svg';

const SubFieldSection = ({
    field,
    index,
    fontSize = 20,
    onFormFieldBlur,
    monthlyConstantEnable,
}) => {
    const [hideSectionIndex, setHideSectionData] = useState(false);
    const hideSection = (indexValue) =>
        setHideSectionData(indexValue === hideSectionIndex ? null : indexValue);

    fontSize = fontSize < 14 ? 14 : fontSize;

    return (
        <div>
            {(() => {
                if (field.title != null) {
                    return (
                        <div>
                            <HeaderSection
                                chevron={
                                    hideSectionIndex === index ? <ChevronUp /> : <ChevronDown />
                                }
                                hideSection={() => hideSection(index)}
                                title={field?.title}
                                fontSize={fontSize}
                            />
                        </div>
                    );
                }
            })()}
            {
                <div
                    style={{
                        display: hideSectionIndex === index ? 'none' : 'block',
                    }}
                >
                    <div className="mt-5">
                        {field?.sub_fields.map((field, index) => {
                            return (
                                <SubFieldSection
                                    field={field}
                                    index={index}
                                    key={field.sequence + index}
                                    fontSize={fontSize - 2}
                                    onFormFieldBlur={onFormFieldBlur}
                                    monthlyConstantEnable={monthlyConstantEnable}
                                />
                            );
                        })}
                    </div>
                    {field?.form_fields?.map((formField, index) => {
                        return (
                            <div className="mt-2" key={formField?.form_field_id}>
                                <FormInput
                                    titleName={formField?.element_name}
                                    type={formField?.data_type?.toLowerCase()}
                                    source={formField?.source}
                                    value={formField?.value}
                                    fontSize={fontSize}
                                    formFieldId={formField?.form_field_id}
                                    onFormFieldBlur={onFormFieldBlur}
                                    monthlyConstantEnable={monthlyConstantEnable}
                                />
                            </div>
                        );
                    })}
                </div>
            }
        </div>
    );
};

export default SubFieldSection;
