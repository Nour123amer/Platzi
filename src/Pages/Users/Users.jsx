import React, { useEffect, useState } from 'react'
import UserCard from '../../components/UserCard/UserCard';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';

export default function Users() {
  let [users ,setUsers] = useState([]);
  async function getUsers(){
    let data = await axios('https://api.escuelajs.co/api/v1/users');
    console.log(data);
    setUsers(data.data)
    
  }
useEffect(()=>{
  getUsers();
},[])

  return (
   <>
   {
    users ?(
     <div className='grid grid-cols-12 gap-4 p-2'>
       {users.map((user)=>{
        return <UserCard userInfo={user}  />
      })}
     </div>
    ):(<Loading />)
   }
  
   </>
  )
}
