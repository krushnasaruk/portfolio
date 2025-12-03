import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, Youtube, Linkedin, ArrowUpRight, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate sending
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    className="contact-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2 className="section-title contact-title">Let's Connect</h2>
                            <p className="contact-text">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>

                            <div className="social-links-vertical">
                                <a href="https://www.instagram.com/__.krushna43?igsh=MWZndjMwMXRmNjUxZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-item">
                                    <Instagram size={20} /> Instagram
                                </a>
                                <a href="https://x.com/superhero_43?s=11" target="_blank" rel="noopener noreferrer" className="social-item">
                                    <Twitter size={20} /> Twitter
                                </a>
                                <a href="https://www.youtube.com/@THEREVIEWERb4u" target="_blank" rel="noopener noreferrer" className="social-item">
                                    <Youtube size={20} /> YouTube
                                </a>
                                <a href="https://www.linkedin.com/in/krushna-saruk-762396386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="social-item">
                                    <Linkedin size={20} /> LinkedIn
                                </a>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : <>Send Message <Send size={18} /></>}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
