import React, { useState } from 'react'
import GroupMembers from '../components/members/GroupMembers';

const LandingPage = () => {
    return(
        <div>
            <section className='py-16 px-10 flex flex-col items-center h-full gap-2'>
                
                <span className="font-roboto font-bold text-5xl text-center w-4/6 leading-snug">
                    Collaboration & Innovation: Delivering Exceptional Results
                </span>
                <span className='font-monsterrat font-light text-center w-5/6 mt-4'>
                    Discover our synergy, where brainstorming and creative problem-solving fuel innovation. See how our collaborative approaches contributes to groundbreaking outcomes.                   
                </span>
            </section>

            <div className='flex justify-center'>
                <hr className="h-px mt-8 mb-2 bg-black border-0 dark:bg-gray-700 w-5/6" />
            </div>

            <section className='pb-7 px-10 flex flex-col items-center h-full gap-2'>
                <h1 className='mt-3 text-[7vh] font-josefin'>Meet the <strong>Team.</strong></h1>
                <p className='mb-5 font-monsterrat'>Meet the individuals of DP Group 5 driving innovation and collaborating to create impactful solutions.</p>
                <GroupMembers />
            </section>

            <div className='flex justify-center'>
                <hr className="h-px mt-2 mb-5 bg-black border-0 dark:bg-gray-700 w-5/6" />
            </div>

        </div>
    )
}

export default LandingPage;