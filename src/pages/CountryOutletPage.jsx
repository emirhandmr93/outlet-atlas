import { useEffect } from "react";
import { outlets } from "../data/outlets";
import OutletCard from "../components/OutletCard";
import { translations } from "../i18n/translations";

function getText(value, language) {
if (typeof value === "object" && value !== null && !Array.isArray(value)) {
return value[language] || value.en || "";
}

return value || "";
}

const countryPageData = {
france: {
country: "France",
title: "France Outlets",
description:
"Discover the best outlet shopping destinations in France, including luxury villages, designer outlets, tax free shopping, brands and travel tips.",
},
italy: {
country: "Italy",
title: "Italy Outlets",
description:
"Explore the best outlet shopping destinations in Italy, from Milan and Florence to Rome and Venice, with brands, transport and visitor tips.",
},
germany: {
country: "Germany",
title: "Germany Outlets",
description:
"Find the best outlet shopping destinations in Germany, including Metzingen, Wertheim, Ingolstadt and Berlin designer outlets.",
},
"united-kingdom": {
country: "United Kingdom",
title: "United Kingdom Outlets",
description:
"Browse the best outlet shopping destinations in the United Kingdom, including Bicester Village, Cheshire Oaks, York and London Designer Outlet.",
},
switzerland: {
country: "Switzerland",
title: "Switzerland Outlets",
description:
"Discover the best outlet shopping destinations in Switzerland, including FoxTown, Landquart Fashion Outlet and premium Swiss shopping locations.",
},
netherlands: {
country: "Netherlands",
title: "Netherlands Outlets",
description:
"Explore the best outlet shopping destinations in the Netherlands, including Roermond, Batavia Stad and Rosada Fashion Outlet.",
},
greece: {
country: "Greece",
title: "Greece Outlets",
description:
"Find the best outlet shopping destinations in Greece, including Athens and Thessaloniki outlet centres, airport shopping and designer discounts.",
},
austria: {
country: "Austria",
title: "Austria Outlets",
description:
"Discover outlet shopping destinations in Austria, including designer outlet villages, premium brands and travel-friendly shopping locations.",
},
belgium: {
country: "Belgium",
title: "Belgium Outlets",
description:
"Explore outlet shopping destinations in Belgium, including Maasmechelen Village and premium shopping options near major Belgian cities.",
},
};

function CountryOutletPage({ countryKey }) {
const language = localStorage.getItem("language") || "en";
const t = translations[language];

const page = countryPageData[countryKey];

useEffect(() => {
if (!page) return;

document.title = `${page.title} | Outlet Atlas`;

let meta = document.querySelector('meta[name="description"]');

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content = page.description;
}, [page]);

if (!page) return null;

const filteredOutlets = outlets.filter(
(outlet) => getText(outlet.country, "en") === page.country
);

return (
<main className="page-container">
<section className="content-page">
<h1>{page.title}</h1>
<p>{page.description}</p>
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

export default CountryOutletPage;