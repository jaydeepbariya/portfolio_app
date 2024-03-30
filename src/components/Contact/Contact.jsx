import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-x-8 pb-12" id="contact" >
    <div className="w-full flex flex-col pt-4 pb-2 items-center">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="h-[2px] w-1/5 my-4 bg-blue-500"></div>
      <p className="text-md my-3">
        Please feel free to reach out to me in case of any opportunity or questions
      </p>

      <div className='w-3/4 my-8'>
        <ContactForm />
      </div>

    </div>
    </div>
  )
}

export default Contact