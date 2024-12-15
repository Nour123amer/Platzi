import React from 'react'
import errorImage from './../../assets/images/error.svg'

export default function Notfound() {
  return (
    <>
    <div className='flex justify-center items-center pt-4'>
    <img src={errorImage} className='w-50' alt="" />
    </div>
    </>
  )
}
