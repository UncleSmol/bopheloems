import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Emergency Response",
      description: "24/7 emergency ambulance services with advanced life support",
      icon: "🚑"
    },
    {
      id: 2,
      title: "Inter-Hospital Transfers",
      description: "Safe patient transfers between medical facilities",
      icon: "🏥"
    },
    {
      id: 3,
      title: "Event Medical Cover",
      description: "Professional medical standby for events and gatherings",
      icon: "🎪"
    },
    {
      id: 4,
      title: "Air Ambulance",
      description: "Helicopter and aircraft emergency transport services",
      icon: "🚁"
    }
  ];

  return (
    <section className="services-section section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Services</h2>
          <p className="section-subtitle">
            Comprehensive emergency medical services designed to save lives and support communities
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="services-cta text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .services-section {
          background-color: var(--color-surface);
        }

        .section-header {
          margin-bottom: var(--space-xxl);
        }

        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-xl);
          margin-bottom: var(--space-xxl);
        }

        .service-card {
          text-align: center;
          border: 1px solid var(--color-border);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: var(--space-lg);
        }

        .service-title {
          color: var(--color-primary);
          margin-bottom: var(--space-md);
        }

        .service-description {
          color: var(--color-text-muted);
          margin-bottom: 0;
        }

        .services-cta {
          margin-top: var(--space-xl);
        }
      `}</style>
    </section>
  );
};

export default Services;