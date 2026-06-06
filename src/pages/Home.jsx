import { useEffect, useState } from "react";
import { outlets } from "../data/outlets";
import OutletCard from "../components/OutletCard";
import CountryFilter from "../components/CountryFilter";
import { translations } from "../i18n/translations";

function Home() {
const [search, setSearch] = useState("");
const [selectedCountry, setSelectedCountry] = useState("All");
const [favorites, setFavorites] = useState([]);
const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
const [language, setLanguage] = useState("en");

const t = translations[language];

useEffect(() => {
const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
const savedLanguage = localStorage.getItem("language") || "en";

setFavorites(savedFavorites);
setLanguage(savedLanguage);
}, []);

function changeLanguage(newLanguage) {
setLanguage(newLanguage);
localStorage.setItem("language", newLanguage);
}

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
<div className="language-switcher">
<button
className={language === "en" ? "active-language" : ""}
onClick={() => changeLanguage("en")}
>
EN
</button>

<button
className={language === "tr" ? "active-language" : ""}
onClick={() => changeLanguage("tr")}
>
TR
</button>
</div>

<h1>{t.heroTitle}</h1>
<p>{t.heroSubtitle}</p>

<input
type="text"
placeholder={t.searchPlaceholder}
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
{showOnlyFavorites ? t.showingFavorites : t.showFavorites}
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
t={t}
/>
))}
</section>
) : (
<div className="empty-state">
<h2>{t.noOutletsTitle}</h2>
<p>{t.noOutletsText}</p>
</div>
)}
</>
);
}

export default Home;
