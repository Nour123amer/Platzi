
import './App.css'

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './Pages/Home/Home'
import Categories from './Pages/Categories/Categories'
import Brands from './Pages/Users/Users'
import Sale from './Pages/Sale/Sale'
import Register from './Pages/Register/Register'
import Notfound from './Pages/Not Found/Notfound'
import Login from './Pages/Login/Login'
import Users from './Pages/Users/Users'
import { Toaster } from 'react-hot-toast'
import ProductDetails from './Pages/CategoryDetails/CategoryDetails'
import CategoryDetails from './Pages/CategoryDetails/CategoryDetails'
import Products from './Pages/Products/Products'
import Cart from './Pages/Cart/Cart'


function App() {

  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {index:true ,element:<Home />},
        {path:"categories",element:<Categories />},
        {path:"products",element:<Products />},
        {path:"brands",element:<Brands />},
        {path:"users",element:<Users />},
        {path:"register",element:<Register />},
        {path:'cart' ,element:<Cart />},
        {path:'categories/:id',element:<CategoryDetails />},
        {path:'products/:id',element:<ProductDetails />},
        {path:'*',element:<Notfound />},
        {path:'login',element:<Login />},
      ],
    },
  ])
 

  return (
    <>

 <RouterProvider router={routes}>

 </RouterProvider>
 <Toaster />
    </>
  )
}

export default App
