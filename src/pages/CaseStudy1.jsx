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
import Prototypes from '@/components/casestudysections/Prototypes'

import coverimg from '../assets/images/case1cover.png'
import logo1 from '../assets/icons/shippabo.png'
import logo2 from '../assets/icons/transfix.png'
import logo3 from '../assets/icons/freightpop.png'
import persona1 from '../assets/images/CS1P1.jpg'
import persona2 from '../assets/images/CS1P2.jpg'
import persona3 from '../assets/images/CS1P3.jpg'
import emmap1 from '../assets/images/CS1EM1.jpg'
import emmap2 from '../assets/images/CS1EM2.jpg'
import emmap3 from '../assets/images/CS1EM3.jpg'
import ideamap1 from '../assets/images/CS1IM1.jpg'
import ideamap2 from '../assets/images/CS1IM2.jpg'
import ideamap3 from '../assets/images/CS1IM3.jpg'
import ideamap4 from '../assets/images/CS1IM4.jpg'
import wireframes from '../assets/images/case1devices.png'
import lofiwireframe from '../assets/images/C1LOFI.png'
import hifiwireframe from '../assets/images/C1HIFI.png'


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
    const features = [
        {
            title: "Landing / Home Screen",
            items: [
                { description: "Application Logo at the top " },
                { description: "Navigation bar with options such as “Home”, “About”, ”Features”, and “Contact”. " },
                { description: "Buttons that navigate the user to the login page." }
            ]
        },
        {
            title: "Login / Registration Screens",
            items: [
                { description: "Login screen allows the user to input their email and password." },
                { description: "Registration screen allows the user to create an account." },
                { description: "Allows for the user to navigate between login and registration screens depending on the status (registered or not)." }
            ]
        },
        {
            title: "Dashboard Screen",
            items: [
                { description: "Logo at the top" },
                { description: "Analytical statistics and graphs on certain aspects." },
                { description: "Tables to provide the user a small overview of bookings and assets" },
                { description: "Sidebar with options such as “Bookings”, “Assets”, “Payments”, and “Settings”." },
                { description: "Actionable sidebar button that expounds or minimizes the sidebar" },
                { description: "Logout Button" }
            ]
        },
        {
            title: "Bookings Screen",
            items: [
                { description: "Full table list of bookings added by the user with data such as Client Name, Booking Date, Status, etc." },
                { description: "Add Booking Button." },
                { description: "Can view selected booking details." },
                { description: "Pagination in the case of multiple booking rows." },
                { description: "Filter/Sorting settings" }
            ]
        },
        {
            title: "Assets Screen",
            items: [
                { description: "Full table list of assets added by the user with data such as Asset Type, Plate Number, Status, etc." },
                { description: "Add Asset Button" },
                { description: "Can view selected asset details." },
                { description: "Tables are split between asset types." },
                { description: "Pagination for each table." },
            ]
        },
        {
            title: "Payments Screen",
            items: [
                { description: "Full table list of payments added by the user with data such as Client Name, Remaining Balance, Status, etc." },
                { description: "Set Charges Button for the user to edit on their rates of their respective business." },
                { description: "Can view selected payments details" },
                { description: "Sales Analysis graph to provide the user more insight." },
                { description: "Pagination in the case of multiple payment rows." },
            ]
        },
        {
            title: "Settings Screen",
            items: [
                { description: "Has 2 sections, Profile Settings and Security Settings." },
                { description: "Profile Settings allows the user to view and edit details such as their name, company name, address, and other details." },
                { description: "Security Settings for changing passwords and account verification." },
            ]
        },
    ]
    const storyboards = [
        {
            title: "Landing / Home Page",
            narratives: [
                { description: "Arianne goes to GreenTucker’s website on her computer. She sees the website’s page and sees options in the navigation bar like “About Us,” ”Features,” ”Contact,” and ”Login.”" },
            ]
        },
        {
            title: "Sign-up Page",
            narratives: [
                { description: "Arianne creates her account by inputting the necessary information needed to make an account. She also sees another option, “Log in,” at the bottom of her screen." },
            ]
        },
        {
            title: "Sign-in Page",
            narratives: [
                { description: "Arianne inputs her registered email address and password to sign in. She also sees another option “Register Here” at the bottom of her screen." },
            ]
        },
        {
            title: "Dashboard Page",
            narratives: [
                { description: "Arianne could see important information on the dashboard page. She sees her total number of bookings, pending payments, assets en route, and clients this month. She also approves and declines bookings from her clients and sees the status of her current assets." },
            ]
        },
        {
            title: "Bookings Page",
            narratives: [
                { description: "Arianne sees all the bookings she made with a client. She sees the status of each booking and the options to “View“, “Edit“, and “Delete” bookings." },
            ]
        },
        {
            title: "View Booking Details Page",
            narratives: [
                { description: "Arianne sees the overview information regarding the booking details, client details, and container and item details. She also sees the details of what truck and trailer were used and their respective information, as well as the documents that were submitted." },
            ]
        },
        {
            title: "Ongoing Bookings Page",
            narratives: [
                { description: "Arianne sees the details of the ongoing booking she has with a client. She sees the primary details of the booking as well as the information about her client. She also sees the assigned assets that were used, the documents that were submitted, and the details of the container and item. Arianne also sees other options like “Set Details” and “Confirm Completion.”" },
            ]
        },
        {
            title: "Assets Page",
            narratives: [
                { description: "Arianne could see her truck and trailer assets and their respective information and status. Arianne adds a new truck and inputted information involving the truck. Arianne also sees other options like “Edit” and “Delete”." },
            ]
        },
        {
            title: "Payments Page",
            narratives: [
                { description: "Arianne sees the basic information she has about her clients and their payment status in her invoice." },
            ]
        },
        {
            title: "View Payment Details Page",
            narratives: [
                { description: "Arianne sees more detailed payment information she made with a client." },
            ]
        },
        {
            title: "Profile / Settings Page",
            narratives: [
                { description: "Arianne views her account information. She has the option to view the general information or the security related information.. " },
            ]
        },
        {
            title: "Edit Profile / Security Pages",
            narratives: [
                { description: "Arianne edits her account information to reflect changes in her company and changes her password for better security." },
            ]
        },
    ]
    return (
        <div>
            <Cover image={coverimg} />
            <div className='px-10 sm:px-16 lg:px-20'>
                <h1 className="text-5xl font-bold my-5 font-monsterrat">Case Study: GreenTrucker</h1>
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
            <Competitors competitors={competitors} />
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
            <section className='flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20'>
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Synthesize Research
                </span>
                <SynthesizeResearch
                    headline="Personas"
                    statement="Given the results and insights of the interviewees, the group received a lot of data on user backgrounds, opinions, needs, and frustrations. To synthesize the research, the group created personas on a MIRO board based on the observations and analysis of the data."
                    images={[
                        { src: persona1, caption: 'Persona 1: Arianne Bautista' },
                        { src: persona2, caption: 'Persona 2: Manuel Sanchez' },
                        { src: persona3, caption: 'Persona 3: Jose Miole' },

                    ]}
                    head2="Empathy Maps"
                    state2="Following the personas, the group came up with empathy maps on the same MIRO board for each of the personas. An empathy map is a graphic method that is used in user-centered design thinking methods to better comprehend users, such as their feelings, thoughts, behaviors, pain points, and goals. Each group member contributed to each of the quadrants for each empathy map. This collaborative effort ensured that each empathy map represented a comprehensive and well-rounded understanding of the corresponding persona."
                    empmaps={[
                        { src: emmap1, caption: 'Empathy Map for Arianne Bautista' },
                        { src: emmap2, caption: 'Empathy Map for Manuel Sanchez' },
                        { src: emmap3, caption: 'Empathy Map for Jose Miole' },
                    ]}
                />
            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <section className='flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20'>
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Ideation
                </span>


                <Ideation
                    headline="Beyond Brainstorming: Unveiling the Power of Ideation Maps"
                    statement="Creating a user-friendly and engaging ideation map interface with the sole focus to enhance app/site experience can help people achieve their goals not only easily but also be enjoyable. However, such a map should be clear and intuitive to help others navigate and interact through the planning session. It should also be useful and relevant so that others can find the value and benefit of utilizing the map in future project makings. With this in mind, the group created 4 ideation maps: brainstorming, fishbone, scamper, and user journey"
                    ideations={
                        [
                            { name: 'Brainstorming Map', src: ideamap1, caption: 'The group used a brainstorming map to identify a specific sector within the logistics industry for their system, given its broad scope and significant role in the global economy. After considering various sectors, the group decided to focus on the trucking sector due to its crucial role in national trade and commerce, its potential for innovation in the supply chain, and the existing familiarity of a group member’s parent with the industry. The brainstorming map was instrumental in generating, organizing, evaluating, and prioritizing ideas, ultimately guiding the group to select the best idea that aligns with the system’s vision and scope.' },
                            { name: 'Fishbone Diagram', src: ideamap2, caption: 'The group used fishbone diagrams to identify and address potential problems within the logistics industry. The diagrams helped highlight prevalent issues such as operational difficulties in businesses and challenges in client-business partner connections. Some of the main causes identified include lack of communication, outdated operational methods, and inadequate access to client databases. The fishbone diagrams facilitated a structured problem-solving process, enabling the group to visualize the relationships between the problems and their causes.' },
                            { name: 'S.C.A.M.P.E.R', src: ideamap3, caption: 'The group utilized SCAMPER maps to generate solutions for their system, The SCAMPER method allowed the group to explore different aspects of the processes based on the system in mind. Ideas were generated under each of the seven lenses - Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, and Reverse. The group agreed on key ideas such as replacing paper-based booking systems with a digital interface and adapting client feedback mechanisms for service improvements. The SCAMPER session not only addressed initial challenges but also uncovered unforeseen opportunities for improvement, enhancing collaboration and exploring different scenarios and perspectives for the system and its users.' },
                            { name: 'User Journey Map', src: ideamap4, caption: 'For the final phase of the ideation process, the group used a User Journey Map to visualize the experience of a user with the system. The User Journey Map allowed the group to understand the user’s interactions with the system, their needs, perceptions, and pain points. The group mapped out different stages of the user’s journey, from initial contact through the process of engagement and into a long-term relationship. Key insights such as the need for an intuitive interface and efficient communication channels were identified. The User Journey Map facilitated a user-centered approach, enabling the group to design a system that not only solves industry problems but also enhances the user experience.' },

                        ]
                    }
                />

            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <section className='flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20'>
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Wireframes and Wireflow Design
                </span>
                <Prototypes
                    headline="Design Process and Features"
                    subheadline="After undergoing through multiple brainstorming sessions, the group was able to put together a structure for the application's design. The group utilized Figma, a collaborative interface design tool, to create the low-fidelity (lo-fi) and high-fidelity (hi-fi) wireframes for the application. These wireframes are the blueprint of the application that provide a visual guide representing the skeletal framework of the application."
                    image = {wireframes}
                    features = {features}
                    head2 = "StoryBoards"
                    subhead2 = "To provide a better user experience, the group utilized storyboards in laying down the user flow of the application. This approach ensured a user-centric design, allowing the team to anticipate user needs and optimize the application's structure and functionality accordingly. The group created 3 storyboards: a narrative version utilizing one of the user personas and two non-narrative versions utilizing lo-fi and hi-fi wireframes created."
                    persona = " Arianne Bautista"
                    storyboards = {storyboards}
                    lofiwireframe={lofiwireframe}
                    hifiwireframe={hifiwireframe}
                />
            </section>
        </div>
    )
}

export default CaseStudy1;
