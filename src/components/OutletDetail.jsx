import { translations } from "../i18n/translations";

const fallbackImage =
"https://images.unsplash.com/photo-1441986300917-64674bd600d8";

function createMapEmbedUrl(outlet) {
const query = encodeURIComponent(`${outlet.name} ${outlet.city}`);
return `https://www.google.com/maps?q=${query}&output=embed`;
}

function OutletDetail({ outlet }) {
if (!outlet) return null;

const language = localStorage.getItem("language") || "en";
const t = translations[language];

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
{outlet.country} / {outlet.city}
</p>

<h2>{outlet.name}</h2>
</div>

<span className="tax-badge">
{outlet.taxFree === "Yes" ? t.taxFree : t.info}
</span>
</div>

{outlet.description && (
<p className="outlet-description">{outlet.description}</p>
)}

<div className="quick-facts">
<h3>{t.quickFacts}</h3>

<div className="quick-facts-grid">
<div>📍 {t.country}: {outlet.country}</div>
<div>🏙️ {t.city}: {outlet.city}</div>
<div>🏬 {t.stores}: {outlet.stores}</div>
<div>✈️ {t.airport}: {outlet.airport}</div>
<div>💰 {t.taxFree}: {outlet.taxFree}</div>
<div>⭐ {t.rating}: {outlet.rating || "4.7"} / 5</div>
</div>
</div>

<div className="shopping-overview">
<h3>Shopping Overview</h3>

<div className="shopping-overview-grid">
<div>
<strong>🛍️ Shopping Style</strong>
<p>{outlet.bestFor || t.luxuryFashion}</p>
</div>

<div>
<strong>🚆 Access</strong>
<p>{outlet.centerDistance || t.informationComingSoon}</p>
</div>

<div>
<strong>💰 Saving Potential</strong>
<p>
{outlet.moneyTip ||
"Seasonal discounts, outlet prices and tax free opportunities may help visitors save more."}
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
{outlet.airport}
</div>

<div>
🚆 <strong>{t.cityCenter}</strong>
<br />
{outlet.centerDistance || t.informationComingSoon}
</div>

<div>
🕒 <strong>{t.openingHours}</strong>
<br />
{outlet.hours}
</div>

<div>
💰 <strong>{t.taxFree}</strong>
<br />
{outlet.taxFree}
</div>

<div>
⭐ <strong>{t.rating}</strong>
<br />
{outlet.rating || "4.7"} / 5
</div>
</div>

<div className="highlight-box">
<h3>{t.whyVisit}</h3>
<p>
{outlet.bestFor ||
"A popular outlet destination for fashion, lifestyle and premium shopping."}
</p>
</div>

<div className="highlight-box">
<h3>{t.howToGetThere}</h3>
<p>{outlet.transport || t.informationComingSoon}</p>
</div>

<div className="highlight-box">
<h3>{t.bestTimeToVisit}</h3>
<p>
{outlet.bestTime ||
"Visit during weekdays to avoid crowds and enjoy a better shopping experience."}
</p>
</div>

<div className="highlight-box">
<h3>{t.moneySavingTips}</h3>
<p>
{outlet.moneyTip ||
"Look for seasonal promotions, tax free opportunities and additional visitor discounts."}
</p>
</div>

<div className="map-box">
<h3>{t.locationMap}</h3>

<iframe
title={`${outlet.name} map`}
src={createMapEmbedUrl(outlet)}
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
{(outlet.services || []).map((service) => (
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