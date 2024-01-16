import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { AppContextProvider } from './contexts/ProductContext.jsx'
import { FilterContextProvider } from './contexts/FilterContext.jsx'
import { CartContextProvider } from './contexts/CartContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/products',
        element:<Products/>,
      },
      {
        path:'/singleproduct/:id',
        element:<SingleProduct/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/*',
        element:<ErrorPage/>
      }
    ]
}
])

const domain = import.meta.env.VITE_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_AUTH_CLIENT_ID;



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppContextProvider>
      <FilterContextProvider>
        <CartContextProvider>
    <RouterProvider router={router}/>
        </CartContextProvider>
      </FilterContextProvider>
    </AppContextProvider>
   </Auth0Provider>
  </React.StrictMode>,
)
