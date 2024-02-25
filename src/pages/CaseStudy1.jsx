import React from 'react'
import Cover from '../components/casestudysections/Cover'
import samplebanner from '../assets/samplebanner.png'
import IntroContext from '../components/casestudysections/IntroContext'

const CaseStudy1 = () => {
    return(
        <div>
            <Cover image={samplebanner} />
            <div>
            <IntroContext
                title = "Context"
                paragraph = "The logistics industry is a vital component of the global economy, supporting businesses of all sizes across many different sectors. However, the industry also faces many challenges and opportunities in the post-covid-19 world, such as rising trade tensions, changing supply chain dynamics, technological innovations, sustainability issues, and talent gaps. In this case study, we will explore how business managers in the logistics industry, specifically trucking managers, can leverage digital solutions to manage bookings and reach clients more effectively and efficiently, while also contributing to the broader goal of promoting decent work and economic growth for all."
            />
            </div>
        </div>
    )
}

export default CaseStudy1;
