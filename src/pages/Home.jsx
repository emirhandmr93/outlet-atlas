import { useEffect, useState } from "react";
import { outlets } from "../data/outlets";
import OutletCard from "../components/OutletCard";
import CountryFilter from "../components/CountryFilter";

function Home() {
const [search, setSearch] = useState("");
const [selectedCountry, setSelectedCountry] = useState("All");
const [favorites, setFavorites] = useState([]);
const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

useEffect(() => {
const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
setFavorites(savedFavorites);
}, []);

function toggleFavorite(outletName) {
let updatedFavorites;

if (favorites.includes(outletName)) {
updatedFavorites = favorites.filter((name) => name !== outletName);
} else {
updatedFavorites = [...favorites, outletName];
}

setFavorites(updatedFavorites);
localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
}

const countries = ["All", ...new Set(outlets.map((outlet) => outlet.country))];

const filteredOutlets = outlets.filter((outlet) => {
const searchText = search.toLowerCase();

const matchesSearch =
outlet.name.toLowerCase().includes(searchText) ||
outlet.city.toLowerCase().includes(searchText) ||
outlet.country.toLowerCase().includes(searchText) ||
outlet.brands.some((brand) => brand.toLowerCase().includes(searchText));

const matchesCountry =
selectedCountry === "All" || outlet.country === selectedCountry;

const matchesFavorite =
!showOnlyFavorites || favorites.includes(outlet.name);

return matchesSearch && matchesCountry && matchesFavorite;
});

return (
<>
<section className="hero">
<h1>Outlet Atlas</h1>
<p>Discover the world's best outlet shopping destinations.</p>

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

<div className="favorites-filter">
<button
className={showOnlyFavorites ? "active-favorite-filter" : ""}
onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
>
{showOnlyFavorites ? "Showing Favorites ♥" : "Show My Favorites ♡"}
</button>
</div>

{filteredOutlets.length > 0 ? (
<section className="outlets">
{filteredOutlets.map((outlet) => (
<OutletCard
key={outlet.name}
outlet={outlet}
isFavorite={favorites.includes(outlet.name)}
toggleFavorite={toggleFavorite}
/>
))}
</section>
) : (
<div className="empty-state">
<h2>No outlets found</h2>
<p>Try changing your search, country filter or favorites filter.</p>
</div>
)}
</>
);
}

export default Home;
