import React from 'react'

const Ideation = ({headline, statement, ideations}) => {
    
    return(
        <div>
            <h1 className="text-4xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <p className="text-left font-roboto font-light text-lg mb-4">
                {statement}
            </p>
            {ideations.map((ideation, index) => (
                <div key={index} className="mb-4 flex flex-col items-center">
                    <h1 className="text-4xl font-bold font-monsterrat mb-4">{ideation.name}</h1>
                    <img src={ideation.src} className="w-full sm:w-1/2 md:w-1/3 lg:w-3/4 shadow-xl" />
                    <p className='font-roboto font-light italic my-4'>{ideation.caption}</p>
                </div>
            ))}
        </div>
    )
}

export default Ideation;