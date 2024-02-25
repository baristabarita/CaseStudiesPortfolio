import React from 'react'
import { Separator } from "@/components/ui/separator"
import Cover from '../components/casestudysections/Cover'
import IntroContext from '../components/casestudysections/IntroContext'
import samplebanner from '../assets/samplebanner.png'
import Problem from '@/components/casestudysections/Problem'
import Solution from '@/components/casestudysections/Solution'
import PaperResearch from '@/components/casestudysections/PaperResearch'

const CaseStudy1 = () => {
    return (
        <div>
            <Cover image={samplebanner} />
            <div className='px-10 sm:px-16 lg:px-20'>
                <h1 className="text-5xl font-bold my-5 font-monsterrat">CaseStudy1 page title</h1>
                <ul className="list-disc list-inside font-light font-roboto ml-7">
                    <li>Timeline: January - March 2024</li>
                </ul>
            </div>

            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />

            <div>
                <IntroContext
                    title="Context"
                    paragraph="The logistics industry, a key player in the global economy, is navigating a post-COVID-19 world filled with challenges and opportunities, including trade tensions, supply chain shifts, tech innovations, sustainability, and talent gaps. This case study focuses on how trucking managers can use digital solutions to enhance booking management and client outreach, contributing to economic growth and decent work."
                />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <div>
                <Problem
                    title="Problem"
                    headline="Reaching Clients, Managing Chaos: Challenges Facing Today's Trucking Managers"
                    statement="In what ways can we support trucking managers to reach their clients and manage their bookings more effectively and efficiently?"
                />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <div>
                <Solution
                    title="Solution"
                    headline="Connect. Manage. Deliver."
                    statement="The solution was to create a web application as that bridges the gap between clients and trucking managers. Clients easily discover and connect with qualified managers through the app's searchable database. Streamlined booking, real-time tracking, and secure document sharing optimize operations and communication. This user-friendly platform empowers managers, attracts new clients, and fosters economic growth within the trucking scene of the logistics industry."
                    methods="White Paper Research, Competitive Analysis, User Interviews, Personas, Empathy Maps, and Ideation Maps"
                />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <div className="flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20">
                
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Researching the Problem
                </span>

                <PaperResearch
                    headline="White Paper Research"
                    statement="Starting with white paper research, The group started their study with an extensive review of research articles and works on efficiency, trucking, and related economic impacts."
                />
                <p className='text-left mt-2 font-roboto font-light text-lg'>
                    In a study conducted by the{' '} 
                    <a className="text-blue-500 underline" href="https://hcommons.org/deposits/objects/hc:61486/datastreams/CONTENT/content" target="_blank" rel="noopener noreferrer">
                        Ignatian International Journal for Multidisciplinary Research
                    </a>:
                </p>
                <p className='text-2xl mx-4 my-4'>
                    "A strong positive correlation (r = .755, p &lt; .001) is found, highlighting the connection between <strong>improved operational efficiency</strong> and <strong>higher levels of customer satisfaction.</strong> Strategies such as technology integration and reliable delivery are recommended."
                </p>


            </div>
        </div>
    )
}

export default CaseStudy1;
