import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Youtube, Instagram, Twitter, Code, Database, Layout } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Krushna Saruk</h1>
                    <div className="role">
                        <Typewriter
                            options={{
                                strings: ['Aspiring Software Developer', 'Content Creator', 'Problem Solver'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                        />
                    </div>
                    <p className="description">
                        First-year Computer Science engineering student, creator, and problem solver.
                        Building my journey one project at a time.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/krushna-saruk-762396386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://www.youtube.com/@THEREVIEWERb4u" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <Youtube size={24} />
                        </a>
                        <a href="https://www.instagram.com/__.krushna43?igsh=MWZndjMwMXRmNjUxZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="https://x.com/superhero_43?s=11" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-blob"></div>

                    {/* Floating Icons */}
                    <motion.div
                        className="floating-icon icon-1"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Code size={32} color="#2563eb" />
                    </motion.div>
                    <motion.div
                        className="floating-icon icon-2"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <Database size={32} color="#0ea5e9" />
                    </motion.div>
                    <motion.div
                        className="floating-icon icon-3"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                        <Layout size={32} color="#7c3aed" />
                    </motion.div>

                    {/* Placeholder for user image or abstract graphic */}
                    <div className="hero-image-placeholder">
                        <span className="initials">KS</span>
                    </div>
                </motion.div>
            </div>

            <div className="hero-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
