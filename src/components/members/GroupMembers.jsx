import React, { useState } from 'react'
import img1 from '../../assets/member-pfp/1.jpg'
import img2 from '../../assets/member-pfp/2.jpg'
import img3 from '../../assets/member-pfp/3.png'
import img4 from '../../assets/member-pfp/4.jpg'


const GroupMembers = () => {
    const members = [
        { img: img1, name: 'Nichole Vine Alburo', title: 'BS - Information Technology 3' },
        { img: img2, name: 'Shane Louis Barita', title: 'BS - Information Technology 3' },
        { img: img3, name: 'Ralph Mandigma', title: 'BS - Information Technology 2' },
        { img: img4, name: 'Jasper Lee Marbella', title: 'BS - Information Technology 2' },
    ];

    return (
        <>
            <div className='flex flex-wrap justify-around'>
                {members.map((member, index) => (
                    <div key={index} className='flex flex-col items-center w-full sm:w-1/2 md:1/4 lg:w-1/4 xl:w-1/4 px-4 text-center'>
                        <img className="w-40 h-40 rounded-full" src={member.img} alt="Rounded avatar" />
                        <h2 className='font-bold font-monsterrat text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2'>{member.name}</h2>
                        <p className='font-light font-monsterrat text-xs sm:text-sm md:text-base lg:text-lg xl:text-md text-gray-700'>{member.title}</p>
                    </div>

                ))}
            </div>
        </>
    );
}

export default GroupMembers;