import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { outlets } from "../data/outlets";
import OutletCard from "../components/OutletCard";
import { translations } from "../i18n/translations";

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
"United Kingdom": {
en: "United Kingdom",
tr: "Birleşik Krallık",
fr: "Royaume-Uni",
de: "Vereinigtes Königreich",
it: "Regno Unito",
es: "Reino Unido",
ru: "Великобритания",
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
Greece: {
en: "Greece",
tr: "Yunanistan",
fr: "Grèce",
de: "Griechenland",
it: "Grecia",
es: "Grecia",
ru: "Греция",
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
Belgium: {
en: "Belgium",
tr: "Belçika",
fr: "Belgique",
de: "Belgien",
it: "Belgio",
es: "Bélgica",
ru: "Бельгия",
},
Spain: {
en: "Spain",
tr: "İspanya",
fr: "Espagne",
de: "Spanien",
it: "Spagna",
es: "España",
ru: "Испания",
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

const pageText = {
en: {
title: "Outlets",
subtitle: "Browse all outlet destinations in one place.",
countrySubtitle: "Browse outlet destinations in",
metaAll:
"Browse outlet shopping destinations across Europe and Turkey and discover stores, brands, tax free shopping information and visitor guides.",
metaCountry: "Discover the best outlet shopping destinations in",
},
tr: {
title: "Outletler",
subtitle: "Tüm outlet destinasyonlarını tek bir yerde keşfedin.",
countrySubtitle: "Outlet destinasyonlarını keşfedin:",
metaAll:
"Avrupa ve Türkiye genelindeki outlet alışveriş destinasyonlarını keşfedin; mağazalar, markalar, tax free bilgileri ve ziyaretçi rehberlerini inceleyin.",
metaCountry: "En iyi outlet alışveriş destinasyonlarını keşfedin:",
},
fr: {
title: "Outlets",
subtitle: "Parcourez toutes les destinations outlet au même endroit.",
countrySubtitle: "Parcourez les destinations outlet en",
metaAll:
"Parcourez les destinations outlet en Europe et en Turquie avec des informations sur les magasins, marques, tax free et guides visiteurs.",
metaCountry: "Découvrez les meilleures destinations outlet en",
},
de: {
title: "Outlets",
subtitle: "Entdecken Sie alle Outlet-Ziele an einem Ort.",
countrySubtitle: "Entdecken Sie Outlet-Ziele in",
metaAll:
"Entdecken Sie Outlet-Shopping-Ziele in Europa und der Türkei mit Informationen zu Stores, Marken, Tax Free und Besucherführern.",
metaCountry: "Entdecken Sie die besten Outlet-Shopping-Ziele in",
},
it: {
title: "Outlet",
subtitle: "Scopri tutte le destinazioni outlet in un unico posto.",
countrySubtitle: "Scopri le destinazioni outlet in",
metaAll:
"Scopri le destinazioni outlet in Europa e Turchia con informazioni su negozi, marchi, tax free e guide per i visitatori.",
metaCountry: "Scopri le migliori destinazioni outlet in",
},
es: {
title: "Outlets",
subtitle: "Explora todos los destinos outlet en un solo lugar.",
countrySubtitle: "Explora destinos outlet en",
metaAll:
"Explora destinos outlet en Europa y Turquía con información sobre tiendas, marcas, tax free y guías para visitantes.",
metaCountry: "Descubre los mejores destinos outlet en",
},
ru: {
title: "Аутлеты",
subtitle: "Просматривайте все outlet-направления в одном месте.",
countrySubtitle: "Просматривайте outlet-направления в",
metaAll:
"Просматривайте outlet-направления в Европе и Турции: магазины, бренды, tax free и полезные советы для посетителей.",
metaCountry: "Откройте для себя лучшие outlet-направления в",
},
};

function getText(value, language) {
if (typeof value === "object" && value !== null && !Array.isArray(value)) {
return value[language] || value.en || "";
}

return value || "";
}

function Outlets() {
const [searchParams] = useSearchParams();
const selectedCountry = searchParams.get("country");

const pathLanguage = window.location.pathname.split("/")[1];
const language = supportedLanguages.includes(pathLanguage)
? pathLanguage
: localStorage.getItem("language") || "en";

const t = translations[language] || translations.en;
const page = pageText[language] || pageText.en;

const selectedCountryName =
countryTranslations[selectedCountry]?.[language] || selectedCountry;

useEffect(() => {
document.title = selectedCountry
? `${selectedCountryName} ${page.title} | Outlet Atlas`
: `${page.title} | Outlet Atlas`;

let meta = document.querySelector('meta[name="description"]');

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content = selectedCountry
? `${page.metaCountry} ${selectedCountryName}.`
: page.metaAll;
}, [selectedCountry, selectedCountryName, page]);

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
? `${selectedCountryName} ${page.title}`
: page.title}
</h1>

<p>
{selectedCountry
? `${page.countrySubtitle} ${selectedCountryName}.`
: page.subtitle}
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