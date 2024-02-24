import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaseStudyCard = ({ imgSrc, title, description, link }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(link);
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700 cursor-pointer" onClick={handleNavigation}>
            <img className="rounded-t-lg" src={imgSrc} alt="Case Study Banner" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>

    );
}

export default CaseStudyCard;
