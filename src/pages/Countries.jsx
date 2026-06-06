import { Link } from "react-router";
import { outlets } from "../data/outlets";

function getText(value, language) {
if (typeof value === "object" && value !== null && !Array.isArray(value)) {
return value[language] || value.en || "";
}

return value || "";
}

function Countries() {
const language = localStorage.getItem("language") || "en";

const countries = [
...new Set(outlets.map((outlet) => getText(outlet.country, "en"))),
];

return (
<main className="countries-page">
<section className="countries-content">
<h1>Countries</h1>
<p>Browse outlet destinations by country.</p>

<div className="country-list-grid">
{countries.map((country) => {
const outletCount = outlets.filter(
(outlet) => getText(outlet.country, "en") === country
).length;

return (
<Link
to={`/outlets?country=${country}`}
className="country-list-card"
key={country}
>
<h3>{getText({ en: country }, language) || country}</h3>
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