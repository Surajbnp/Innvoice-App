import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'
import Addpage from './Addpage';
import Editpage from './Editpage';
import ProductPage from './ProductPage';
import CartPage from './CartPage';
import BillPage from './BillPage';
import SinglePage from './SinglePage';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} /> 
        <Route path='/add' element={<Addpage />} /> 
        <Route path='/editpage/:id' element={<Editpage />} /> 
        <Route path='/productpage/:id' element={<ProductPage />} /> 
        <Route path='/cart' element={<CartPage />} /> 
        <Route path='/bill' element={<BillPage />} /> 
        <Route path='/bill/:id' element={<SinglePage />} /> 
    </Routes>
  )
}

export default MainRoutes