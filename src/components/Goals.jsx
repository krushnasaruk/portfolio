import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Globe } from 'lucide-react';
import './Goals.css';

const Goals = () => {
    return (
        <section id="goals" className="section goals-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    What I Aim For
                </motion.h2>

                <div className="goals-grid">
                    <motion.div
                        className="goal-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="goal-icon"><Target size={40} /></div>
                        <h3>Impactful Software</h3>
                        <p>Building tools for colleges and systems that eliminate hospital paperwork.</p>
                    </motion.div>

                    <motion.div
                        className="goal-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="goal-icon"><Heart size={40} /></div>
                        <h3>Better Everyday Life</h3>
                        <p>Creating solutions that solve real problems and make daily tasks easier.</p>
                    </motion.div>

                    <motion.div
                        className="goal-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="goal-icon"><Globe size={40} /></div>
                        <h3>Next Gen Tech</h3>
                        <p>Growing into a founder who builds technology for the next generation.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Goals;
