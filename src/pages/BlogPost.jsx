import { Link, useLocation, useParams } from "react-router";
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

return (
<div className="page-container">
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