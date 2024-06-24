import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';





import Header from "./components/Header";
import Home from "./pages/Home";
import Placement from "./pages/Placement";
import Event from "./pages/Event";
import ContactUs from "./pages/ContactUs";
import ReactSwiper from "./components/ReactSwiper";

function App() {

       
  return (
    <>
            <Router>

                <Header/>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/placement" element={<Placement/>} />
                <Route path="/event" element={<Event/>} />
                <Route path="/contact" element={<ContactUs/>} />
              </Routes>


            </Router>

</>
  );
}

export default App;
