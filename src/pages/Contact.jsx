import { useEffect } from "react";

const contactText = {
en: {
title: "Contact",
text: "For questions, suggestions or partnership opportunities, you can contact the Outlet Atlas team.",
project: "Project",
},

tr: {
title: "İletişim",
text: "Sorularınız, önerileriniz veya iş birliği fırsatları için Outlet Atlas ekibiyle iletişime geçebilirsiniz.",
project: "Proje",
},

fr: {
title: "Contact",
text: "Pour toute question, suggestion ou opportunité de partenariat, vous pouvez contacter l'équipe Outlet Atlas.",
project: "Projet",
},

de: {
title: "Kontakt",
text: "Für Fragen, Vorschläge oder Partnerschaftsmöglichkeiten können Sie das Outlet Atlas Team kontaktieren.",
project: "Projekt",
},

it: {
title: "Contatti",
text: "Per domande, suggerimenti o opportunità di collaborazione, puoi contattare il team di Outlet Atlas.",
project: "Progetto",
},
};

function Contact() {
const language = localStorage.getItem("language") || "en";
const t = contactText[language] || contactText.en;

useEffect(() => {
document.title = "Contact | Outlet Atlas";

let meta = document.querySelector('meta[name="description"]');

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content =
"Contact Outlet Atlas for questions, suggestions, partnership opportunities or feedback about outlet shopping destinations.";
}, []);

return (
<main className="page-container">
<section className="content-page">
<h1>{t.title}</h1>

<p>{t.text}</p>

<div className="contact-card">
<p>
<strong>Email:</strong> info@outletatlas.com
</p>

<p>
<strong>{t.project}:</strong> Outlet Atlas
</p>
</div>
</section>
</main>
);
}

export default Contact;