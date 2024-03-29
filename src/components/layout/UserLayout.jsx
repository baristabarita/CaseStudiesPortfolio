import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const UserLayout = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='animate-fade-up'>
                <div className='w-full mt-[5em]'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default UserLayout;