import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu,CgClose } from "react-icons/cg";
import { useCartContext } from '../../contexts/CartContext';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
   const [menuIcon, setMenuIcon]=useState();
   const {total_items} = useCartContext();
   const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  return (
    <div className='flex relative'>
      <ul className={menuIcon===true ? 'h-screen w-screen flex flex-col uppercase text-xl gap-4 justify-center items-center':'hidden md:flex md:flex-row md:items-center  md:gap-4  md:uppercase md:px-8 md:h-20 md:w-full'}>
        <li><NavLink to='/' onClick={()=>setMenuIcon(false)}>home</NavLink></li>
        <li><NavLink to='/products' onClick={()=>setMenuIcon(false)}>products</NavLink></li>
        <li><NavLink to='/contact' onClick={()=>setMenuIcon(false)}>contact</NavLink></li>
        {
          isAuthenticated ? <p className='text-sm'>{user.name}</p>:""
        }
        {isAuthenticated ? (<li>
          <button className='bg-blue-700 uppercase px-2 py-1  text-white border border-blue-700  text-sm rounded  hover:border hover:border-gray-400 hover:bg-transparent hover:text-black'
    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out </button></li>):
        (<li> 
          <button className='bg-blue-700 uppercase px-2 py-1  text-white border border-blue-700  text-sm rounded  hover:border hover:border-gray-400 hover:bg-transparent hover:text-black'
    onClick={()=>loginWithRedirect()}>Log In </button></li>)}
        <li><NavLink to='/cart' className='flex items-center justify-center relative w-10 h-10 ' onClick={()=>setMenuIcon(false)}>
          <FiShoppingCart className='absolute left-2 ' />
          <span className='absolute right-1 top-1 text-xs text-center bg-blue-300 hover:bg-blue-400 rounded-full w-5 h-5'>{total_items}</span>
        </NavLink></li>
      </ul>
      <div className='text-2xl md:hidden absolute -top-16 right-5'>
        <CgMenu onClick={()=>setMenuIcon(true)} className={menuIcon===true ? 'hidden':'block'}/>
        <CgClose className={menuIcon===true ? 'block':'hidden'} onClick={()=>setMenuIcon(false)} />
      </div>
    </div>
  )
}

export default Navbar
