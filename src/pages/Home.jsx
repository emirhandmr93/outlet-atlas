import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { outlets } from "../data/outlets";
import OutletCard from "../components/OutletCard";
import CountryFilter from "../components/CountryFilter";
import { translations } from "../i18n/translations";

const languages = [
{ code: "en", flag: "/flags/gb.png", title: "English" },
{ code: "tr", flag: "/flags/tr.png", title: "Türkçe" },
{ code: "fr", flag: "/flags/fr.png", title: "Français" },
{ code: "de", flag: "/flags/de.png", title: "Deutsch" },
{ code: "it", flag: "/flags/it.png", title: "Italiano" },
{ code: "es", flag: "/flags/es.png", title: "Español" },
{ code: "ru", flag: "/flags/ru.png", title: "Русский" },
];

const supportedLanguages = ["en", "tr", "fr", "de", "it", "es", "ru"];

function getText(value, language) {
if (typeof value === "object" && value !== null && !Array.isArray(value)) {
return value[language] || value.en || "";
}

return value || "";
}

function Home() {
const location = useLocation();
const navigate = useNavigate();

const pathLanguage = location.pathname.split("/")[1];
const currentLanguage = supportedLanguages.includes(pathLanguage)
? pathLanguage
: "en";

const [search, setSearch] = useState("");
const [selectedCountries, setSelectedCountries] = useState([]);
const [favorites, setFavorites] = useState([]);
const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
const [language, setLanguage] = useState(currentLanguage);

const t = translations[language] || translations.en;

useEffect(() => {
const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
setFavorites(savedFavorites);
}, []);

useEffect(() => {
setLanguage(currentLanguage);
localStorage.setItem("language", currentLanguage);
window.dispatchEvent(new Event("languageChange"));
}, [currentLanguage]);

function changeLanguage(newLanguage) {
setLanguage(newLanguage);
localStorage.setItem("language", newLanguage);
window.dispatchEvent(new Event("languageChange"));
navigate(`/${newLanguage}`);
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

const countries = [
    "All",
    ...new Set(
    outlets
    .map((outlet) => getText(outlet.country, "en"))
    .filter(Boolean)
    ),
    ];

const filteredOutlets = outlets.filter((outlet) => {
const searchText = search.toLowerCase();

const outletCity = getText(outlet.city, language).toLowerCase();
const outletCountry = getText(outlet.country, language).toLowerCase();

const matchesSearch =
outlet.name.toLowerCase().includes(searchText) ||
outletCity.includes(searchText) ||
outletCountry.includes(searchText) ||
outlet.brands.some((brand) => brand.toLowerCase().includes(searchText));

const matchesCountry =
selectedCountries.length === 0 ||
selectedCountries.includes(getText(outlet.country, "en"));

const matchesFavorite =
!showOnlyFavorites || favorites.includes(outlet.name);

return matchesSearch && matchesCountry && matchesFavorite;
});

return (
<>
<section className="hero">
<div className="language-switcher">
{languages.map((item) => (
<button
key={item.code}
className={language === item.code ? "active-language" : ""}
onClick={() => changeLanguage(item.code)}
title={item.title}
>
<img src={item.flag} alt={item.code} className="flag-icon" />
</button>
))}
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
outlets={outlets}
selectedCountries={selectedCountries}
setSelectedCountries={setSelectedCountries}
setSelectedOutlet={() => {}}
language={language}
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
language={language}
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