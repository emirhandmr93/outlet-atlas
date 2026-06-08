import "./App.css";
import { useEffect, lazy, Suspense } from "react";
import {
BrowserRouter,
Routes,
Route,
useLocation,
useParams,
Navigate,
} from "react-router";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const OutletPage = lazy(() => import("./pages/OutletPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Countries = lazy(() => import("./pages/Countries"));
const Outlets = lazy(() => import("./pages/Outlets"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CountryOutletPage = lazy(() => import("./pages/CountryOutletPage"));

const supportedLanguages = ["en", "tr", "fr", "de", "it", "es", "ru"];

function getBrowserLanguage() {
const browserLanguage = navigator.language?.slice(0, 2);
return supportedLanguages.includes(browserLanguage) ? browserLanguage : "en";
}

function ScrollToTop() {
const location = useLocation();

useEffect(() => {
window.scrollTo(0, 0);
}, [location.pathname]);

return null;
}

function LanguageRedirect() {
const savedLanguage = localStorage.getItem("language");
const browserLanguage = getBrowserLanguage();
const language = supportedLanguages.includes(savedLanguage)
? savedLanguage
: browserLanguage;

return <Navigate to={`/${language}`} replace />;
}

function LanguageRoute({ children }) {
const { lang } = useParams();

if (!supportedLanguages.includes(lang)) {
return <NotFound />;
}

localStorage.setItem("language", lang);

return children;
}

function SeoHead() {
const location = useLocation();
const pathParts = location.pathname.split("/").filter(Boolean);
const firstPart = pathParts[0];

const pathWithoutLanguage = supportedLanguages.includes(firstPart)
? "/" + pathParts.slice(1).join("/")
: location.pathname;

const cleanPath =
pathWithoutLanguage === "/" || pathWithoutLanguage === ""
? ""
: pathWithoutLanguage;

const currentLanguage = supportedLanguages.includes(firstPart)
? firstPart
: "en";

const currentUrl = `https://www.outlet-atlas.com/${currentLanguage}${cleanPath}`;

return (
<Helmet>
<link rel="canonical" href={currentUrl} />

{supportedLanguages.map((language) => (
<link
key={language}
rel="alternate"
hrefLang={language}
href={`https://www.outlet-atlas.com/${language}${cleanPath}`}
/>
))}

<link
rel="alternate"
hrefLang="x-default"
href={`https://www.outlet-atlas.com/en${cleanPath}`}
/>

<meta property="og:title" content="Outlet Atlas" />
<meta
property="og:description"
content="Discover Europe's best outlet shopping destinations."
/>
<meta property="og:type" content="website" />
<meta property="og:url" content={currentUrl} />
<meta
property="og:image"
content="https://www.outlet-atlas.com/og-image.jpg?v=3"
/>
<meta
property="og:image:secure_url"
content="https://www.outlet-atlas.com/og-image.jpg?v=3"
/>
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Outlet Atlas" />
<meta
name="twitter:description"
content="Discover Europe's best outlet shopping destinations."
/>
<meta
name="twitter:image"
content="https://www.outlet-atlas.com/og-image.jpg?v=3"
/>
</Helmet>
);
}

function AppRoutes() {
return (
<Routes>
<Route path="/" element={<LanguageRedirect />} />

<Route
path="/:lang"
element={
<LanguageRoute>
<Home />
</LanguageRoute>
}
/>

<Route
path="/:lang/outlet/:slug"
element={
<LanguageRoute>
<OutletPage />
</LanguageRoute>
}
/>

<Route
path="/:lang/about"
element={
<LanguageRoute>
<About />
</LanguageRoute>
}
/>

<Route
path="/:lang/contact"
element={
<LanguageRoute>
<Contact />
</LanguageRoute>
}
/>

<Route
path="/:lang/countries"
element={
<LanguageRoute>
<Countries />
</LanguageRoute>
}
/>

<Route
path="/:lang/outlets"
element={
<LanguageRoute>
<Outlets />
</LanguageRoute>
}
/>

<Route
path="/:lang/france-outlets"
element={
<LanguageRoute>
<CountryOutletPage countryKey="france" />
</LanguageRoute>
}
/>

<Route
path="/:lang/italy-outlets"
element={
<LanguageRoute>
<CountryOutletPage countryKey="italy" />
</LanguageRoute>
}
/>

<Route
path="/:lang/germany-outlets"
element={
<LanguageRoute>
<CountryOutletPage countryKey="germany" />
</LanguageRoute>
}
/>

<Route
path="/:lang/united-kingdom-outlets"
element={
<LanguageRoute>
<CountryOutletPage countryKey="united-kingdom" />
</LanguageRoute>
}
/>

<Route
path="/:lang/switzerland-outlets"
element={
<LanguageRoute>
<CountryOutletPage countryKey="switzerland" />
</LanguageRoute>
}
/>

<Route
path="/:lang/netherlands-outlets"
element={
<LanguageRoute>
<CountryOutletPage countryKey="netherlands" />
</LanguageRoute>
}
/>

<Route
path="/:lang/greece-outlets"
element={
<LanguageRoute>
<CountryOutletPage countryKey="greece" />
</LanguageRoute>
}
/>

<Route
path="/:lang/austria-outlets"
element={
<LanguageRoute>
<CountryOutletPage countryKey="austria" />
</LanguageRoute>
}
/>

<Route
path="/:lang/belgium-outlets"
element={
<LanguageRoute>
<CountryOutletPage countryKey="belgium" />
</LanguageRoute>
}
/>

<Route
path="/:lang/privacy-policy"
element={
<LanguageRoute>
<PrivacyPolicy />
</LanguageRoute>
}
/>

<Route
path="/:lang/terms-of-use"
element={
<LanguageRoute>
<TermsOfUse />
</LanguageRoute>
}
/>

<Route path="*" element={<NotFound />} />
</Routes>
);
}

function App() {
return (
<BrowserRouter>
<SeoHead />
<ScrollToTop />
<Navbar />

<Suspense fallback={<div className="loading-page">Loading...</div>}>
<AppRoutes />
</Suspense> 

<Footer />
</BrowserRouter>
);
}

export default App;