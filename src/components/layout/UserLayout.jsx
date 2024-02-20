import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const UserLayout = () => {
    return(
        <div>
            <Navbar />
            <h1>layout lol</h1>
            <Outlet />
            <Footer />
        </div>
    )
}

export default UserLayout;