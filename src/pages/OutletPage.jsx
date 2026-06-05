import { Link, useParams } from "react-router";
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

const outlet = outlets.find((item) => createSlug(item.name) === slug);

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
<Link to="/" className="back-link">← Back to all outlets</Link>
<OutletDetail outlet={outlet} />
</div>
);
}

export default OutletPage;
