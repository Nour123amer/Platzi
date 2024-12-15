import React from 'react'
import { Link } from 'react-router-dom';

export default function CategoryCard({ categoryInfo }) {
  let { id, name, image, creationAt, updatedAt } = categoryInfo;
  return (
    <>
      <div  className='border-2 border-blue-600 p-2 col-span-3'>
        <img src={image ? image :'https://i.imgur.com/Qphac99.jpeg'} alt="" />
        <h3 className='text-blue-900 font-semibold'>{name}</h3>
        <p>{creationAt}</p>
        <div className='flex justify-between items-center'>
          <p>{updatedAt}</p>
         <Link to={`/categories/${id}`}> <i className="fa-solid fa-eye text-blue-900 text-xl"></i></Link>
        </div>
      </div>
    </>
  )
}
