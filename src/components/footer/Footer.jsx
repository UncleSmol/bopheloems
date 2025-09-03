import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Bophelo EMS</h3>
            <p className="footer-description">
              Leading emergency medical services across South Africa with compassion, 
              expertise, and unwavering commitment to saving lives.
            </p>
          </motion.div>

          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul className="links-list">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Emergency Contact</h4>
            <div className="emergency-info">
              <p className="emergency-number">📞 123-456-789</p>
              <p className="emergency-email">📧 emergency@bopheloems.co.za</p>
              <p className="emergency-address">📍 Johannesburg, South Africa</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Bophelo Emergency Medical Services. All rights reserved.</p>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-secondary-dark) 100%);
          color: var(--color-text-inverse);
          padding: var(--space-xxl) 0 var(--space-xl);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: var(--space-xxl);
          margin-bottom: var(--space-xxl);
        }

        .footer-title {
          font-family: var(--font-title);
          font-size: var(--font-size-xl);
          margin-bottom: var(--space-md);
          color: var(--color-accent);
        }

        .footer-description {
          font-size: var(--font-size-md);
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 0;
        }

        .footer-links h4,
        .footer-contact h4 {
          font-size: var(--font-size-lg);
          margin-bottom: var(--space-md);
          color: var(--color-text-inverse);
        }

        .links-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .footer-link {
          color: var(--color-text-inverse);
          opacity: 0.8;
          transition: all var(--transition-normal);
          font-size: var(--font-size-sm);
        }

        .footer-link:hover {
          opacity: 1;
          color: var(--color-accent);
          transform: translateX(4px);
        }

        .emergency-info {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .emergency-number,
        .emergency-email,
        .emergency-address {
          font-size: var(--font-size-sm);
          opacity: 0.9;
          margin: 0;
        }

        .emergency-number {
          font-weight: var(--font-weight-bold);
          color: var(--color-accent);
        }

        .footer-bottom {
          text-align: center;
          padding-top: var(--space-xl);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .footer-bottom p {
          font-size: var(--font-size-sm);
          opacity: 0.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;