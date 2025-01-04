import React from 'react';

const Footer = () => {
    return (
        <div className=' mt-36'>
        <footer
            className="bg-gray-800 text-white h-20 fixed inset-x-0 bottom-0"
            style={{
                clipPath: ' polygon(49% 28%, 100% 0%, 100% 100%, 0 99%, 0 0)',
            }}
        >
            <div className="mx-auto max-w-7xl mt-6">
                <p>Copyright @ 2023 All right reserved.</p>
            </div>
            <div>
                <div className=" float-end  relative -mt-6 mr-32 ">Built with 🔥 by Mutant(X)</div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
