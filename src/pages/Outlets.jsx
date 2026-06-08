import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { outlets } from "../data/outlets";
import OutletCard from "../components/OutletCard";
import { translations } from "../i18n/translations";

function getText(value, language) {
if (typeof value === "object" && value !== null && !Array.isArray(value)) {
return value[language] || value.en || "";
}

return value || "";
}

function Outlets() {
const [searchParams] = useSearchParams();
const selectedCountry = searchParams.get("country");

const language = localStorage.getItem("language") || "en";
const t = translations[language] || translations.en;

useEffect(() => {
document.title = selectedCountry
? `${selectedCountry} Outlets | Outlet Atlas`
: `Outlets | Outlet Atlas`;

let meta = document.querySelector(
'meta[name="description"]'
);

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content = selectedCountry
? `Discover the best outlet shopping destinations in ${selectedCountry}.`
: "Browse outlet shopping destinations across Europe and discover stores, brands, tax free shopping information and visitor guides.";
}, [selectedCountry]);

const filteredOutlets = selectedCountry
? outlets.filter(
(outlet) => getText(outlet.country, "en") === selectedCountry
)
: outlets;

return (
<main className="page-container">
<section className="content-page">
<h1>
{selectedCountry
? `${selectedCountry} ${t.navOutlets}`
: t.navOutlets}
</h1>

<p>
{selectedCountry
? `Browse outlet destinations in ${selectedCountry}.`
: "Browse all outlet destinations in one place."}
</p>
</section>

<section className="outlets">
{filteredOutlets.map((outlet) => (
<OutletCard
key={outlet.name}
outlet={outlet}
isFavorite={false}
toggleFavorite={() => {}}
t={t}
language={language}
/>
))}
</section>
</main>
);
}

export default Outlets;