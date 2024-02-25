import React, { useState } from 'react'
import logo1 from '../../../assets/icons/shippabo.png'
import logo2 from '../../../assets/icons/transfix.png'
import logo3 from '../../../assets/icons/freightpop.png'

const Case1Competitors = () => {
    const competitors = [
        { img: logo1, name: 'Shippabo', link: 'https://www.shippabo.com/' },
        { img: logo2, name: 'Transfix', link: 'https://transfix.io/' },
        { img: logo3, name: 'FreightPOP', link: 'https://www.freightpop.com/' },
    ];

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

export default Case1Competitors;
