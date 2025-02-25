import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import About from './component/About/About';
import Home from './component/Home/Home.jsx'
import Blog from './component/Product/Product.jsx';
import Contact from './component/Contact/Contact.jsx'
import Product from './component/Product/Product.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/home',
        element: <Home></Home>
      }
      ,
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/product',
        loader: ()=> fetch('https://fakestoreapi.com/products') ,
        element:<Product></Product>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
