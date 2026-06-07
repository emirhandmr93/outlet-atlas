const fs = require("fs");

const BASE_URL = "https://outlet-atlas.com";

function createSlug(text) {
return text
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/[^a-z0-9]+/g, "-")
.replace(/(^-|-$)/g, "");
}

const outletsFile = fs.readFileSync("src/data/outlets.js", "utf8");

const outletNames = [...outletsFile.matchAll(/name:\s*"([^"]+)"/g)].map(
(match) => match[1]
);

const staticPages = [
"/",
"/countries",
"/outlets",
"/france-outlets",
"/italy-outlets",
"/germany-outlets",
"/united-kingdom-outlets",
"/switzerland-outlets",
"/netherlands-outlets",
"/greece-outlets",
"/austria-outlets",
"/belgium-outlets",
"/about",
"/contact",
"/privacy-policy",
"/terms-of-use",
];

const outletPages = outletNames.map((name) => `/outlet/${createSlug(name)}`);

const allPages = [...staticPages, ...outletPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
.map(
(page) => `
<url>
<loc>${BASE_URL}${page}</loc>
</url>`
)
.join("")}
</urlset>
`;

fs.writeFileSync("public/sitemap.xml", sitemap);

console.log(`Sitemap generated with ${allPages.length} URLs.`);