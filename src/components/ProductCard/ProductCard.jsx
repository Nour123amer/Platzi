import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCard({productInfo}) {
    let {id ,title ,description ,price ,images} =  productInfo;
    
    console.log(images);

    
    
  return (
   <>
   <Link to={`/products/${id}`} className='border-2 border-blue-600 p-2 col-span-3'>
    <img src={images && images.length > 0 ? images[0] : 'https://via.placeholder.com/300'} alt="productImage" />
    <h2 className='text-blue-900 font-semibold'>{title}</h2>
    <p>price: ${price}</p>
    <p className='line-clamp-2'>{description}</p>
   <div className='flex justify-between items-center'>
   <button className=' bg-blue-900 rounded-md px-2 py-1 my-2 text-white font-bold'>Add to cart</button>
  
   <i className="fa-regular fa-heart text-xl text-blue-900"></i>
   </div>
   </Link >
   
   </>
  )
}
