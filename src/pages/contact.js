import React, { useState } from "react"
import Header from '../components/header'
import Footer from '../components/footer'

const Contact = () => {

  const [sent, setSent] = useState(false)
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ nameErr, setNameErr ] = useState(false)
  const [ emailErr, setEmailErr ] = useState(false)
  const [ messageErr, setMessageErr ] = useState(false)

  const validName = new RegExp('^[a-zA-Z ]+$')
  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

  const onSubmit = data => {
    validateForm()
    console.log(data)
  }

  function validateForm(){
    if (!validName.test(name)) {
      setNameErr(true);
   }
    if (!validEmail.test(email)) {
      setEmailErr(true);
   }
   if (message.length < 10){
     setMessageErr(true)
   }
  }

  return (
    <div className='bg-gray-50 p-3'>
      <div className='flex flex-col bg-white border-gray-200 border p-3'>
        <Header />
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <section className='w-full max-w-screen-lg flex flex-col items-center bg-gray-100 rounded-3xl shadow-md text-xs text-gray mx-auto'>
            <div className='w-full bg-gray-800 text-white rounded-3xl py-8'>
              <div className='w-4/5 max-w-screen-sm flex flex-col mx-auto'>
                <h1 className='text-4xl mb-8'>Contact Us</h1>
                <h4 className='text-xl'>We'd love to hear from you</h4>
              </div>
            </div>
            <div className='w-4/5 max-w-screen-sm flex flex-col text-left text-formGray mt-10 mb-16 mx-auto'>
              <label className='text-lg mr-auto mb-5'>Full Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type='name' name='fullName' className=' rounded-3xl ring-1 ring-gray-400 mb-4 py-4 px-4 outline-none focus-within:ring-blue-400' placeholder='Name' />
              {nameErr && <h3 className='text-red-400 pb-1 mb-10'>Please type a valid name</h3>}
              <label className='text-lg mr-auto mb-5'>Email Address</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' name='email' className=' rounded-3xl ring-1 ring-gray-400 mb-8 py-4 px-4 outline-none focus-within:ring-blue-400' placeholder='Email' />
              {emailErr && <h3 className='text-red-400 pb-1 mb-10'>Please type a valid email address</h3>}
              <label className='text-lg mr-auto mb-5'>Your Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} name='message'  className=' rounded-3xl ring-1 ring-gray-400 mb-5 py-3 px-6 outline-none focus-within:ring-blue-400' placeholder='Your message...' />
              {messageErr && <h3 className='text-red-400 mb-10'>Please type a valid message</h3>}
              <div className='flex flex-row justify-around mt-10'>
                <button onClick={validateForm} className='w-1/2 rounded-3xl bg-gray-800 text-white text-lg ring-1 ring-gray-400 mx-auto p-3 cursor-pointer outline-none focus-within:ring-blue-400 md:w-5/12'>Submit </button>
              </div>
            </div>
          </section>
        </form>
        <div className={sent ? 'block' : 'hidden'}>
          <h2 className='w-1/3 bg-blue-500 text-xl text-white text-center rounded-3xl shadow-lg py-3 mx-auto mt-16'>Success</h2>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact