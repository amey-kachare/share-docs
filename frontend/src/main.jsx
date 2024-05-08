import React from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Register from './components/User/Register.jsx'
import Login from './components/User/Login.jsx'
import Chats from './components/Chats.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route path='' element={<Chats/>}></Route>
       <Route path='login' element={<Login/>}></Route>
       <Route path='register' element={<Register/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
