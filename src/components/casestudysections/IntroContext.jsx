import React from 'react'

const IntroContext = ({title, paragraph}) => {
    return(
        <div className="flex flex-col items-start min-h-screen pt-6 px-10 sm:px-16 lg:px-20">
            <h1 className="text-5xl font-bold font-monsterrat mb-4">
                {title}
            </h1>
            <p className="text-left font-roboto text-lg">
                {paragraph}
            </p>
        </div>
    )
}

export default IntroContext;