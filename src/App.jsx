import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PageNotFound from './Pages/PageNotFound'
import Policy from './Pages/Policy'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'
import Dashboard from './Pages/user/Dashboard'
import Private from './Routes/Private'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import AdRoute from './Routes/AdminRoute'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import CreateCategory from './Pages/Admin/CreateCategory'
import CreateProduct from './Pages/Admin/CreateProduct'
import Users from './Pages/Admin/Users'
import Profile from './Pages/user/Profile'
import Order from './Pages/user/Order'
import Product from './Pages/Admin/Product'
import UpdateProduct from './Pages/Admin/UpdateProduct'
import SearchPage from './Pages/SearchPage'
import ProductDetails from './Pages/ProductDetails'
import Categories from './Pages/Categories'
import CategoryProduct from './Pages/CategoryProduct'
import CartPage from './Pages/CartPage'
import ReturnAndExchange from './Pages/ReturnAndExchange';
import ShippingPolicy from './Pages/ShippingPolicy';

export default function App() {
  AOS.init();
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:slug' element={<ProductDetails />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/:slug' element={<CategoryProduct />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/cart' element={<CartPage />} />


        <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Order />} />
          

        </Route>

        <Route path="/dashboard" element={<AdRoute/>}>
            <Route path="admin" element={<AdminDashboard/>}/>
            <Route path="admin/create-categray" element={<CreateCategory/>}/>
            <Route path="admin/create-product" element={<CreateProduct/>}/>
            <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
            <Route path="admin/products" element={<Product/>}/>
            <Route path="admin/users" element={<Users/>}/>

        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/return-and-exchange' element={<ReturnAndExchange/>}/>
        <Route path='/shipping-policy' element={<ShippingPolicy/>}/>
        <Route path='/*' element={<PageNotFound />} />
      </Routes>

    </>

  )
}
