import { useState } from "react";
import { outlets } from "../data/outlets";
import OutletCard from "../components/OutletCard";
import CountryFilter from "../components/CountryFilter";

function Home() {
const [search, setSearch] = useState("");
const [selectedCountry, setSelectedCountry] = useState("All");

const countries = [
"All",
...new Set(outlets.map((outlet) => outlet.country)),
];

const filteredOutlets = outlets.filter((outlet) => {
const searchText = search.toLowerCase();

const matchesSearch =
outlet.name.toLowerCase().includes(searchText) ||
outlet.city.toLowerCase().includes(searchText) ||
outlet.country.toLowerCase().includes(searchText) ||
outlet.brands.some((brand) =>
brand.toLowerCase().includes(searchText)
);

const matchesCountry =
selectedCountry === "All" ||
outlet.country === selectedCountry;

return matchesSearch && matchesCountry;
});

return (
<>
<section className="hero">
<h1>Outlet Atlas</h1>

<p>
Discover the world's best outlet shopping destinations.
</p>

<input
type="text"
placeholder="Search city, country, outlet or brand..."
className="search-box"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>
</section>

<CountryFilter
countries={countries}
selectedCountry={selectedCountry}
setSelectedCountry={setSelectedCountry}
setSelectedOutlet={() => {}}
/>

{filteredOutlets.length > 0 ? (
<section className="outlets">
{filteredOutlets.map((outlet) => (
<OutletCard
key={outlet.name}
outlet={outlet}
/>
))}
</section>
) : (
<div className="empty-state">
<h2>No outlets found</h2>

<p>
Try searching another city, country,
outlet name or brand.
</p>
</div>
)}
</>
);
}

export default Home;
