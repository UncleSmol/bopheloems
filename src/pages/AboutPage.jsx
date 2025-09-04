import React from "react";
import { motion } from "framer-motion";

// Hero video
const heroVideo =
  "https://cdn.pixabay.com/video/2019/02/23/21617-319452308_large.mp4";

// Mission & Vision images/videos
const missionMedia =
  "https://cdn.pixabay.com/video/2022/01/27/105764-672186001_tiny.mp4";
const visionMedia =
  "https://cdn.pixabay.com/video/2022/12/28/144554-784867400_tiny.mp4";

// Values media
const valuesMedia = [
  "https://cdn.pixabay.com/video/2022/10/07/133898-758336558_large.mp4",
  "https://cdn.pixabay.com/video/2022/07/10/123689-728698068_large.mp4",
  "https://cdn.pixabay.com/video/2021/06/15/77740-563529419_large.mp4",
  "https://cdn.pixabay.com/video/2024/02/02/198918-909322169_large.mp4",
];

// Timeline images
const timelineMedia = [
  "https://cdn.pixabay.com/photo/2019/03/01/10/40/startup-4027674_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/08/27/12/51/ambulance-2685925_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/02/24/19/09/helicopter-4018257_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/04/22/16/15/virus-5078900_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/11/17/21/46/navigation-1048294_1280.jpg",
];

// Client logos
const clients = [
  "https://bopheloems.co.za/wp-content/uploads/2023/08/EUROP-S.png",
  "https://bopheloems.co.za/wp-content/uploads/2023/08/DISCOVERY.png",
  "https://bopheloems.co.za/wp-content/uploads/2023/08/ER24.png",
  "https://bopheloems.co.za/wp-content/uploads/2023/08/NETCARE.png",
];

const values = [
  {
    title: "Compassion",
    description:
      "We treat every patient with dignity, respect, and empathy, understanding that we may be their lifeline in critical moments.",
    icon: "❤️",
    media: valuesMedia[0],
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards of medical care and continuously invest in training and equipment to deliver superior outcomes.",
    icon: "⭐",
    media: valuesMedia[1],
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and ethical practices in all our interactions with patients, families, and communities.",
    icon: "🤝",
    media: valuesMedia[2],
  },
  {
    title: "Innovation",
    description:
      "We embrace new technologies and methodologies to improve our response times and treatment capabilities.",
    icon: "💡",
    media: valuesMedia[3],
  },
];

const timeline = [
  {
    year: "2010",
    title: "Company Founded",
    description:
      "Bophelo EMS was established with a mission to provide exceptional emergency medical services.",
    media: timelineMedia[0],
  },
  {
    year: "2015",
    title: "Fleet Expansion",
    description:
      "Expanded our ambulance fleet to 25 vehicles, covering major metropolitan areas.",
    media: timelineMedia[1],
  },
  {
    year: "2018",
    title: "Air Ambulance Service",
    description:
      "Launched helicopter emergency medical services for remote and critical cases.",
    media: timelineMedia[2],
  },
  {
    year: "2020",
    title: "COVID-19 Response",
    description:
      "Adapted services to safely transport COVID-19 patients with specialized protocols.",
    media: timelineMedia[3],
  },
  {
    year: "2023",
    title: "Technology Integration",
    description:
      "Implemented advanced GPS tracking and real-time patient monitoring systems.",
    media: timelineMedia[4],
  },
];

// Reusable media card component
const MediaCard = ({ media, alt }) => {
  const isVideo = media.endsWith(".mp4");
  return isVideo ? (
    <video
      src={media}
      autoPlay
      muted
      loop
      playsInline
      className="card-media"
      preload="metadata"
    />
  ) : (
    <img src={media} alt={alt} className="card-media" loading="lazy" />
  );
};

const AboutPage = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Bophelo EMS
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Leading emergency medical services across South Africa with
            compassion, expertise, and unwavering commitment to saving lives.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision-section">
        <div className="container mission-vision-grid">
          <motion.div
            className="mission-card card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MediaCard media={missionMedia} alt="Mission" />
            <h2>Our Mission</h2>
            <p>
              At Bophelo EMS, our mission is to provide exceptional emergency
              medical services that save lives and support communities across
              South Africa. We are committed to delivering rapid, professional,
              and compassionate care when it matters most.
            </p>
          </motion.div>

          <motion.div
            className="vision-card card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MediaCard media={visionMedia} alt="Vision" />
            <h2>Our Vision</h2>
            <p>
              To be the leading emergency medical service provider in South
              Africa, recognized for our clinical excellence, innovative
              approach, and dedication to improving emergency healthcare
              outcomes for all South Africans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Values */}
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
                <MediaCard media={value.media} alt={value.title} />
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
                  <MediaCard media={item.media} alt={item.title} />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="clients-section section">
        <div className="container">
          <motion.h2
            className="text-center mb-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Clients
          </motion.h2>
          <div className="clients-grid">
            {clients.map((client, idx) => (
              <img
                key={idx}
                src={client}
                alt={`Client ${idx}`}
                loading="lazy"
                className="client-logo"
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          position: relative;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }
        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
        }
        .mission-vision-grid,
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .card-media {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: var(--border-radius-md);
          margin-bottom: var(--space-md);
        }
        .timeline-section .timeline {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .timeline-section .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background-color: var(--color-primary);
          transform: translateX(-50%);
        }
        .timeline-item {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          position: relative;
        }
        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }
        .timeline-year {
          background-color: var(--color-primary);
          color: var(--color-text-inverse);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-weight: bold;
          font-size: 1rem;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }
        .timeline-content {
          width: 45%;
          margin: 0 2.5%;
        }
        .clients-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }
        .client-logo {
          max-height: 60px;
          object-fit: contain;
        }
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column !important;
          }
          .timeline-content {
            width: 100%;
            margin-top: 1rem;
          }
          .timeline-year {
            left: 0;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
};

export default AboutPage;
