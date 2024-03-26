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
import Wireframes from '@/components/casestudysections/Wireframes'
import Prototypes from '@/components/casestudysections/Prototypes'
import Reflections from '@/components/casestudysections/Reflections'
import Conclusion from '@/components/casestudysections/Conclusion'

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
import moodboard from '../assets/images/case1moodboard.png'
import wireframes from '../assets/images/case1devices.png'
import hifiwireframe1 from '../assets/images/C1HIFI1.png'
import hifiwireframe2 from '../assets/images/C1HIFI2.png'



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
                { description: "Buttons that navigate the user to the login page." },
                { description: "Promotional section containing the features of the website." }
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
            title: "Services Screens",
            items: [
                { description: "List of available trucking services, each displayed in card form." },
                { description: "Each trucking service card displays the Company name, Address, Review Rating, Service Price Rate, etc." },
                { description: "Clicking on the view details button displays the full details of the selected service on a separate page." },
                { description: "Pagination for displaying a specific number of services per page." },
                { description: "Booking Services Screens." },
            ]
        },
        {
            title: "Booking Services Screens",
            items: [
                { description: "Form that allows for the user to input essential details such as Container Details, Item Details,  Est. Finish Date and Location Details." },
                { description: "“Submit” button to proceed to booking confirmation screen" },
                { description: "Clicking on the view details button displays the full details of the selected service on a separate page.Confirmation screen displays all the previously mentioned details as well as the total booking computation." },
                { description: "“Confirm” button to finalize the booking." },
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
                { description: "Add Booking Button to add a new booking to the list." },
                { description: "View Details button to view the information of the selected booking." },
                { description: "Pagination in the case of multiple booking rows." },
                { description: "Filter/Sorting settings" }
            ]
        },
        {
            title: "Assets Screen",
            items: [
                { description: "Full table list of assets added by the user with data such as Asset Type, Plate Number, Status, etc." },
                { description: "Add Asset Button to add a new asset." },
                { description: "Edit Asset button to edit asset information" },
                { description: "Delete Asset button to delete the selected asset." },
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
    ]
    const addscreens = [
        {
            title: "Track Bookings Screens (Client Side)",
            items: [
                { description: "Visual Representation of the booking status (e.g., pending, ongoing, complete)" },
                { description: "Displays Estimated finish time." },
                { description: "Displays Container and Item Information." },
                { description: "Contact Information of the booked service." },
                { description: "Rate Service button to review and rate the selected trucking service." },

            ]
        },
        {
            title: "Ratings Screen (Client Side)",
            items: [
                { description: "Able to select a star rating from 1 to 5" },
                { description: "Textbox for the user to fully explain their rating and experience with the selected service." },
            ]
        },
        {
            title: "View Booking Screen (Manager Side)",
            items: [
                { description: "Displays detailed information on the selected booking such as General Information (e.g., client name, status est. finish date, etc.), Container Details, and Item Details." },
                { description: "Edit Booking button to edit only specific details of the booking (est. finish date and status)." },
                { description: "Add assets button to assign owned assets to the booking." },
                { description: "Delete Booking button to delete the selected button." }

            ]
        },
        {
            title: "Edit Asset Screen (Manager Side)",
            items: [
                { description: "Login screen allows the user to input their email and password.Displays detailed information on the selected asset such as Asset type, Plate Number, Status." },
                { description: "Able to edit the detailed information." },
                { description: "Save Changes button to save the new information." }
            ]
        },
        {
            title: "Verification Requests Screen (Admin Side)",
            items: [
                { description: "Displays detailed information of the accounts that sent verification requests." },
                { description: "View Details button to open the Account Details modal, which will allow the admins to verify the selected account or not." },
            ]
        },
        {
            title: "Account Logs Screen (Admin Side)",
            items: [
                { description: "Displays detailed information of all accounts and users registered in the database." },
                { description: "Displays account statuses of “Active”, “Deactivate”, and “Deleted”." },
                { description: "View details button to show a modal displaying the full details of the user." },
            ]
        },
        {
            title: "Booking Logs Screen (Admin Side)",
            items: [
                { description: "Displays all detailed information of all bookings placed in the website." },
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
    const reflections = [
        {
            items: [
                { title: "Alburo, Nichole", description: "Ensuring our design remains fitted to our chosen Sustainable Development Goal (SDG) introduces a significant challenge into our wireframing process. We studied every design element to ensure its alignment with our objectives. This evaluation encompasses every part of our wireframes, from the selection of color palettes to the careful consideration of typography. It's become evident that achieving a delicate balance between aesthetic appeal and environmental responsibility is not only desirable but essential. Amidst these challenges, I've come to realize that the true essence of design extends beyond mere visual allure; it must also serve as a catalyst for positive change among our target users. Through this ongoing process, I've come to better understand how design and sustainability are closely connected. I've realized how they both play a big role in creating a fairer digital world." },
                { title: "Barita, Shane", description: "As someone who has a passion for web-development, creating wireframes can often be an eye-opening experience. It allows me to really put thought into how to create a good user experience should one ever use my websites. This case study has taught me the importance of empathy in design, reminding me that behind every click or scroll is a user with unique needs and expectations. It has also underscored the significance of iterative design, reinforcing the idea that a good user experience is not a destination, but a continuous journey of learning, adapting, and improving. " },
                { title: "Mandigma, Ralph", description: "What I learned from the case study was that it's never easy to make a prototype due to the group's expectations. We must always change our prototype according to our criteria, make the product doable, and follow the principles of our SDG choices, SDG 8 for this case. The prototype we made could fuel economic growth by attracting new clients and managers, fueling the growth of our project, which is the trucking scene in the logistics industry. " },
                { title: "Marbella, Jasper", description: "As someone who likes to create UI/UX designs, I realized that it really takes a lot of time creating a prototype. Because you have to take into consideration what the client wants, and how to make the user experience good while making sure that the website is sufficient in both functionality and aesthetics. Two things I can get from the case study is that one, creating wireframes is the way to go as it really allows for your creativity to shine. And the second one is that, creating and prototyping is not just about making the website good, but to make sure that it is functional." },
            
            ]
        },
    ]
    return (
        <div>
            <Cover image={coverimg} />
            <div className='px-10 sm:px-16 lg:px-20'>
                <h1 className="text-5xl font-bold my-5 font-monsterrat">[SELECTED] Case Study: GreenTrucker</h1>
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
                    statement1={
                        <span>
                            Starting with white paper research, the group went through a brainstorming session to choose one of the 17 Sustainable Development Goals (SDG). Afterwhich, the group chose <a className='text-blue-500 underline' href="https://www.un.org/sustainabledevelopment/economic-growth/">SDG 8 - Decent Work and Economic Growth</a> - as it aligns with the group’s aim to contribute to these targets and address the challenges in the trucking industry and its economic implications.
                        </span>
                    }
                    statement2="The group continued their study with an extensive review of research articles and works on efficiency, trucking, and related economic impacts."
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
            <section className='flex flex-col items-center text-center pt-6 px-10 sm:px-16 lg:px-20'>
                <h1 className="text-3xl font-bold font-monsterrat mb-4">
                    Check out our <a className="text-red-400" 
                    href="https://miro.com/app/board/uXjVNx3c5Qk=/?share_link_id=155409957930">
                        MIRO Board</a>.
                </h1>

            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <section className='flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20'>
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Wireframes and Wireflow Design
                </span>
                <Wireframes
                    headline="Design Process"
                    subheadline="After undergoing through multiple brainstorming sessions, the group was able to put together a design for a web-application called “GreenTrucker”. This web-application aims to aid trucking managers in increasing their productivity and work efficiency. Additionally, this application also aims to bridge clients with trucking services. The brainstorming sessions, done through MIRO, were a platform for the team to share, debate, and refine their ideas, leading to the creation of “GreenTrucker”. This application is designed with features that could potentially streamline workflow, automate routine tasks, streamline the booking process, provide real-time data and analytics, or facilitate better communication and scheduling."
                    image={moodboard}
                    headline1_1="Screens and Features"
                    image1_1={wireframes}
                    subheadline1_1="The group utilized Figma, a collaborative interface design tool, to create the wireframes for the application. These wireframes are the blueprint of the application that provide a visual guide representing the skeletal framework of the application. This helped the group to plan the layout and interaction of their application in accordance to user needs."
                    features={features}
                    addscreens={addscreens}
                    head2="StoryBoards"
                    subhead2="To provide a better user experience, the group utilized storyboards in laying down the user flow of the application. This approach ensured a user-centric design, allowing the team to anticipate user needs and optimize the application's structure and functionality accordingly. The group created 3 storyboards: a narrative version focusing in the manager side and utilizing one of the user personas, and two non-narrative versions utilizing hi-fi wireframes for both the manager and client side were created."
                    persona=" Arianne Bautista"
                    storyboards={storyboards}
                    wireframetitle1="Manager-Side Screens Storyboard"
                    lofiwireframe={hifiwireframe1}
                    wireframetitle2="Client-Side Screens Storyboard"
                    hifiwireframe={hifiwireframe2}
                />
            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <section className='flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20'>
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Prototypes
                </span>
                <Prototypes
                    headline="Manager & Client Screens Prototype"
                    figmasource="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FO3BWlgelmTIPdIDc70PmRr%2FDESPROJ-WIREFRAMES%3Fpage-id%3D1%253A1566%26type%3Ddesign%26node-id%3D350-9410%26viewport%3D-158%252C359%252C0.25%26t%3Dwmt8SwCA5g0bDisY-1%26scaling%3Dscale-down%26starting-point-node-id%3D350%253A9410%26mode%3Ddesign"
                />
                <Prototypes
                    headline="Admin Screens Prototype"
                    figmasource="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FO3BWlgelmTIPdIDc70PmRr%2FDESPROJ-WIREFRAMES%3Fpage-id%3D1%253A1566%26type%3Ddesign%26node-id%3D350-18428%26viewport%3D290%252C282%252C0.03%26t%3DAzTgETA2r82jXRsz-1%26scaling%3Dscale-down%26starting-point-node-id%3D350%253A18428%26show-proto-sidebar%3D1%26mode%3Ddesign"
                />
            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <section className='flex flex-col items-center text-center pt-6 px-10 sm:px-16 lg:px-20'>
                <h1 className="text-3xl font-bold font-monsterrat mb-4">
                    Check out our <a className="text-red-400" href="https://www.figma.com/file/O3BWlgelmTIPdIDc70PmRr/DESPROJ-WIREFRAMES?type=design&node-id=405%3A19067&mode=design&t=1vaU8bVk6IBIBVzU-1">Figma File</a>.
                </h1>

            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <section className='flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20'>
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Lesson Learned
                </span>
                <Reflections
                    headline="Group's Reflections"
                    subheadline="Every group member presented their findings and learnings from the case study, fostering communication and collaboration. Through sharing our observations, experiences, and insights, we aim to spot common trends, unexpected discoveries, and potential areas for innovation. This reflective process deepens our understanding of user perspectives and cultivates a collective sense of design thinking within the group."
                    reflections={reflections}
                />
            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <section className='flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20'>
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Conclusion
                </span>
                <Conclusion
                    headline="Key Takeaways and Insights"
                    subheadline="In conclusion, this case study allowed the group to explore the development of a web-application that aims to highlight the necessity for sustainable economic growth that fosters decent work and productivity in the trucking industry. Through various design thinking principles, the group gathered key findings such as improved working conditions for trucking managers, and improved efficiency and cost savings for both clients and managers through a streamlined process. Moving forward, this application can be further expanded and strengthened through utilizing data analytics for better optimization, and expanding the platform’s reach to include more users. This case study serves as a testament to the power of design thinking and technology to address complex challenges and create a more sustainable and equitable future for all stakeholders in the trucking industry."
                />
            </section>
        </div>
    )
}

export default CaseStudy1;

