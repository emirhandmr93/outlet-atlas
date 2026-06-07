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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";
import CountryOutletPage from "./pages/CountryOutletPage";
import { Helmet } from "react-helmet-async";

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
<Helmet>
<link rel="canonical" href="https://outlet-atlas.com/" />

<meta property="og:title" content="Outlet Atlas" />
<meta
property="og:description"
content="Discover Europe's best outlet shopping destinations."
/>
<meta property="og:type" content="website" />
<meta property="og:url" content="https://outlet-atlas.com/" />
<meta property="og:image" content="https://outlet-atlas.com/og-image.jpg?v=3" />
<meta property="og:image:secure_url" content="https://outlet-atlas.com/og-image.jpg?v=3" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Outlet Atlas" />
<meta
name="twitter:description"
content="Discover Europe's best outlet shopping destinations."
/>
<meta name="twitter:image" content="https://outlet-atlas.com/og-image.jpg?v=3" />
</Helmet>
<ScrollToTop />
<Navbar />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/outlet/:slug" element={<OutletPage />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/countries" element={<Countries />} />
<Route path="/outlets" element={<Outlets />} />
<Route
path="/france-outlets"
element={<CountryOutletPage countryKey="france" />}
/>
<Route
path="/italy-outlets"
element={<CountryOutletPage countryKey="italy" />}
/>
<Route
path="/germany-outlets"
element={<CountryOutletPage countryKey="germany" />}
/>
<Route
path="/united-kingdom-outlets"
element={<CountryOutletPage countryKey="united-kingdom" />}
/>
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-of-use" element={<TermsOfUse />} />
<Route path="*" element={<NotFound />} />
</Routes>

<Footer />
</BrowserRouter>
);
}

export default App;