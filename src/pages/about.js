import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import AboutImg from '../images/about.jpg'

const About = () => {
  return (
    <div className='bg-gray-50 p-3'>
      <div className='flex flex-col bg-white border-gray-200 border p-3'>
        <Header/>
        <main className=''>
          <div className='w-full max-w-screen-lg flex flex-col items-center pt-10 pb-6 mb-20 mx-auto md:pb-12 md:pt-20'>
            <img src={AboutImg} alt=''/>
            <div className='flex flex-col items-center mx-auto mb-16'>
              <h1 className='text-3xl font-semibold my-10'>Our Story</h1>
              <p className='text-lg text-center leading-8 tracking-wider'>
               Welcome to Mata Embroidery, your number one source for all things embroidery. 
               We're dedicated to giving you the very best of fabrics and designs, with a focus on quality, 
               uniqueness and reliability.
               Founded in 1998 by Klei Mata, Mata Embroidery has come a long way from its beginnings as a mom n' pop business in Tirana, Albania. 
               When Klei first started out, his passion for continuing his parent's busines drove him to quit his day job, 
               and gave him the impetus to turn hard work and inspiration into to a booming store. 
               We now serve customers all over Europe, and are thrilled to be a part of the embroidery revival wing of the clothing industry.
               We hope you enjoy our products as much as we enjoy offering them to you. 
               If you have any questions or comments, please don't hesitate to <Link to='/contactUs'><span className=' font-medium text-blue-700'>contact us. </span></Link> 
               </p>

              <h3 className='mt-8 text-2xl'>
               Sincerely,
               </h3>
               <h3 className='mt-4 text-2xl font-medium'>
               Klei Mata, Founder
               </h3>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default About