import { useSearchParams } from "react-router";
import { outlets } from "../data/outlets";
import OutletCard from "../components/OutletCard";
import { translations } from "../i18n/translations";

function Outlets() {
const [searchParams] = useSearchParams();
const selectedCountry = searchParams.get("country");

const language = localStorage.getItem("language") || "en";
const t = translations[language];

const filteredOutlets = selectedCountry
? outlets.filter((outlet) => outlet.country === selectedCountry)
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
/>
))}
</section>
</main>
);
}

export default Outlets;