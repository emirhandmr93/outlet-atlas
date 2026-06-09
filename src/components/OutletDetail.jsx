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
    
    function formatStores(value, language) {
    if (!value) return "";
    
    const number = String(value).match(/\d+\+/)?.[0] || String(value);
    
    const labels = {
    en: "Stores",
    tr: "Mağaza",
    fr: "Boutiques",
    de: "Geschäfte",
    it: "Negozi",
    es: "Tiendas",
    ru: "Магазинов",
    };
    
    return `${number} ${labels[language] || labels.en}`;
    }
    
    function getTaxFreeRefund(country, language) {
    const refunds = {
    France: "10–13%",
    Italy: "11–15%",
    Germany: "10–13%",
    Spain: "10–15%",
    Turkey: "8–12%",
    Austria: "10–13%",
    Belgium: "10–13%",
    Netherlands: "10–13%",
    Greece: "10–13%",
    Switzerland: "6–8%",
    "United Kingdom":
    language === "tr"
    ? "Sınırlı"
    : language === "fr"
    ? "Limité"
    : language === "de"
    ? "Begrenzt"
    : language === "it"
    ? "Limitato"
    : language === "es"
    ? "Limitado"
    : language === "ru"
    ? "Ограничено"
    : "Limited",
    };
    
    return refunds[country] || "-";
    }
    
    function getTaxFreeBadge(value, language) {
    const labels = {
        available: {
            en: "Available",
            tr: "Mevcut",
            fr: "Disponible",
            de: "Verfügbar",
            it: "Disponibile",
            es: "Disponible",
            ru: "Доступно",
            },
            
            limited: {
            en: "Limited",
            tr: "Sınırlı",
            fr: "Limité",
            de: "Begrenzt",
            it: "Limitato",
            es: "Limitado",
            ru: "Ограничено",
            },
            
            none: {
            en: "Not Available",
            tr: "Yok",
            fr: "Indisponible",
            de: "Nicht verfügbar",
            it: "Non disponibile",
            es: "No disponible",
            ru: "Недоступно",
            },
    };
    
    if (value === "Yes") {
    return {
    color: "#22c55e",
    label: labels.available[language] || labels.available.en,
    };
    }
    
    if (value === "Limited") {
    return {
    color: "#eab308",
    label: labels.limited[language] || labels.limited.en,
    };
    }
    
    return {
    color: "#ef4444",
    label: labels.none[language] || labels.none.en,
    };
    }
    
    function TaxFreeBadge({ value, language }) {
        const badge = getTaxFreeBadge(value, language);
        
        return (
        <span className="tax-free-badge">
        <span
        className="tax-free-dot"
        style={{ backgroundColor: badge.color }}
        ></span>
        {badge.label}
        </span>
        );
        }
        
        function createMapEmbedUrl(outlet, language) {
        const city = getText(outlet.city, language);
        const query = encodeURIComponent(`${outlet.name} ${city}`);
        return `https://www.google.com/maps?q=${query}&output=embed`;
        }
        
        function createReviewUrl(provider, outlet, language) {
        const city = getText(outlet.city, language);
        const query = encodeURIComponent(`${outlet.name} ${city} reviews`);
        
        if (provider === "google") {
        return outlet.googleReviews || `https://www.google.com/search?q=${query}`;
        }
        
        if (provider === "yandex") {
        return outlet.yandexReviews || `https://yandex.com/maps/?text=${query}`;
        }
        
        return "#";
        
    }
    
    function OutletDetail({ outlet, language }) {
    if (!outlet) return null;
    
    const currentLanguage = language || localStorage.getItem("language") || "en";
    const t = translations[currentLanguage] || translations.en;
    
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

<div className="tax-badge">
<TaxFreeBadge value={outlet.taxFree} language={currentLanguage} />
</div>
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
<div>
🏬 {t.stores}:{" "}
<a
href={outlet.storesUrl || outlet.website}
target="_blank"
rel="noreferrer"
className="stores-link"
>
{formatStores(outlet.stores, currentLanguage)} ↗
</a>
</div>
<div>✈️ {t.airport}: {getText(outlet.airport, currentLanguage)}</div>
<div>
💶 <strong>{t.taxRefund}</strong>
<br />
{getTaxFreeRefund(
getText(outlet.country, "en"),
currentLanguage
)}
</div>
<div>
💰 {t.taxFree}:{" "}
<TaxFreeBadge value={outlet.taxFree} language={currentLanguage} />
</div>
<div>⭐ {t.rating}: {outlet.rating || "4.7"} / 5</div>
<div className="review-buttons">
<a
href={createReviewUrl("google", outlet, currentLanguage)}
target="_blank"
rel="noreferrer"
className="review-button"
>
{t.googleReviews}
</a>

<a
href={createReviewUrl("yandex", outlet, currentLanguage)}
target="_blank"
rel="noreferrer"
className="review-button"
>
{t.yandexReviews}
</a>
</div>
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
🕒 <strong>{t.openingHours}</strong>
<br />
{getText(outlet.hours, currentLanguage)}
</div>

</div>

<div className="highlight-box">
<h3>{t.whyVisit}</h3>
<p>{getText(outlet.bestFor, currentLanguage) || t.luxuryFashion}</p>
</div>

<div className="highlight-box">
<h3>💰 {t.taxGuideBoxTitle}</h3>

<p>{t.taxGuideBoxText}</p>

<a
href={`/${currentLanguage}/tax-free`}
className="view-button"
>
{t.taxGuideButton}
</a>
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