import React, { useState } from 'react'

const Competitors = ({competitors}) => {
    return (
        <>
            <div className='flex flex-wrap justify-center mt-4'>
                {competitors.map((competitor, index) => (
                    <div key={index} className='flex flex-col items-center w-full sm:w-1/2 md:1/4 lg:w-1/4 xl:w-1/4 px-4 text-center'>
                        <a href={competitor.link} target="_blank" rel="noopener noreferrer">
                            <img className="w-40 h-40 rounded-md" src={competitor.img} alt="Rounded avatar" />
                            <h2 className='font-bold font-monsterrat text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2'>{competitor.name}</h2>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Competitors;
