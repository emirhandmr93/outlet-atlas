import { Link, useLocation } from "react-router";

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

function getTaxFreeText(value, t) {
if (value === "Yes") return t.taxFreeAvailable || t.taxFree;
if (value === "Limited") return t.taxFreeLimited || t.info;
if (value === "No") return t.taxFreeNotAvailable || t.info;

return value || t.info;
}

const fallbackImage =
"https://images.unsplash.com/photo-1441986300917-64674bd600d8";

function OutletCard({ outlet, isFavorite, toggleFavorite, t, language }) {
const location = useLocation();
const pathLanguage = location.pathname.split("/")[1];

const currentLanguage =
language || pathLanguage || localStorage.getItem("language") || "en";

const outletUrl = `/${currentLanguage}/outlet/${createSlug(outlet.name)}`;

return (
<div
className="card"
onClick={() => {
window.location.href = outletUrl;
}}
style={{ cursor: "pointer" }}
>
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
<span>{getTaxFreeText(outlet.taxFree, t)}</span>
</div>

<h2>{outlet.name}</h2>

<p>📍 {getText(outlet.city, currentLanguage)}</p>
<p>🏬 {outlet.stores}</p>

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

<Link
className="view-button"
to={outletUrl}
onClick={(e) => e.stopPropagation()}
>
{t.viewDetails}
</Link>
</div>
</div>
);
}

export default OutletCard;