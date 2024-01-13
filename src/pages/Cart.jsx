import React from 'react'
import { useCartContext } from '../contexts/CartContext'
import { CartItem, FormattedPrice } from '../components/index';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
  const {cart, clearCart,total_price,shipping_fee} = useCartContext();
  const {isAuthenticated, user} = useAuth0();
  

  if(cart.length==0){
    return(
      <div className='w-3/4 h-96 mx-auto grid place-items-center ' >
        <h3>Cart Is Empty</h3>
      </div>
    )
    
  }
 
  return (
    <div className='w-full my-10 flex flex-col'>
      {
        isAuthenticated ? <div className='w-3/4 flex mx-auto items-center gap-4 my-5'>
        <img src={user.picture} alt={user.name} className='w-10 h-10 rounded ' />
        <h3>{user.name}</h3>
      </div> : "" 
      }
     <div className='w-3/4 grid grid-cols-5 justify-items-center  mx-auto'>
    <p>Item</p>
    <p className='hidden md:block'>Price</p>
    <p>Quantity</p>
    <p className='hidden md:block'>SubTotal</p>
    <p>Remove</p>
   </div>
   <hr className='w-3/4 mx-auto my-3'/>
   <div className='flex flex-col'>
    {
      cart.map((curElm)=>{
        return(
          <CartItem key={curElm.id} {...curElm}/>
        )
      })
    }
   </div>
   <hr className='w-3/4 mx-auto my-3'/>
   <div className='flex justify-between w-3/4 mx-auto'>
    <NavLink to="/products">
    <button className='bg-blue-700 px-4 py-2 uppercase text-sm text-white my-3 rounded'>continue shopping</button>
    </NavLink>
    <button className='bg-blue-700 px-4 py-2 uppercase text-sm text-white my-3 rounded' onClick={clearCart}>clear cart</button>
   </div>
   <div className='flex flex-col items-end w-3/4 mx-auto'>
    <div className=' bg-gray-100 p-5 my-5'>
    <div className='grid grid-cols-2 gap-12 ' >
      <p>Subtotal:</p>
      <FormattedPrice price={total_price}/>
    </div> 
    <div className='grid grid-cols-2 gap-20'>
      <p>Shipping Fee:</p>
      <FormattedPrice price={shipping_fee}/>
    </div>

    <hr className=' w-full mx-auto my-3'/>
    <div className='grid grid-cols-2 gap-12'>
      <p>Order Total:</p>
      <FormattedPrice price={total_price + shipping_fee}/>
    </div>
   </div>
   </div>
   </div>
  )
}

export default Cart
