import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as ChevronRight } from '../../../assets/Icons/ChevronRight.svg';

const Breadcrumbs = () => {
    const location = useLocation();
    const capitalize = (string) => (string ? string.charAt(0).toUpperCase() + string.slice(1) : '');
    const currentUrlSegments = location.pathname.split('/').filter(Boolean); 
    const breadcrumbs = [{ label: 'Overview', path: '/' }];
    currentUrlSegments.reduce((accumulatedPath, segment) => {
        const nextPath = `${accumulatedPath}/${segment}`;
        breadcrumbs.push({ label: capitalize(segment), path: nextPath });
        return nextPath;
    }, '');

    return (
        <div className="flex text-gray-500 text-lg p-5">
            {breadcrumbs.map(({ label, path }, index) => (
                <div key={path}>
                    <div className="flex items-center">
                        {index !== 0 && (
                            <div className="mt-1">
                                <ChevronRight />
                            </div>
                        )}
                        <div className={index === breadcrumbs.length - 1 ? '' : 'mr-2'}>
                            {index === breadcrumbs.length - 1 ? (
                                <span>{label}</span>
                            ) : (
                                <Link to={path}>{label}</Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Breadcrumbs;
