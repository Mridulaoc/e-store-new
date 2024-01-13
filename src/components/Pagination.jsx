import React from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

const Pagination = ({products,pageSelectedHandler,page}) => {
    console.log(products.length)
   
  return (
    <div className='flex justify-center items-center my-5'>
       <span 
       className={page >1 ? 'p-3 border border-gray-400  cursor-pointer  text-blue-700': ' opacity-0'}
       onClick={()=>pageSelectedHandler(page-1)}
       ><FaArrowLeft /></span>
       <div className='hidden md:block'>
       {
        [...Array(Math.ceil(products.length / 12))].map((_,index)=>{
            return(<span
                   key={index} 
                   className={page === index + 1 ? '  bg-blue-700 text-white px-4 py-2 border border-gray-400 cursor-pointer border-l-0 ': 'px-4 py-2 border border-gray-400 cursor-pointer border-l-0  text-blue-700'}
                   onClick={()=>pageSelectedHandler(index+1)}>
                {index+1}
            </span>)
        })
       }
       </div>
       
       <span 
       className={page > (products.length/12) ?' opacity-0':'p-3 border border-gray-400 md:border-l-0 cursor-pointer text-blue-700'}
       onClick={()=>pageSelectedHandler(page+1)}
       ><FaArrowRight /></span>
    
      
    </div>
  )
}

export default Pagination
