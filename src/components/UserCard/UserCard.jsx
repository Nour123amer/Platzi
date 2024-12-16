import React from 'react'

export default function UserCard({userInfo}) {
    let {name ,email ,password,role ,avatar} = userInfo;
  return (
   <>
   <div className='border-2 border-blue-700 p-2 sm:col-span-12 md:col-span-5 lg:col-span-4  col-span-3'>
    <img src={avatar ? avatar :'https://i.imgur.com/yhW6Yw1.jpeg'} className='w-full' alt="" />
    <h3 className='text-xl font-semibold text-blue-900 '>{name}</h3>
    <p>{email}</p>
    <p>{password}</p>
    <p>{role}</p>
   </div>
   </>
  )
}
