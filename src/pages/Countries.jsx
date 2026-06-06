import { Link } from "react-router";
import { outlets } from "../data/outlets";

function Countries() {
const countries = [...new Set(outlets.map((outlet) => outlet.country))];

return (
<main className="countries-page">
<section className="countries-content">
<h1>Countries</h1>
<p>Browse outlet destinations by country.</p>

<div className="country-list-grid">
{countries.map((country) => {
const outletCount = outlets.filter(
(outlet) => outlet.country === country
).length;

return (
<Link
to={`/outlets?country=${country}`}
className="country-list-card"
key={country}
>
<h3>{country}</h3>
<p>
{outletCount} {outletCount === 1 ? "outlet" : "outlets"}
</p>
</Link>
);
})}
</div>
</section>
</main>
);
}

export default Countries;