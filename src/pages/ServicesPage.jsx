import React from "react";
import "./ServicesPage.css";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Emergency Ambulance Services",
      description: "24/7 emergency response with advanced life support capabilities",
      features: ["Advanced Life Support", "Cardiac Monitoring", "Trauma Care", "Critical Care Transport"]
    },
    {
      id: 2,
      title: "Inter-Hospital Transfers",
      description: "Safe and efficient patient transfers between medical facilities",
      features: ["ICU Transfers", "Specialized Equipment", "Medical Escorts", "Long Distance Transport"]
    },
    {
      id: 3,
      title: "Event Medical Cover",
      description: "Professional medical standby services for events and gatherings",
      features: ["Sports Events", "Concerts & Festivals", "Corporate Events", "Community Gatherings"]
    },
    {
      id: 4,
      title: "Medical Training",
      description: "Comprehensive first aid and emergency response training programs",
      features: ["CPR Certification", "First Aid Training", "Corporate Training", "Community Workshops"]
    },
    {
      id: 5,
      title: "Air Ambulance Services",
      description: "Helicopter and fixed-wing aircraft for critical emergency transport",
      features: ["Helicopter Rescue", "Fixed Wing Transport", "Remote Area Access", "Critical Care Flight"]
    },
    {
      id: 6,
      title: "Industrial Medical Services",
      description: "Specialized medical support for mining and industrial operations",
      features: ["Mine Rescue", "Industrial First Aid", "Occupational Health", "Emergency Planning"]
    }
  ];

  return (
    <main className="services-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">
              Comprehensive emergency medical services designed to meet the diverse 
              healthcare needs of South African communities.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.id} className="service-card card" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul className="features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-bullet">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-outline service-btn">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Need Emergency Medical Services?</h2>
            <p className="mb-lg">
              Our team is ready to respond 24/7. Contact us for immediate assistance 
              or to discuss your medical service requirements.
            </p>
            <div className="cta-buttons">
              <a href="tel:+27123456789" className="btn btn-primary">
                Emergency: 123-456-789
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;