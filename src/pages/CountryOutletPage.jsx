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
title: {
en: "France Outlets",
tr: "Fransa Outletleri",
fr: "Outlets en France",
de: "Outlets in Frankreich",
it: "Outlet in Francia",
},
description: {
en: "Discover the best outlet shopping destinations in France, including luxury villages, designer outlets, tax free shopping, brands and travel tips.",
tr: "Fransa'daki en iyi outlet alışveriş noktalarını keşfedin. Lüks outlet köyleri, tasarım markalar, tax free alışveriş, ulaşım ve ziyaret ipuçları burada.",
fr: "Découvrez les meilleures destinations outlet en France, avec villages de luxe, marques de créateurs, shopping détaxé et conseils de voyage.",
de: "Entdecken Sie die besten Outlet-Shopping-Ziele in Frankreich, darunter Luxus-Villages, Designer-Outlets, Tax-Free-Shopping und Reisetipps.",
it: "Scopri le migliori destinazioni outlet in Francia, tra villaggi di lusso, outlet firmati, shopping tax free e consigli di viaggio.",
},
},
italy: {
country: "Italy",
title: {
en: "Italy Outlets",
tr: "İtalya Outletleri",
fr: "Outlets en Italie",
de: "Outlets in Italien",
it: "Outlet in Italia",
},
description: {
en: "Explore the best outlet shopping destinations in Italy, from Milan and Florence to Rome and Venice, with brands, transport and visitor tips.",
tr: "Milano, Floransa, Roma ve Venedik çevresindeki en iyi İtalya outletlerini keşfedin. Marka bilgileri, ulaşım ve ziyaret önerileriyle alışverişinizi planlayın.",
fr: "Explorez les meilleurs outlets en Italie, de Milan et Florence à Rome et Venise, avec marques, transport et conseils de visite.",
de: "Entdecken Sie die besten Outlets in Italien, von Mailand und Florenz bis Rom und Venedig, mit Marken, Anreise und Besuchertipps.",
it: "Esplora i migliori outlet in Italia, da Milano e Firenze a Roma e Venezia, con marchi, trasporti e consigli per la visita.",
},
},
germany: {
country: "Germany",
title: {
en: "Germany Outlets",
tr: "Almanya Outletleri",
fr: "Outlets en Allemagne",
de: "Outlets in Deutschland",
it: "Outlet in Germania",
},
description: {
en: "Find the best outlet shopping destinations in Germany, including Metzingen, Wertheim, Ingolstadt and Berlin designer outlets.",
tr: "Metzingen, Wertheim, Ingolstadt ve Berlin çevresindeki en iyi Almanya outletlerini keşfedin. Marka, ulaşım ve alışveriş ipuçlarıyla plan yapın.",
fr: "Trouvez les meilleurs outlets en Allemagne, notamment Metzingen, Wertheim, Ingolstadt et les outlets de Berlin.",
de: "Finden Sie die besten Outlet-Shopping-Ziele in Deutschland, darunter Metzingen, Wertheim, Ingolstadt und Designer-Outlets in Berlin.",
it: "Trova i migliori outlet in Germania, tra Metzingen, Wertheim, Ingolstadt e outlet firmati a Berlino.",
},
},
"united-kingdom": {
country: "United Kingdom",
title: {
en: "United Kingdom Outlets",
tr: "Birleşik Krallık Outletleri",
fr: "Outlets au Royaume-Uni",
de: "Outlets im Vereinigten Königreich",
it: "Outlet nel Regno Unito",
},
description: {
en: "Browse the best outlet shopping destinations in the United Kingdom, including Bicester Village, Cheshire Oaks, York and London Designer Outlet.",
tr: "Bicester Village, Cheshire Oaks, York ve London Designer Outlet dahil Birleşik Krallık'taki en iyi outlet alışveriş noktalarını keşfedin.",
fr: "Découvrez les meilleurs outlets au Royaume-Uni, notamment Bicester Village, Cheshire Oaks, York et London Designer Outlet.",
de: "Entdecken Sie die besten Outlet-Ziele im Vereinigten Königreich, darunter Bicester Village, Cheshire Oaks, York und London Designer Outlet.",
it: "Scopri i migliori outlet nel Regno Unito, tra Bicester Village, Cheshire Oaks, York e London Designer Outlet.",
},
},
switzerland: {
country: "Switzerland",
title: {
en: "Switzerland Outlets",
tr: "İsviçre Outletleri",
fr: "Outlets en Suisse",
de: "Outlets in der Schweiz",
it: "Outlet in Svizzera",
},
description: {
en: "Discover the best outlet shopping destinations in Switzerland, including FoxTown, Landquart Fashion Outlet and premium Swiss shopping locations.",
tr: "FoxTown, Landquart Fashion Outlet ve diğer premium alışveriş noktaları dahil İsviçre'deki en iyi outlet destinasyonlarını keşfedin.",
fr: "Découvrez les meilleurs outlets en Suisse, notamment FoxTown, Landquart Fashion Outlet et des destinations shopping premium.",
de: "Entdecken Sie die besten Outlets in der Schweiz, darunter FoxTown, Landquart Fashion Outlet und Premium-Shopping-Ziele.",
it: "Scopri i migliori outlet in Svizzera, tra FoxTown, Landquart Fashion Outlet e destinazioni premium.",
},
},
netherlands: {
country: "Netherlands",
title: {
en: "Netherlands Outlets",
tr: "Hollanda Outletleri",
fr: "Outlets aux Pays-Bas",
de: "Outlets in den Niederlanden",
it: "Outlet nei Paesi Bassi",
},
description: {
en: "Explore the best outlet shopping destinations in the Netherlands, including Roermond, Batavia Stad and Rosada Fashion Outlet.",
tr: "Roermond, Batavia Stad ve Rosada Fashion Outlet dahil Hollanda'daki en iyi outlet alışveriş noktalarını keşfedin.",
fr: "Explorez les meilleurs outlets aux Pays-Bas, notamment Roermond, Batavia Stad et Rosada Fashion Outlet.",
de: "Entdecken Sie die besten Outlets in den Niederlanden, darunter Roermond, Batavia Stad und Rosada Fashion Outlet.",
it: "Esplora i migliori outlet nei Paesi Bassi, tra Roermond, Batavia Stad e Rosada Fashion Outlet.",
},
},
greece: {
country: "Greece",
title: {
en: "Greece Outlets",
tr: "Yunanistan Outletleri",
fr: "Outlets en Grèce",
de: "Outlets in Griechenland",
it: "Outlet in Grecia",
},
description: {
en: "Find the best outlet shopping destinations in Greece, including Athens and Thessaloniki outlet centres, airport shopping and designer discounts.",
tr: "Atina ve Selanik çevresindeki en iyi Yunanistan outletlerini keşfedin. Havalimanı yakınlığı, tasarım markalar ve indirim fırsatlarıyla plan yapın.",
fr: "Trouvez les meilleurs outlets en Grèce, notamment à Athènes et Thessalonique, avec shopping près des aéroports et réductions designer.",
de: "Finden Sie die besten Outlets in Griechenland, darunter Athen und Thessaloniki, Flughafennähe und Designer-Rabatte.",
it: "Trova i migliori outlet in Grecia, tra Atene e Salonicco, shopping vicino agli aeroporti e sconti firmati.",
},
},
austria: {
country: "Austria",
title: {
en: "Austria Outlets",
tr: "Avusturya Outletleri",
fr: "Outlets en Autriche",
de: "Outlets in Österreich",
it: "Outlet in Austria",
},
description: {
en: "Discover outlet shopping destinations in Austria, including designer outlet villages, premium brands and travel-friendly shopping locations.",
tr: "Avusturya'daki outlet alışveriş noktalarını keşfedin. Tasarım outlet köyleri, premium markalar ve seyahat dostu alışveriş lokasyonları burada.",
fr: "Découvrez les destinations outlet en Autriche, avec villages outlet, marques premium et lieux pratiques pour les voyageurs.",
de: "Entdecken Sie Outlet-Shopping-Ziele in Österreich, darunter Designer-Outlet-Villages, Premium-Marken und reisefreundliche Standorte.",
it: "Scopri le destinazioni outlet in Austria, con villaggi outlet, marchi premium e località comode per i viaggiatori.",
},
},
belgium: {
country: "Belgium",
title: {
en: "Belgium Outlets",
tr: "Belçika Outletleri",
fr: "Outlets en Belgique",
de: "Outlets in Belgien",
it: "Outlet in Belgio",
},
description: {
en: "Explore outlet shopping destinations in Belgium, including Maasmechelen Village and premium shopping options near major Belgian cities.",
tr: "Maasmechelen Village ve büyük Belçika şehirlerine yakın premium alışveriş seçenekleri dahil Belçika outletlerini keşfedin.",
fr: "Explorez les outlets en Belgique, notamment Maasmechelen Village et des options shopping premium près des grandes villes.",
de: "Entdecken Sie Outlets in Belgien, darunter Maasmechelen Village und Premium-Shopping nahe wichtiger Städte.",
it: "Esplora gli outlet in Belgio, tra Maasmechelen Village e opzioni premium vicino alle principali città.",
},
},
};

function CountryOutletPage({ countryKey }) {
const language = localStorage.getItem("language") || "en";
const t = translations[language];

const page = countryPageData[countryKey];

const pageTitle = getText(page?.title, language);
const pageDescription = getText(page?.description, language);

useEffect(() => {
if (!page) return;

document.title = `${pageTitle} | Outlet Atlas`;

let meta = document.querySelector('meta[name="description"]');

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content = pageDescription;
}, [page, pageTitle, pageDescription]);

if (!page) return null;

const filteredOutlets = outlets.filter(
(outlet) => getText(outlet.country, "en") === page.country
);

return (
<main className="page-container">
<section className="content-page">
<h1>{pageTitle}</h1>
<p>{pageDescription}</p>
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