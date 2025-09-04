import React, { useState } from "react";
import { motion } from "framer-motion";

const branches = [
  {
    name: "Mpumalanga Head Office",
    address: "48 Langenhoven street, Klipfontein Ext 08, Witbank 1035",
    phone: "013 170 6125",
    email: ["info@bopheloems.co.za", "caezer@bopheloems.co.za"],
    mapQuery: "48+Langenhoven+street+Klipfontein+Witbank+Mpumalanga",
  },
  {
    name: "North West Office",
    address: "09 Stoffberg Street Ext 72, Stoffberg, Brits 0250",
    phone: "013 170 6125 / 079 235 0134",
    email: ["info@bopheloems.co.za", "pertunia@bopheloems.co.za"],
    mapQuery: "09+Stoffberg+Street+Ext+72+Stoffberg+Brits+North+West",
  },
  {
    name: "Limpopo Office",
    address: "78 Orloog Walkraal B, Moteti 0477",
    phone: "013 170 6125 / 013 170 5759",
    email: ["info@bopheloems.co.za", "chautauquaacademy@gmail.com"],
    mapQuery: "78+Orloog+Walkraal+Moteti+Limpopo",
  },
];

const Contact = () => {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
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
          <h2>
            Contact <span className="highlight">Us</span>
          </h2>
          <p className="section-subtitle">
            Reach us for emergency services, appointments, or general inquiries.
          </p>
        </motion.div>

        {/* Branch Selector + Map */}
        <motion.div
          className="map-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="branch-selector">
            {branches.map((branch, index) => (
              <button
                key={index}
                onClick={() => handleBranchClick(branch)}
                className={`branch-btn ${
                  branch.name === selectedBranch.name ? "active" : ""
                }`}
              >
                {branch.name}
              </button>
            ))}
          </div>
          <div className="map-container">
            <iframe
              title="Bophelo EMS Location"
              src={`https://www.google.com/maps?q=${selectedBranch.mapQuery}&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Branch Info Cards */}
        <div className="contact-content">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              className="contact-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{branch.name}</h3>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>{branch.address}</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>{branch.phone}</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  {branch.email.map((email, i) => (
                    <p key={i}>{email}</p>
                  ))}
                </div>
              </div>
              <button className="btn btn-primary branch-btn">
                Get Appointment
              </button>
            </motion.div>
          ))}
        </div>

        {/* Office Hours */}
        <motion.div
          className="office-hours card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Office Hours</h3>
          <p>Monday - Thursday: 08:00 - 16:00</p>
          <p>Friday & Holidays: 08:00 - 13:00</p>
          <p>Saturday & Sunday: CLOSED</p>
        </motion.div>

        {/* General Contact */}
        <motion.div
          className="general-contact card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>General Contact</h3>
          <p>Office: 013 170 6125</p>
          <p>Ambulance: +27 79 235 0134</p>
          <p>Emergency: +27 84 449 5966</p>
          <p>Email: info@bopheloems.co.za</p>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: var(--color-background);
          padding: var(--space-xxl) 0;
        }

        .section-header {
          margin-bottom: var(--space-xxl);
        }

        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--color-text-muted);
          max-width: 700px;
          margin: 0 auto;
        }

        .map-section {
          margin-bottom: var(--space-xxl);
        }

        .branch-selector {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
          justify-content: center;
          margin-bottom: var(--space-lg);
        }

        .branch-btn {
          padding: var(--space-sm) var(--space-md);
          border: 2px solid var(--color-primary);
          border-radius: var(--radius-md);
          background-color: var(--color-surface);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .branch-btn.active,
        .branch-btn:hover {
          background-color: var(--color-primary);
          color: #fff;
        }

        .map-container iframe {
          width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }

        .contact-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-xxl);
          margin-bottom: var(--space-xxl);
        }

        .contact-card {
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          background-color: var(--color-surface);
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .contact-card h3 {
          color: var(--color-primary);
          margin-bottom: var(--space-md);
        }

        .contact-item {
          display: flex;
          gap: var(--space-md);
          align-items: flex-start;
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

        .office-hours,
        .general-contact {
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          background-color: var(--color-surface);
          margin-bottom: var(--space-lg);
          text-align: center;
        }

        .office-hours h3,
        .general-contact h3 {
          color: var(--color-primary);
          margin-bottom: var(--space-md);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
