import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projectsData = [
    {
        title: 'Traveling App (Roamr)',
        description: 'A multi-language travel application designed to help users explore new destinations with offline capabilities.',
        tags: ['Travel', 'Offline First', 'Multi-language'],
        link: 'https://krushnasaruk.github.io/roamr-/index.html',
        color: 'from-blue-400 to-cyan-300'
    },
    {
        title: 'Hotel Management System',
        description: 'A comprehensive web-based system for managing hotel bookings, rooms, and guest services efficiently.',
        tags: ['Management', 'Web App', 'System'],
        link: 'https://krushnasaruk.github.io/hotel-management-system/',
        color: 'from-purple-400 to-pink-300'
    },
    {
        title: 'Student Attendance Dashboard',
        description: 'An intuitive dashboard for students to track their daily attendance, view history, and monitor progress.',
        tags: ['Education', 'Dashboard', 'Student'],
        link: 'https://krushnasaruk.github.io/student-attendance/dashboard2.html',
        color: 'from-green-400 to-emerald-300'
    },
    {
        title: 'Teacher Attendance Dashboard',
        description: 'A powerful tool for teachers to manage class attendance, generate reports, and track student engagement.',
        tags: ['Education', 'Management', 'Teacher'],
        link: 'https://krushnasaruk.github.io/teacherdashboard2/',
        color: 'from-orange-400 to-amber-300'
    },
    {
        title: 'Freelancing Portfolio',
        description: 'My previous portfolio showcasing freelance projects and services offered to clients.',
        tags: ['Portfolio', 'Freelance', 'Showcase'],
        link: 'https://krushnasaruk.github.io/freelancing/hi.html',
        color: 'from-indigo-400 to-violet-300'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid-container">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card-wrapper"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card-item"
                                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className={`project-image-placeholder ${project.color}`}>
                                    <span className="project-initials">{project.title.substring(0, 2)}</span>
                                    <div className="project-overlay">
                                        <span className="view-btn">View Project <ExternalLink size={16} /></span>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <div className="project-header">
                                        <h3>{project.title}</h3>
                                    </div>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
