import React, { useState } from 'react'

const Images = ({imgs=[],thumbnail}) => {
  const [mainImage, setMainImage] =useState(thumbnail)
  
  return (
    <div className='flex flex-col items-center gap-5 md:flex-row md:justify-center md:items-center w-full'>
      
      <div className='flex flex-row md:flex-col gap-3'>
        {
          imgs.slice(0,4).map((curElm, index)=>{ 
            return (
              <figure  key={index} >
                <img src={curElm} alt=""className=' h-24 w-24 object-cover  cursor-pointer' onClick={()=>setMainImage(curElm)}/>
                </figure>
            )
          })
        }

      </div>
      <div className=''>
        <img src={mainImage} alt="" className=' h-48 object-cover grid place-items-center w-full '/>
      </div>
      
    </div>
  )
}

export default Images
