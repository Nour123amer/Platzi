import React, { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
export default function Navbar() {
  let [number ,setNumber ] = useState(0);
  function addItemToCart(){
    setNumber(number=>number+1)
  }

  useEffect(()=>{
    addItemToCart()
  },[]);
  return (
    <>
    <nav className='bg-blue-950 text-white py-4 position-fixed top-0 right-0 left-0'>
     <div className="container flex justify-between items-center">
       <div className="logo">
        <Link to='/' className='font-bold text-2xl italic text-white '>Ecommerce</Link >
       </div>
       <ul className='flex gap-2'>
        <li className='relative'><NavLink
                to='/'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-4px] before:left-0"
                      : ""
                  }`
                }
              >Home</NavLink></li>

        {/* <li className='relative'><NavLink className={({isActive})=>{
          return ` text-white hover:before:w-full before:transition-[width] before:duration-300 ${isActive ? "font-bold before:w-full before:h-[2px] before:absolute before:bg-blue-300 before:left-0 bottom-4 border-red-500" :"before:w-0"}`
        }} to="/">Products</NavLink ></li> */}


        <li className='relative'> <NavLink
                to='/categories'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-4px] before:left-0"
                      : ""
                  }`
                }
              >categories</NavLink></li>
        <li className='relative'><NavLink
                to='/brands'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-4px] before:left-0"
                      : ""
                  }`
                }
              >Users</NavLink></li>
        <li className='relative'><NavLink
                to='/sale'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-4px] before:left-0"
                      : ""
                  }`
                }
              >Sale</NavLink></li>
        <li className='relative'><NavLink
                to='/register'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-4px] before:left-0"
                      : ""
                  }`
                }
              >Register</NavLink></li>
        <li className='relative'><NavLink
                to='/login'
                className={({ isActive }) =>
                  `text-white hover:text-blue-700 transition-colors ${
                    isActive
                      ? "font-bold before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-blue-300 before:bottom-[-4px] before:left-0"
                      : ""
                  }`
                }
              >Login</NavLink></li>

        <li>
           <Link to='/cart'>
      <i  className="fa-solid fa-cart-shopping text-2xl text-white position-relative"></i>
      <span className='cartItems position-absolute top-2 right-6 text-center'>{number}</span>
      </Link >
        </li>
       </ul>
     
     </div>
    </nav>
    </>
  )
}
