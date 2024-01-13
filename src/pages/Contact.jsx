import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Contact = () => {

  const {user,isAuthenticated} = useAuth0();
  return (
    <>
      <div className=' w-full flex flex-col items-center'>
      <h2  className='my-10 font-bold text-2xl'>Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0910636498415!2d77.61086247403385!3d13.029872713600133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17095342196f%3A0xbce0863d2aa9dbc2!2s7D%2C%204th%20Main%20Rd%2C%20Muniveerappa%20Layout%2C%20Shampura%2C%20Kaval%20Bairasandra%2C%20Bengaluru%2C%20Karnataka%20560032!5e0!3m2!1sen!2sin!4v1700918491876!5m2!1sen!2sin"
       width="100%"
       height="400"
       style={{border:0}}
       allowFullScreen=""
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"></iframe>
       
       <form action="https://formspree.io/f/xdorraoz" method='POST' className='flex flex-col gap-5 w-full p-10 text-sm md:w-2/4 md:px-24 md:py-16 '>
        <input type="text" name='username' placeholder='Username' autoComplete='off' className='p-2 border border-gray-400 rounded-sm ' value={isAuthenticated ? user.name : ""}/>
        <input type="email" name='email' placeholder='Email Address' autoComplete='off' className='p-2 border border-gray-400 rounded-sm' value={isAuthenticated?user.email : ""} /> 
        <textarea name="message" cols="30" rows="10" placeholder='Enter Your Message Here' autoComplete='off' className='p-2 border border-gray-400 rounded-sm'></textarea>
        <input type="submit" value='send' className='p-2 rounded-sm uppercase bg-blue-700 text-white hover:border hover:border-gray-400 hover:bg-transparent hover:text-black' />

       </form>
      </div>
    </>
    
  )
}

export default Contact
