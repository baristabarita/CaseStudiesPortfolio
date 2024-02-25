import React from 'react';

const UserResearch = ({ headline, subheadline, title, description, questions, demographics, title2, desc2, insights }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <p className="text-left font-roboto font-light text-lg">
                {subheadline}
            </p>
            <h1 className='font-bold font-roboto text-xl my-2 ml-6'>{title}</h1>
            <p className='mb-4 ml-6 font-roboto font-light'>{description}</p>
            <ol className="list-disc list-inside font-roboto ml-7">
                {questions.map((question, index) => (
                    <li key={index} className='mb-2'>{question}</li>
                ))}
            </ol>
            <h1 className='font-bold font-roboto text-xl mt-8 mb-2 ml-6'>Target User Demographics / Characteristics:</h1>
            <ol className="list-disc list-inside font-roboto ml-7">
                {demographics.map((demographic, index) => (
                    <li key={index} className='mb-2'>{demographic}</li>
                ))}
            </ol>
            <h1 className='font-bold font-roboto text-xl mt-8 mb-2 ml-6'>{title2}</h1>
            <p className='mb-4 ml-6 font-roboto font-light'>{desc2}</p>
            <ol className="list-disc list-inside font-roboto ml-7">
                {insights.map((insight, index) => (
                    <li key={index} className='mb-2'>{insight}</li>
                ))}
            </ol>
        </div>
    );
}

export default UserResearch;
