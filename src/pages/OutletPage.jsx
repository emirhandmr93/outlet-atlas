import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
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

const backTranslations = {
en: "Back to all outlets",
tr: "Tüm outletlere dön",
fr: "Retour à tous les outlets",
de: "Zurück zu allen Outlets",
it: "Torna a tutti gli outlet",
};

function OutletPage() {
const { slug } = useParams();
const [language, setLanguage] = useState(
localStorage.getItem("language") || "en"
);

const outlet = outlets.find((item) => createSlug(item.name) === slug);

useEffect(() => {
function handleLanguageChange() {
setLanguage(localStorage.getItem("language") || "en");
}

window.addEventListener("languageChange", handleLanguageChange);

return () => {
window.removeEventListener("languageChange", handleLanguageChange);
};
}, []);

useEffect(() => {
if (!outlet) return;

document.title = `${outlet.name} Guide | Outlet Atlas`;

const description =
typeof outlet.description === "object"
? outlet.description.en
: outlet.description;

let meta = document.querySelector('meta[name="description"]');

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content =
description ||
`Complete guide to ${outlet.name}. Stores, brands, opening hours, tax free shopping, transportation and visitor tips.`;
}, [outlet]);

if (!outlet) {
return (
<div className="not-found">
<h1>Outlet not found</h1>
<Link to="/">Back to Home</Link>
</div>
);
}

return (
<div className="outlet-page">
<Link to="/" className="back-link">
← {backTranslations[language] || backTranslations.en}
</Link>

<OutletDetail outlet={outlet} language={language} />
</div>
);
}

export default OutletPage;