import { BrowserRouter, Routes, Route, Link } from  "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Vans from "./components/Vans";
import VanDetails from "./components/VanDetails";
import Layout from "./components/Layout";
import "./App.css";

import "./Server"

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />}/>
                <Route path="/vans/:id" element={<VanDetails />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
