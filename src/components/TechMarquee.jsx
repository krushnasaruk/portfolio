import React from 'react';
import './TechMarquee.css';

const techStack = [
    'React', 'Node.js', 'JavaScript', 'TypeScript', 'MongoDB', 'Express',
    'HTML5', 'CSS3', 'Git', 'Framer Motion', 'Tailwind', 'Python', 'Java', 'C++'
];

const TechMarquee = () => {
    return (
        <div className="tech-marquee-section">
            <div className="marquee-container">
                <div className="marquee-content">
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-item">{tech}</span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {techStack.map((tech, index) => (
                        <span key={`dup-${index}`} className="tech-item">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechMarquee;
