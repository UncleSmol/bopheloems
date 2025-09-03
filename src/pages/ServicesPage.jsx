import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Emergency Ambulance Services",
      description: "24/7 emergency response with advanced life support capabilities",
      icon: "🚑",
      features: ["Advanced Life Support", "Cardiac Monitoring", "Trauma Care", "Critical Care Transport"]
    },
    {
      id: 2,
      title: "Inter-Hospital Transfers",
      description: "Safe and efficient patient transfers between medical facilities",
      icon: "🏥",
      features: ["ICU Transfers", "Specialized Equipment", "Medical Escorts", "Long Distance Transport"]
    },
    {
      id: 3,
      title: "Event Medical Cover",
      description: "Professional medical standby services for events and gatherings",
      icon: "🎪",
      features: ["Sports Events", "Concerts & Festivals", "Corporate Events", "Community Gatherings"]
    },
    {
      id: 4,
      title: "Medical Training",
      description: "Comprehensive first aid and emergency response training programs",
      icon: "📚",
      features: ["CPR Certification", "First Aid Training", "Corporate Training", "Community Workshops"]
    },
    {
      id: 5,
      title: "Air Ambulance Services",
      description: "Helicopter and fixed-wing aircraft for critical emergency transport",
      icon: "🚁",
      features: ["Helicopter Rescue", "Fixed Wing Transport", "Remote Area Access", "Critical Care Flight"]
    },
    {
      id: 6,
      title: "Industrial Medical Services",
      description: "Specialized medical support for mining and industrial operations",
      icon: "⚡",
      features: ["Mine Rescue", "Industrial First Aid", "Occupational Health", "Emergency Planning"]
    }
  ];

  return (
    <main className="services-page">
      <section className="hero-section">
        <div className="container">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">
              Comprehensive emergency medical services designed to meet the diverse 
              healthcare needs of South African communities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <motion.div 
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .services-page {
          min-height: 100vh;
        }

        .hero-section {
          background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
          color: var(--color-text-inverse);
          padding: var(--space-xxl) 0;
        }

        .hero-title {
          font-size: var(--font-size-hero);
          margin-bottom: var(--space-lg);
        }

        .hero-subtitle {
          font-size: var(--font-size-xl);
          max-width: 800px;
          margin: 0 auto;
          opacity: 0.95;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-xl);
          margin-top: var(--space-xl);
        }

        .service-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-left: 4px solid var(--color-primary);
        }

        .service-header {
          margin-bottom: var(--space-lg);
          text-align: center;
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: var(--space-md);
        }

        .service-title {
          color: var(--color-primary);
          font-size: var(--font-size-xl);
          margin-bottom: var(--space-md);
        }

        .service-description {
          color: var(--color-text-muted);
          font-size: var(--font-size-md);
          line-height: 1.6;
        }

        .service-features {
          flex-grow: 1;
          margin-bottom: var(--space-lg);
        }

        .service-features h4 {
          color: var(--color-secondary);
          font-size: var(--font-size-md);
          margin-bottom: var(--space-sm);
          font-weight: var(--font-weight-bold);
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }

        .feature-bullet {
          color: var(--color-accent);
          font-weight: var(--font-weight-bold);
          font-size: var(--font-size-lg);
        }

        .service-btn {
          margin-top: auto;
          align-self: flex-start;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%);
          color: var(--color-text-inverse);
        }

        .cta-content h2 {
          font-size: var(--font-size-xxl);
          margin-bottom: var(--space-lg);
          color: var(--color-text-inverse);
        }

        .cta-content p {
          font-size: var(--font-size-lg);
          max-width: 600px;
          margin: 0 auto var(--space-lg);
          opacity: 0.95;
        }

        .cta-buttons {
          display: flex;
          gap: var(--space-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-buttons .btn {
          font-size: var(--font-size-md);
          padding: var(--space-md) var(--space-xl);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--font-size-xxl);
          }
          
          .hero-subtitle {
            font-size: var(--font-size-lg);
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-buttons .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </main>
  );
};

export default ServicesPage;