import React from 'react'

const Case1List = () => {

    return (
        <>
            <ol className="list-decimal list-inside font-roboto ml-7">
                <li className='my-3'><strong className='text-2xl'>Target Audience:</strong>
                    <ul className="list-disc list-inside font-light ml-7">
                        <li className='mt-2'>All three competitors generally targets logistics industry related professionals.</li>
                        <li className='mt-2'>Transfix targets professionals on both sides of the shipping transaction - carriers offering services and shippers needing goods transported.</li>
                        <li className='mt-2'>FreightPOP focuses on a narrower audience within the freight industry, specifically those directly involved in transporting goods like freight forwarders and brokers.</li>
                    </ul>
                </li>
                <li className='my-3'><strong className='text-2xl'>Platform and Key Features:</strong>
                    <ul className="list-disc list-inside font-light ml-7">
                        <li className='mt-2'><strong>Shippabo:</strong> Provides real-time visibility on shipments down to the product SKU. Additionally, it features automated email notifications and scheduled and customizable shipment reports.</li>
                        <li className='mt-2'><strong>Transfix:</strong> offers Live Shipment Tracking and real-time spend, volume, service levels, carbon emissions, and carrier performance metrics.</li>
                        <li className='mt-2'><strong>FreightPOP:</strong> offers hourly status updates for shipments, from pickup, to port, to the actual ocean location by latitude and longitude. </li>
                    </ul>
                </li>
                <li className='my-3'><strong className='text-2xl'>System Approach to the Real World:</strong>
                    <ul className="list-disc list-inside font-light ml-7">
                        <li className='mt-2'><strong>Shippabo:</strong>  Offers a centralized platform for managing shipments in the logistics industry.</li>
                        <li className='mt-2'><strong>Transfix:</strong>  Connects shippers and carriers through real-time, many-to-many freight matching to optimize supply chains and be more environmentally responsible.</li>
                        <li className='mt-2'><strong>FreightPOP:</strong> Aims to simplify operations for manufacturers to retailers and provides proactive logistics planning.</li>
                    </ul>
                </li>
            </ol>
        </>
    )
}

export default Case1List;