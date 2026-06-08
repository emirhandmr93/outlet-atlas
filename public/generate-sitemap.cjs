const fs = require("fs");

const BASE_URL = "https://www.outlet-atlas.com";

const languages = ["en", "tr", "fr", "de", "it", "es", "ru"];

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
"",
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

const basePages = [...staticPages, ...outletPages];

const allPages = [];

languages.forEach((language) => {
basePages.forEach((page) => {
allPages.push(`/${language}${page}`);
});
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
.map((page) => {
const parts = page.split("/").filter(Boolean);
const currentLanguage = parts[0];
const pageWithoutLanguage = "/" + parts.slice(1).join("/");
const cleanPage =
pageWithoutLanguage === "/" ? "" : pageWithoutLanguage;

return `
<url>
<loc>${BASE_URL}${page}</loc>
${languages
.map(
(language) =>
`<xhtml:link rel="alternate" hreflang="${language}" href="${BASE_URL}/${language}${cleanPage}" />`
)
.join("\n")}
<xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en${cleanPage}" />
</url>`;
})
.join("")}
</urlset>
`;

fs.writeFileSync("public/sitemap.xml", sitemap);

console.log(`Multilingual sitemap generated with ${allPages.length} URLs.`);