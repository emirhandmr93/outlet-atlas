import { Link } from "react-router";
import { useEffect } from "react";
import { outlets } from "../data/outlets";

const countryTranslations = {
All: {
en: "All",
tr: "Tümü",
fr: "Tous",
de: "Alle",
it: "Tutti",
},
France: {
en: "France",
tr: "Fransa",
fr: "France",
de: "Frankreich",
it: "Francia",
},
"United Kingdom": {
en: "United Kingdom",
tr: "Birleşik Krallık",
fr: "Royaume-Uni",
de: "Vereinigtes Königreich",
it: "Regno Unito",
},
Italy: {
en: "Italy",
tr: "İtalya",
fr: "Italie",
de: "Italien",
it: "Italia",
},
Germany: {
en: "Germany",
tr: "Almanya",
fr: "Allemagne",
de: "Deutschland",
it: "Germania",
},
Austria: {
en: "Austria",
tr: "Avusturya",
fr: "Autriche",
de: "Österreich",
it: "Austria",
},
Switzerland: {
en: "Switzerland",
tr: "İsviçre",
fr: "Suisse",
de: "Schweiz",
it: "Svizzera",
},
Netherlands: {
en: "Netherlands",
tr: "Hollanda",
fr: "Pays-Bas",
de: "Niederlande",
it: "Paesi Bassi",
},
Belgium: {
en: "Belgium",
tr: "Belçika",
fr: "Belgique",
de: "Belgien",
it: "Belgio",
},
};

const pageText = {
en: {
title: "Countries",
subtitle: "Browse outlet destinations by country.",
singleOutlet: "outlet",
multipleOutlets: "outlets",
},
tr: {
title: "Ülkeler",
subtitle: "Outlet destinasyonlarını ülkelere göre keşfet.",
singleOutlet: "outlet",
multipleOutlets: "outlet",
},
fr: {
title: "Pays",
subtitle: "Parcourez les destinations outlet par pays.",
singleOutlet: "outlet",
multipleOutlets: "outlets",
},
de: {
title: "Länder",
subtitle: "Entdecken Sie Outlet-Ziele nach Ländern.",
singleOutlet: "Outlet",
multipleOutlets: "Outlets",
},
it: {
title: "Paesi",
subtitle: "Scopri le destinazioni outlet per paese.",
singleOutlet: "outlet",
multipleOutlets: "outlet",
},
};

function getText(value, language) {
if (typeof value === "object" && value !== null && !Array.isArray(value)) {
return value[language] || value.en || "";
}

return value || "";
}

function Countries() {
const language = localStorage.getItem("language") || "en";
const t = pageText[language] || pageText.en;

useEffect(() => {
document.title = "Countries | Outlet Atlas";

let meta = document.querySelector(
'meta[name="description"]'
);

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content =
"Browse outlet shopping destinations by country and discover luxury, fashion and designer outlets across Europe.";
}, []);

const countries = [
...new Set(outlets.map((outlet) => getText(outlet.country, "en"))),
];

return (
<main className="countries-page">
<section className="countries-content">
<h1>{t.title}</h1>
<p>{t.subtitle}</p>

<div className="country-list-grid">
{countries.map((country) => {
const outletCount = outlets.filter(
(outlet) => getText(outlet.country, "en") === country
).length;

const countryName =
countryTranslations[country]?.[language] || country;

return (
<Link
to={
country === "France"
? "/france-outlets"
: country === "Italy"
? "/italy-outlets"
: country === "Germany"
? "/germany-outlets"
: country === "United Kingdom"
? "/united-kingdom-outlets"
: `/outlets?country=${country}`
}
className="country-list-card"
key={country}
>
<h3>{countryName}</h3>

<p>
{outletCount}{" "}
{outletCount === 1
? t.singleOutlet
: t.multipleOutlets}
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