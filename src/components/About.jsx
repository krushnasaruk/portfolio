import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className="about-wrapper">
                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about-image-placeholder">
                            <span className="about-initials">KS</span>
                        </div>
                        <div className="about-shape"></div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="subsection-title">Who I Am</h3>
                        <p className="about-text">
                            I'm <span className="about-highlight">Krushna Saruk</span>, a passionate First-year Computer Science Engineering student with a deep love for technology and innovation. My journey is driven by curiosity and a desire to build solutions that make a difference.
                        </p>
                        <p className="about-text">
                            Beyond coding, I'm a content creator on YouTube, where I share my tech insights as "Reviewer". I believe in the power of <span className="about-highlight">learning by doing</span> and am constantly exploring new technologies to expand my skillset.
                        </p>

                        <div className="stats-container">
                            <div className="stat-card">
                                <span className="stat-number">01+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects Built</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Dedication</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
