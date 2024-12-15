import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

export default function CategoryDetails() {
 let [details ,setDetails] = useState(null);
 let {id} = useParams();
 let [product ,setProduct] = useState(null);
 console.log(id);


   async function getProductDetails() {
    let {data} = await axios (`https://api.escuelajs.co/api/v1/categories/${id}`);
    console.log(data);
    setDetails(data);
    
   }
   
   useEffect(()=>{
  getProductDetails();
 },[id])


  return (
    <>
   {details=== null ? <Loading /> :
   (
    <div className='container grid grid-cols-12 gap-4 py-12 items-center '>
    <img className='col-span-4 w-full' src={details.image ? details.image: 'https://via.placeholder.com/300'}  alt="" />
    <div className='col-span-8'>
     <h3 className=' text-blue-900 mb-2 font-semibold'>{details.name}</h3>
     <p>{details.creationAt}</p>
     <p>{details.updatedAt}</p>
    </div>
  </div>
   )
   }
    </>
  )
}
