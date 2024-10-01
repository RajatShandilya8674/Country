import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import ShimmerEffect from './ShimmerEffect.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import CountryDetails from './Components/CountryDetails.jsx';
import Error from './Components/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
    {
      path: "/",
      element: <Home />
    },

    {
      path: "/:country",
      element: <CountryDetails />
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
