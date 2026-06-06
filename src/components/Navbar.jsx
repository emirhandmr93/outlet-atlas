import { translations } from "../i18n/translations";

function Navbar({ language = "en" }) {
const t = translations[language];

return (
<nav className="navbar">
<div className="nav-logo">Outlet Atlas</div>

<div className="nav-links">
<a href="#">{t.navHome}</a>
<a href="#">{t.navCountries}</a>
<a href="#">{t.navOutlets}</a>
<a href="#">{t.navAbout}</a>
<a href="#">{t.navContact}</a>
</div>
</nav>
);
}

export default Navbar;
