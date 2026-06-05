import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OutletPage from "./pages/OutletPage";

function App() {
return (
<BrowserRouter>
<Navbar />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/outlet/:slug" element={<OutletPage />} />
</Routes>

<Footer />
</BrowserRouter>
);
}

export default App;
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 18px 0 28px;
    }
    
    .service-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 14px;
    border-radius: 14px;
    font-weight: 700;
    color: #0f172a;
    }
    