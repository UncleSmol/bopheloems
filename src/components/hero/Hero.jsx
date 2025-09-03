import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bophelo Emergency Medical Services
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Saving lives across South Africa with professional emergency medical care, 
            advanced life support, and rapid response when every second counts.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="tel:+27123456789" className="btn btn-primary hero-btn">
              Emergency: 123-456-789
            </a>
            <Link to="/services" className="btn btn-outline hero-btn">
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--color-text-inverse);
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 50%, var(--color-secondary) 100%);
          z-index: -2;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: -1;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          padding: var(--space-xl);
        }

        .hero-title {
          font-size: var(--font-size-hero);
          font-family: var(--font-title);
          margin-bottom: var(--space-lg);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: var(--font-size-xl);
          margin-bottom: var(--space-xxl);
          opacity: 0.95;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-btn {
          font-size: var(--font-size-md);
          padding: var(--space-md) var(--space-xl);
          min-width: 200px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--font-size-xxl);
          }
          
          .hero-subtitle {
            font-size: var(--font-size-lg);
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;