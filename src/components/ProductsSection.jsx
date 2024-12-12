import React from 'react';
import '../styles/ProductsSection.css';

export default function ProductsSection() {
  const products = [
    {
      name: "NextLink",
      logo: "NEXT",
      logoBackground: "#FDF6F0",
      logoShape: "square",
      description: "Build your digital presence, add your socials, important links, in one single page. Make QR code, or Digital V-Card.",
      image: "/nextlink-ss.webp",
      imageAlt: "NextLink app interface"
    },
    {
      name: "RestroPRO SaaS",
      logo: "Restro",
      logoBackground: "#2B4332",
      logoShape: "circle",
      description: "Effortlessly manage your restaurant, cafe, hotel, bars using our All-in-One POS system. Which includes.",
      image: "/restropro-ss.webp",
      imageAlt: "RestroPRO dashboard interface"
    }
  ];

  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="products-title">Our Products</h2>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-header">
                <div 
                  className={`product-logo ${product.logoShape === 'circle' ? 'logo-circle' : 'logo-square'}`}
                  style={{ background: product.logoBackground }}
                >
                  <span className={`logo-text ${product.logoShape === 'circle' ? 'text-white' : ''}`}>
                    {product.logo}
                  </span>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
              
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="product-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
