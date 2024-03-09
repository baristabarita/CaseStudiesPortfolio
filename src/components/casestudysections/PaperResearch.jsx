import React from 'react'

const PaperResearch = ({headline, statement1, statement2}) => {
    
    return(
        <div>
            <h1 className="text-3xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <p className="text-left font-roboto font-light text-lg">
                {statement1}
            </p>
            <p className="text-left font-roboto font-light text-lg mt-4">
                {statement2}
            </p>
        </div>
    )
}

export default PaperResearch;