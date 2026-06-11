import { Link, useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { outlets } from "../data/outlets";
import OutletDetail from "../components/OutletDetail";

function createSlug(text) {
return text
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/[^a-z0-9]+/g, "-")
.replace(/(^-|-$)/g, "");
}

function getText(value, language) {
if (typeof value === "object" && value !== null && !Array.isArray(value)) {
return value[language] || value.en || "";
}

return value || "";
}

const backTranslations = {
en: "Back",
tr: "Geri dön",
fr: "Retour",
de: "Zurück",
it: "Indietro",
es: "Volver",
ru: "Назад",
};

const notFoundTranslations = {
en: { title: "Outlet not found", back: "Back to Home" },
tr: { title: "Outlet bulunamadı", back: "Ana sayfaya dön" },
fr: { title: "Outlet introuvable", back: "Retour à l'accueil" },
de: { title: "Outlet nicht gefunden", back: "Zur Startseite" },
it: { title: "Outlet non trovato", back: "Torna alla Home" },
es: { title: "Outlet no encontrado", back: "Volver al inicio" },
ru: { title: "Аутлет не найден", back: "На главную" },
};

function OutletPage() {
const { lang, slug } = useParams();
const navigate = useNavigate();

const [language, setLanguage] = useState(
localStorage.getItem("language") || lang || "en"
);

const outlet = outlets.find(
(item) =>
item &&
item.name &&
createSlug(item.name) === decodeURIComponent(slug || "")
);

useEffect(() => {
function handleLanguageChange() {
setLanguage(localStorage.getItem("language") || lang || "en");
}

window.addEventListener("languageChange", handleLanguageChange);

return () => {
window.removeEventListener("languageChange", handleLanguageChange);
};
}, [lang]);

const currentUrl = `https://outlet-atlas.com/${
lang || language
}/outlet/${slug}`;

const outletName = outlet?.name || "Outlet Guide";
const outletCountry = outlet ? getText(outlet.country, language) : "";
const outletCity = outlet ? getText(outlet.city, language) : "";
const outletDescription = outlet
? getText(outlet.description, language)
: "";

const seoTitle = outlet
? `${outletName} | ${outletCountry} Outlet Guide | Outlet Atlas`
: "Outlet Not Found | Outlet Atlas";

const seoDescription =
outletDescription ||
(outlet
? `Complete guide to ${outletName} in ${outletCity}, ${outletCountry}. Stores, brands, opening hours, tax free shopping, transport and visitor tips.`
: "Outlet Atlas helps travellers discover the best outlet shopping destinations in Europe.");

const savedBackState = sessionStorage.getItem("outletAtlasBackState");
const parsedBackState = savedBackState ? JSON.parse(savedBackState) : null;
const backUrl = parsedBackState?.path || `/${lang || language}`;

useEffect(() => {
document.title = seoTitle;

let meta = document.querySelector('meta[name="description"]');

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content = seoDescription;
}, [seoTitle, seoDescription]);

if (!outlet) {
const notFound = notFoundTranslations[language] || notFoundTranslations.en;

return (
<>
<Helmet>
<title>{seoTitle}</title>
<meta name="description" content={seoDescription} />
<link rel="canonical" href={currentUrl} />
<meta property="og:title" content={seoTitle} />
<meta property="og:description" content={seoDescription} />
<meta property="og:url" content={currentUrl} />
</Helmet>

<div className="not-found">
<h1>{notFound.title}</h1>
<Link to={`/${lang || language}`}>{notFound.back}</Link>
</div>
</>
);
}

return (
<>
<Helmet>
<title>{seoTitle}</title>
<meta name="description" content={seoDescription} />
<link rel="canonical" href={currentUrl} />

<meta property="og:title" content={seoTitle} />
<meta property="og:description" content={seoDescription} />
<meta property="og:type" content="article" />
<meta property="og:url" content={currentUrl} />
<meta
property="og:image"
content="https://outlet-atlas.com/og-image.jpg?v=3"
/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={seoTitle} />
<meta name="twitter:description" content={seoDescription} />
<meta
name="twitter:image"
content="https://outlet-atlas.com/og-image.jpg?v=3"
/>
</Helmet>

<div className="outlet-page">
<button
className="back-link"
onClick={() => navigate(-1)}
>
← {backTranslations[language] || backTranslations.en}
</button>

<OutletDetail outlet={outlet} language={language} />
</div>
</>
);
}

export default OutletPage;