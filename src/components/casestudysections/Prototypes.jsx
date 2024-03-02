import React from 'react'

const Prototypes = ({ headline, subheadline }) => {

    return (
        <>
            <h1 className="text-3xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <p className="text-left font-roboto font-light text-lg">
                {subheadline}
            </p>
        </>
    )
}

export default Prototypes;