import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as ChevronRight } from '../../../assets/Icons/ChevronRight.svg';

const Breadcrumbs = () => {
    const location = useLocation();
    const currentUrl = location.pathname.split('/').filter((x) => x);
    return (
        <div className='flex text-gray-500 text-lg justify-center mt-5'>
            <Link to="/">overview</Link>
            {currentUrl.map((pathname, index) => {
                console.log(`/${currentUrl.slice(0, index + 1)}`)
                const routeTo = `/${currentUrl.slice(0, index + 1).join('/')}`;
                const isLast = index === currentUrl.length - 1;
                return (
                    <div key={pathname}  >
                        <div className=' flex'>
                       <div className=' mt-1'> <ChevronRight/></div>
                       {isLast ? (<div className=' '>{pathname}</div>) : (<Link to={routeTo}>{pathname}</Link>)}
                       </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
