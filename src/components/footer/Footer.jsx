import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer className='flex flex-col text-sm drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] p-5 justify-between text-center bg-[#131313]'>
            <p className="m-auto text-center text-gray-500">© {currentYear} DP Group 5</p>
            <p className='m-auto text-center text-gray-500'> Made by | Shane Louis Barita, Nichole Vine Alburo, Ralph Miguel Mandigma, Jasper Lee Marbella</p>
        </footer>
    )
}

export default Footer;