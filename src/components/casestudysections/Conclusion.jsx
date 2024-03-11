import React from 'react'

const Conclusion = ({headline, subheadline}) => {
    
    return(
        <div>
            <h1 className="text-3xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <p className="text-left font-roboto font-light text-lg mb-8">
                {subheadline}
            </p>
        </div>
    )
}

export default Conclusion;