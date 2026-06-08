const countryTranslations = {
    All: {
    en: "All",
    tr: "Tümü",
    fr: "Tous",
    de: "Alle",
    it: "Tutti",
    es: "Todo",
    ru: "Все",
    },
    
    France: {
    en: "France",
    tr: "Fransa",
    fr: "France",
    de: "Frankreich",
    it: "Francia",
    es: "Francia",
    ru: "Франция",
    },
    
    "United Kingdom": {
    en: "United Kingdom",
    tr: "Birleşik Krallık",
    fr: "Royaume-Uni",
    de: "Vereinigtes Königreich",
    it: "Regno Unito",
    es: "Reino Unido",
    ru: "Великобритания",
    },
    
    Italy: {
    en: "Italy",
    tr: "İtalya",
    fr: "Italie",
    de: "Italien",
    it: "Italia",
    es: "Italia",
    ru: "Италия",
    },
    
    Germany: {
    en: "Germany",
    tr: "Almanya",
    fr: "Allemagne",
    de: "Deutschland",
    it: "Germania",
    es: "Alemania",
    ru: "Германия",
    },
    
    Austria: {
    en: "Austria",
    tr: "Avusturya",
    fr: "Autriche",
    de: "Österreich",
    it: "Austria",
    es: "Austria",
    ru: "Австрия",
    },
    
    Switzerland: {
    en: "Switzerland",
    tr: "İsviçre",
    fr: "Suisse",
    de: "Schweiz",
    it: "Svizzera",
    es: "Suiza",
    ru: "Швейцария",
    },
    
    Netherlands: {
    en: "Netherlands",
    tr: "Hollanda",
    fr: "Pays-Bas",
    de: "Niederlande",
    it: "Paesi Bassi",
    es: "Países Bajos",
    ru: "Нидерланды",
    },
    
    Belgium: {
    en: "Belgium",
    tr: "Belçika",
    fr: "Belgique",
    de: "Belgien",
    it: "Belgio",
    es: "Bélgica",
    ru: "Бельгия",
    },
    
    Greece: {
    en: "Greece",
    tr: "Yunanistan",
    fr: "Grèce",
    de: "Griechenland",
    it: "Grecia",
    es: "Grecia",
    ru: "Греция",
    },
    
    Spain: {
    en: "Spain",
    tr: "İspanya",
    fr: "Espagne",
    de: "Spanien",
    it: "Spagna",
    es: "España",
    ru: "Испания",
    },
    };
    
    function CountryFilter({
    countries,
    outlets,
    selectedCountry,
    setSelectedCountry,
    setSelectedOutlet,
    language,
    }) {
    const currentLanguage = language || localStorage.getItem("language") || "en";
    
    return (
    <div className="filters">
    {countries.map((country) => {
    const countryText =
    countryTranslations[country]?.[currentLanguage] || country;
    
    return (
    <button
    key={country}
    className={selectedCountry === country ? "active-filter" : ""}
    onClick={() => {
    setSelectedCountry(country);
    setSelectedOutlet(null);
    }}
    >
    {country === "All"
? `${countryText} (${outlets.length})`
: `${countryText} (${
outlets.filter(
(outlet) =>
(outlet.country?.en || outlet.country) === country
).length
})`}
    </button>
    );
    })}
    </div>
    );
    }
    
    export default CountryFilter;