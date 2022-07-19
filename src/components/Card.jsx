import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login';
import Editpage from './Editpage';
import Add from './Add';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/editpage/:id' element={<Editpage />} /> 
        <Route path='/add' element={<Add />} /> 
    </Routes>
  )
}

export default MainRoutes