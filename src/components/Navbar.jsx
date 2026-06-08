import { Link, useLocation } from "react-router";
import { translations } from "../i18n/translations";

const supportedLanguages = ["en", "tr", "fr", "de", "it", "es", "ru"];

function Navbar() {
const location = useLocation();
const pathLanguage = location.pathname.split("/")[1];

const language = supportedLanguages.includes(pathLanguage)
? pathLanguage
: localStorage.getItem("language") || "en";

const t = translations[language] || translations.en;

return (
<nav className="navbar">
<Link to={`/${language}`} className="nav-logo">
<img src="/atlas-logo.png" alt="Outlet Atlas" className="logo-icon" />
<span>Outlet Atlas</span>
</Link>

<div className="nav-links">
<Link to={`/${language}`}>{t.navHome}</Link>
<Link to={`/${language}/countries`}>{t.navCountries}</Link>
<Link to={`/${language}/outlets`}>{t.navOutlets}</Link>
<Link to={`/${language}/about`}>{t.navAbout}</Link>
<Link to={`/${language}/contact`}>{t.navContact}</Link>
</div>
</nav>
);
}

export default Navbar;