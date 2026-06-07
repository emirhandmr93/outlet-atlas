import { useEffect } from "react";

const aboutText = {
en: {
title: "About Outlet Atlas",
p1: "Outlet Atlas is a travel and shopping guide designed to help users discover the best outlet shopping destinations around the world.",
p2: "The platform provides outlet information such as location, brands, tax free availability, airport distance, transportation options, restaurants, services and shopping tips.",
p3: "Our goal is to make outlet shopping easier for international travelers by combining useful travel information with practical shopping guidance.",
},
tr: {
title: "Outlet Atlas Hakkında",
p1: "Outlet Atlas, kullanıcıların dünyanın en iyi outlet alışveriş destinasyonlarını keşfetmesine yardımcı olmak için hazırlanmış bir seyahat ve alışveriş rehberidir.",
p2: "Platform; konum, markalar, tax free durumu, havalimanı mesafesi, ulaşım seçenekleri, restoranlar, hizmetler ve alışveriş ipuçları gibi bilgiler sunar.",
p3: "Amacımız, uluslararası seyahat edenler için outlet alışverişini daha kolay ve pratik hale getirmektir.",
},
fr: {
title: "À propos d'Outlet Atlas",
p1: "Outlet Atlas est un guide de voyage et de shopping conçu pour aider les utilisateurs à découvrir les meilleures destinations outlet dans le monde.",
p2: "La plateforme fournit des informations sur les marques, l'emplacement, la détaxe, les transports, les restaurants, les services et les conseils shopping.",
p3: "Notre objectif est de rendre le shopping outlet plus simple pour les voyageurs internationaux.",
},
de: {
title: "Über Outlet Atlas",
p1: "Outlet Atlas ist ein Reise- und Shoppingführer, der Nutzern hilft, die besten Outlet-Ziele weltweit zu entdecken.",
p2: "Die Plattform bietet Informationen zu Standorten, Marken, Tax-Free-Shopping, Flughafendistanzen, Verkehrsanbindung, Restaurants, Services und Einkaufstipps.",
p3: "Unser Ziel ist es, Outlet-Shopping für internationale Reisende einfacher und praktischer zu machen.",
},
it: {
title: "Chi siamo",
p1: "Outlet Atlas è una guida di viaggio e shopping pensata per aiutare gli utenti a scoprire le migliori destinazioni outlet nel mondo.",
p2: "La piattaforma offre informazioni su posizione, marchi, tax free, distanza dagli aeroporti, trasporti, ristoranti, servizi e consigli per lo shopping.",
p3: "Il nostro obiettivo è rendere lo shopping outlet più semplice per i viaggiatori internazionali.",
},
};

function About() {
const language = localStorage.getItem("language") || "en";
const t = aboutText[language] || aboutText.en;

useEffect(() => {
document.title = "About Outlet Atlas";

let meta = document.querySelector(
'meta[name="description"]'
);

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content =
"Learn more about Outlet Atlas, the outlet shopping guide helping travelers discover the best outlet destinations, luxury brands and shopping opportunities across Europe.";
}, []);

return (
<main className="page-container">
<section className="content-page">
<h1>{t.title}</h1>

<p>{t.p1}</p>

<p>{t.p2}</p>

<p>{t.p3}</p>
</section>
</main>
);
}

export default About;