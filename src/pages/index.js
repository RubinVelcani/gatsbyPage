import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import Carousel from '../components/carousel'
import Image from '../images/swiperPage1.jpg'

import '@fontsource/roboto';

const IndexPage = () => {
  return (
    <div className='bg-gray-50 p-3'>
      <div className='flex flex-col bg-white border-gray-200 border rounded-3xl p-3'>
        <Header />
        <main className=''>
          <Carousel />
          <div className='flex flex-col items-center pt-10 pb-6 mb-20 md:pb-12 md:pt-20'>
            <h2 className='uppercase text-3xl mx-auto mb-5 md:pb-10'>embroidery services</h2>
            <h3 className='bg-gray-800 text-white text-center capitalize mx-auto mb-8 py-3 px-8 md:text-xl md:px-20 md:py-1 md:mb-16'>providing custom embroidery, screen printing and promotional products worldwide</h3>
            <h3 className='border border-gray-600 capitalize text-2xl py-2 px-6'>our embroidery features</h3>
          </div>
          <div className='w-full max-w-screen-lg flex flex-col items-center justify-between mx-auto md:flex-row'>
            <div className='w-11/12 flex flex-col items-center mb-14 md:mx-2 lg:mx-4'>
              <h2 className='text-2xl p-3'>Corporate Embroidery</h2>
              <img src={Image} alt='' />
              <p className='pt-2 mb-8'>For business with corporate embroidery needs, our embroidery service provides
              embroidered workwear and merchandise
              </p>
              <h3 className='border border-gray-600 p-3'>Read More</h3>
            </div>
            <div className='w-11/12 flex flex-col items-center mb-14 md:mx-2 lg:mx-4'>
              <h2 className='text-2xl p-3'>Corporate Embroidery</h2>
              <img src={Image} alt='' />
              <p className='pt-2 mb-8'>For business with corporate embroidery needs, our embroidery service provides
              embroidered workwear and merchandise
              </p>
              <h3 className='border border-gray-600 p-3'>Read More</h3>
            </div>
            <div className='w-11/12 flex flex-col items-center mb-14 md:mx-2 lg:mx-4'>
              <h2 className='text-2xl p-3'>Corporate Embroidery</h2>
              <img src={Image} alt='' />
              <p className='pt-2 mb-8'>For business with corporate embroidery needs, our embroidery service provides
              embroidered workwear and merchandise
              </p>
              <h3 className='border border-gray-600 p-3'>Read More</h3>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default IndexPage