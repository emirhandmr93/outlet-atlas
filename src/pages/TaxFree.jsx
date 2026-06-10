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

const extraText = {
    en: {
    whatTitle: "What Is Tax Free Shopping?",
    whatText: "Tax free shopping allows eligible international visitors to claim back part of the VAT paid on purchases made abroad. In Europe, this can reduce the real cost of fashion, luxury, electronics and outlet shopping.",
    whoTitle: "Who Can Claim Tax Free?",
    whoText: "In most European countries, tax free refunds are available to visitors who live outside the country or outside the European Union. You usually need your passport, original receipts and completed tax free forms.",
    mistakesTitle: "Common Tax Free Mistakes",
    mistakes: [
    "Leaving the country without validating the tax free form.",
    "Forgetting to bring your passport when shopping.",
    "Packing purchased items before customs inspection.",
    "Expecting the full VAT amount back instead of the net refund.",
    "Using the wrong card or missing the refund deadline."
    ],
    exampleTitle: "Example Tax Free Calculation",
    exampleText: "If you spend €500 in a country with an estimated 12% refund rate, your potential refund may be around €60. The final amount can vary depending on the provider, product category and refund method.",
    tipTitle: "Outlet Atlas Tip",
    tipText: "Always ask the store whether tax free is available before paying. At airports, go to customs before checking in your luggage if the goods may need to be inspected."
    },
    
    tr: {
    whatTitle: "Tax Free Alışveriş Nedir?",
    whatText: "Tax free alışveriş, yurt dışından gelen uygun ziyaretçilerin alışverişte ödedikleri KDV'nin bir bölümünü geri alabilmesini sağlar. Avrupa'da outlet, lüks moda ve alışveriş seyahatlerinde ciddi avantaj sağlayabilir.",
    whoTitle: "Kimler Tax Free Alabilir?",
    whoText: "Çoğu Avrupa ülkesinde tax free iadesi, ülke dışında veya Avrupa Birliği dışında yaşayan ziyaretçiler için geçerlidir. Genellikle pasaport, fatura ve doldurulmuş tax free formu gerekir.",
    mistakesTitle: "Sık Yapılan Tax Free Hataları",
    mistakes: [
    "Tax free formunu gümrükte onaylatmadan ülkeden çıkmak.",
    "Alışveriş sırasında pasaport bulundurmamak.",
    "Ürünleri gümrük kontrolünden önce valize teslim etmek.",
    "KDV'nin tamamının geri alınacağını düşünmek.",
    "Yanlış karta iade istemek veya son tarihi kaçırmak."
    ],
    exampleTitle: "Örnek Tax Free Hesaplama",
    exampleText: "Yaklaşık %12 iade oranı olan bir ülkede €500 alışveriş yaparsanız, tahmini iade tutarı yaklaşık €60 olabilir. Net tutar sağlayıcıya, ürün kategorisine ve iade yöntemine göre değişir.",
    tipTitle: "Outlet Atlas İpucu",
    tipText: "Ödeme yapmadan önce mağazada tax free olup olmadığını mutlaka sorun. Havalimanında ürünlerin kontrol edilmesi gerekebileceği için bagaj tesliminden önce gümrük işlemini yapın."
    },
    
    fr: {
    whatTitle: "Qu'est-ce que le shopping Tax Free ?",
    whatText: "Le shopping Tax Free permet aux visiteurs internationaux éligibles de récupérer une partie de la TVA payée lors d'achats effectués à l'étranger. En Europe, cela peut réduire le coût réel des achats mode, luxe, électronique et outlet.",
    whoTitle: "Qui peut bénéficier du Tax Free ?",
    whoText: "Dans la plupart des pays européens, le remboursement Tax Free est réservé aux visiteurs résidant hors du pays ou hors de l'Union européenne. Un passeport, les reçus originaux et les formulaires Tax Free complétés sont généralement nécessaires.",
    mistakesTitle: "Erreurs courantes avec le Tax Free",
    mistakes: [
    "Quitter le pays sans faire valider le formulaire Tax Free à la douane.",
    "Oublier son passeport lors des achats.",
    "Mettre les articles en bagage enregistré avant le contrôle douanier.",
    "Penser récupérer la totalité de la TVA.",
    "Choisir le mauvais mode de remboursement ou manquer la date limite."
    ],
    exampleTitle: "Exemple de calcul Tax Free",
    exampleText: "Si vous dépensez 500 € dans un pays avec un taux de remboursement estimé à 12 %, le remboursement potentiel peut être d'environ 60 €. Le montant final dépend du prestataire, de la catégorie du produit et du mode de remboursement.",
    tipTitle: "Conseil Outlet Atlas",
    tipText: "Demandez toujours au magasin si le Tax Free est disponible avant de payer. À l'aéroport, passez à la douane avant l'enregistrement des bagages si les articles doivent être contrôlés."
    },
    
    de: {
    whatTitle: "Was ist Tax-Free-Shopping?",
    whatText: "Tax-Free-Shopping ermöglicht berechtigten internationalen Besuchern, einen Teil der im Ausland gezahlten Mehrwertsteuer zurückzuerhalten. In Europa kann dies die tatsächlichen Kosten für Mode, Luxusartikel, Elektronik und Outlet-Shopping senken.",
    whoTitle: "Wer kann Tax Free nutzen?",
    whoText: "In den meisten europäischen Ländern ist die Tax-Free-Erstattung für Besucher möglich, die außerhalb des Landes oder außerhalb der Europäischen Union wohnen. Meist werden Reisepass, Originalbelege und ausgefüllte Tax-Free-Formulare benötigt.",
    mistakesTitle: "Häufige Fehler beim Tax Free",
    mistakes: [
    "Das Land verlassen, ohne das Tax-Free-Formular beim Zoll bestätigen zu lassen.",
    "Beim Einkaufen den Reisepass vergessen.",
    "Gekaufte Waren vor der Zollkontrolle einchecken.",
    "Erwarten, die gesamte Mehrwertsteuer zurückzubekommen.",
    "Falsche Erstattungsmethode wählen oder die Frist verpassen."
    ],
    exampleTitle: "Beispiel für eine Tax-Free-Berechnung",
    exampleText: "Wenn Sie 500 € in einem Land mit einer geschätzten Erstattung von 12 % ausgeben, kann die mögliche Rückerstattung etwa 60 € betragen. Der endgültige Betrag hängt vom Anbieter, der Produktkategorie und der Erstattungsmethode ab.",
    tipTitle: "Outlet Atlas Tipp",
    tipText: "Fragen Sie vor dem Bezahlen immer im Geschäft, ob Tax Free verfügbar ist. Am Flughafen sollten Sie vor dem Einchecken des Gepäcks zum Zoll gehen, falls die Waren geprüft werden müssen."
    },
    it: {
    whatTitle: "Che cos'è lo shopping Tax Free?",
    whatText: "Lo shopping Tax Free consente ai visitatori internazionali idonei di recuperare una parte dell'IVA pagata sugli acquisti effettuati all'estero. In Europa può ridurre il costo reale di moda, lusso, elettronica e outlet shopping.",
    whoTitle: "Chi può richiedere il Tax Free?",
    whoText: "Nella maggior parte dei paesi europei, il rimborso Tax Free è disponibile per i visitatori che vivono fuori dal paese o fuori dall'Unione Europea. Di solito servono passaporto, ricevute originali e moduli Tax Free compilati.",
    mistakesTitle: "Errori comuni con il Tax Free",
    mistakes: [
    "Lasciare il paese senza far convalidare il modulo Tax Free in dogana.",
    "Dimenticare il passaporto durante lo shopping.",
    "Imbarcare gli articoli acquistati prima del controllo doganale.",
    "Pensare di ricevere indietro l'intero importo dell'IVA.",
    "Scegliere il metodo di rimborso sbagliato o perdere la scadenza."
    ],
    exampleTitle: "Esempio di calcolo Tax Free",
    exampleText: "Se spendi 500 € in un paese con un rimborso stimato del 12%, il rimborso potenziale può essere di circa 60 €. L'importo finale può variare in base al provider, alla categoria del prodotto e al metodo di rimborso.",
    tipTitle: "Consiglio Outlet Atlas",
    tipText: "Chiedi sempre al negozio se il Tax Free è disponibile prima di pagare. In aeroporto, passa dalla dogana prima di imbarcare il bagaglio se gli articoli devono essere controllati."
    },
    
    es: {
    whatTitle: "¿Qué es comprar Tax Free?",
    whatText: "Las compras Tax Free permiten a los visitantes internacionales elegibles recuperar una parte del IVA pagado en compras realizadas en el extranjero. En Europa, esto puede reducir el coste real de moda, lujo, electrónica y compras outlet.",
    whoTitle: "¿Quién puede solicitar Tax Free?",
    whoText: "En la mayoría de los países europeos, los reembolsos Tax Free están disponibles para visitantes que viven fuera del país o fuera de la Unión Europea. Normalmente necesitas pasaporte, recibos originales y formularios Tax Free completados.",
    mistakesTitle: "Errores comunes con Tax Free",
    mistakes: [
    "Salir del país sin validar el formulario Tax Free en aduanas.",
    "Olvidar llevar el pasaporte al comprar.",
    "Facturar los productos antes de la inspección aduanera.",
    "Esperar recuperar el importe completo del IVA.",
    "Usar el método de reembolso incorrecto o perder la fecha límite."
    ],
    exampleTitle: "Ejemplo de cálculo Tax Free",
    exampleText: "Si gastas 500 € en un país con una tasa estimada de reembolso del 12%, el reembolso potencial puede ser de unos 60 €. El importe final puede variar según el proveedor, la categoría del producto y el método de reembolso.",
    tipTitle: "Consejo de Outlet Atlas",
    tipText: "Pregunta siempre en la tienda si ofrecen Tax Free antes de pagar. En el aeropuerto, pasa por aduanas antes de facturar el equipaje si los artículos deben ser inspeccionados."
    },
    
    ru: {
    whatTitle: "Что такое покупки Tax Free?",
    whatText: "Tax Free позволяет подходящим международным посетителям вернуть часть НДС, уплаченного за покупки за границей. В Европе это может снизить реальную стоимость моды, люксовых товаров, электроники и покупок в outlet.",
    whoTitle: "Кто может получить Tax Free?",
    whoText: "В большинстве европейских стран возврат Tax Free доступен посетителям, которые проживают за пределами страны или за пределами Европейского союза. Обычно нужны паспорт, оригинальные чеки и заполненные формы Tax Free.",
    mistakesTitle: "Частые ошибки при Tax Free",
    mistakes: [
    "Покинуть страну без подтверждения формы Tax Free на таможне.",
    "Забыть паспорт во время покупок.",
    "Сдать купленные товары в багаж до таможенной проверки.",
    "Ожидать возврат всей суммы НДС.",
    "Выбрать неправильный способ возврата или пропустить срок."
    ],
    exampleTitle: "Пример расчёта Tax Free",
    exampleText: "Если вы потратите 500 € в стране с примерной ставкой возврата 12%, возможный возврат может составить около 60 €. Итоговая сумма зависит от провайдера, категории товара и способа возврата.",
    tipTitle: "Совет Outlet Atlas",
    tipText: "Перед оплатой всегда уточняйте в магазине, доступен ли Tax Free. В аэропорту проходите таможенное подтверждение до сдачи багажа, если товары могут потребовать проверки."
    }
    };

export default function TaxFree() {
const location = useLocation();
const pathLanguage = location.pathname.split("/")[1];
const currentLanguage = pathLanguage || "en";
const t = translations[currentLanguage] || translations.en;
const x = extraText[currentLanguage] || extraText.en;

return (
<div className="page-container">
<h1>{t.taxFreeGuideTitle}</h1>
<p>{t.taxFreeGuideIntro}</p>

<h2>{x.whatTitle}</h2>
<p>{x.whatText}</p>

<h2>{x.whoTitle}</h2>
<p>{x.whoText}</p>

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
<td>{currentLanguage === "tr" ? "Mağazaya göre değişir" : "Varies by retailer"}</td>
</tr>
</tbody>
</table>

<h2>{x.mistakesTitle}</h2>
<div className="faq-box">
{x.mistakes.map((item) => (
<p key={item}>⚠️ {item}</p>
))}
</div>

<h2>{x.exampleTitle}</h2>
<p>{x.exampleText}</p>

<h2>{x.tipTitle}</h2>
<p>{x.tipText}</p>

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