import { useEffect } from "react";

const privacyText = {
en: {
title: "Privacy Policy",
p1: "Outlet Atlas is an informational travel and shopping guide created to help users discover outlet shopping destinations.",
p2: "We do not sell personal data. If you contact us by email, we may use your message only to respond to your request.",
p3: "Our website may use basic analytics tools in the future to understand visitor traffic and improve the user experience.",
p4: "Outlet Atlas may contain links to external websites. We are not responsible for the privacy practices or content of third-party websites.",
p5: "For privacy-related questions, you can contact us at info@outletatlas.com.",
},

tr: {
title: "Gizlilik Politikası",
p1: "Outlet Atlas, kullanıcıların outlet alışveriş destinasyonlarını keşfetmesine yardımcı olmak amacıyla hazırlanmış bilgilendirici bir seyahat ve alışveriş rehberidir.",
p2: "Kişisel verileri satmayız. E-posta yoluyla bizimle iletişime geçerseniz, mesajınız yalnızca talebinize yanıt vermek amacıyla kullanılabilir.",
p3: "Web sitemiz gelecekte ziyaretçi trafiğini anlamak ve kullanıcı deneyimini geliştirmek amacıyla temel analiz araçları kullanabilir.",
p4: "Outlet Atlas harici web sitelerine bağlantılar içerebilir. Üçüncü taraf sitelerin gizlilik uygulamalarından veya içeriklerinden sorumlu değiliz.",
p5: "Gizlilik ile ilgili sorularınız için info@outletatlas.com adresinden bizimle iletişime geçebilirsiniz.",
},

fr: {
title: "Politique de confidentialité",
p1: "Outlet Atlas est un guide informatif de voyage et de shopping conçu pour aider les utilisateurs à découvrir les destinations outlet.",
p2: "Nous ne vendons pas de données personnelles. Si vous nous contactez par e-mail, votre message sera utilisé uniquement pour répondre à votre demande.",
p3: "Notre site peut utiliser des outils d'analyse afin de comprendre le trafic des visiteurs et améliorer l'expérience utilisateur.",
p4: "Outlet Atlas peut contenir des liens vers des sites externes. Nous ne sommes pas responsables de leurs pratiques de confidentialité ou de leur contenu.",
p5: "Pour toute question relative à la confidentialité, contactez-nous à info@outletatlas.com.",
},

de: {
title: "Datenschutzrichtlinie",
p1: "Outlet Atlas ist ein Informationsportal für Reisen und Shopping, das Nutzern hilft, Outlet-Destinationen zu entdecken.",
p2: "Wir verkaufen keine personenbezogenen Daten. Wenn Sie uns per E-Mail kontaktieren, verwenden wir Ihre Nachricht ausschließlich zur Beantwortung Ihrer Anfrage.",
p3: "Unsere Website kann Analysewerkzeuge verwenden, um Besucherströme zu verstehen und die Benutzererfahrung zu verbessern.",
p4: "Outlet Atlas kann Links zu externen Websites enthalten. Für deren Datenschutzpraktiken oder Inhalte übernehmen wir keine Verantwortung.",
p5: "Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter info@outletatlas.com.",
},

it: {
title: "Informativa sulla Privacy",
p1: "Outlet Atlas è una guida informativa dedicata ai viaggi e allo shopping che aiuta gli utenti a scoprire le migliori destinazioni outlet.",
p2: "Non vendiamo dati personali. Se ci contatti via email, utilizzeremo il tuo messaggio esclusivamente per rispondere alla tua richiesta.",
p3: "Il nostro sito potrebbe utilizzare strumenti di analisi per comprendere il traffico dei visitatori e migliorare l'esperienza utente.",
p4: "Outlet Atlas può contenere collegamenti a siti web esterni. Non siamo responsabili delle loro pratiche sulla privacy o dei loro contenuti.",
p5: "Per domande relative alla privacy puoi contattarci all'indirizzo info@outletatlas.com.",
},
};

function PrivacyPolicy() {
const language = localStorage.getItem("language") || "en";
const t = privacyText[language] || privacyText.en;

useEffect(() => {
document.title = "Privacy Policy | Outlet Atlas";

let meta = document.querySelector('meta[name="description"]');

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content =
"Read the Outlet Atlas privacy policy and learn how we handle basic website information.";
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

export default PrivacyPolicy;