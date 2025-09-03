import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>About Bophelo EMS</h2>
            <p>
              For over a decade, Bophelo Emergency Medical Services has been at the forefront 
              of emergency healthcare in South Africa. Our team of highly trained paramedics 
              and emergency medical technicians are dedicated to providing life-saving care 
              when it matters most.
            </p>
            <p>
              We operate state-of-the-art ambulances equipped with advanced medical technology, 
              ensuring that our patients receive the highest standard of care from the moment 
              we arrive on scene until they reach the hospital.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">15,000+</div>
                <div className="stat-label">Lives Saved</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Ambulances</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Response</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder">
              <span>🏥</span>
              <p>Professional EMS Team</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-color: var(--color-surface-alt);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xxl);
          align-items: center;
        }

        .about-text h2 {
          color: var(--color-primary);
          margin-bottom: var(--space-lg);
        }

        .about-text p {
          font-size: var(--font-size-md);
          line-height: 1.7;
          margin-bottom: var(--space-lg);
        }

        .about-stats {
          display: flex;
          gap: var(--space-xl);
          margin-top: var(--space-xl);
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-family: var(--font-title);
          font-size: var(--font-size-xxl);
          color: var(--color-secondary);
          font-weight: var(--font-weight-bold);
        }

        .stat-label {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
          font-weight: var(--font-weight-bold);
        }

        .about-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-placeholder {
          background-color: var(--color-surface);
          border-radius: var(--border-radius-lg);
          padding: var(--space-xxl);
          text-align: center;
          box-shadow: var(--shadow-md);
          width: 100%;
          max-width: 400px;
        }

        .image-placeholder span {
          font-size: 4rem;
          display: block;
          margin-bottom: var(--space-lg);
        }

        .image-placeholder p {
          font-size: var(--font-size-lg);
          color: var(--color-text-muted);
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
          
          .about-stats {
            justify-content: space-around;
            gap: var(--space-md);
          }
          
          .stat-number {
            font-size: var(--font-size-xl);
          }
        }
      `}</style>
    </section>
  );
};

export default About;