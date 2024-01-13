import React from 'react'
import { useProductContext } from '../contexts/ProductContext'
import {Product} from '../components/index'
import { NavLink } from 'react-router-dom';


const TopRated = () => {
    const {isLoading,topRatedProducts} = useProductContext();


    if(isLoading){
        return <div>Loading.......</div>
    }
  return (
    <div className='flex flex-col gap-3 w-3/4 mx-auto my-10 '>
        <h2>Check Now!</h2>
        <p className='capitalize text-2xl font-bold'>our top rated products</p>
        <div  className='flex flex-col items-center  md:flex-row  md:justify-between md:h-52 md:my-20'>
            
            {topRatedProducts.slice(0,4).map((curElem)=>{
                return(
                    <div key={curElem.id} className=' w-full  md:w-1/3 p-5'>
                        <Product key={curElem.id} {...curElem}/>
                    </div>
                )
            })}
        </div>

        <NavLink to='/products'><p className='w-full text-blue-400 text-right m-3'>View All &gt;&gt; </p></NavLink>

      
    </div>
  )
}

export default TopRated
