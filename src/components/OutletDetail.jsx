function OutletDetail({ outlet }) {
    if (!outlet) return null;
    
    return (
    <div className="detail-box">
    <img src={outlet.image} alt={outlet.name} className="detail-image" />
    
    <div className="detail-header">
    <div>
    <p className="eyebrow">
    {outlet.country} / {outlet.city}
    </p>
    <h2>{outlet.name}</h2>
    </div>
    
    <span className="tax-badge">
    {outlet.taxFree === "Yes" ? "Tax Free Available" : "Tax Free Info"}
    </span>
    </div>
    
    {outlet.description && (
    <p className="outlet-description">{outlet.description}</p>
    )}
    
    <div className="info-grid">
    <div>🏬 <strong>Stores</strong><br />{outlet.stores}</div>
    <div>✈️ <strong>Airport Distance</strong><br />{outlet.airport}</div>
    <div>🕒 <strong>Opening Hours</strong><br />{outlet.hours}</div>
    <div>💰 <strong>Tax Free</strong><br />{outlet.taxFree}</div>
    </div>
    
    <div className="detail-buttons">
    <a href={outlet.maps} target="_blank" rel="noreferrer">
    📍 Google Maps
    </a>
    
    <a href={outlet.website} target="_blank" rel="noreferrer">
    🌐 Official Website
    </a>
    </div>
    
    <h3>Services</h3>
    <div className="services-grid">
    {(outlet.services || []).map((service) => (
    <div className="service-card" key={service}>
    ✓ {service}
    </div>
    ))}
    </div>
    
    <h3>Brands</h3>
    <ul>
    {outlet.brands.map((brand) => (
    <li key={brand}>{brand}</li>
    ))}
    </ul>
    
    <h3>Restaurants & Cafes</h3>
    <ul>
    {outlet.restaurants.map((restaurant) => (
    <li key={restaurant}>{restaurant}</li>
    ))}
    </ul>
    </div>
    );
    }
    
    export default OutletDetail;
    