import React from 'react'

const Solution = ({title, headline, statement, methods}) => {
    
    return(
        <div className="flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20">
            <span className='text-1xl font-light font-monsterrat mb-2'>
                {title}
            </span>
            <h1 className="text-3xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <p className="text-left font-roboto font-light text-lg">
                {statement} To come up with the solution, the group utilized multiple methods such as
                <strong> {methods}</strong>.
            </p>
        </div>
    )
}

export default Solution;