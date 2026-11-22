import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Skills from './Pages/Skills.jsx'
import Experience from './Pages/Experience.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import NotFound from './Pages/NotFound.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/skills',
        element:<Skills/>
      },
      {
        path:'/experience',
        element:<Experience/>
      },
      {
        path:'/projects',
        element:<Projects/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'*',
        element:<NotFound/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
