import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const values = [
    {
      title: "Compassion",
      description: "We treat every patient with dignity, respect, and empathy, understanding that we may be their lifeline in critical moments.",
      icon: "❤️"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of medical care and continuously invest in training and equipment to deliver superior outcomes.",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our interactions with patients, families, and communities.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and methodologies to improve our response times and treatment capabilities.",
      icon: "💡"
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Bophelo EMS was established with a mission to provide exceptional emergency medical services."
    },
    {
      year: "2015",
      title: "Fleet Expansion",
      description: "Expanded our ambulance fleet to 25 vehicles, covering major metropolitan areas."
    },
    {
      year: "2018",
      title: "Air Ambulance Service",
      description: "Launched helicopter emergency medical services for remote and critical cases."
    },
    {
      year: "2020",
      title: "COVID-19 Response",
      description: "Adapted services to safely transport COVID-19 patients with specialized protocols."
    },
    {
      year: "2023",
      title: "Technology Integration",
      description: "Implemented advanced GPS tracking and real-time patient monitoring systems."
    }
  ];

  return (
    <main className="about-page">
      <section className="hero-section">
        <div className="container">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">About Bophelo EMS</h1>
            <p className="hero-subtitle">
              Leading emergency medical services across South Africa with compassion, 
              expertise, and unwavering commitment to saving lives.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div 
              className="mission-card card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Mission</h2>
              <p>
                At Bophelo EMS, our mission is to provide exceptional emergency medical 
                services that save lives and support communities across South Africa. 
                We are committed to delivering rapid, professional, and compassionate 
                care when it matters most.
              </p>
            </motion.div>
            <motion.div 
              className="vision-card card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Vision</h2>
              <p>
                To be the leading emergency medical service provider in South Africa, 
                recognized for our clinical excellence, innovative approach, and 
                dedication to improving emergency healthcare outcomes for all South Africans.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="stats-section section">
        <div className="container">
          <motion.h2 
            className="text-center mb-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Impact
          </motion.h2>
          <div className="stats-grid">
            <motion.div 
              className="stat-card card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Lives Saved</div>
            </motion.div>
            <motion.div 
              className="stat-card card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">50+</div>
              <div className="stat-label">Ambulances</div>
            </motion.div>
            <motion.div 
              className="stat-card card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">24/7</div>
              <div className="stat-label">Emergency Response</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="values-section section">
        <div className="container">
          <motion.h2 
            className="text-center mb-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section section">
        <div className="container">
          <motion.h2 
            className="text-center mb-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content card">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
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

        .mission-vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xl);
        }

        .mission-card,
        .vision-card {
          border-left: 4px solid var(--color-primary);
        }

        .mission-card h2,
        .vision-card h2 {
          color: var(--color-primary);
          margin-bottom: var(--space-md);
        }

        .stats-section {
          background-color: var(--color-surface-alt);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-xl);
        }

        .stat-card {
          transition: all var(--transition-normal);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .stat-number {
          font-family: var(--font-title);
          font-size: var(--font-size-hero);
          color: var(--color-primary);
          margin-bottom: var(--space-sm);
        }

        .stat-label {
          font-size: var(--font-size-lg);
          color: var(--color-text-muted);
          font-weight: var(--font-weight-bold);
        }

        .values-section {
          background-color: var(--color-surface);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-xl);
        }

        .value-card {
          text-align: center;
          border-left: 4px solid var(--color-accent);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: var(--space-lg);
        }

        .value-card h3 {
          color: var(--color-secondary);
          margin-bottom: var(--space-md);
        }

        .timeline-section {
          background-color: var(--color-surface-alt);
        }

        .timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: var(--color-primary);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          align-items: center;
          margin-bottom: var(--space-xxl);
          position: relative;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-year {
          background-color: var(--color-primary);
          color: var(--color-text-inverse);
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--border-radius-pill);
          font-weight: var(--font-weight-bold);
          font-size: var(--font-size-md);
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .timeline-content {
          width: 45%;
          margin: 0 5%;
        }

        .timeline-content h4 {
          color: var(--color-secondary);
          margin-bottom: var(--space-sm);
        }

        .timeline-content p {
          margin: 0;
          color: var(--color-text-muted);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--font-size-xxl);
          }
          
          .hero-subtitle {
            font-size: var(--font-size-lg);
          }
          
          .mission-vision-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
          
          .timeline::before {
            left: var(--space-lg);
          }
          
          .timeline-item {
            flex-direction: row !important;
            padding-left: var(--space-xxl);
          }
          
          .timeline-year {
            left: var(--space-lg);
          }
          
          .timeline-content {
            width: 100%;
            margin: 0;
          }
        }
      `}</style>
    </main>
  );
};

export default AboutPage;