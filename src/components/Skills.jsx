import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Smartphone, Zap } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'Languages', items: 'C, Java, JavaScript', icon: <Code size={30} /> },
        { name: 'Frontend', items: 'HTML, CSS, React', icon: <Layout size={30} /> },
        { name: 'Backend', items: 'Node.js, Express', icon: <Zap size={30} /> },
        { name: 'Database', items: 'MongoDB, SQLite', icon: <Database size={30} /> },
    ];

    const projects = [
        {
            title: 'Travel App',
            description: 'A multi-language travel application with offline features built during a hackathon.',
            tags: ['Hackathon', 'Mobile', 'Offline First']
        },
        {
            title: 'Rechargeable Heating Pad',
            description: 'Innovative prototype for women, designed for affordability and long-lasting heat retention.',
            tags: ['Prototype', 'Hardware', 'Innovation']
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    What I Do
                </motion.h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h3>{skill.name}</h3>
                            <p>{skill.items}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
