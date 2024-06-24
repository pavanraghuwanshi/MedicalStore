import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Placement from "./pages/Placement";
import Event from "./pages/Event";
import ContactUs from "./pages/ContactUs";
import ReactSwiper from "./components/ReactSwiper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path:"/placement",
          element:<Placement/>
        },
        {
          path:"/event",
          element:<Event/>
        },
        {
          path:"/contactus",
          element:<ContactUs/>
        }

      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
