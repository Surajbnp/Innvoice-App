import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'
import Addpage from './Addpage';
import Editpage from './Editpage';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} /> 
        <Route path='/add' element={<Addpage />} /> 
        <Route path='/editpage/:id' element={<Editpage />} /> 
    </Routes>
  )
}

export default MainRoutes