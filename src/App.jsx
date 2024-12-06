import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Success from './pages/success'
import Error from './pages/error'
import Singleitem from './pages/Singleitem'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/singleitem/:id' element={<Singleitem/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App