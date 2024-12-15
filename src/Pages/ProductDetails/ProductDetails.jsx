import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    let [details, setDetails] = useState(null);
    let {id} = useParams ();
    async function getProductDetails() {
        let { data } = axios(`https://api.escuelajs.co/api/v1/products/${id}`);
        console.log(data);
        setDetails(data)


    }

    useEffect(() => {
        getProductDetails()
    }, [id])
    return (
        <>
            <div className='container grid grid-cols-12 gap-4'>
                <img src="" className='col-span-4 w-full' alt="" />
                <div className='col-span-8 '>
                    <img src={details.images && details.images.length > 0 ? details.images[0] : 'https://via.placeholder.com/300'} alt="productImage" />
                    <h2 className='text-blue-900 font-semibold'>{details.title}</h2>
                    <p>price: ${details.price}</p>
                    <p className='line-clamp-2'>{description}</p>
                    <button className=' bg-blue-900 rounded-md px-2 py-1 my-2 text-white font-bold'>Add to cart</button>
                </div>
            </div>
        </>
    )
}
