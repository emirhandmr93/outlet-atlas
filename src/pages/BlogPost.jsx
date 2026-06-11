import { Link, useLocation, useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../data/blogPosts";

const backText = {
en: "Back to Blog",
tr: "Blog'a Dön",
fr: "Retour au blog",
de: "Zurück zum Blog",
it: "Torna al blog",
es: "Volver al blog",
ru: "Назад к блогу",
};

export default function BlogPost() {
const { slug } = useParams();
const location = useLocation();
const language = location.pathname.split("/")[1] || "en";

const post = blogPosts[slug];

if (!post) {
return (
<div className="page-container">
<Helmet>
<title>Article Not Found | Outlet Atlas</title>
<meta
name="description"
content="The requested Outlet Atlas blog article could not be found."
/>
</Helmet>

<h1>Article Not Found</h1>
<Link to={`/${language}/blog`} className="website-button">
{backText[language] || backText.en}
</Link>
</div>
);
}

const title = post.title[language] || post.title.en;
const description = post.description[language] || post.description.en;
const content = post.content[language] || post.content.en;
const currentUrl = `https://outlet-atlas.com/${language}/blog/${slug}`;
const seoTitle = `${title} | Outlet Atlas Blog`;

return (
<div className="page-container">
<Helmet>
<title>{seoTitle}</title>
<meta name="description" content={description} />
<link rel="canonical" href={currentUrl} />

<meta property="og:title" content={seoTitle} />
<meta property="og:description" content={description} />
<meta property="og:type" content="article" />
<meta property="og:url" content={currentUrl} />
<meta
property="og:image"
content="https://outlet-atlas.com/og-image.jpg?v=3"
/>

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={seoTitle} />
<meta name="twitter:description" content={description} />
<meta
name="twitter:image"
content="https://outlet-atlas.com/og-image.jpg?v=3"
/>
</Helmet>

<Link to={`/${language}/blog`} className="back-link">
← {backText[language] || backText.en}
</Link>

<h1>{title}</h1>

<p style={{ fontSize: "1.1rem", opacity: 0.8, marginBottom: "2rem" }}>
{description}
</p>

{content
.split("\n")
.filter(Boolean)
.map((paragraph, index) => (
<p key={index} style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
{paragraph}
</p>
))}
</div>
);
}