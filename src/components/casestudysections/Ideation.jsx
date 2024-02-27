import React from 'react'

const Ideation = ({ headline, statement, ideations }) => {

    return (
        <div>
            <h1 className="text-4xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <p className="text-left font-roboto font-light text-lg mb-4">
                {statement}
            </p>
            {ideations.map((ideation, index) => (
                <div key={index} className="mb-4 flex flex-col items-start">
                    <h1 className="font-bold font-roboto text-3xl my-3 ml-6 self-start">{ideation.name}</h1>
                    <img src={ideation.src} className="w-full sm:w-1/2 md:w-1/3 lg:w-3/4 shadow-xl self-center" />
                    <p className='my-4 ml-6 font-roboto font-light self-center'>{ideation.caption}</p>
                </div>
            ))}

        </div>
    )
}

export default Ideation;