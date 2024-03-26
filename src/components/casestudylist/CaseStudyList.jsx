import React, { useState } from 'react'
import CaseStudyCard from '../cards/CaseStudyCard';
import samplebanner from '../../assets/samplebanner.png';
import cs1cover from '../../assets/images/case1cover.png'
import cs2cover from '../../assets/images/case2cover.png'


const CasestudyList = () => {

    const caseStudies = [
        {imgSrc: cs1cover, title: '[CHOSEN] Case Study 1: GreenTrucker', description: 'A system focused on aiding trucking managers by increasing work efficiency.', link: '/casestudy1'},
        {imgSrc: cs2cover, title: 'Case Study 2: StockSavvy', description: 'A system with an aim to help business retailers and suppliers with inventory management.', link: '/casestudy2'},
        
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