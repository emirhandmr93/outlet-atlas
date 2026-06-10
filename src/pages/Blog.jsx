import { Link, useLocation } from "react-router";
import { blogPosts } from "../data/blogPosts";

const blogText = {
en: { title: "Outlet Atlas Blog", intro: "Outlet shopping guides, European travel tips and tax free advice.", featured: "Featured Guide", popular: "Latest Guides", readMore: "Read Guide" },
tr: { title: "Outlet Atlas Blog", intro: "Avrupa outlet rehberleri, seyahat ipuçları ve tax free tavsiyeleri.", featured: "Öne Çıkan Rehber", popular: "Son Rehberler", readMore: "Rehberi Oku" },
fr: { title: "Blog Outlet Atlas", intro: "Guides outlet, conseils de voyage et informations Tax Free.", featured: "Guide en vedette", popular: "Derniers guides", readMore: "Lire le guide" },
de: { title: "Outlet Atlas Blog", intro: "Outlet-Guides, Reisetipps und Tax-Free-Informationen.", featured: "Empfohlener Guide", popular: "Neueste Guides", readMore: "Guide lesen" },
it: { title: "Blog Outlet Atlas", intro: "Guide outlet, consigli di viaggio e informazioni Tax Free.", featured: "Guida in evidenza", popular: "Ultime guide", readMore: "Leggi la guida" },
es: { title: "Blog Outlet Atlas", intro: "Guías outlet, consejos de viaje e información Tax Free.", featured: "Guía destacada", popular: "Últimas guías", readMore: "Leer guía" },
ru: { title: "Блог Outlet Atlas", intro: "Гиды по аутлетам, советы для поездок и Tax Free.", featured: "Рекомендуемый гид", popular: "Новые гиды", readMore: "Читать гид" },
};

const postOrder = [
"europes-best-outlets",
"paris-outlet-guide",
"milan-outlet-guide",
"london-outlet-guide",
"tax-free-guide",
];

export default function Blog() {
const location = useLocation();
const language = location.pathname.split("/")[1] || "en";
const t = blogText[language] || blogText.en;

const featured = blogPosts["europes-best-outlets"];

return (
<div className="page-container">
<h1>{t.title}</h1>
<p>{t.intro}</p>

<div className="outlet-card" style={{ marginBottom: "2rem" }}>
<h2>{t.featured}</h2>
<h3>{featured.title[language] || featured.title.en}</h3>
<p>{featured.description[language] || featured.description.en}</p>

<Link
to={`/${language}/blog/europes-best-outlets`}
className="website-button"
>
{t.readMore}
</Link>
</div>

<h2>{t.popular}</h2>

<div className="countries-grid">
{postOrder.map((slug) => {
const post = blogPosts[slug];

return (
<Link
key={slug}
to={`/${language}/blog/${slug}`}
className="country-card"
>
<h3>{post.title[language] || post.title.en}</h3>
<p>{post.description[language] || post.description.en}</p>
<strong>{t.readMore} →</strong>
</Link>
);
})}
</div>
</div>
);
}