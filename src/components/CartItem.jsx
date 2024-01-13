import React from 'react'
import {FormattedPrice,CartQuantityToggle, Product} from '../components/index'
import { IoTrashOutline } from "react-icons/io5";
import { useCartContext } from '../contexts/CartContext';

const CartItem = ({id,quantity,title,image,price}) => {   

    const {removeItem,setDecrease,setIncrease} = useCartContext();

  return (
    <div className='w-full'>
    <div className='w-3/4 grid grid-cols-5 text-center justify-items-center   items-center mx-auto'>
        <div className='flex'>
            <figure>
                <img src={image} alt={title} className='h-10'/>
            </figure>
            <p className='text-sm'>{title}</p>
        </div>
        <div>
          <p className='hidden md:block'>
              <FormattedPrice price={price} />
          </p>
        </div>        
        <CartQuantityToggle 
        quantity={quantity} 
        setIncrease={()=>setIncrease(id)} 
        setDecrease={() => setDecrease(id)}/>
        <div>
        <p className='hidden md:block'>
        <FormattedPrice price={price*quantity}   />
        </p>
        </div>
        <div>
        <IoTrashOutline className=' text-red-700' onClick={()=>removeItem(id)}/>
        </div>
    </div>      
    </div>
  )
}

export default CartItem
