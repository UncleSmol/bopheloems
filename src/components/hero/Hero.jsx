import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section className="hero">
      {/* Background Layer */}
      <div className="hero-background">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`hero-video ${isVideoLoaded ? "visible" : "hidden"}`}
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        >
          <source
            src="https://cdn.pixabay.com/video/2019/03/20/22139-325698660_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {!isVideoLoaded && <div className="hero-fallback" />}
        <div className="hero-overlay" />
      </div>

      {/* Content Layer */}
      <div className="container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Welcome To
            <br />
            <span className="highlight">
              Bophelo Emergency Medical Services
            </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            With bases in{" "}
            <strong>Witbank, Brits, Middleburg, Kwa-Mhlanga, Standerton</strong>{" "}
            and <strong>Limpopo</strong>, we provide professional ambulance
            services, health awareness campaigns, first aid training, and
            emergency vehicle conversions. Our qualified team is ready to
            respond when every second counts.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <a href="tel:+27131706125" className="btn btn-primary hero-btn">
              Call: 013 170 6125 / 079 235 0134
            </a>
            <Link to="/services" className="btn btn-outline hero-btn">
              Explore Our Services
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

        /* Background */
        .hero-background {
          position: absolute;
          inset: 0;
          z-index: -2;
        }

        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          object-fit: cover;
          transform: translate(-50%, -50%);
          transition: opacity 0.5s ease;
        }
        .hero-video.hidden {
          opacity: 0;
        }
        .hero-video.visible {
          opacity: 1;
        }

        .hero-fallback {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            var(--color-primary),
            var(--color-secondary)
          );
          z-index: -1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          z-index: -1;
        }

        /* Content */
        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          padding: var(--space-xl);
        }

        .hero-title {
          font-size: var(--font-size-hero);
          font-family: var(--font-title);
          margin-bottom: var(--space-lg);
          line-height: 1.2;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
        }

        .highlight {
          color: var(--color-accent);
        }

        .hero-subtitle {
          font-size: var(--font-size-lg);
          margin-bottom: var(--space-xxl);
          line-height: 1.7;
          opacity: 0.95;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
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
          border-radius: var(--radius-lg);
          min-width: 240px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--font-size-xxl);
          }
          .hero-subtitle {
            font-size: var(--font-size-md);
          }
          .hero-buttons {
            flex-direction: column;
          }
          .hero-btn {
            width: 100%;
            max-width: 320px;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-video {
            display: none;
          }
          .hero-fallback {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
