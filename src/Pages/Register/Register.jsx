import React, { useState } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

export default function Register() {

  const [errorMsg ,setErrorMsg ] = useState('');
  const navigate = useNavigate();

  let validationSchema = Yup.object({
   name: Yup.string().required("name is required ").min(3,'name must be at least 3').max(8,'name must be at most 8'),
   email:Yup.string().required('email is required').email('email is not valid'),
   phone:Yup.string().required('phone is required').matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,'phone number is not valid'),
   password:Yup.string().required('password is required').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'password is not valid'),
   repassword:Yup.string().required('repassword is required').oneOf([Yup.ref("password")],'password and repassword should be the same'),
  });
  toast.success("user signed up successfully...");
   

const formik = useFormik({
  initialValues:{
    name:'',
    email:'',
    phone:'',
    password:'',
    repassword:'',
  },
  validationSchema
})


  return (
    <>
    <div className="container pt-10">
        <form  className=' md:w-3/4 lg:w-1/2 mx-auto flex flex-col items-center justify-center mt-20' onSubmit={formik.handleSubmit}>
            <input
            
            className='border-2 border-gray-500 rounded-md py-1 px-2 mb-2 w-full  '
             type="text"
               placeholder='Enter your name'
               value={formik.values.name}
               name= 'name'
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               />
               {formik.errors.name && formik.touched.name ? (
                <div className='text-red-600 mt-2'> *{formik.errors.name}</div>
               ):

               ('')}

            <input
            className='border-2 border-gray-500 rounded-md py-1 px-2 mb-2 w-full  '
             type="email"
             value={formik.values.email}
             name='email'
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             placeholder='Enter your email' />
            {formik.errors.email && formik.touched.email ? (
                <div className='text-red-600 mt-2'> *{formik.errors.email}</div>
               ):

               ('')}

            <input
            className='border-2 border-gray-500 rounded-md py-1 px-2 mb-2 w-full '
             type="tel"
             value={formik.values.phone}
             name='phone'
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             placeholder='Enter your phone' />
            {formik.errors.phone && formik.touched.phone ? (
                <div className='text-red-600 mt-2'> *{formik.errors.phone}</div>
               ):

               ('')}

            <input
            
            className='border-2 border-gray-500 rounded-md py-1 px-2 mb-2 w-full  '
             type="password"
             value={formik.values.password}
             name='password'
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             placeholder='Enter your password' />
             {formik.errors.password && formik.touched.password ? (
                <div className='text-red-600 mt-2'> *{formik.errors.password}</div>
               ):

               ('')}


            <input
            className='border-2 border-gray-500 rounded-md py-1 px-2 mb-2 w-full  '
            value={formik.values.repassword}
            name='repassword'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password" placeholder='Enter your repassword' />
            {formik.errors.repassword && formik.touched.repassword ? (
                <div className='text-red-600 mt-2'> *{formik.errors.repassword}</div>
               ):

               ('')}
            <button onClick={()=>{navigate('/login')}} className='bg-green-600 text-white rounded-lg px-2 py-1 font-semibold w-1/4 '>Signup</button>
        </form>
    </div>
    </>
  )
}
