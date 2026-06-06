import { Link, useParams } from "react-router";
import { useEffect } from "react";
import { outlets } from "../data/outlets";
import OutletDetail from "../components/OutletDetail";

function createSlug(text) {
return text
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/[^a-z0-9]+/g, "-")
.replace(/(^-|-$)/g, "");
}

function OutletPage() {
const { slug } = useParams();

const outlet = outlets.find(
(item) => createSlug(item.name) === slug
);

useEffect(() => {
if (!outlet) return;

document.title = `${outlet.name} Guide | Outlet Atlas`;

const description =
typeof outlet.description === "object"
? outlet.description.en
: outlet.description;

let meta = document.querySelector(
'meta[name="description"]'
);

if (!meta) {
meta = document.createElement("meta");
meta.name = "description";
document.head.appendChild(meta);
}

meta.content =
description ||
`Complete guide to ${outlet.name}. Stores, brands, opening hours, tax free shopping, transportation and visitor tips.`;
}, [outlet]);

if (!outlet) {
return (
<div className="not-found">
<h1>Outlet not found</h1>
<Link to="/">Back to Home</Link>
</div>
);
}

return (
<div className="outlet-page">
<Link to="/" className="back-link">
← Back to all outlets
</Link>

<OutletDetail outlet={outlet} />
</div>
);
}

export default OutletPage;