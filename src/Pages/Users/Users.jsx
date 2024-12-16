import React, { useCallback, useEffect, useState } from 'react'
import UserCard from '../../components/UserCard/UserCard';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';

export default function Users() {
  let [users, setUsers] = useState([]);
  let data = [];
  async function getUsers() {
    let data = await axios('https://api.escuelajs.co/api/v1/users');
    console.log(data);
    setUsers(data.data)

  }
 let filteredUser=[];
  let searchUser = useCallback((event) => {

    let inputValue = event.target.value.toLowerCase();
   filteredUser = users.filter((user) =>
      user.email && user.email.toLowerCase().includes(inputValue)
    )
    console.log(filteredUser);

    setUsers(filteredUser)
  }, [users])



  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <div className='relative flex justify-center items-center'>
        <input type='search' onChange={searchUser} className='searchInput w-1/2 mx-auto border-2 border-blue-300 rounded-2xl px-4 py-1 mt-4 mb-2' placeholder='search by email' />
        <i className="fa-solid fa-magnifying-glass text-blue-300 absolute right-[26%] top-8 cursor-pointer"></i>
      </div>

        {users ?
        (<div className='grid grid-cols-12 gap-4 p-2'>
          {users.map((user) => {
            return <UserCard userInfo={user} key={user.id} />
          })}
        </div>)
        : (<Loading />) }

       
        <div className='grid grid-cols-12 gap-4 p-2'>
          {filteredUser.map((user) => (
            <UserCard userInfo={user} key={user.id} />
          )
          )}
        </div>
        
       
       
  
   </>
  )

}
