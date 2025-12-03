import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const statsData = [
    { label: 'Projects Completed', value: 15, suffix: '+' },
    { label: 'Lines of Code', value: 10, suffix: 'k+' },
    { label: 'Hackathons', value: 5, suffix: '' },
    { label: 'Coffee Cups', value: 500, suffix: '+' }
];

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-item"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                        >
                            <h3 className="stat-value">
                                {stat.value}{stat.suffix}
                            </h3>
                            <p className="stat-label">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
