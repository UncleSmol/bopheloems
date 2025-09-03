import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you within 24 hours!");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      title: "Emergency Line",
      value: "123-456-789",
      icon: "🚨",
      description: "24/7 Emergency Response"
    },
    {
      title: "General Inquiries",
      value: "info@bopheloems.co.za",
      icon: "📧",
      description: "Business hours: 8AM - 5PM"
    },
    {
      title: "Head Office",
      value: "123 Medical Drive, Johannesburg, 2000",
      icon: "📍",
      description: "Visit us during business hours"
    },
    {
      title: "WhatsApp",
      value: "+27 82 123 4567",
      icon: "💬",
      description: "Quick responses via WhatsApp"
    }
  ];

  const serviceOptions = [
    "Emergency Ambulance",
    "Inter-Hospital Transfer",
    "Event Medical Cover",
    "Air Ambulance",
    "Medical Training",
    "Industrial Medical Services",
    "Other"
  ];

  return (
    <main className="contact-page">
      <section className="hero-section">
        <div className="container">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Contact Bophelo EMS</h1>
            <p className="hero-subtitle">
              We're here to help 24/7. Reach out for emergency services, 
              quotes, or any questions about our medical services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                Whether you need emergency medical services or want to learn more about 
                our offerings, we're here to help.
              </p>

              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-card card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      <p className="contact-value">{info.value}</p>
                      <p className="contact-description">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="contact-form card" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>
                <p className="form-description">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
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
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
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
                    <label htmlFor="service">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
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
      </section>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
        }

        .hero-section {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
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

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xxl);
        }

        .contact-intro {
          font-size: var(--font-size-lg);
          color: var(--color-text-muted);
          margin-bottom: var(--space-xl);
          line-height: 1.6;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .contact-info-card {
          display: flex;
          align-items: flex-start;
          gap: var(--space-md);
          padding: var(--space-lg);
          border-left: 4px solid var(--color-accent);
        }

        .contact-icon {
          font-size: var(--font-size-xl);
          flex-shrink: 0;
        }

        .contact-details h4 {
          color: var(--color-secondary);
          margin-bottom: var(--space-xs);
          font-size: var(--font-size-md);
        }

        .contact-value {
          font-weight: var(--font-weight-bold);
          color: var(--color-text);
          margin-bottom: var(--space-xs);
          font-size: var(--font-size-md);
        }

        .contact-description {
          color: var(--color-text-muted);
          font-size: var(--font-size-sm);
          margin: 0;
        }

        .contact-form h3 {
          color: var(--color-primary);
          margin-bottom: var(--space-sm);
        }

        .form-description {
          color: var(--color-text-muted);
          margin-bottom: var(--space-xl);
          font-size: var(--font-size-md);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-lg);
        }

        .form-group {
          margin-bottom: var(--space-lg);
        }

        .form-group label {
          display: block;
          margin-bottom: var(--space-xs);
          font-weight: var(--font-weight-bold);
          color: var(--color-text);
          font-size: var(--font-size-sm);
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: var(--space-sm) var(--space-md);
          border: 2px solid var(--color-border);
          border-radius: var(--border-radius-md);
          font-size: var(--font-size-md);
          transition: all var(--transition-normal);
          background-color: var(--color-surface);
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: var(--color-secondary);
          box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          font-size: var(--font-size-md);
          padding: var(--space-md);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--font-size-xxl);
          }
          
          .hero-subtitle {
            font-size: var(--font-size-lg);
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </main>
  );
};

export default ContactPage;