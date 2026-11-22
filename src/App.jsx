import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Code2, Menu, X } from 'lucide-react'
import './index.css'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'

function App() {
  return <div className="w-full  ">
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>
}

export default App;

