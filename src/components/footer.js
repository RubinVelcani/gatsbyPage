import React from 'react'
import { Link } from 'gatsby'
import MainLogo from '../images/mainLogo.jpg'
import Instagram from '../images/instagramLogo.svg'
import Facebook from '../images/facebookLogo.svg'

const Footer = () => {
    return (
        <footer className="w-full max-w-screen-xl flex flex-col px-5 text-center mx-auto">
            <div className="flex flex-col items-center mt-6 md:mt-10 md:flex md:flex-row md:justify-between md:border-b md:border-gray-300">
                <div className="flex flex-row items-center justify-evenly mb-6 text-gray-700 text-xs md:mb-0">
                    <Link to='/'>
                        <img src={MainLogo} className="w-min mb-2" />
                    </Link>
                </div>
            </div>
            <div className="mb-10 md:mt-6 md:flex md:flex-row-reverse md:items-center md:justify-between">
                <div className="flex flex-row items-center justify-between mb-6 text-gray-700 text-xs md:mb-0">
                    <Link to='/contact'>
                        <h3 className="text-lg p-1 md:mr-10">
                            Contact</h3>
                    </Link>
                    <Link to='https://www.instagram.com'>
                        <img src={Instagram} className="mr-10" />
                    </Link>
                    <Link to='https://www.facebook.com'>
                        <img src={Facebook} className="md:mr-10 " />
                    </Link>
                </div>
                <h3 className="text-gray-700 text-opacity-50 text-xs">&copy; 1998 Mata Embroidery</h3>
            </div>
        </footer>
    )
}

export default Footer