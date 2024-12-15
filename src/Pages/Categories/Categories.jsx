import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Loading from '../../components/Loading/Loading';

export default function Categories() {
  const [categories ,setCategories] = useState([]);
  const [isLoadin ,setIsLoading] = useState(true);
  async function getCategories() {
    let {data} = await axios('https://api.escuelajs.co/api/v1/categories');
    console.log(data);
    
    setCategories(data);
    setIsLoading(false);
  }

  

  useEffect(()=>{
    getCategories();
  },[])
  return (
    <>
    {categories?(
     <div className='grid grid-cols-12 gap-4 p-4'>
     {categories.map((category)=>{
        return <CategoryCard categoryInfo={category} key={category.id} />
      })
    }
     </div>
    ):<Loading />}
    </>
  )
}
