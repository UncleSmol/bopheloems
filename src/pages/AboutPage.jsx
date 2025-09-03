import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <main className="about-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">About Bophelo EMS</h1>
            <p className="hero-subtitle">
              Leading emergency medical services across South Africa with compassion, 
              expertise, and unwavering commitment to saving lives.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-lg">
            <div className="content-block">
              <h2>Our Mission</h2>
              <p>
                At Bophelo EMS, our mission is to provide exceptional emergency medical 
                services that save lives and support communities across South Africa. 
                We are committed to delivering rapid, professional, and compassionate 
                care when it matters most.
              </p>
            </div>
            <div className="content-block">
              <h2>Our Vision</h2>
              <p>
                To be the leading emergency medical service provider in South Africa, 
                recognized for our clinical excellence, innovative approach, and 
                dedication to improving emergency healthcare outcomes for all South Africans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <h2 className="text-center mb-xl">Our Impact</h2>
          <div className="grid grid-3">
            <div className="stat-card card text-center">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Lives Saved</div>
            </div>
            <div className="stat-card card text-center">
              <div className="stat-number">50+</div>
              <div className="stat-label">Ambulances</div>
            </div>
            <div className="stat-card card text-center">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Emergency Response</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="text-center mb-xl">Our Values</h2>
          <div className="grid grid-2 gap-lg">
            <div className="value-card card">
              <h3>Compassion</h3>
              <p>
                We treat every patient with dignity, respect, and empathy, 
                understanding that we may be their lifeline in critical moments.
              </p>
            </div>
            <div className="value-card card">
              <h3>Excellence</h3>
              <p>
                We maintain the highest standards of medical care and continuously 
                invest in training and equipment to deliver superior outcomes.
              </p>
            </div>
            <div className="value-card card">
              <h3>Integrity</h3>
              <p>
                We operate with transparency, honesty, and ethical practices in 
                all our interactions with patients, families, and communities.
              </p>
            </div>
            <div className="value-card card">
              <h3>Innovation</h3>
              <p>
                We embrace new technologies and methodologies to improve our 
                response times and treatment capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;