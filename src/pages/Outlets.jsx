import { outlets } from "../data/outlets";
import OutletCard from "../components/OutletCard";
import { translations } from "../i18n/translations";

function Outlets() {
const language = localStorage.getItem("language") || "en";
const t = translations[language];

return (
<main className="page-container">
<section className="content-page">
<h1>{t.navOutlets}</h1>
<p>Browse all outlet destinations in one place.</p>
</section>

<section className="outlets">
{outlets.map((outlet) => (
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