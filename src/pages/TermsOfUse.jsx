import { useEffect } from "react";

const termsText = {
en: {
title: "Terms of Use",
p1: "Outlet Atlas provides general information about outlet shopping destinations, brands, services, transportation and visitor tips.",
p2: "Information on this website may change over time. Opening hours, stores, services, tax free availability and transportation details should always be checked from official outlet websites before travel.",
p3: "Outlet Atlas is not affiliated with the outlet centers or brands listed unless clearly stated.",
p4: "External links are provided for convenience. We are not responsible for the content, accuracy or policies of third-party websites.",
p5: "By using Outlet Atlas, you agree to use the information as a general guide and verify important details before making travel or shopping decisions.",
},

tr: {
title: "Kullanım Şartları",
p1: "Outlet Atlas, outlet alışveriş destinasyonları, markalar, hizmetler, ulaşım ve ziyaretçi ipuçları hakkında genel bilgiler sunar.",
p2: "Bu web sitesindeki bilgiler zamanla değişebilir. Çalışma saatleri, mağazalar, hizmetler, tax free durumu ve ulaşım bilgileri seyahat öncesinde resmi outlet web sitelerinden kontrol edilmelidir.",
p3: "Aksi açıkça belirtilmediği sürece Outlet Atlas, listelenen outlet merkezleri veya markalarla bağlantılı değildir.",
p4: "Harici bağlantılar kolaylık amacıyla sunulmaktadır. Üçüncü taraf web sitelerinin içeriklerinden, doğruluğundan veya politikalarından sorumlu değiliz.",
p5: "Outlet Atlas'ı kullanarak, sunulan bilgileri genel bir rehber olarak kullanmayı ve önemli detayları seyahat veya alışveriş kararları öncesinde doğrulamayı kabul etmiş olursunuz.",
},

fr: {
title: "Conditions d'utilisation",
p1: "Outlet Atlas fournit des informations générales sur les destinations outlet, les marques, les services, les transports et les conseils aux visiteurs.",
p2: "Les informations présentes sur ce site peuvent évoluer avec le temps. Les horaires, magasins, services, avantages détaxe et informations de transport doivent être vérifiés sur les sites officiels avant le voyage.",
p3: "Outlet Atlas n'est affilié à aucun centre outlet ou marque, sauf indication contraire explicite.",
p4: "Les liens externes sont fournis à titre informatif. Nous ne sommes pas responsables du contenu, de l'exactitude ou des politiques des sites tiers.",
p5: "En utilisant Outlet Atlas, vous acceptez d'utiliser ces informations comme guide général et de vérifier les détails importants avant tout voyage ou achat.",
},

de: {
title: "Nutzungsbedingungen",
p1: "Outlet Atlas bietet allgemeine Informationen zu Outlet-Destinationen, Marken, Dienstleistungen, Verkehrsanbindungen und Besuchertipps.",
p2: "Die Informationen auf dieser Website können sich im Laufe der Zeit ändern. Öffnungszeiten, Geschäfte, Dienstleistungen, Tax-Free-Angebote und Verkehrsinformationen sollten vor der Reise immer auf den offiziellen Websites überprüft werden.",
p3: "Outlet Atlas ist nicht mit den aufgeführten Outlet-Centern oder Marken verbunden, sofern nicht ausdrücklich angegeben.",
p4: "Externe Links werden zu Ihrer Bequemlichkeit bereitgestellt. Für Inhalte, Genauigkeit oder Richtlinien externer Websites übernehmen wir keine Verantwortung.",
p5: "Durch die Nutzung von Outlet Atlas erklären Sie sich damit einverstanden, die Informationen als allgemeinen Leitfaden zu verwenden und wichtige Details vor Reise- oder Kaufentscheidungen zu überprüfen.",
},

it: {
title: "Termini di utilizzo",
p1: "Outlet Atlas fornisce informazioni generali su destinazioni outlet, marchi, servizi, trasporti e consigli per i visitatori.",
p2: "Le informazioni presenti sul sito possono cambiare nel tempo. Orari di apertura, negozi, servizi, tax free e dettagli sui trasporti devono sempre essere verificati sui siti ufficiali prima del viaggio.",
p3: "Outlet Atlas non è affiliato ai centri outlet o ai marchi elencati, salvo diversa indicazione esplicita.",
p4: "I collegamenti esterni sono forniti per comodità. Non siamo responsabili dei contenuti, dell'accuratezza o delle politiche dei siti web di terze parti.",
p5: "Utilizzando Outlet Atlas accetti di utilizzare le informazioni come guida generale e di verificare i dettagli importanti prima di prendere decisioni di viaggio o acquisto.",
},
};

function TermsOfUse() {
const language = localStorage.getItem("language") || "en";
const t = termsText[language] || termsText.en;

useEffect(() => {
document.title = "Terms of Use | Outlet Atlas";

let meta = document.querySelector('meta[name="description"]');

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content =
"Read the Outlet Atlas terms of use for information about using our outlet shopping guide.";
}, []);

return (
<main className="page-container">
<section className="content-page">
<h1>{t.title}</h1>

<p>{t.p1}</p>
<p>{t.p2}</p>
<p>{t.p3}</p>
<p>{t.p4}</p>
<p>{t.p5}</p>
</section>
</main>
);
}

export default TermsOfUse;