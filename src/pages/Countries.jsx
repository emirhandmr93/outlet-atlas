import { Link, useLocation } from "react-router";
import { useEffect } from "react";
import { outlets } from "../data/outlets";

const supportedLanguages = ["en", "tr", "fr", "de", "it", "es", "ru"];

const countryTranslations = {
France: {
en: "France",
tr: "Fransa",
fr: "France",
de: "Frankreich",
it: "Francia",
es: "Francia",
ru: "Франция",
},

"United Kingdom": {
en: "United Kingdom",
tr: "Birleşik Krallık",
fr: "Royaume-Uni",
de: "Vereinigtes Königreich",
it: "Regno Unito",
es: "Reino Unido",
ru: "Великобритания",
},

Italy: {
en: "Italy",
tr: "İtalya",
fr: "Italie",
de: "Italien",
it: "Italia",
es: "Italia",
ru: "Италия",
},

Germany: {
en: "Germany",
tr: "Almanya",
fr: "Allemagne",
de: "Deutschland",
it: "Germania",
es: "Alemania",
ru: "Германия",
},

Austria: {
en: "Austria",
tr: "Avusturya",
fr: "Autriche",
de: "Österreich",
it: "Austria",
es: "Austria",
ru: "Австрия",
},

Switzerland: {
en: "Switzerland",
tr: "İsviçre",
fr: "Suisse",
de: "Schweiz",
it: "Svizzera",
es: "Suiza",
ru: "Швейцария",
},

Netherlands: {
en: "Netherlands",
tr: "Hollanda",
fr: "Pays-Bas",
de: "Niederlande",
it: "Paesi Bassi",
es: "Países Bajos",
ru: "Нидерланды",
},

Belgium: {
en: "Belgium",
tr: "Belçika",
fr: "Belgique",
de: "Belgien",
it: "Belgio",
es: "Bélgica",
ru: "Бельгия",
},

Greece: {
en: "Greece",
tr: "Yunanistan",
fr: "Grèce",
de: "Griechenland",
it: "Grecia",
es: "Grecia",
ru: "Греция",
},

Turkey: {
en: "Turkey",
tr: "Türkiye",
fr: "Turquie",
de: "Türkei",
it: "Turchia",
es: "Turquía",
ru: "Турция",
},
};

const countryRoutes = {
France: "france-outlets",
Italy: "italy-outlets",
Germany: "germany-outlets",
"United Kingdom": "united-kingdom-outlets",
Switzerland: "switzerland-outlets",
Netherlands: "netherlands-outlets",
Greece: "greece-outlets",
Austria: "austria-outlets",
Belgium: "belgium-outlets",
Turkey: "turkey-outlets",
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

es: {
title: "Países",
subtitle: "Explora destinos outlet por país.",
singleOutlet: "outlet",
multipleOutlets: "outlets",
},

ru: {
title: "Страны",
subtitle: "Просматривайте outlet-направления по странам.",
singleOutlet: "аутлет",
multipleOutlets: "аутлетов",
},
};

function getText(value, language) {
if (typeof value === "object" && value !== null && !Array.isArray(value)) {
return value[language] || value.en || "";
}

return value || "";
}

function Countries() {
const location = useLocation();
const pathLanguage = location.pathname.split("/")[1];

const language = supportedLanguages.includes(pathLanguage)
? pathLanguage
: localStorage.getItem("language") || "en";

const t = pageText[language] || pageText.en;

useEffect(() => {
document.title = `${t.title} | Outlet Atlas`;

let meta = document.querySelector('meta[name="description"]');

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content =
"Browse outlet shopping destinations by country and discover luxury, fashion and designer outlets across Europe and Turkey.";
}, [t.title]);

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

const route = countryRoutes[country];
const countryUrl = route
? `/${language}/${route}`
: `/${language}/outlets?country=${encodeURIComponent(country)}`;

return (
<Link
to={countryUrl}
className="country-list-card"
key={country}
>
<h3>{countryName}</h3>

<p>
{outletCount}{" "}
{outletCount === 1 ? t.singleOutlet : t.multipleOutlets}
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