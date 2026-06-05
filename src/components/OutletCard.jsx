import { Link } from "react-router";

function createSlug(text) {
return text
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/[^a-z0-9]+/g, "-")
.replace(/(^-|-$)/g, "");
}

function OutletCard({ outlet }) {
return (
<div className="card">
<img src={outlet.image} alt={outlet.name} className="card-image" />

<div className="card-content">
<div className="badge-row">
<span>{outlet.country}</span>
<span>{outlet.taxFree === "Yes" ? "Tax Free" : "Info"}</span>
</div>

<h2>{outlet.name}</h2>
<p>📍 {outlet.city}</p>
<p>🏬 {outlet.stores}</p>
<p>✈️ Airport: {outlet.airport}</p>

<Link className="view-button" to={`/outlet/${createSlug(outlet.name)}`}>
View Details
</Link>
</div>
</div>
);
}

export default OutletCard;
