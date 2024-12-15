import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../../components/Loading/Loading';
import toast from 'react-hot-toast';
import ProductDetails from '../CategoryDetails/CategoryDetails';
// import Menu from '../../components/Menu/Menu';


export default function Home() {
  const [products, setProducts] = useState([]);
  // let [minPrice, setMinPrice] = useState('');
  //     let [maxPrice, setMaxPrice] = useState('');
  let [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading ,setIsLoading] = useState(true);
//  let id = toast.loading('Waiting...');
  async function getProducts() {
    try {
      let { data } = await axios('https://api.escuelajs.co/api/v1/products');
      console.log(data);

    

      setProducts(data);
      setFilteredProducts(data)
      setIsLoading(false);
     
    } catch (error) {
      console.log(error);

    }
  }
  //  toast.dismiss(id);
    async function getProductsLessThan100() {
      try {
        let { data } = await axios('https://api.escuelajs.co/api/v1/products/?price_min=20&price_max=40');
        console.log(data);

        setFilteredProducts(data)
        setIsLoading(false);

      } catch (error) {
        console.log(error);

      }

    

    }

    async function getProductsLessThan70() {
      try {
        let { data } = await axios('https://api.escuelajs.co/api/v1/products/?price_min=40&price_max=70');
        console.log(data);

        setFilteredProducts(data)
        setIsLoading(false);

      } catch (error) {
        console.log(error);

      }
    }

    async function getProductsMoreThan90() {
      try {
        let { data } = await axios('https://api.escuelajs.co/api/v1/products/?price_min=90&price_max=200');
        console.log(data);

        setFilteredProducts(data)
        setIsLoading(false);

      } catch (error) {
        console.log(error);

      }
    }

    // function getFilteredProducts(){
    //   const filteredProducts = products.filter((product)=> product.price >= minPrice && product.price <= maxPrice);
    //   setFilteredProducts(filteredProducts)
    //   console.log(filteredProducts);

    //   }

  
   
    useEffect(() => {
      getProducts() 
    }, []);

    return (

      <>
       
        <details className="dropdown mt-8">
          <summary className="btn m-1">Filter by price</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><Link onClick={getProducts} to=''>All</Link></li>
            <li><Link onClick={getProductsLessThan100} to=''>less than 40$</Link></li>
            <li><Link onClick={getProductsLessThan70} to=''>between 40 & 70$</Link></li>
            <li><Link onClick={getProductsMoreThan90} to=''>more than 70$</Link></li>
          </ul>
        </details>

        {isLoading ? (<Loading />) :(
          <div className='grid grid-cols-12 gap-2 p-4'>
            {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
            
           <ProductCard productInfo={product} key={product.id} />
    

            ))}
          </div>
        ) 
        }

      </>
    )
  }