import { useState } from "react";
import { Link, useLocation } from "react-router";
import { translations } from "../i18n/translations";

const supportedLanguages = ["en", "tr", "fr", "de", "it", "es", "ru"];

function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const location = useLocation();

const pathLanguage = location.pathname.split("/")[1];

const language = supportedLanguages.includes(pathLanguage)
? pathLanguage
: "en";

const t = translations[language] || translations.en;

function closeMenu() {
setIsOpen(false);
}

return (
<nav className="navbar">
<Link to={`/${language}`} className="nav-logo" onClick={closeMenu}>
<img src="/atlas-logo.png" alt="Outlet Atlas" className="logo-icon" />
<span>Outlet Atlas</span>
</Link>

<button
className="mobile-menu-button"
onClick={() => setIsOpen(!isOpen)}
aria-label="Open menu"
>
☰
</button>

<div className={`nav-links ${isOpen ? "nav-links-open" : ""}`}>
<Link to={`/${language}`} onClick={closeMenu}>
{t.navHome}
</Link>

<Link to={`/${language}/countries`} onClick={closeMenu}>
{t.navCountries}
</Link>

<Link to={`/${language}/outlets`} onClick={closeMenu}>
{t.navOutlets}
</Link>

<Link to={`/${language}/tax-free`} onClick={closeMenu}>
{t.navTaxFree || "Tax Free"}
</Link>

<Link to={`/${language}/about`} onClick={closeMenu}>
{t.navAbout}
</Link>

<Link to={`/${language}/contact`} onClick={closeMenu}>
{t.navContact}
</Link>
</div>
</nav>
);
}

export default Navbar;