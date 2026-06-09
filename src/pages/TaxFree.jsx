import { useLocation } from "react-router";
import { translations } from "../i18n/translations";

const countryNames = {
France: { en: "France", tr: "Fransa", fr: "France", de: "Frankreich", it: "Francia", es: "Francia", ru: "Франция" },
Italy: { en: "Italy", tr: "İtalya", fr: "Italie", de: "Italien", it: "Italia", es: "Italia", ru: "Италия" },
Germany: { en: "Germany", tr: "Almanya", fr: "Allemagne", de: "Deutschland", it: "Germania", es: "Alemania", ru: "Германия" },
Spain: { en: "Spain", tr: "İspanya", fr: "Espagne", de: "Spanien", it: "Spagna", es: "España", ru: "Испания" },
Turkey: { en: "Turkey", tr: "Türkiye", fr: "Turquie", de: "Türkei", it: "Turchia", es: "Turquía", ru: "Турция" },
Switzerland: { en: "Switzerland", tr: "İsviçre", fr: "Suisse", de: "Schweiz", it: "Svizzera", es: "Suiza", ru: "Швейцария" },
Portugal: { en: "Portugal", tr: "Portekiz", fr: "Portugal", de: "Portugal", it: "Portogallo", es: "Portugal", ru: "Португалия" },
Belgium: { en: "Belgium", tr: "Belçika", fr: "Belgique", de: "Belgien", it: "Belgio", es: "Bélgica", ru: "Бельгия" },
Austria: { en: "Austria", tr: "Avusturya", fr: "Autriche", de: "Österreich", it: "Austria", es: "Austria", ru: "Австрия" },
};

export default function TaxFree() {
const location = useLocation();
const pathLanguage = location.pathname.split("/")[1];
const currentLanguage = pathLanguage || "en";
const t = translations[currentLanguage] || translations.en;

return (
<div className="page-container">
<h1>{t.taxFreeGuideTitle}</h1>
<p>{t.taxFreeGuideIntro}</p>

<h2>{t.howItWorks}</h2>

<div className="taxfree-steps">
<div>1️⃣ {t.taxStep1}</div>
<div>2️⃣ {t.taxStep2}</div>
<div>3️⃣ {t.taxStep3}</div>
<div>4️⃣ {t.taxStep4}</div>
<div>5️⃣ {t.taxStep5}</div>
</div>

<h2>{t.popularProviders}</h2>

<div className="provider-list">
<a href="https://www.globalblue.com" target="_blank" rel="noreferrer">Global Blue</a>
<a href="https://www.planetpayment.com" target="_blank" rel="noreferrer">Planet</a>
<a href="https://www.epaytaxfree.com" target="_blank" rel="noreferrer">ePay Tax Free</a>
</div>

<h2>{t.averageRefundRates}</h2>

<table className="refund-table">
<thead>
<tr>
<th>{t.country}</th>
<th>{t.refund}</th>
</tr>
</thead>

<tbody>
<tr><td>{countryNames.France[currentLanguage]}</td><td>10–13%</td></tr>
<tr><td>{countryNames.Italy[currentLanguage]}</td><td>11–15%</td></tr>
<tr><td>{countryNames.Germany[currentLanguage]}</td><td>10–13%</td></tr>
<tr><td>{countryNames.Spain[currentLanguage]}</td><td>10–15%</td></tr>
<tr><td>{countryNames.Turkey[currentLanguage]}</td><td>8–12%</td></tr>
<tr><td>{countryNames.Switzerland[currentLanguage]}</td><td>6–8%</td></tr>
<tr><td>{countryNames.Portugal[currentLanguage]}</td><td>10–14%</td></tr>
</tbody>
</table>

<h2>{t.minimumPurchaseTitle}</h2>

<table className="refund-table">
<thead>
<tr>
<th>{t.country}</th>
<th>{t.minimumPurchase}</th>
</tr>
</thead>

<tbody>
<tr><td>{countryNames.France[currentLanguage]}</td><td>€100.01</td></tr>
<tr><td>{countryNames.Italy[currentLanguage]}</td><td>€70</td></tr>
<tr><td>{countryNames.Germany[currentLanguage]}</td><td>€50</td></tr>
<tr><td>{countryNames.Spain[currentLanguage]}</td><td>€90.15</td></tr>
<tr><td>{countryNames.Belgium[currentLanguage]}</td><td>€125</td></tr>
<tr><td>{countryNames.Austria[currentLanguage]}</td><td>€75</td></tr>
<tr><td>{countryNames.Switzerland[currentLanguage]}</td><td>CHF 300</td></tr>
<tr><td>{countryNames.Portugal[currentLanguage]}</td><td>€61.50</td></tr>
<tr>
<td>{countryNames.Turkey[currentLanguage]}</td>
<td>
{currentLanguage === "tr"
? "Mağazaya göre değişir"
: "Varies by retailer"}
</td>
</tr>
</tbody>
</table>

<h2>{t.faq}</h2>

<div className="faq-box">
<h3>{t.faqQuestion1}</h3>
<p>{t.faqAnswer1}</p>

<h3>{t.faqQuestion2}</h3>
<p>{t.faqAnswer2}</p>

<h3>{t.faqQuestion3}</h3>
<p>{t.faqAnswer3}</p>

<h3>{t.faqQuestion4}</h3>
<p>{t.faqAnswer4}</p>
</div>
</div>
);
}