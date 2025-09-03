import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="contact-section section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Contact Us</h2>
          <p className="section-subtitle">
            Get in touch for emergency services, quotes, or general inquiries
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-card card">
              <h3>Emergency Contact</h3>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Emergency Line</strong>
                  <p>123-456-789</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>emergency@bopheloems.co.za</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Head Office</strong>
                  <p>123 Medical Drive<br />Johannesburg, 2000</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3>Send us a Message</h3>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: var(--color-background);
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xxl);
        }

        .contact-card h3,
        .contact-form h3 {
          color: var(--color-primary);
          margin-bottom: var(--space-lg);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-md);
          margin-bottom: var(--space-lg);
        }

        .contact-icon {
          font-size: var(--font-size-xl);
          flex-shrink: 0;
        }

        .contact-item strong {
          display: block;
          color: var(--color-secondary);
          margin-bottom: var(--space-xs);
        }

        .contact-item p {
          margin: 0;
          color: var(--color-text-muted);
        }

        .form-group {
          margin-bottom: var(--space-lg);
        }

        .form-group label {
          display: block;
          margin-bottom: var(--space-xs);
          font-weight: var(--font-weight-bold);
          color: var(--color-text);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: var(--space-sm) var(--space-md);
          border: 2px solid var(--color-border);
          border-radius: var(--border-radius-md);
          font-size: var(--font-size-md);
          transition: all var(--transition-normal);
          background-color: var(--color-surface);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--color-secondary);
          box-shadow: 0 0 0 3px var(--color-secondary-light);
        }

        .form-submit {
          width: 100%;
          font-size: var(--font-size-md);
          padding: var(--space-md);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;