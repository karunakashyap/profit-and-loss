import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumbs = () => {
    return (
        <div className=' mt-5'>
            <nav aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link to="/overview"  className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white" >
                            OVERVIEW
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <Link to="/overview/payouts" className="ms-1 text-sm font-medium text-gray-400 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">PAYOUTS</Link>
                        </div>
                    </li>
                </ol>
            </nav>

        </div>

    )
}

export default BreadCrumbs
