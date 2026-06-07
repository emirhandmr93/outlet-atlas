const countryTranslations = {
    All: {
    en: "All",
    tr: "Tümü",
    fr: "Tous",
    de: "Alle",
    it: "Tutti",
    },
    France: {
    en: "France",
    tr: "Fransa",
    fr: "France",
    de: "Frankreich",
    it: "Francia",
    },
    "United Kingdom": {
    en: "United Kingdom",
    tr: "Birleşik Krallık",
    fr: "Royaume-Uni",
    de: "Vereinigtes Königreich",
    it: "Regno Unito",
    },
    Italy: {
    en: "Italy",
    tr: "İtalya",
    fr: "Italie",
    de: "Italien",
    it: "Italia",
    },
    Germany: {
    en: "Germany",
    tr: "Almanya",
    fr: "Allemagne",
    de: "Deutschland",
    it: "Germania",
    },
    Austria: {
    en: "Austria",
    tr: "Avusturya",
    fr: "Autriche",
    de: "Österreich",
    it: "Austria",
    },
    Switzerland: {
    en: "Switzerland",
    tr: "İsviçre",
    fr: "Suisse",
    de: "Schweiz",
    it: "Svizzera",
    },
    Netherlands: {
    en: "Netherlands",
    tr: "Hollanda",
    fr: "Pays-Bas",
    de: "Niederlande",
    it: "Paesi Bassi",
    },
    Belgium: {
    en: "Belgium",
    tr: "Belçika",
    fr: "Belgique",
    de: "Belgien",
    it: "Belgio",
    },
    Greece: {
        en: "Greece",
        tr: "Yunanistan",
        fr: "Grèce",
        de: "Griechenland",
        it: "Grecia",
        
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