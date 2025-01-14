import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import DashBoard from "./DashBoard";
import Hero from "./Hero";
import Products from "./Products";
import Errorpage from "./Errorpage";
import SignUpForm from "./SignUpForm";
import { Provider } from 'react-redux'
import { store } from "./Store";
import BagsProducts from "./BagsProducts"
import BakeryProducts from "./BakeryProducts"
import ClothingProducts from "./ClothingProducts"
import FurnitureProducts from "./FurnitureProducts"
import MakeupProducts from "./MakeupProducts"

// Define your router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />, // Parent component
    errorElement: <Errorpage />, // Error boundary component
    children: [
     
       {
       path: "/Products",
      element: <Products /> ,
       },
    ],
  },
  // {
  //   path: "/Products",
  //   element: <Products /> ,
  // },
  {
    path: "/SignUp",
    element:<SignUpForm />,
  },
  {
    path: "/bags",
    element: <BagsProducts/>
  },
  {
    path: "/Bakery",
    element: <BakeryProducts/>
  },
  {
    path: "/Clothing",
    element: <ClothingProducts/>
  },
  {
    path: "/Furniture",
    element: <FurnitureProducts/>
  },
  {
    path: "/Makeup",
    element: <MakeupProducts/>
  },

]);

// Render the RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}> 
    <RouterProvider router={router} />
   </Provider>
);

export default router;
