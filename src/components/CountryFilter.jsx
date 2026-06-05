function CountryFilter({
    countries,
    selectedCountry,
    setSelectedCountry,
    setSelectedOutlet,
    }) {
    return (
    <div className="filters">
    {countries.map((country) => (
    <button
    key={country}
    className={selectedCountry === country ? "active-filter" : ""}
    onClick={() => {
    setSelectedCountry(country);
    setSelectedOutlet(null);
    }}
    >
    {country}
    </button>
    ))}
    </div>
    );
    }
    
    export default CountryFilter;
    