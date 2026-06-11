import { Link, useLocation } from "react-router";

function formatStores(value, language) {
if (!value) return "";

const number = String(value).match(/\d+\+/)?.[0] || String(value);

const labels = {
en: "Stores",
tr: "Mağaza",
fr: "Boutiques",
de: "Geschäfte",
it: "Negozi",
es: "Tiendas",
ru: "Магазинов",
};

return `${number} ${labels[language] || labels.en}`;
}

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

function getTaxFreeBadge(value, language) {
const labels = {
available: {
en: "Available",
tr: "Mevcut",
fr: "Disponible",
de: "Verfügbar",
it: "Disponibile",
es: "Disponible",
ru: "Доступно",
},
limited: {
en: "Limited",
tr: "Sınırlı",
fr: "Limité",
de: "Begrenzt",
it: "Limitato",
es: "Limitado",
ru: "Ограничено",
},
none: {
en: "Not Available",
tr: "Yok",
fr: "Indisponible",
de: "Nicht verfügbar",
it: "Non disponibile",
es: "No disponible",
ru: "Недоступно",
},
};

if (value === "Yes") {
return {
color: "#22c55e",
label: labels.available[language] || labels.available.en,
};
}

if (value === "Limited") {
return {
color: "#eab308",
label: labels.limited[language] || labels.limited.en,
};
}

return {
color: "#ef4444",
label: labels.none[language] || labels.none.en,
};
}

const fallbackImage =
"https://images.unsplash.com/photo-1441986300917-64674bd600d8";

function OutletCard({
outlet,
isFavorite,
toggleFavorite,
t,
language,
onOpen,
}) {
const location = useLocation();
const pathLanguage = location.pathname.split("/")[1];

const currentLanguage =
language || pathLanguage || localStorage.getItem("language") || "en";

const outletUrl = `/${currentLanguage}/outlet/${createSlug(outlet.name)}`;
const taxFreeBadge = getTaxFreeBadge(outlet.taxFree, currentLanguage);

function handleOpen() {
if (onOpen) {
onOpen();
}
}

return (
<article className="card">
<button
className={`favorite-button ${isFavorite ? "favorited" : ""}`}
onClick={(e) => {
e.preventDefault();
e.stopPropagation();
toggleFavorite(outlet.name);
}}
>
{isFavorite ? "♥" : "♡"}
</button>

<Link to={outletUrl} className="card-link" onClick={handleOpen}>
<img
loading="lazy"
decoding="async"
src={outlet.image || fallbackImage}
alt={outlet.name}
className="card-image"
onError={(e) => {
e.currentTarget.src = fallbackImage;
}}
/>

<div className="card-content">
<div className="badge-row">
<span>{getText(outlet.country, currentLanguage)}</span>

<span className="tax-free-badge">
<span
className="tax-free-dot"
style={{ backgroundColor: taxFreeBadge.color }}
></span>
{taxFreeBadge.label}
</span>
</div>

<h2>{outlet.name}</h2>

<p>📍 {getText(outlet.city, currentLanguage)}</p>

<p>🏬 {formatStores(outlet.stores, currentLanguage)}</p>

<p>
✈️ {t.airport}: {getText(outlet.airport, currentLanguage)}
</p>

<p>
🚆 {t.cityCenter}:{" "}
{getText(outlet.centerDistance, currentLanguage) ||
t.informationComingSoon}
</p>

<p>
🛍️ {t.bestFor}:{" "}
{getText(outlet.bestFor, currentLanguage) || t.luxuryFashion}
</p>

<p>
⭐ {t.rating}: {outlet.rating || "4.7"} / 5
</p>

<span className="view-button">{t.viewDetails}</span>
</div>
</Link>
</article>
);
}

export default OutletCard;