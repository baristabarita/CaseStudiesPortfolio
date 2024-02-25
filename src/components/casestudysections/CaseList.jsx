import React from 'react';

const CaseList = ({ sections }) => {
    return (
        <>
            <ol className="list-decimal list-inside font-roboto ml-7">
                {sections.map((section, index) => (
                    <li key={index} className='my-3'>
                        <strong className='text-2xl'>{section.title}</strong>
                        <ul className="list-disc list-inside font-light ml-7">
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className='mt-2'>
                                    <strong>{item.title}:</strong> {item.description}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </>
    );
}

export default CaseList;
