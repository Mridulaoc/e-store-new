import React, { useState } from 'react'
import {CartQuantityToggle} from '../components/index'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';


const AddToCart = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const {id,stock} = product;
    const{addToCart} = useCartContext();

    const setIncrease =() =>{
        quantity < stock ? setQuantity(quantity+1) : setQuantity(stock);
    }

    const setDecrease =() =>{
        quantity > 1 ? setQuantity(quantity-1) : setQuantity (1);
    }
  return (
    <>
    <CartQuantityToggle quantity={quantity} setIncrease={setIncrease} setDecrease={setDecrease}/>
    <NavLink to="/cart">
    <button 
    className='bg-blue-700 px-4 py-2 uppercase text-white border border-blue-700 w-2/5 text-sm rounded  hover:border hover:border-gray-400 hover:bg-transparent hover:text-black'
    onClick={()=>addToCart(id,quantity,product)}>
    add to cart
    </button>
    </NavLink>
    </>
  )
}

export default AddToCart
