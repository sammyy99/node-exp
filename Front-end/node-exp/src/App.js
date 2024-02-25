import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import  Home from './Components/Home'

const App = () => {
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/'element ={<LoginPage/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
