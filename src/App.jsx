import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Cart from './components/Cart'
import Products from './pages/Products'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
