import React from 'react'
import { Separator } from "@/components/ui/separator"
import Cover from '../components/casestudysections/Cover'
import IntroContext from '../components/casestudysections/IntroContext'
import samplebanner from '../assets/samplebanner.png'
import Problem from '@/components/casestudysections/Problem'
import Solution from '@/components/casestudysections/Solution'
import PaperResearch from '@/components/casestudysections/PaperResearch'
import CompAnalysis from '@/components/casestudysections/CompAnalysis'
import Competitors from '@/components/casestudysections/Competitors'
import CaseList from '@/components/casestudysections/CaseList'
import UserResearch from '@/components/casestudysections/UserResearch'

import logo1 from '../assets/icons/shippabo.png'
import logo2 from '../assets/icons/transfix.png'
import logo3 from '../assets/icons/freightpop.png'

const CaseStudy1 = () => {
    const competitors = [
        { img: logo1, name: 'Shippabo', link: 'https://www.shippabo.com/' },
        { img: logo2, name: 'Transfix', link: 'https://transfix.io/' },
        { img: logo3, name: 'FreightPOP', link: 'https://www.freightpop.com/' },
    ];
    const sections = [
        {
            title: "Target Audience",
            items: [
                { title: "All three competitors", description: "generally targets logistics industry related professionals." },
                { title: "Transfix", description: "targets professionals on both sides of the shipping transaction - carriers offering services and shippers needing goods transported." },
                { title: "FreightPOP", description: "focuses on a narrower audience within the freight industry, specifically those directly involved in transporting goods like freight forwarders and brokers." }
            ]
        },

        {
            title: "Platform and Key Features",
            items: [
                { title: "Shippabo", description: "Provides real-time visibility on shipments down to the product SKU. Additionally, it features automated email notifications and scheduled and customizable shipment reports." },
                { title: "Transfix", description: "offers Live Shipment Tracking and real-time spend, volume, service levels, carbon emissions, and carrier performance metrics." },
                { title: "FreightPOP", description: "offers hourly status updates for shipments, from pickup, to port, to the actual ocean location by latitude and longitude." }
            ]
        },

        {
            title: "System Approach to the Real World",
            items: [
                { title: "Shippabo", description: "Offers a centralized platform for managing shipments in the logistics industry." },
                { title: "Transfix", description: "Connects shippers and carriers through real-time, many-to-many freight matching to optimize supply chains and be more environmentally responsible." },
                { title: "FreightPOP", description: "Aims to simplify operations for manufacturers to retailers and provides proactive logistics planning." }
            ]
        },
    ];
    const questions = [
        "What are the biggest challenges you face in managing your trucking operations?",
        "How do you currently handle booking and dispatching of trucks?",
        "What tools or software do you use to manage your fleet and bookings?",
        "How much time do you typically spend on administrative tasks like booking and scheduling?",
        "What are your current methods for finding new clients and managing existing ones?"
    ];
    const demographics = [
        "Own a trucking company",
        "Contains some level of experience in the logistics",
        "Holds a certain level of education",
        "Age Group of 30+ ",
        "Utilizes technology to a certain extent.",
    ];
    const insights = [
        " The interviewees expressed that coordinating schedules and routes was challenging. This was also accompanied by dealing with unexpected changes or delays midway through bookings",
        "All interviewees stated that they utilized traditional methods such as phone calls, texts or emails for booking and dispatching",
        'Most interviewees stated that they do not utilize any form of software in managing bookings. One interviewee stated that they only use an online GPS site to track their trucks.',
        "The time spent varies, but all interviewees generally reported spending a significant portion of their day on administrative tasks, including booking, scheduling, and paperwork.",
        "Most interviewees stated that they relied on word-of-mouth referrals and networking from fellow colleagues in finding clients. For managing existing clients, regular communication was utilized such as online chatting or phone calls.",

    ]
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
                <p className='text-2xl mx-20 my-4'>
                    "A strong positive correlation (r = .755, p &lt; .001) is found, highlighting the connection between <strong>improved operational efficiency</strong> and <strong>higher levels of customer satisfaction.</strong> Strategies such as technology integration and reliable delivery are recommended."
                </p>

                <CompAnalysis
                    headline="Competitive Analysis Research"
                    statement="After pinpointing the problem they needed to address, the research team began a thorough phase of competitive analysis. This phase was designed to use existing applications or systems that address the needs of managers and contribute to improved work efficiency. As a result, the group selected three competitors to focus on:"
                    comp1="Shippabo"
                    comp2="Transfix"
                    comp3="FreightPOP"
                />
            </div>
            <Competitors competitors={competitors}/>
            <div className="flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20">
                <p className='text-left font-roboto font-light text-lg'>These three were then evaluated based on relevant similarities:</p>
                <CaseList sections={sections} />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <div className="flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20">
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Understanding the Users
                </span>
                <UserResearch
                    headline="User Research"
                    subheadline="After gaining valuable insights from previous research, the group decided to conduct interviews with potential users to further understand their needs. To prepare for these interviews, they developed a set of guidelines to ensure a smooth and informative process."
                    title="Research Method"
                    description="Research Questionnaire - Physical one-on-one interviews were conducted to gather in-depth insights and understand the unique perspectives of each target user. Below are the questions used in the interview"
                    questions={questions}
                    demographics={demographics}
                    title2="Insights"
                    desc2="After conducting user interviews, the group gathered all the relevant information to gain a comprehensive understanding of the users’ needs and challenges. Below is a list of all the insights summarized."
                    insights={insights}
                />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <div>
                Section
            </div>
        </div>
    )
}

export default CaseStudy1;
