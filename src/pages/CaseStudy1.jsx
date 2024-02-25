import React from 'react'
import { Separator } from "@/components/ui/separator"
import Cover from '../components/casestudysections/Cover'
import IntroContext from '../components/casestudysections/IntroContext'
import samplebanner from '../assets/samplebanner.png'

const CaseStudy1 = () => {
    return (
        <div>
            <Cover image={samplebanner} />
            <div className='px-10 sm:px-16 lg:px-20'>
                <h1 className="text-5xl font-bold my-5 font-monsterrat">CaseStudy1 page title</h1>
                <ul className="list-disc list-inside font-light font-roboto ml-7">
                    <li>Timeline: January 2024 - March 2024</li>
                </ul>
            </div>

            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black"/>
            
            <div>
                <IntroContext
                    title="Context"
                    paragraph="The logistics industry, a key player in the global economy, is navigating a post-COVID-19 world filled with challenges and opportunities, including trade tensions, supply chain shifts, tech innovations, sustainability, and talent gaps. This case study focuses on how trucking managers can use digital solutions to enhance booking management and client outreach, contributing to economic growth and decent work."
                />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black"/>
            <div>
                eeeeeeeee
            </div>
        </div>
    )
}

export default CaseStudy1;
