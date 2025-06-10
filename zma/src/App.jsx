import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Analytics } from '@vercel/analytics/react';
import './App.css'


export default function App() {

  return (
    <>
    <ToastContainer />
    <RouterProvider router={Router}/>
     <Analytics />
    </>
  )
}


