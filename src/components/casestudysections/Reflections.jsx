import React from 'react'

const Reflections = ({headline, subheadline, reflections}) => {
    
    return(
        <div>
            <h1 className="text-3xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <p className="text-left font-roboto font-light text-lg">
                {subheadline}
            </p>
            <ol className="list-inside font-roboto ml-7">
                {reflections.map((reflection, index) => (
                    <li key={index} className='my-3'>
                        <ul className="list-disc list-inside font-light ml-7">
                            {reflection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className='mt-2'>
                                    <strong>{item.title} - </strong> {item.description}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Reflections;