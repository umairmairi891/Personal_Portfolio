import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowDownRight, ArrowUpRight, Code2, Menu, X } from 'lucide-react'
import './index.css'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'

function App() {
  const [theme,setTheme]=useState('light');

  const lightTheme=()=>{
    setTheme('light')
  }

  const darkTheme=()=>{
     setTheme('dark')
  }

  useEffect(()=>{
    document.querySelector('body').classList.remove('light','dark')
    document.querySelector('body').classList.add(theme)
  },[theme])

  return <div className="w-full  ">
    <Navbar lightTheme={lightTheme} darkTheme={darkTheme} theme={theme} />
    <Outlet/>
    <Footer/>
  </div>
}

export default App;

