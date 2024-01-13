import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full mx-auto'>
        <div className='w-1/2 mx-auto text-center flex flex-col gap-4 my-32 flex-grow'> 
            <h2 className='uppercase text-5xl'>404</h2>
            <h3 className='uppercase text-4xl'>page not found</h3>
            <NavLink to='/'>
            <button className='p-3 bg-blue-700 text-white hover:border hover:border-gray-400 hover:bg-transparent hover:text-black uppercase rounded-sm mx-auto'>back to home</button>
            </NavLink>
        </div>
      
    </div>
  )
}

export default ErrorPage
