import React from "react";
import { motion } from "framer-motion";

const CareersPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Paramedic - Advanced Life Support",
      location: "Johannesburg",
      type: "Full-time",
      description: "Join our team of elite paramedics providing advanced life support services across Johannesburg.",
      requirements: [
        "Registered Paramedic with HPCSA",
        "Minimum 2 years ALS experience",
        "Valid driver's license (Code 10)",
        "Strong communication skills"
      ]
    },
    {
      id: 2,
      title: "Emergency Medical Technician",
      location: "Cape Town",
      type: "Full-time",
      description: "Seeking dedicated EMTs to provide basic life support and emergency medical care.",
      requirements: [
        "Registered EMT with HPCSA",
        "Valid driver's license",
        "Physical fitness requirements",
        "Team player attitude"
      ]
    },
    {
      id: 3,
      title: "Flight Paramedic",
      location: "Durban",
      type: "Full-time",
      description: "Specialized role for air ambulance operations requiring advanced medical skills.",
      requirements: [
        "Advanced Life Support Paramedic",
        "Flight medicine certification",
        "5+ years emergency experience",
        "Ability to work in confined spaces"
      ]
    },
    {
      id: 4,
      title: "Control Room Operator",
      location: "Pretoria",
      type: "Shift work",
      description: "Coordinate emergency responses and manage ambulance dispatch operations.",
      requirements: [
        "Emergency dispatch experience",
        "Excellent communication skills",
        "Computer literacy",
        "Ability to work under pressure"
      ]
    }
  ];

  const benefits = [
    "Competitive salary packages",
    "Comprehensive medical aid",
    "Continuous training and development",
    "Career advancement opportunities",
    "Life insurance coverage",
    "Pension fund contributions"
  ];

  return (
    <main className="careers-page">
      <section className="hero-section">
        <div className="container">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Join Our Life-Saving Team</h1>
            <p className="hero-subtitle">
              Build a rewarding career in emergency medical services and make a real difference 
              in people's lives every day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Current Openings</h2>
            <p className="section-subtitle">
              Explore exciting career opportunities with South Africa's leading EMS provider
            </p>
          </motion.div>

          <div className="jobs-grid">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                className="job-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-location">📍 {job.location}</span>
                    <span className="job-type">⏰ {job.type}</span>
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul className="requirements-list">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="requirement-item">
                        <span className="requirement-bullet">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-primary job-apply-btn">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Why Work With Us?</h2>
            <p className="section-subtitle">
              We offer competitive benefits and a supportive work environment
            </p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-item card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="benefit-icon">✓</span>
                <p>{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .careers-page {
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

        .section-header {
          margin-bottom: var(--space-xxl);
        }

        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-xl);
        }

        .job-card {
          border-left: 4px solid var(--color-primary);
        }

        .job-header {
          margin-bottom: var(--space-lg);
        }

        .job-title {
          color: var(--color-primary);
          margin-bottom: var(--space-sm);
        }

        .job-meta {
          display: flex;
          gap: var(--space-lg);
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }

        .job-description {
          margin-bottom: var(--space-lg);
          line-height: 1.6;
        }

        .job-requirements h4 {
          color: var(--color-secondary);
          margin-bottom: var(--space-sm);
          font-size: var(--font-size-md);
        }

        .requirements-list {
          margin-bottom: var(--space-lg);
        }

        .requirement-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-sm);
          margin-bottom: var(--space-xs);
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }

        .requirement-bullet {
          color: var(--color-accent);
          font-weight: var(--font-weight-bold);
          flex-shrink: 0;
        }

        .job-apply-btn {
          width: 100%;
        }

        .benefits-section {
          background-color: var(--color-surface-alt);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-lg);
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-lg);
          text-align: left;
        }

        .benefit-icon {
          background-color: var(--color-success);
          color: var(--color-text-inverse);
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: var(--font-weight-bold);
          flex-shrink: 0;
        }

        .benefit-item p {
          margin: 0;
          font-size: var(--font-size-md);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--font-size-xxl);
          }
          
          .hero-subtitle {
            font-size: var(--font-size-lg);
          }
          
          .jobs-grid {
            grid-template-columns: 1fr;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};

export default CareersPage;