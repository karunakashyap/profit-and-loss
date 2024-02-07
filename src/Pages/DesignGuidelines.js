import React from 'react';
import Position from '../Components/Custom/Buttons/Position';
import ViewDetails from '../Components/Custom/Buttons/ViewDetails';
import Delete from '../Components/Custom/Buttons/Delete';
import Edit from '../Components/Custom/Buttons/Edit';
import BreadCrumbs from '../Components/UI/BreadCrumbs/BreadCrumbs';
import Toast from '../Components/UI/Toast/Toast';
import { ReactComponent as CroseWhite } from '../assets/Icons/CroseWhite.svg';
import { ReactComponent as ChevronDown } from '../assets/Icons/ChevronDown.svg';
import Tooltip from '../Components/UI/Tooltip/Tooltip';
import NoDataFound from '../Components/Custom/ErrorHanding/NoDataFound';
import HeaderSection from '../Components/UI/Sections/HeaderSection';
import FormInput from '../Components/Form/Input/FormInput';
const DesignGuidelines = () => {
    return (
        <>
            <div className="p-20">
                <h1 className=" font-bold text-4xl">
                    Form Input
                    <p className=" text-[16px] text-gray-500">
                        This is a form input when the user enters any value this value will be
                        changed in Indian currency.
                    </p>
                </h1>
                <FormInput
                    titleName={'Enter any Number'}
                    fontSize={'16px'}
                    type={'text'}
                    value={'56787685'}
                    source={'INPUT'}
                />
                <h1 className="font-bold text-4xl">Buttons</h1>
                <p className=" text-[16px] text-gray-500  font-bold">
                    This is an animation button. when the user hovers on this button this button
                    color will be changed.
                </p>
                <Position />
                <p className=" text-[16px] text-gray-500 mt-5  font-bold">
                    This is an animation button with an icon. when the user hovers on this button
                    this button color will be changed.
                </p>
                <ViewDetails />
                <p className=" text-[16px] text-gray-500  mt-5  font-bold">
                    This is an animation button with an icon. when the user hovers on this button
                    shows the delete text with an icon.
                </p>
                <Delete />
                <p className=" text-[16px] text-gray-500 mt-5  font-bold">
                    This is an animation button with an icon. when the user hover over this button
                    shows the edit text with an icon.
                </p>
                <Edit />
                <h1 className=" font-bold text-4xl">BreadCrumbs</h1>
                <p className=" text-[16px] text-gray-500 mt-5  font-bold">
                    This is a dynamic breadcrumb. This breadcrumb changes according to the URL.
                </p>
                <BreadCrumbs />
                <h1 className=" font-bold text-4xl ">Tooltips</h1>
                <p className=" text-[16px] text-gray-500 mt-5  font-bold">
                    This is a tooltip. when the user moves the mouse pointer over an input box shows
                    the extra information about something.
                </p>
                <Tooltip label={'Type Structure Name'} />
                <Tooltip label={'Job Title'} />
                <h1 className=" font-bold text-4xl mt-5">Toasts</h1>
                <p className=" text-[16px] text-gray-500 mt-5 font-bold">
                    These are toasts of different colors. These toasts will disappear after 10
                    seconds.
                </p>
                <Toast
                    disableAnimation={'disableAnimation'}
                    toastBgColor={'bg-red-400'}
                    toastButtonBg={'bg-red-500'}
                    croseIcon={<CroseWhite />}
                    toastWidth={'72'}
                />
                <Toast
                    toastBgColor={'bg-red-400'}
                    toastButtonBg={'bg-red-500'}
                    croseIcon={<CroseWhite />}
                    toastWidth={'72'}
                    toastButton={'hidden'}
                />
                <Toast
                    disableAnimation={'disableAnimation'}
                    toastBgColor={'bg-red-400'}
                    toastButtonBg={'bg-red-500'}
                    toastWidth={'64'}
                />
                <Toast toastBgColor={'bg-sky-600'} toastButtonBg={'bg-sky-700'} toastWidth={'72'} />
                <Toast
                    disableAnimation={'disableAnimation'}
                    toastBgColor={'bg-amber-500'}
                    toastButtonBg={'bg-amber-600'}
                    toastWidth={'72'}
                />
                <h1 className=" font-bold text-4xl">Header Section</h1>
                <p className=" text-[16px] text-gray-500 mt-2 font-bold">
                    This is a header Section. when the user clicks on the Chevron icon shows the
                    information under the header section and the Chevron icon changes.
                </p>
                <div className="mt-4">
                    <HeaderSection
                        title={'Payout Strutures List'}
                        chevron={<ChevronDown />}
                        fontSize={'16'}
                    />
                </div>
                <h1 className="font-bold text-4xl">No Data Found</h1>
                <div>
                    <NoDataFound />
                </div>
            </div>
        </>
    );
};

export default DesignGuidelines;
