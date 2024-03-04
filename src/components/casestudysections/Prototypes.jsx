import React from 'react'

const Prototypes = ({ headline, subheadline, image, features, head2, subhead2, persona, storyboards, lofiwireframe, hifiwireframe }) => {

    return (
        <>
            <h1 className="text-3xl font-bold font-monsterrat mb-4">
                {headline}
            </h1>
            <div className="h-128 w-256 mx-auto flex justify-center items-center">
                <img className="object-cover rounded-lg h-[35vh] w-[165vh]" src={image} alt="" />
            </div>
            <p className="text-left font-roboto font-light text-lg">
                {subheadline}
            </p>
            <ol className="list-decimal list-inside font-roboto ml-7">
                {features.map((feature, index) => (
                    <li key={index} className='my-3'>
                        <strong className='text-2xl'>{feature.title}</strong>
                        <ul className="list-disc list-inside font-light ml-7">
                            {feature.items.map((item, itemIndex) => (
                                <li key={itemIndex} className='mt-2'>
                                    {item.description}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
            <h1 className="text-3xl font-bold font-monsterrat mt-8 mb-4">
                {head2}
            </h1>
            <p className="text-left font-roboto font-light text-lg">
                {subhead2}
            </p>
            <h1 className='font-bold font-roboto text-xl mb-2 ml-6 mt-5'>Narrative Storyboard: {persona}</h1>
            <ol className="list-decimal list-inside font-roboto ml-20">
                {storyboards.map((storyboard, index) => (
                    <li key={index} className='my-3'>
                        <strong className='text-1xl'>{storyboard.title}</strong>
                        <ul className="list-disc list-inside font-light ml-7">
                            {storyboard.narratives.map((narrative, narrativeIndex) => (
                                <li key={narrativeIndex} className='mt-2'>
                                    {narrative.description}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
            <h1 className='font-bold font-roboto text-xl mb-2 ml-6 mt-5'>Non-Narrative Storyboard: Lo-Fi Wireframes</h1>
            <div className="h-128 w-256 mx-auto flex justify-center items-center">
                <img className="object-cover rounded-lg h-full w-[190vh] border border-black" src={lofiwireframe} alt="" />
            </div>
            <h1 className='font-bold font-roboto text-xl mb-2 ml-6 mt-5'>Non-Narrative Storyboard: Hi-Fi Wireframes</h1>
            <div className="h-128 w-256 mx-auto flex justify-center items-center">
                <img className="object-cover rounded-lg h-full w-[190vh] border border-black mb-8" src={hifiwireframe} alt="" />
            </div>
        </>
    )
}

export default Prototypes;