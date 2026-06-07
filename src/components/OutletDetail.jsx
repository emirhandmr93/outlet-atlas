import { translations } from "../i18n/translations";

const fallbackImage =
"https://images.unsplash.com/photo-1441986300917-64674bd600d8";

function getText(value, language) {
if (typeof value === "object" && value !== null && !Array.isArray(value)) {
return value[language] || value.en || "";
}

return value || "";
}

function getList(value, language) {
if (typeof value === "object" && value !== null && !Array.isArray(value)) {
return value[language] || value.en || [];
}

return value || [];
}

function getTaxFreeText(value, t) {
if (value === "Yes") return t.taxFreeAvailable;
if (value === "Limited") return t.taxFreeLimited;
if (value === "No") return t.taxFreeNotAvailable;

return value || t.info;
}

function createMapEmbedUrl(outlet, language) {
const city = getText(outlet.city, language);
const query = encodeURIComponent(`${outlet.name} ${city}`);
return `https://www.google.com/maps?q=${query}&output=embed`;
}

function OutletDetail({ outlet, language }) {
if (!outlet) return null;

const currentLanguage = language || localStorage.getItem("language") || "en";
const t = translations[currentLanguage];

return (
<div className="detail-box">
<img
src={outlet.image || fallbackImage}
alt={outlet.name}
className="detail-image"
onError={(e) => {
e.currentTarget.src = fallbackImage;
}}
/>

<div className="detail-header">
<div>
<p className="eyebrow">
{getText(outlet.country, currentLanguage)} /{" "}
{getText(outlet.city, currentLanguage)}
</p>

<h2>{outlet.name}</h2>
</div>

<span className="tax-badge">
{getTaxFreeText(outlet.taxFree, t)}
</span>
</div>

{outlet.description && (
<p className="outlet-description">
{getText(outlet.description, currentLanguage)}
</p>
)}

<div className="quick-facts">
<h3>{t.quickFacts}</h3>

<div className="quick-facts-grid">
<div>📍 {t.country}: {getText(outlet.country, currentLanguage)}</div>
<div>🏙️ {t.city}: {getText(outlet.city, currentLanguage)}</div>
<div>🏬 {t.stores}: {outlet.stores}</div>
<div>✈️ {t.airport}: {getText(outlet.airport, currentLanguage)}</div>
<div>💰 {t.taxFree}: {getTaxFreeText(outlet.taxFree, t)}</div>
<div>⭐ {t.rating}: {outlet.rating || "4.7"} / 5</div>
</div>
</div>

<div className="shopping-overview">
<h3>{t.shoppingOverview}</h3>

<div className="shopping-overview-grid">
<div>
<strong>🛍️ {t.shoppingStyle}</strong>
<p>{getText(outlet.bestFor, currentLanguage) || t.luxuryFashion}</p>
</div>

<div>
<strong>🚆 {t.access}</strong>
<p>
{getText(outlet.centerDistance, currentLanguage) ||
t.informationComingSoon}
</p>
</div>

<div>
<strong>💰 {t.savingPotential}</strong>
<p>
{getText(outlet.moneyTip, currentLanguage) ||
t.informationComingSoon}
</p>
</div>
</div>
</div>

<div className="info-grid">
<div>
🏬 <strong>{t.stores}</strong>
<br />
{outlet.stores}
</div>

<div>
✈️ <strong>{t.airport}</strong>
<br />
{getText(outlet.airport, currentLanguage)}
</div>

<div>
🚆 <strong>{t.cityCenter}</strong>
<br />
{getText(outlet.centerDistance, currentLanguage) ||
t.informationComingSoon}
</div>

<div>
🕒 <strong>{t.openingHours}</strong>
<br />
{getText(outlet.hours, currentLanguage)}
</div>

<div>
💰 <strong>{t.taxFree}</strong>
<br />
{getTaxFreeText(outlet.taxFree, t)}
</div>

<div>
⭐ <strong>{t.rating}</strong>
<br />
{outlet.rating || "4.7"} / 5
</div>
</div>

<div className="highlight-box">
<h3>{t.whyVisit}</h3>
<p>{getText(outlet.bestFor, currentLanguage) || t.luxuryFashion}</p>
</div>

<div className="highlight-box">
<h3>{t.howToGetThere}</h3>
<p>
{getText(outlet.transport, currentLanguage) ||
t.informationComingSoon}
</p>
</div>

<div className="highlight-box">
<h3>{t.bestTimeToVisit}</h3>
<p>
{getText(outlet.bestTime, currentLanguage) ||
t.informationComingSoon}
</p>
</div>

<div className="highlight-box">
<h3>{t.moneySavingTips}</h3>
<p>
{getText(outlet.moneyTip, currentLanguage) ||
t.informationComingSoon}
</p>
</div>

<div className="map-box">
<h3>{t.locationMap}</h3>

<iframe
title={`${outlet.name} map`}
src={createMapEmbedUrl(outlet, currentLanguage)}
loading="lazy"
allowFullScreen
></iframe>
</div>

<div className="detail-buttons">
<a href={outlet.maps} target="_blank" rel="noreferrer">
📍 {t.openInGoogleMaps}
</a>

<a href={outlet.website} target="_blank" rel="noreferrer">
🌐 {t.officialWebsite}
</a>
</div>

<h3>{t.services}</h3>

<div className="services-grid">
{getList(outlet.services, currentLanguage).map((service) => (
<div className="service-card" key={service}>
✓ {service}
</div>
))}
</div>

<h3>{t.popularBrands}</h3>

<ul>
{(outlet.brands || []).map((brand) => (
<li key={brand}>{brand}</li>
))}
</ul>

<h3>{t.restaurantsCafes}</h3>

<ul>
{(outlet.restaurants || []).map((restaurant) => (
<li key={restaurant}>{restaurant}</li>
))}
</ul>
</div>
);
}

export default OutletDetail;