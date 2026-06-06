import { Link } from "react-router";

function createSlug(text) {
return text
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/[^a-z0-9]+/g, "-")
.replace(/(^-|-$)/g, "");
}

const fallbackImage =
"https://images.unsplash.com/photo-1441986300917-64674bd600d8";

function OutletCard({
outlet,
isFavorite,
toggleFavorite,
t,
}) {
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
<span>{outlet.country}</span>

<span>
{outlet.taxFree === "Yes"
? t.taxFree
: t.info}
</span>
</div>

<h2>{outlet.name}</h2>

<p>📍 {outlet.city}</p>

<p>🏬 {outlet.stores}</p>

<p>
✈️ {t.airport}: {outlet.airport}
</p>

<p>
🚆 {t.cityCenter}:{" "}
{outlet.centerDistance ||
t.informationComingSoon}
</p>

<p>
🛍️ {t.bestFor}:{" "}
{outlet.bestFor || t.luxuryFashion}
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
