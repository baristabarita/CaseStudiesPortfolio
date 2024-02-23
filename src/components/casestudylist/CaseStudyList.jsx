import React, { useState } from 'react'
import CaseStudyCard from '../cards/CaseStudyCard';
import samplebanner from '../../assets/samplebanner.png';

const CasestudyList = () => {
    //sample data - to be updated
    const caseStudies = [
        {imgSrc: samplebanner, title: 'Case Study 1: Decent Work and Economic Growth', description: 'A system focused on aiding trucking managers by increasing work efficiency.', link: '/casestudy1'},
        {imgSrc: samplebanner, title: 'Case Study 2: Infrastructure, Industry, Innovation', description: 'A system with an aim to help clients connect with service providers.', link: '/casestudy2'},
        
    ]
    return(
        <div className='flex flex-wrap justify-center'>
            {caseStudies.map((study, index) => (
                <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/4 p-4'>
                    <CaseStudyCard imgSrc={study.imgSrc} title={study.title} description={study.description} link={study.link}/>
                </div>
            ))}
        </div>
    );
}

export default CasestudyList;