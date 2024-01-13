import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto w-full max-w-7xl px-4 text-xs md:text-base bg-gray-100'>
    {children}      
</div>
  )
}

export default Container
