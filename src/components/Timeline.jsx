import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Award, Briefcase } from 'lucide-react';
import './Timeline.css';

const timelineData = [
    {
        year: '2025',
        title: 'Aspiring Full Stack Developer',
        description: 'Focusing on building scalable web applications and mastering modern tech stacks.',
        icon: <Briefcase size={20} />,
        color: '#4f46e5'
    },
    {
        year: '2024',
        title: 'Hackathon Enthusiast',
        description: 'Participated in multiple hackathons, building solutions like "Roamr" and "Rechargeable Heating Pad".',
        icon: <Award size={20} />,
        color: '#f97316'
    },
    {
        year: '2024',
        title: 'MERN Stack Journey',
        description: 'Deep dived into MongoDB, Express, React, and Node.js. Built several full-stack projects.',
        icon: <Code size={20} />,
        color: '#0ea5e9'
    },
    {
        year: '2023',
        title: 'Engineering Student',
        description: 'Started my B.Tech in Computer Science. Laid the foundation with C, Java, and DSA.',
        icon: <GraduationCap size={20} />,
        color: '#8b5cf6'
    }
];

const Timeline = () => {
    return (
        <section id="journey" className="section timeline-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My Journey
                </motion.h2>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-year" style={{ color: item.color }}>{item.year}</div>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                            <div className="timeline-dot" style={{ backgroundColor: item.color }}>
                                {item.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
