import { useEffect, useState } from "react";
import { Link } from "react-router";
import { translations } from "../i18n/translations";

function Navbar() {
const [language, setLanguage] = useState(
localStorage.getItem("language") || "en"
);

useEffect(() => {
function handleLanguageChange() {
setLanguage(localStorage.getItem("language") || "en");
}

window.addEventListener("languageChange", handleLanguageChange);

return () => {
window.removeEventListener("languageChange", handleLanguageChange);
};
}, []);

const t = translations[language];

return (
<nav className="navbar">
<Link to="/" className="nav-logo">
Outlet Atlas
</Link>

<div className="nav-links">
<Link
to="/"
onClick={() => {
setTimeout(() => {
window.scrollTo({ top: 0, behavior: "smooth" });
}, 50);
}}
>
{t.navHome}
</Link>
<Link to="/countries">{t.navCountries}</Link>
<Link to="/outlets">{t.navOutlets}</Link>
<Link to="/about">{t.navAbout}</Link>
<Link to="/contact">{t.navContact}</Link>
</div>
</nav>
);
}

export default Navbar;