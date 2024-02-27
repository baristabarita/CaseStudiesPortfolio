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
import SynthesizeResearch from '@/components/casestudysections/SynthRes'
import Ideation from '@/components/casestudysections/Ideation'

import logo1 from '../assets/icons/thumbtack.jpeg'
import logo2 from '../assets/icons/magaya.png'
import logo3 from '../assets/icons/elementum.png'
import persona1 from '../assets/images/CS2P1.png'
import persona2 from '../assets/images/CS2P2.jpg'
import emmap1 from '../assets/images/CS2EM1.jpg'
import emmap2 from '../assets/images/CS2EM2.jpg'
import ideamap1 from '../assets/images/CS2IM1.jpg'
import ideamap2 from '../assets/images/CS2IM2.jpg'
import ideamap3 from '../assets/images/CS2IM3.jpg'
import ideamap4 from '../assets/images/CS2IM4.jpg'

const CaseStudy2 = () => {
    const competitors = [
        { img: logo1, name: 'Thumbtack', link: 'https://www.thumbtack.com/' },
        { img: logo2, name: 'Magaya Supply Chain', link: 'https://www.magaya.com/magaya-supply-chain/' },
        { img: logo3, name: 'Elementum', link: 'https://www.elementum.com/' },
    ];
    const sections = [
        {
            title: "Target Audience",
            items: [
                { title: "All three competitors", description: " had their targets on clients in need of services and providers." },
            ]
        },

        {
            title: "Platform and Key Features",
            items: [
                { title: "Thumbtack", description: "Offers seamless transactions through messaging, booking, and payment processing." },
                { title: "Magaya Supply Chain", description: "Automates data entry and record-keeping, accelerates shipping speeds and streamlines processes." },
                { title: "Elementum", description: " Features AI/machine learning and automated business processes and cloud-based software for enterprise service management." }
            ]
        },

        {
            title: "System Approach to the Real World",
            items: [
                { title: "Thumbtack", description: "Aims to bridge gaps between businesses and clients." },
                { title: "Magaya Supply Chain", description: "Focuses on creating a seamless experience for supply chain workers and customers and optimizing productivity." },
                { title: "Elementum", description: "Manages areas like human resources, risk management, information technology, finance, administration and supply chain." }
            ]
        },
    ];
    const questions = [
        "What are the biggest challenges you face in managing your logistics needs?",
        "How do you currently find and book logistics service providers?",
        "What information do you find most important when selecting a logistics provider? (e.g., price, reliability, track record, specific capabilities)",
    ];
    const demographics = [
        "Own a logistics company",
        "Contains some level of experience in the logistics",
        "Holds a certain level of education",
        "Age Group of 30+ ",
        "Utilizes technology to a certain extent.",
    ];
    const insights = [
        "Most of the interviewees stated that they had faced challenges in coordinating and tracking shipments, especially when dealing with international logistics. Moreover, one  interviewee stated that ensuring timely delivery and dealing with unexpected delays can be a significant challenge.",
        "All of the interviewees stated that they rely on referrals and personal networks to find logistics service providers. These methods include the use of traditional methods like phone calls and emails for booking.",
        'The factors in selecting a service provider varied from each interviewee. One stated that price  and rate were often a major factor. Others specified certain capabilities, such as handling of special goods or offering services in particular regions, can also be crucial. Moreover, Other important factors include customer service, transparency in pricing and operations, and the provider’s reputation within the industry.',
    ]
    return (
        <div>
            <Cover image={samplebanner} />
            <div className='px-10 sm:px-16 lg:px-20'>
                <h1 className="text-5xl font-bold my-5 font-monsterrat">CaseStudy2 page title</h1>
                <ul className="list-disc list-inside font-light font-roboto ml-7">
                    <li>Timeline: January - March 2024</li>
                </ul>
            </div>

            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />

            <div>
                <IntroContext
                    title="Context"
                    paragraph="This case study explores innovative strategies aimed at enhancing efficiency, transparency, and cost-effectiveness in the logistics industry. It addresses the complexities of managing bookings, negotiating rates, and ensuring timely delivery in a sector that relies on a wide range of service providers. The goal is to streamline these processes, modernizing the logistics ecosystem for a stronger, more interconnected global marketplace."
                />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <div>
                <Problem
                    title="Problem"
                    headline="Navigating a Maze: Limited Visibility into Service Provider Availability and Capacity"
                    statement="How can we increase transparency and visibility into available logistics service providers, including their real-time capacity and historical reliability data, to make informed booking decisions?"
                />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <div>
                <Solution
                    title="Solution"
                    headline="Finding the Right Fit."
                    statement="The solution was to create a web-application that allows clients to search, compare, and book service providers for their logistics needs. The web-application uses a smart matching algorithm that considers factors such as location, availability, capacity, price, and ratings to suggest the best options for each client. The web-application also provides real-time tracking, feedback, and communication features to ensure smooth and timely delivery. By using the web-application, clients can save time and money, while also accessing a wider and more reliable network of service providers. The web-application also benefits service providers by increasing their visibility and customer base, as well as providing them with valuable insights and analytics to improve their performance and efficiency."
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
                    statement="Through conducting white paper research, The group started to draw from research articles and works on logistics, service providers, and client satisfaction."
                />
                <p className='text-left mt-2 font-roboto font-light text-lg'>
                    In a study conducted by the{' '}
                    <a className="text-blue-500 underline" href="http://ieomsociety.org/proceedings/2021indonesia/547.pdf" target="_blank" rel="noopener noreferrer">
                        School of Industrial Engineering and Engineering Management
                    </a>, it further stated that:
                </p>
                <p className='text-2xl mx-20 my-4'>
                    “Another pain point is miscommunication, where the dispatcher usually gets the documents cleared either late, or gets it done early but doesn’t inform the other relevant parties. This results in being late or delayed in deliveries, and is a wasted effort of resources.”
                </p>

                <CompAnalysis
                    headline="Competitive Analysis Research"
                    statement="Once the research team had clearly defined the problem, they started an extensive phase of competitive analysis. This phase was meant to utilize existing apps that were designed to support customers in reaching out to service providers. With that in mind, the group selected 3 competitors:"
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
                    subheadline="Building on the insights already gathered and in preparation for the synthesis research, the team set up interviews with potential users. The following elements were used by the team to steer the process."
                    title="Research Method"
                    description="Research Questionnaire - Physical one-on-one interviews were conducted to gather in-depth insights and understand the unique perspectives of each target user. Below are the questions used in the interview"
                    questions={questions}
                    demographics={demographics}
                    title2="Insights"
                    desc2="Through in-depth interviews, the group had gained a clear understanding of users' needs and challenges by compiling and analyzing all the gathered information. Below is a list proving key insights from the interviews:"
                    insights={insights}
                />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <div className='flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20'>
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Synthesize Research
                </span>
                <SynthesizeResearch
                    headline="Personas"
                    statement="After interviewing potential target users, the group learned a lot about their backgrounds, needs, wants, and difficulties. They then used this information to create simplified profiles, called personas, on a MIRO board to better understand the users of the system."
                    images={[
                        { src: persona1, caption: 'Persona 1: Eduard Martinez' },
                        { src: persona2, caption: 'Persona 2: Antonio Lopez' },

                    ]}
                    head2="Empathy Maps"
                    state2="After creating the personas, the team made empathy maps for each one while utilizing the same MIRO board. An empathy map is a visual tool used to understand users better, including their feelings, thoughts, actions, problems, and goals. Everyone in the group added their insights to each part of every empathy map. This group effort made sure that each empathy map gave a full and balanced view of the persona it represented."
                    empmaps={[
                        { src: emmap1, caption: 'Empathy Map for Eduard Martinez' },
                        { src: emmap2, caption: 'Empathy Map for Antonio Lopez' },

                    ]}
                />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <section className='flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20'>
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Ideation
                </span>
                
                 
                <Ideation 
                    headline="Beyond Brainstorming: Unveiling the Power of Ideation Maps"
                    statement="Creating a user-friendly and engaging ideation map interface with the sole focus to enhance app/site experience can help people achieve their goals not only easily but also be enjoyable. However, such a map should be clear and intuitive to help others navigate and interact through the planning session. It should also be useful and relevant so that others can find the value and benefit of utilizing the map in future project makings. With this in mind, the group created 4 ideation maps: brainstorming, fishbone, scamper, and user journey"
                    ideations = {
                        [
                            {name:'Brainstorming Map', src: ideamap1, caption: 'A group used a brainstorming map to choose a focus for their logistics system. Recognizing the industrys vastness and the need for a specific area, they identified various sectors and their merits. Ultimately, they chose the trucking sector due to its critical role in national trade, its potential for innovation in the supply chain, and a members family connection to the industry, which would aid user testing and business process consultations. The brainstorming map facilitated generating, organizing, evaluating, and selecting the most suitable sector, ensuring alignment with the systems objectives and limitations.'},
                            {name:'Fishbone Diagram', src: ideamap2, caption: 'To address the complexities of the diverse logistics industry, the group used fishbone diagrams to identify and prioritize pressing issues. By brainstorming sub-problems and potential causes, the group pinpointed recurring issues like communication gaps, outdated operations, and limited access to information. This process facilitated a structured approach to problem-solving, revealing the most prevalent challenges the system could potentially address.'},
                            {name:'S.C.A.M.P.E.R', src: ideamap3, caption: 'The group employed SCAMPER maps to generate creative solutions for their system, Building on their problem-identification phase, they used the seven SCAMPER lenses (Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse) to explore various angles and envision the system’s functionality. By delving beyond problem-solving, the group fostered collaboration, explored diverse user perspectives, and unearthed unexpected opportunities, resulting in a rich pool of ideas to address initial challenges and unlock potential for further improvement.'},
                            {name:'User Journey Map', src: ideamap4, caption: 'Building on their understanding of the trucking sector and its complexities, the group lastly utilized a user journey map to delve deeper into the user experience. This visual tool allowed them to map out the different stages that truck drivers typically navigate, from pre-trip planning to post-delivery procedures. By pinpointing key touchpoints and potential pain points at each stage, the group gained valuable insights into user needs and frustrations. This comprehensive user journey map served as a crucial foundation for crafting a system that effectively addresses the challenges faced by truck drivers, ultimately enhancing their overall experience.'},
                            
                        ]
                    }
                />
                
            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
        </div>
    )
}

export default CaseStudy2;
