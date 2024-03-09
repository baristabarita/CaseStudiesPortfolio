import React from 'react'

const Prototypes = ({headline, figmasource}) => {
    
    return(
        <div>
            <h1 className="text-3xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <div className='flex justify-center items-center h-screen'>
                <div className='relative'>
                    <iframe
                        className='w-[75em] h-[35em]'
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                        src={figmasource}
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}

export default Prototypes;