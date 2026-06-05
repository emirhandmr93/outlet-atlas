function OutletDetail({ outlet }) {
    if (!outlet) return null;
    
    return (
    <div className="detail-box">
    <img
    src={outlet.image}
    alt={outlet.name}
    className="detail-image"
    />
    
    <div className="detail-header">
    <div>
    <p className="eyebrow">
    {outlet.country} / {outlet.city}
    </p>
    
    <h2>{outlet.name}</h2>
    </div>
    
    <span className="tax-badge">
    {outlet.taxFree === "Yes"
    ? "Tax Free Available"
    : "Tax Free Info"}
    </span>
    </div>
    
    {outlet.description && (
    <p className="outlet-description">
    {outlet.description}
    </p>
    )}
    
    <div className="info-grid">
    <div>
    🏬 <strong>Stores</strong>
    <br />
    {outlet.stores}
    </div>
    
    <div>
    ✈️ <strong>Airport Distance</strong>
    <br />
    {outlet.airport}
    </div>
    
    <div>
    🚆 <strong>City Center</strong>
    <br />
    {outlet.centerDistance ||
    "City center information coming soon"}
    </div>
    
    <div>
    🕒 <strong>Opening Hours</strong>
    <br />
    {outlet.hours}
    </div>
    
    <div>
    💰 <strong>Tax Free</strong>
    <br />
    {outlet.taxFree}
    </div>
    
    <div>
    ⭐ <strong>Rating</strong>
    <br />
    {outlet.rating || "4.7"} / 5
    </div>
    </div>
    
    <div className="highlight-box">
    <h3>Why visit this outlet?</h3>
    
    <p>
    {outlet.bestFor ||
    "A popular outlet destination for fashion, lifestyle and premium shopping."}
    </p>
    </div>
    
    <div className="highlight-box">
    <h3>How to get there</h3>
    
    <p>
    {outlet.transport ||
    "Transportation information will be added soon."}
    </p>
    </div>
    
    <div className="highlight-box">
    <h3>Best Time To Visit</h3>
    
    <p>
    {outlet.bestTime ||
    "Visit during weekdays to avoid crowds and enjoy a better shopping experience."}
    </p>
    </div>
    
    <div className="highlight-box">
    <h3>Money Saving Tips</h3>
    
    <p>
    {outlet.moneyTip ||
    "Look for seasonal promotions, tax free opportunities and additional visitor discounts."}
    </p>
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
    
    <h3>Popular Brands</h3>
    
    <ul>
    {(outlet.brands || []).map((brand) => (
    <li key={brand}>{brand}</li>
    ))}
    </ul>
    
    <h3>Restaurants & Cafes</h3>
    
    <ul>
    {(outlet.restaurants || []).map((restaurant) => (
    <li key={restaurant}>{restaurant}</li>
    ))}
    </ul>
    </div>
    );
    }
    
    export default OutletDetail;
    