import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from './components/Home/Home.jsx'
import Contact  from "./components/Contact/Contact.jsx";
import Services from './components/Services/Services';
import About from './components/About/About';
import Pricing from './components/Pricing/Pricing';
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Product from "./components/Product/Product.jsx";



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/pricing',
        element: <Pricing></Pricing>
      },
      {
        path: '/product',
        element: <Product></Product>,
        loader: ()=> fetch('fakeData.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
