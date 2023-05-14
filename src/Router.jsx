import { BrowserRouter, Routes, Route, Link } from  "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import "./App.css";

export default function Router() {
    return (
        <BrowserRouter>
        <header>
            <Link className="site-logo" to={"/"}>VANLIFE</Link>
            <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
    )
}
