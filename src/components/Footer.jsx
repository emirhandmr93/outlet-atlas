import { Link, useLocation } from "react-router";

function Footer() {
const location = useLocation();

const pathLang = location.pathname.split("/")[1];

const supportedLanguages = [
"en",
"tr",
"fr",
"de",
"it",
"es",
"ru",
];

const language = supportedLanguages.includes(pathLang)
? pathLang
: localStorage.getItem("language") || "en";

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

es: {
description:
"Descubre los mejores destinos outlet del mundo.",
privacy: "Política de Privacidad",
terms: "Términos de Uso",
contact: "Contacto",
copyright: "Todos los derechos reservados.",
},

ru: {
description:
"Откройте для себя лучшие аутлеты мира.",
privacy: "Политика конфиденциальности",
terms: "Условия использования",
contact: "Контакты",
copyright: "Все права защищены.",
},
};

const t = footerText[language] || footerText.en;

return (
<footer className="footer">
<div className="footer-content">
<h3>Outlet Atlas</h3>

<p>{t.description}</p>

<div className="footer-links">
<Link to={`/${language}/privacy-policy`}>
{t.privacy}
</Link>

<Link to={`/${language}/terms-of-use`}>
{t.terms}
</Link>

<Link to={`/${language}/contact`}>
{t.contact}
</Link>
</div>

<p className="copyright">
© 2026 Outlet Atlas. {t.copyright}
</p>
</div>
</footer>
);
}

export default Footer;