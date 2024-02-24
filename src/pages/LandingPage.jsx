import React, { useState, useEffect } from 'react'
import GroupMembers from '../components/members/GroupMembers';
import CasestudyList from '../components/casestudylist/CaseStudyList';
import collab from '../assets/images/icons/digital-collaboration.png'

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('sectionpart');
            const rect = section.getBoundingClientRect();
            const isInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0);
            setIsVisible(isInView);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <section className='py-16 px-10 flex flex-col items-center h-full gap-2 animate-flip-up animate-once animate-ease-out animate-duration-[1500ms]'>
                <img className='w-600 -mt-8' src={collab} alt='' />
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

            <section id='sectionpart' className='pb-7 px-10 flex flex-col items-center h-full gap-2'>
                <h1 className={`mt-3 text-[7vh] font-josefin ${isVisible ? 'animate-fade-up animate-once animate-ease-out animate-duration-[2000ms] animate-delay-300' : ''}`}>
                    Meet the <strong>Team.</strong>
                </h1>
                <p className={`mb-5 font-monsterrat ${isVisible ? 'animate-fade-up animate-once animate-ease-out animate-duration-[1500ms] animate-delay-400' : ''}`}>
                    Meet the individuals of DP Group 5 driving innovation and collaborating to create impactful solutions.
                </p>
                <div className={`${isVisible ? 'animate-fade-up animate-once animate-ease-out animate-duration-[2500ms] animate-delay-500' : ''}`}>
                <GroupMembers />
                </div>
            </section>

            <div className='flex justify-center'>
                <hr className="h-px mt-2 mb-5 bg-black border-0 dark:bg-gray-700 w-5/6" />
            </div>

            <section className='pb-7 px-10 flex flex-col items-center h-full gap-2 animate-fade-up animate-once animate-ease-out animate-duration-[2500ms] animate-delay-500'>
                <h1 className='mt-3 text-[7vh] font-josefin'>
                    Delve into our <strong>Case Studies.</strong>
                </h1>
                <p className='mb-5 font-monsterrat w-4/5 text-center'>
                    Curious about how we can help businesses achieve their goals? Explore our collection of real-world case studies, where we delve into the challenges faced, strategies implemented, and impactful results delivered. Discover how we tackled diverse issues, from <strong>Economic Growth</strong> to <strong>Infrastructure, Industry, and Innovations.</strong>
                </p>
                <CasestudyList />
            </section>
        </div>
    )
}

export default LandingPage;