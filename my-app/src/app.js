import React from "react";
import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { Navbar } from "./pages/Navbar";
import "./app.css";

export default function App(){
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/blogs" element={<Blogs />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element ={<Error />} />

            </Routes>
        </BrowserRouter>
    )
}