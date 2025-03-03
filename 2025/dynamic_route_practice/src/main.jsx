import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import About from './component/About/About';
import Products from './component/Prouducts/Products';
import Contact from './component/Contact/Contact.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import MoreInfo from './component/MoreInfo/MoreInfo.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/product',
        loader: ()=> fetch('https://fakestoreapi.com/products'),
        element: <Products />
      },
      {
        path: '/product/:productID',
        loader: ({params})=> fetch(`https://fakestoreapi.com/products/${params.productID}`),
        element: <MoreInfo />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
