import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Digital Sales Platform – Verizon',
            description: 'Built scalable frontend components for Verizon’s digital sales platform. Implemented secure, type-safe APIs using TypeScript and TanStack Query. Optimized performance using SSR, lazy loading, and dynamic imports. Improved product listing, cart flow, and checkout experience.',
            tech: ['Next.js', 'React', 'TypeScript', 'TanStack Query', 'CSS'],
            github: '#',
            external: '#'
        },
        {
            title: 'Automatic Trading App – Kotak Neo',
            description: 'Built trading strategy management system with realtime execution. Created multi-strategy UI with custom entry and exit conditions. Developed live control panel with Start, Pause, Resume actions.',
            tech: ['ReactJS', 'NodeJS', 'WebSockets', 'SCSS'],
            github: '#',
            external: '#'
        },
        {
            title: 'WeLinkJobs – Social Media Platform',
            description: 'Built LinkedIn-style professional networking platform. Implemented posts, reactions, comments, and live feeds. Optimized performance using throttling and lazy loading.',
            tech: ['ReactJS', 'SCSS', 'JavaScript'],
            github: '#',
            external: '#'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="numbered-heading">Some Things I've Built</h2>
                <ul className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.li
                            key={i}
                            className="project-card"
                            whileHover={{ y: -7 }}
                        >
                            <header>
                                <div className="project-top">
                                    <div className="folder">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                    <div className="project-links">
                                        <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer"><FaGithub /></a>
                                        <a href={project.external} aria-label="External Link" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
                                    </div>
                                </div>
                                <h3 className="project-title">
                                    <a href={project.external} target="_blank" rel="noreferrer">{project.title}</a>
                                </h3>
                                <div className="project-description">
                                    <p>{project.description}</p>
                                </div>
                            </header>
                            <footer>
                                <ul className="project-tech-list">
                                    {project.tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </footer>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
};

export default Projects;
