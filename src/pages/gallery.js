import React, { useState } from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import GalleryComponent from '../components/galleryComponent'
import Image from '../images/swiperPage1.jpg'

const Gallery = () => {

  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)

  function toggleFirst() {
    setShowFirst(!showFirst)
    setShowSecond(false)
    setShowThird(false)
  }

  function toggleSecond() {
    setShowFirst(false)
    setShowSecond(!showSecond)
    setShowThird(false)
  }

  function toggleThird() {
    setShowFirst(false)
    setShowSecond(false)
    setShowThird(!showThird)
  }

  return (
    <div className='bg-gray-50 p-3'>
      <div className='flex flex-col bg-white border-gray-200 border p-3'>
        <Header />
        <main className=''>
          <div className='w-full max-w-screen-lg flex flex-col items-center pt-10 pb-6 mx-auto md:pb-12 md:pt-20'>
            <div className='flex flex-col items-center justify-between text-center md:flex-row'>
              <div className='w-11/12 flex flex-col items-center mb-14 md:mx-2 lg:mx-4'>
                <img onClick={toggleFirst} className='cursor-pointer' src={Image} alt='' />
                <h2 className='text-2xl p-3'>Corporate Embroidery</h2>
                <p className='pt-2 mb-8'>For business with corporate embroidery needs, our embroidery service provides
                embroidered workwear and merchandise
              </p>
              </div>
              <div className='w-11/12 flex flex-col items-center mb-14 md:mx-2 lg:mx-4'>
                <img onClick={toggleSecond} className='cursor-pointer' src={Image} alt='' />
                <h2 className='text-2xl p-3'>Corporate Embroidery</h2>
                <p className='pt-2 mb-8'>For business with corporate embroidery needs, our embroidery service provides
                embroidered workwear and merchandise
              </p>
              </div>
              <div className='w-11/12 flex flex-col items-center mb-14 md:mx-2 lg:mx-4'>
                <img onClick={toggleThird} className='cursor-pointer' src={Image} alt='' />
                <h2 className='text-2xl p-3'>Corporate Embroidery</h2>
                <p className='pt-2 mb-8'>For business with corporate embroidery needs, our embroidery service provides
                embroidered workwear and merchandise
              </p>
              </div>
            </div>
          </div>
          <div className='w-full max-w-screen-lg text-center mx-auto'>
            <h1 className='text-3xl font-medium mb-12'>Gallery</h1>
            <GalleryComponent showFirst={showFirst} showSecond={showSecond} showThird={showThird}/>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Gallery