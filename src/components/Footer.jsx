import { Link } from "react-router";

function Footer() {
const language = localStorage.getItem("language") || "en";

const footerText = {
en: {
description:
"Discover the world's best outlet shopping destinations.",
privacy: "Privacy Policy",
terms: "Terms of Use",
contact: "Contact",
copyright: "All rights reserved.",
},

tr: {
description:
"Dünyanın en iyi outlet alışveriş destinasyonlarını keşfedin.",
privacy: "Gizlilik Politikası",
terms: "Kullanım Şartları",
contact: "İletişim",
copyright: "Tüm hakları saklıdır.",
},

fr: {
description:
"Découvrez les meilleures destinations outlet du monde.",
privacy: "Politique de confidentialité",
terms: "Conditions d'utilisation",
contact: "Contact",
copyright: "Tous droits réservés.",
},

de: {
description:
"Entdecken Sie die besten Outlet-Shopping-Ziele der Welt.",
privacy: "Datenschutz",
terms: "Nutzungsbedingungen",
contact: "Kontakt",
copyright: "Alle Rechte vorbehalten.",
},

it: {
description:
"Scopri le migliori destinazioni outlet del mondo.",
privacy: "Privacy Policy",
terms: "Termini di utilizzo",
contact: "Contatti",
copyright: "Tutti i diritti riservati.",
},
};

const t = footerText[language] || footerText.en;

return (
<footer className="footer">
<div className="footer-content">
<h3>Outlet Atlas</h3>

<p>{t.description}</p>

<div className="footer-links">
<Link to="/privacy-policy">{t.privacy}</Link>

<Link to="/terms-of-use">{t.terms}</Link>

<Link to="/contact">{t.contact}</Link>
</div>

<p className="copyright">
© 2026 Outlet Atlas. {t.copyright}
</p>
</div>
</footer>
);
}

export default Footer;