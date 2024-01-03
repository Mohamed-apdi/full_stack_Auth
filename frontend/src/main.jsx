import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import RegisterPage from "./pages/RegisterPage.jsx"
import LoginPage from './pages/LoginPage.jsx'
import DahsboardPage from "./pages/DashboardPage.jsx"
import  { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/register",
        element:<RegisterPage/>
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/dashboard",
        element: <DahsboardPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
