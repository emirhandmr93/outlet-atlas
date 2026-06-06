import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OutletPage from "./pages/OutletPage";

function App() {
const language = localStorage.getItem("language") || "en";

return (
<BrowserRouter>
<Navbar language={language} />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/outlet/:slug" element={<OutletPage />} />
</Routes>

<Footer />
</BrowserRouter>
);
}

export default App;
