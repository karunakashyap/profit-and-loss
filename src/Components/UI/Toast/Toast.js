import React, { useState, useEffect } from 'react';
const Toast = ({
    toastBgColor,
    croseIcon,
    toastWidth,
    toastButton,
    toastButtonBg,
    disableAnimation,
}) => {
    const [toast, setToast] = useState(true);
    const [showDiv, setShowDiv] = useState(true);
    const notShowToast = () => {
        setToast(false);
    };

    useEffect(() => {
        if (!disableAnimation) {
            setTimeout(() => {
                setShowDiv(false);
            }, 10000);
        }
    }, []);

    return (
        <div className="mt-6 ">
            {showDiv && (
                <div>
                    {' '}
                    {toast && (
                        <div
                            id="toast-default"
                            className={`flex items-center h-12 p-1 w-${toastWidth} text-white ${toastBgColor} rounded-lg shadow dark:text-gray-400`}
                            role="alert"
                        >
                            <div className={`${toastButton}`}>
                                <div
                                    className={`inline-flex items-center font-bold p-2 justify-center flex-shrink-0  h-8 text-white ${toastButtonBg} rounded-lg  `}
                                >
                                    Error
                                    <span className="sr-only">Fire icon</span>
                                </div>
                            </div>
                            <div className="ms-3 text-sm font-normal">Lorem Ipsum Dolor Aset</div>
                            <button
                                onClick={notShowToast}
                                type="button"
                                className="ms-auto  -mx-1.5 -my-1.5  text-gray-400  rounded-lg  p-1.5  inline-flex items-center justify-center h-8 w-8 dark:text-gray-500"
                                data-dismiss-target="#toast-default"
                                aria-label="Close"
                            >
                                <span className="sr-only">Close</span>
                                {croseIcon}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Toast;
