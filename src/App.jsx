import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OutletPage from "./pages/OutletPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Countries from "./pages/Countries";
import Outlets from "./pages/Outlets";

function ScrollToTop() {
const location = useLocation();

useEffect(() => {
window.scrollTo(0, 0);
}, [location.pathname]);

return null;
}

function App() {
return (
<BrowserRouter>
<ScrollToTop />
<Navbar />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/outlet/:slug" element={<OutletPage />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/countries" element={<Countries />} />
<Route path="/outlets" element={<Outlets />} />
</Routes>

<Footer />
</BrowserRouter>
);
}

export default App;