import { Link } from "react-router";
import { useEffect } from "react";

const notFoundText = {
en: {
title: "Page not found",
text: "The page you are looking for does not exist or may have been moved.",
button: "Back to Home",
},
tr: {
title: "Sayfa bulunamadı",
text: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
button: "Ana Sayfaya Dön",
},
fr: {
title: "Page introuvable",
text: "La page que vous recherchez n'existe pas ou a peut-être été déplacée.",
button: "Retour à l'accueil",
},
de: {
title: "Seite nicht gefunden",
text: "Die gesuchte Seite existiert nicht oder wurde möglicherweise verschoben.",
button: "Zur Startseite",
},
it: {
title: "Pagina non trovata",
text: "La pagina che stai cercando non esiste o potrebbe essere stata spostata.",
button: "Torna alla Home",
},
};

function NotFound() {
const language = localStorage.getItem("language") || "en";
const t = notFoundText[language] || notFoundText.en;

useEffect(() => {
document.title = "Page Not Found | Outlet Atlas";
}, []);

return (
<main className="page-container">
<section className="content-page not-found">
<h1>{t.title}</h1>
<p>{t.text}</p>

<Link to="/" className="view-button">
{t.button}
</Link>
</section>
</main>
);
}

export default NotFound;