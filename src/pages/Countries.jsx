import { outlets } from "../data/outlets";

function Countries() {
const countries = [...new Set(outlets.map((outlet) => outlet.country))];

return (
<main className="page-container">
<section className="content-page">
<h1>Countries</h1>

<p>
Browse outlet destinations by country.
</p>

<div className="countries-grid">
{countries.map((country) => (
<div className="country-card" key={country}>
<h3>{country}</h3>

<p>
{
outlets.filter(
(outlet) => outlet.country === country
).length
}{" "}
outlets
</p>
</div>
))}
</div>
</section>
</main>
);
}

export default Countries;