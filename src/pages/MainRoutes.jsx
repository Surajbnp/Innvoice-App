import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'
import Addpage from './Addpage';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} /> 
        <Route path='/add' element={<Addpage />} /> 
    </Routes>
  )
}

export default MainRoutes