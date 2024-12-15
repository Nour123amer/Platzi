import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';


export default function Menu() {
    let [products, setProducts] = useState([]);
    let [minPrice, setMinPrice] = useState('');
    let [maxPrice, setMaxPrice] = useState('');
    let [filteredProducts,setFilteredProducts] = useState([]);

 
    async function getProductsLessThan100() {
        try {
            let { data } = await axios('https://api.escuelajs.co/api/v1/products/?price_min=20&price_max=40');
            console.log(data);

            setProducts(data);
        
        } catch (error) {
            console.log(error);

        }

        setMinPrice(10);
        setMaxPrice(40);
    } 
    
    function getFilteredProducts(){
        const filteredProducts = products.filter((product)=> product.price >= minPrice && product.price <= maxPrice);
        setFilteredProducts(filteredProducts)
        console.log(filteredProducts);
        
        }

    useEffect(() => {
        getProductsLessThan100();
    }, []);


    return (
        <>
            <details className="dropdown mt-8">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><Link to=''>All</Link></li>
                    <li><Link onClick={getFilteredProducts} to=''>less than 40$</Link></li>
                    <li><Link to=''>between 40 & 70$</Link></li>
                    <li><Link to=''>more than 70$</Link></li>
                </ul>
            </details>

    {/* <div>
     <label>
    Min Price:
    <input
      type="number"
      value={minPrice}
      onChange={e => setMinPrice(e.target.value)}
    />
     </label>
    <label>
    Max Price:
    <input
      type="number"
      value={maxPrice}
      onChange={e => setMaxPrice(e.target.value)}
    />
    </label>
   </div> */}

   <div className='grid grid-cols-12 gap-4'>
  {(filteredProducts.length>0?filteredProducts:products).map(product => (
 <ProductCard productInfo={product} />
  ))}
</div>


        </>
    )
}
