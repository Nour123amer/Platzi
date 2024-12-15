import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';

export default function Products() {
      const [products, setProducts] = useState ([]);
      const [isLoading ,setIsLoading] = useState(true)
      async function getProducts() {
        try {
          let { data } = await axios('https://api.escuelajs.co/api/v1/products');
          console.log(data);
          setProducts(data);
          setIsLoading(false);
         
        } catch (error) {
          console.log(error);
    
        }
      }
        
          useEffect(() => {
            getProducts() 
          }, []);

  return (
   <>
   {products?
   products.map((product)=>{
    return <ProductCard productInfo={product} key={product.id} />
   })
   
:<Loading />}
   </>
  )
}
