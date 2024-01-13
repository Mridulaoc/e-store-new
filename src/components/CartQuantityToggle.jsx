import React from 'react'
import { FaMinus,FaPlus } from "react-icons/fa";

const CartQuantityToggle = ({quantity,setIncrease,setDecrease}) => {
  return (
    <div>
      <div className='flex gap-5 items-center my-5'>
      <FaMinus className=' text-blue-700 text-sm cursor-pointer md:text-lg' onClick={setDecrease}/>     
      <p className='text-sm md:text-lg'>{quantity}</p>
      <FaPlus className=' text-blue-700 text-sm cursor-pointer md:text-lg' onClick={setIncrease} />
      </div>
      </div>
  )
}

export default CartQuantityToggle
