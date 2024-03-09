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

import coverimg from '../assets/images/case2cover.png'
import logo1 from '../assets/icons/magestore.jpg'
import logo2 from '../assets/icons/shopify.jpg'
import logo3 from '../assets/icons/lightspeed.png'
import persona1 from '../assets/images/CS2P1.png'
import persona2 from '../assets/images/CS2P2.jpg'
import emmap1 from '../assets/images/CS2EM1.jpg'
import emmap2 from '../assets/images/CS2EM2.jpg'
import ideamap1 from '../assets/images/CS2IM1.jpg'
import ideamap2 from '../assets/images/CS2IM2.jpg'
import ideamap3 from '../assets/images/CS2IM3.jpg'
import ideamap4 from '../assets/images/CS2IM4.jpg'
import moodboard from '../assets/images/case2moodboard.png'
import wireframes from '../assets/images/case2devices.png'
import lofiwireframe from '../assets/images/CS2LOFI.png'
import hifiwireframe from '../assets/images/CS2HIFI.png'

const CaseStudy2 = () => {
    const competitors = [
        { img: logo1, name: 'MageStore', link: 'https://www.magestore.com/' },
        { img: logo2, name: 'Shopify', link: 'https://www.shopify.com/' },
        { img: logo3, name: 'LightSpeed', link: 'https://www.lightspeedhq.com/' },
    ];
    const sections = [
        {
            title: "Target Audience",
            items: [
                { title: "All three competitors", description: " had their targets on business retailers and suppliers." },
            ]
        },

        {
            title: "Key Features and Platform",
            items: [
                { title: "MageStore", description: "Allows users to Synchronize, Update, and Control all data on SKUs, stock levels, sales performance, customer service, loyalty program and promotion, and employee management in real time." },
                { title: "Shopify", description: "Allows for easy payment solutions, integrations, and effective operational management, such as product tracking, store management, and performance analytics." },
                { title: "LightSpeed", description: "Real-time low stock alerts to inform you of the reorder points, rack SKUs and stock levels across locations and channels, Create custom reports to analyze certain product categories and customers, etc." }
            ]
        },

        {
            title: "System Approach to the Real World",
            items: [
                { title: "MageStore", description: "Aims to connect all sales and inventory channels seamlessly with easy access." },
                { title: "Shopify", description: "Aims to help entrepreneurs bring their products online and boost sales regardless of location." },
                { title: "LightSpeed", description: "Aims to help businesses monitor their inventory and sales with integration between in-person and online orders." }
            ]
        },
    ];
    const questions = [
        "What are the biggest challenges you face in managing your inventory?",
        "How do you currently track and manage your inventory?",
        "What features do you find most important when selecting an inventory management system? (e.g., real-time tracking, ease of use, integration with other systems)",
    ];
    const demographics = [
        "Owns a retail or supply company",
        "Has some level of experience in inventory management",
        "Holds a certain level of education",
        "Age Group of 30+ ",
        "Utilizes technology to a certain extent.",
    ];
    const insights = [
        "Most of the interviewees stated that they had faced challenges in tracking inventory levels, especially when dealing with multiple suppliers. Moreover, one interviewee stated that ensuring timely restocking and dealing with unexpected shortages can be a significant challenge.",
        "All of the interviewees stated that they rely on various methods to manage their inventory. These methods include the use of traditional methods like spreadsheets and specific inventory management software.",
        'The factors in selecting an inventory management system varied from each interviewee. One stated that real-time tracking and ease of use were often major factors. Others specified certain capabilities, such as integration with other systems or specific reporting features, can also be crucial. Moreover, other important factors include customer service, transparency in pricing and operations, and the software’s reputation within the industry.',
    ]
    const features = [
        {
            title: "Landing / Home Screen",
            items: [
                { description: "Application Logo at the top " },
                { description: "Navigation bar with options such as “Home”, “About”, and “Features” and ”Contact Us”. " },
                { description: "Login Button to navigate the user to the login page." },
                { description: "Register / Register Now Button to navigate the user to the registration page." },
                { description: "Promotional section containing the features of the website." },
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
                { description: "Table to provide the user an overview of the list of products." },
                { description: "Sidebar with options such as “Profile”, “Products”, “Add Products”, “Sales”, and “Recent Logs”" },
                { description: "Actionable sidebar hamburger button that expounds or minimizes the sidebar" },
                { description: "Logout Button" }
            ]
        },
        {
            title: "Products Screens",
            items: [
                { description: "Full table list of products added by the user with data such as Product Name, Category, Quantity, etc." },
                { description: "“Add New Product” button to navigate the user to the add product page." },
                { description: "“View Product” button to display the full details of the selected product." },
                { description: "“Edit Product” button to navigate the user to the edit product page." },
                { description: "“Delete” button to delete the selected product." },
                { description: "Pagination in the case of multiple booking rows." },
                { description: "Filter/Sorting settings." },
            ]
        },
        {
            title: "Sales Screen",
            items: [
                { description: "Graphical Information on Product Sales." },
                { description: "Displays Information on Products Added per Month." },
                { description: "Tabular overview of Top Selling Products." }
            ]
        },
    ]
    const addscreens = [
        {
            title: "View Products Screen",
            items: [
                { description: "Able to view full details of the selected product such as Availability, Category, Price, etc." },
                { description: "Able to view a photo of the selected product." },
                { description: "Edit Product button to navigate to the edit product page (exclusive to Manager Users)." },
            ]
        },
        {
            title: "Add Products Screen",
            items: [
                { description: "Exclusive to Manager Users." },
                { description: "Able to input full details of the selected product such as Product Name, Category, Price, etc." },
                { description: "Able to upload a photo (or photos) of the product." },
                { description: "Confirm New Product button to add the new product to the database." },

            ]
        },
        {
            title: "Place Order Modal",
            items: [
                { description: "Allows the user to place a product order." },
                { description: "Able to select the Product Category." },
                { description: "Displays information such as Item Names and Item Stocks depending on the selected Product Category." },
                { description: "Able to input the number of quantities to be sold for a specific item(s)." },
                { description: "Confirm button to place the order." },
            ]
        },
        {
            title: "Recent Logs Screen",
            items: [
                { description: "Exclusive to Manager-type users" },
                { description: "Full table list of orders added by the user or fellow employees of the store with data such as Ref. ID, Product Name, Amount, etc." },
                { description: "Pagination in the case of multiple booking rows." },
                { description: "Filter/Sorting settings." },
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
            title: "Activity Logs Screen (Admin Side)",
            items: [
                { description: "Displays all detailed information of all activities perfomed in the website." },
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
                { description: "Eduardo Martinez, a retail store owner, opens the StockSavvy web-application. He navigates through the homepage and reads all the site has to offer." },
            ]
        },
        {
            title: "Login / Registration Screens",
            narratives: [
                { description: "Eduardo decides to register. He clicks on the “Register Now” button and is taken to the registration screen. He fills in his full name, email, password, and confirms his password to create an account." },
            ]
        },
        {
            title: "Dashboard Page",
            narratives: [
                { description: "After registering, Eduardo is directed to the dashboard screen. He sees analytical statistics and graphs related to his store, a table providing an overview of his products. " },
            ]
        },
        {
            title: "Products Page",
            narratives: [
                { description: "Eduardo clicks on “Products” in the sidebar and is taken to the products screen. He sees an empty table list of his products and adds a new product through clicking the “Add New Product” button, kickstarting his journey in the app." },
            ]
        },
        {
            title: "View Products Page",
            narratives: [
                { description: "After some time of adding products, Eduardo decides to view one of his existing products. He goes over the specific row of the products table and clicks on the “View” button where he can now see the details." },
            ]
        },
        {
            title: "Sales Page",
            narratives: [
                { description: "Eduardo navigates to the “Sales” screen from the sidebar. He sees all the graphical information that can be displayed to have a better understanding of how his store is performing." },
            ]
        },
        {
            title: "Recent Logs Page",
            narratives: [
                { description: "As a manager, Eduardo has access to the “Recent Logs” screen where he can view the orders placed so far." },
            ]
        },
        {
            title: "Account Settings Screen",
            narratives: [
                { description: "Eduardo navigates to the “Profile” page from the sidebar. He sees his personal information settings such as full name, email address, and contact number. He edits any of these details and saves the changes." },
            ]
        },
    ]
    return (
        <div>
            <Cover image={coverimg} />
            <div className='px-10 sm:px-16 lg:px-20'>
                <h1 className="text-5xl font-bold my-5 font-monsterrat">Case Study: StockSavvy</h1>
                <ul className="list-disc list-inside font-light font-roboto ml-7">
                    <li>Timeline: January - March 2024</li>
                </ul>
            </div>

            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />

            <div>
                <IntroContext
                    title="Context"
                    paragraph="This case study explores fresh approaches to bridge the gap between inventory needs and efficient management. In today's retail world, success hinges on having the right stock, in the right place, at the right time. Stores rely on a complex web of suppliers and internal processes to maintain optimal inventory levels. Manually tracking stock levels, managing orders, and forecasting demand can be a cumbersome and error-prone task. By streamlining inventory management systems, the goal is to modernize store operations, contributing to increased profitability and a smoother customer experience."
                />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <div>
                <Problem
                    title="Problem"
                    headline="Stuck in the Stockroom Shuffle: Inefficient Inventory Management Methods"
                    statement="How can we bring transparency and visibility into inventory levels, demand forecasts, and supplier information, empowering retailers with informed ordering decisions and efficient stock management?"
                />
            </div>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <div>
                <Solution
                    title="Solution"
                    headline="From Chaos to Clarity."
                    statement="The solution was to create a web-application that transforms your inventory management from a data deluge to a source of decision power. This user-friendly platform acts as a central hub for suppliers and retailers, consolidating all inventory data, including stock levels, sales figures, and supplier information, into one easily accessible place. It provides real-time insights and data visualization, empowering business retailers and suppliers to make informed decisions about ordering, preventing stockouts and overstocking, and ultimately achieving optimal inventory levels for maximum profitability."
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
                            Starting with white paper research, the group went through a brainstorming session to choose one of the 17 Sustainable Development Goals (SDG). Afterwhich, the group chose <a className='text-blue-500 underline' href="https://sdgs.un.org/goals/goal9">SDG 9 - Industry, Infrastructure, Innovation</a> - as it aligns with the group’s aim to contribute to these targets and address the challenges in the trucking industry and its economic implications.
                        </span>
                    }
                    statement2="The group continued to draw from research articles and works on inventory management, problems and challenges of business retailers, and retail store management."
                />
                <p className='text-left mt-2 font-roboto font-light text-lg'>
                    In a study conducted by the{' '}
                    <a className="text-blue-500 underline" href="https://www.researchgate.net/publication/356160030_Effective_Use_of_Retail_Store_Management_System_for_Small_Retail_Store" target="_blank" rel="noopener noreferrer">
                        International Conference on Business and Information
                    </a>, it further stated that:
                </p>
                <p className='text-2xl mx-20 my-4'>
                    “The basic need of a retail owner is to increase profits by maintaining the retail outlets in a systematic manner. This further validates the need for an effective stock management system.”
                </p>

                <CompAnalysis
                    headline="Competitive Analysis Research"
                    statement="Once the research team had clearly defined the problem, they started an extensive phase of competitive analysis. This phase was meant to identify features and functionalities that could be leveraged to empower retailers with a more efficient and streamlined approach to stock control. With that in mind, the group selected 3 competitors:"
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
                    ideations={
                        [
                            { name: 'Brainstorming Map', src: ideamap1, caption: 'The group used a brainstorming map to choose a focus for their logistics system. Recognizing the industrys vastness and the need for a specific area, they identified various sectors and their merits. Ultimately, they chose inventory management for scalability, cost-effectiveness, and increases efficiency by optimizing multiple aspects. By selecting inventory management, selected for its potential to scale up, save costs, and boost efficiency by refining key business processes. The focus now was aimed to transform a complex system into a more efficient and user-friendly model, ultimately contributing to the industry’s progress.' },
                            { name: 'Fishbone Diagram', src: ideamap2, caption: 'To address the problems and challenges in inventory management, the group used fishbone diagrams to identify and prioritize pressing issues. By brainstorming sub-problems and potential causes, the group pinpointed recurring issues like inefficient stocktaking procedures, inadequate data analysis tools, and non-integrated IT systems. This process facilitated a structured approach to problem-solving, revealing the most prevalent challenges the system could potentially address.' },
                            { name: 'SCAMPER Diagram', src: ideamap3, caption: 'The group employed SCAMPER maps to generate creative solutions for their system, Building on their problem-identification phase, they used the seven SCAMPER lenses (Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse) to explore various angles and envision the systems functionality. By delving beyond problem-solving, the group fostered collaboration, explored diverse user perspectives, and unearthed unexpected opportunities, resulting in a rich pool of ideas to address initial challenges and unlock potential for further improvement.' },
                            { name: 'User Journey Map', src: ideamap4, caption: 'Building on their understanding of the inventory management systems and its challenges, the group employed a user journey map to delve deeper into the user experience. This visual tool allowed them to map out the different stages that truck drivers typically navigate, from pre-trip planning to post-delivery procedures. By pinpointing key touchpoints and potential pain points at each stage, the group gained valuable insights into user needs and frustrations. This comprehensive user journey map served as a crucial foundation for crafting a system that effectively addresses the challenges faced by business retailers and suppliers, ultimately enhancing their overall experience.' },

                        ]
                    }
                />

            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <section className='flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20'>
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Wireframes and Wireflow Design
                </span>
                <Wireframes
                    headline="Design Process"
                    subheadline="After undergoing multiple brainstorming sessions, the group was able to put together a design for a web-application called StockSavvy. This web-application aims to assist retail stores in managing their inventory and store system efficiently, solving problems such as the hassle of paper documents, time consumption on inefficient inventory management, and store data security. The brainstorming sessions, done through MIRO, were a platform for the team to share, debate, and refine their ideas, leading to the creation of StockSavvy. This application is designed with features that include real-time inventory tracking, which allows store owners to monitor their stock levels and sales in real time."
                    image={moodboard}
                    headline1_1="Screens and Features"
                    image1_1={wireframes}
                    subheadline1_1="The group utilized Figma, a collaborative interface design tool, to create the wireframes for the application. These wireframes are the blueprint of the application that provide a visual guide representing the skeletal framework of the application. This helped the group to plan the layout and interaction of their application in accordance to user needs."
                    features={features}
                    addscreens={addscreens}
                    head2="StoryBoards"
                    subhead2="To provide a better user experience, the group utilized storyboards in laying down the user flow of the application. This approach ensured a user-centric design, allowing the team to anticipate user needs and optimize the application’s structure and functionality accordingly. The group created 3 storyboards: a narrative version utilizing one of the user personas and two non-narrative versions utilizing the wireframes created."
                    persona=" Eduardo Martinez"
                    storyboards={storyboards}
                    wireframetitle1="Lo-Fi Screens Storyboard"
                    lofiwireframe={lofiwireframe}
                    wireframetitle2="Hi-Fi Screens Storyboard"
                    hifiwireframe={hifiwireframe}
                />
            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <section className='flex flex-col items-start pt-6 px-10 sm:px-16 lg:px-20'>
                <span className='text-1xl font-light font-monsterrat mb-2'>
                    Prototypes
                </span>
                <Prototypes
                headline="Manager Screens Prototype"
                figmasource= "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsfvLwY4Hw23Yv6J3Je0V1Q%2FCASE2-WIREFRAME%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D3-5%26viewport%3D-1891%252C-1576%252C0.25%26t%3D3YSqdYnF1yrSIjiq-1%26scaling%3Dscale-down%26starting-point-node-id%3D3%253A5%26show-proto-sidebar%3D1%26mode%3Ddesign"
                />
                <Prototypes
                headline="Admin Screens Prototype"
                figmasource= "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsfvLwY4Hw23Yv6J3Je0V1Q%2FCASE2-WIREFRAME%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D513-2860%26viewport%3D-1891%252C-1576%252C0.25%26t%3D3YSqdYnF1yrSIjiq-1%26scaling%3Dscale-down%26starting-point-node-id%3D513%253A2860%26show-proto-sidebar%3D1%26mode%3Ddesign"
                />
            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
            <section className='flex flex-col items-center text-center pt-6 px-10 sm:px-16 lg:px-20'>
                <h1 className="text-3xl font-bold font-monsterrat mb-4">
                    Check out our <a className="text-red-400" href="https://www.figma.com/file/sfvLwY4Hw23Yv6J3Je0V1Q/CASE2-WIREFRAME?type=design&node-id=0%3A1&mode=design&t=QSTfpUkVfEG1SwbQ-1">Figma File</a>.
                </h1>

            </section>
            <Separator className="w-[20em] mx-auto md:w-[40em] lg:w-[75em] lg:mx-20 mt-8 bg-black" />
        </div>
    )
}

export default CaseStudy2;

