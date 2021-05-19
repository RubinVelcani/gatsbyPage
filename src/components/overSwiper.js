import React from 'react'
import { Link } from 'gatsby'

const OverSwiper = () => {
    return (
        <div className='flex flex-col items-center bg-overSwiper text-center py-10 px-20'>
            <h2 className='text-4xl font-semibold mb-4'>Mata Embroidery</h2>
            <h4 className='text-2xl mb-8'>Professional embroidery based in Tirana, Albania with over 40 years of experience</h4>
            <Link to='/contact'>
            <h4 className='border-gray-800 border py-4 px-12 mx-auto'>Get Started!</h4>
            </Link>
        </div>
    )
}

export default OverSwiper