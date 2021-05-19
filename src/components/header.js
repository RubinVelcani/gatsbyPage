import React from "react"
import { Link } from 'gatsby'
import MainLogoH from '../images/mainLogoH.jpg'
import Instagram from '../images/instagramLogo.svg'
import Facebook from '../images/facebookLogo.svg'

const Header = () => {
  return (
    <header>
      <div className='w-full max-w-screen-lg flex flex-row items-center justify-between bg-white mx-auto py-2'>
        <Link to='/'>
          <img className='' src={MainLogoH} alt='logo' />
        </Link>
        <div className='flex flex-row justify-evenly'>
          <Link to='https://www.instagram.com'>
            <img src={Instagram} className="mr-10" />
          </Link>
          <Link to='https://www.facebook.com'>
            <img src={Facebook} className="md:mr-10 " />
          </Link>
        </div>
      </div>
      <nav className='w-full max-w-screen-lg flex flex-row justify-around bg-white border-b border-t border-gray-200 rounded-lg my-2 py-2 mx-auto'>
        <Link to='/'>
          <h3 className='p-1 mx-1 sm:p-2 sm:px-4 lg:text-xl'>
            Home
          </h3>
        </Link>
        <Link to='/about'>
          <h3 className='p-1 mx-1 sm:p-2 sm:px-4 lg:text-xl'>
            About Us
          </h3>
        </Link>
        <Link to='/gallery'>
          <h3 className='p-1 mx-1 sm:p-2 sm:px-4 lg:text-xl'>
            Gallery
          </h3>
        </Link>
        <Link to='/contact'>
          <h3 className='p-1 mx-1 sm:p-2 sm:px-4 lg:text-xl'>
            Contact Us
          </h3>
        </Link>
      </nav>
    </header>
  )
}

export default Header