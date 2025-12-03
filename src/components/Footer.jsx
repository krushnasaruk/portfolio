import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>Krushna<span className="dot">.</span></h2>
                        <p>Building digital experiences with passion and code.</p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h3>Follow Me</h3>
                        <div className="social-icons">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Krushna Saruk. All rights reserved.</p>
                    <p className="made-with">Made with <Heart size={16} fill="red" color="red" /> and React</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
