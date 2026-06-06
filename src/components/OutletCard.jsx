import { Link } from "react-router";

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

return value;
}

const fallbackImage =
"https://images.unsplash.com/photo-1441986300917-64674bd600d8";

function OutletCard({
outlet,
isFavorite,
toggleFavorite,
t,
language,
}) {
const currentLanguage = language || localStorage.getItem("language") || "en";

return (
<div className="card">
<button
className={`favorite-button ${isFavorite ? "favorited" : ""}`}
onClick={() => toggleFavorite(outlet.name)}
>
{isFavorite ? "♥" : "♡"}
</button>

<img
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

<span>
{outlet.taxFree === "Yes" ? t.taxFree : t.info}
</span>
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
to={`/outlet/${createSlug(outlet.name)}`}
>
{t.viewDetails}
</Link>
</div>
</div>
);
}

export default OutletCard;
