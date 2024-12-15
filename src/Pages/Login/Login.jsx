import React from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

export default function Login() {
  let navigate = useNavigate();
    let validationSchema = Yup.object({
        email:Yup.string().required('email is required').email('email is not valid'),
        password:Yup.string().required('password is required').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'password is not valid'),
       });
     
     const formik = useFormik({
       initialValues:{
         email:'',
         password:'',
       
       },
       validationSchema
     })

     toast.success("user logged in successfully...");
  return (
    <div>
       <div className="container pt-10">
        <form  className='w-1/2 mx-auto flex flex-col items-center justify-center mt-20'>


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
            <button onClick={()=>{navigate('/')}}  className='bg-green-600 text-white rounded-lg px-2 py-1 font-semibold w-1/4 '>Login</button>
        </form>
    </div>
    </div>
  )
}
