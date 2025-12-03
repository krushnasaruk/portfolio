import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Monitor, PenTool, Video, Rocket } from 'lucide-react';
import './Interests.css';

const Interests = () => {
    const interests = [
        {
            title: 'Product Engineering',
            description: 'Turning ideas into usable prototypes.',
            icon: <Lightbulb size={24} />
        },
        {
            title: 'Web Development',
            description: 'Full-stack apps with clean UI and problem-focused features.',
            icon: <Monitor size={24} />
        },
        {
            title: 'Design Thinking',
            description: 'Applying user-centric design principles (GTIL course).',
            icon: <PenTool size={24} />
        },
        {
            title: 'Content Creation',
            description: 'Sharing knowledge through YouTube and teaching.',
            icon: <Video size={24} />
        },
        {
            title: 'Tech Entrepreneurship',
            description: 'Working on "CodeSutra" - inspired by culture & code.',
            icon: <Rocket size={24} />
        }
    ];

    return (
        <section id="interests" className="section interests-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My Interests
                </motion.h2>

                <div className="interests-wrapper">
                    {interests.map((item, index) => (
                        <motion.div
                            key={index}
                            className="interest-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="interest-icon">
                                {item.icon}
                            </div>
                            <div className="interest-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interests;
