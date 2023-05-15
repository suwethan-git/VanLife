import { BrowserRouter, Routes, Route, Link } from  "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Vans from "./components/Vans";
import VanDetails from "./components/VanDetails";
import Layout from "./components/Layout";
import Income from "./components/Income";
import Reviews from "./components/Reviews";
import Dashboard from "./components/Dashboard";
import HostLayout from "./components/HostLayout";
import { makeServer } from "./Server";

makeServer()

import "./App.css";

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="vans" element={<Vans />}/>
                <Route path="vans/:id" element={<VanDetails />} />

                <Route path="/host" element={<HostLayout />}>
                    <Route index element={<Dashboard />}/>
                    <Route path="income" element={<Income />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
