import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statsData = [
  { number: 10, label: "Years Experience", suffix: "+" },
  { number: 105, label: "Colleagues", suffix: "+" },
  { number: 8, label: "Projects Completed", suffix: "+" },
  { number: 11, label: "Emergency Ops", suffix: "+" },
];

const AnimatedStat = ({ number, label, suffix }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = number;
      const duration = 1500; // animation duration in ms
      const incrementTime = Math.floor(duration / end);
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(counter);
      }, incrementTime);
    }
  }, [inView, number]);

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          {/* Text Section */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="about-title">
              About <span className="highlight">Bophelo EMS</span>
            </h2>
            <p className="about-paragraph">
              Founded in 2013 by a young Black entrepreneur, Bophelo Emergency
              Medical Services (formerly JD-MED EMS) has grown into one of South
              Africa’s leading emergency care providers. We provide ambulance
              services, first aid training, emergency vehicle conversions, and
              health awareness campaigns across multiple provinces.
            </p>
            <p className="about-paragraph">
              Our team consists of passionate and qualified professionals who
              are groomed to respond efficiently in every emergency. Compliance
              with department regulations and high service standards is at the
              core of our operations.
            </p>

            {/* Stats */}
            <div className="about-stats">
              {statsData.map((stat, index) => (
                <AnimatedStat
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              ))}
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="about-video"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="video-wrapper">
              <video
                src="https://cdn.pixabay.com/video/2021/02/02/63838-508272954_large.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="video"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about {
          position: relative;
          padding: var(--space-xxl) 0;
          background: var(--color-surface-alt);
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-lg);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xxl);
          align-items: center;
        }

        .about-title {
          font-size: var(--font-size-hero);
          font-family: var(--font-title);
          margin-bottom: var(--space-lg);
        }

        .highlight {
          color: var(--color-accent);
        }

        .about-paragraph {
          font-size: var(--font-size-lg);
          line-height: 1.7;
          margin-bottom: var(--space-lg);
          color: var(--color-text);
        }

        .about-stats {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-lg);
          margin-top: var(--space-xl);
        }

        .stat-card {
          flex: 1;
          min-width: 120px;
          text-align: center;
          background: var(--color-surface);
          padding: var(--space-md);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          transition: box-shadow 0.3s ease;
        }

        .stat-card:hover {
          box-shadow: var(--shadow-lg);
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
          font-weight: var(--font-weight-medium);
        }

        .about-video {
          display: flex;
          justify-content: center;
        }

        .video-wrapper {
          width: 100%;
          max-width: 400px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }

          .about-title {
            font-size: var(--font-size-xxl);
          }

          .about-paragraph {
            font-size: var(--font-size-md);
          }

          .stat-number {
            font-size: var(--font-size-lg);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
