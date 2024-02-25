import React from 'react'

const PaperResearch = ({headline, statement}) => {
    
    return(
        <div>
            <h1 className="text-3xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <p className="text-left font-roboto font-light text-lg">
                {statement}
            </p>
        </div>
    )
}

export default PaperResearch;