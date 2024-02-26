import React from 'react';

const SynthesizeResearch = ({headline, statement, images, head2, state2, empmaps}) => {
    return(
        <div>
            <h1 className="text-4xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <p className="text-left font-roboto font-light text-lg mb-4">
                {statement}
            </p>
            {images.map((image, index) => (
                <div key={index} className="mb-4 flex flex-col items-center">
                    <img src={image.src} className="w-full sm:w-1/2 md:w-1/3 lg:w-3/4 shadow-xl" />
                    <p className='font-roboto font-light italic my-4'>{image.caption}</p>
                </div>
            ))}
            <h1 className="text-4xl font-bold font-monsterrat mb-4">
                {head2}
            </h1>
            <p className="text-left font-roboto font-light text-lg mb-4">
                {state2}
            </p>
            {empmaps.map((empmap, index) => (
                <div key={index} className="mb-4 flex flex-col items-center">
                    <img src={empmap.src} className="w-full sm:w-1/2 md:w-1/3 lg:w-3/4 shadow-xl" />
                    <p className='font-roboto font-light italic my-4'>{empmap.caption}</p>
                </div>
            ))}
        </div>
    )
}

export default SynthesizeResearch;
