import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const [activeTabId, setActiveTabId] = useState(0);

    const jobs = [
        {
            company: 'Publicis Sapient',
            title: 'Experience Engineer L2',
            range: 'July 2025 – Present',
            url: 'https://www.publicissapient.com/',
            duties: [
                'Working on enterprise-scale frontend applications using React and Next.js.',
                'Contributing to scalable UI architecture, performance optimization, and secure coding practices.',
                'Participating in Agile sprint planning, code reviews, and production releases.',
            ],
        },
        {
            company: 'Nerve Solutions',
            title: 'Software Engineer',
            range: 'April 2023 – July 2025',
            url: '#',
            duties: [
                'Led design-to-development workflow using Figma for pixel-perfect UI delivery.',
                'Integrated real-time market data using WebSockets handling 70,000+ daily orders.',
                'Improved application performance by 15% using lazy loading, code splitting, and virtualization.',
                'Integrated secure REST APIs and WebSocket communication.',
                'Mentored junior developers through regular code reviews and technical guidance.',
            ],
        },
        {
            company: 'Wow InfoBiz',
            title: 'Software Developer',
            range: 'Sept 2022 – Feb 2023',
            url: '#',
            duties: [
                'Improved SEO and performance using Next.js SSR and SSG.',
                'Integrated third-party APIs for real-time data updates.',
                'Followed modular architecture and clean coding practices.',
            ],
        },
    ];

    return (
        <section id="experience" className="start-section move-down">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="numbered-heading">Where I've Worked</h2>

                <div className="inner-exp">
                    <div className="tab-list">
                        {jobs.map((job, index) => (
                            <button
                                key={index}
                                className={`tab-button ${activeTabId === index ? 'active' : ''}`}
                                onClick={() => setActiveTabId(index)}
                            >
                                {job.company}
                            </button>
                        ))}
                        <div
                            className="tab-highlight"
                            style={{
                                transform: `translateY(${activeTabId * 42}px)`,
                            }}
                        />
                    </div>

                    <div className="job-panels">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className={`job-panel ${activeTabId === index ? 'active' : ''}`}
                                hidden={activeTabId !== index}
                            >
                                <h3>
                                    <span>{job.title}</span>
                                    <span className="company">
                                        &nbsp;@&nbsp;
                                        <a href={job.url} target="_blank" rel="noopener noreferrer" className="inline-link">
                                            {job.company}
                                        </a>
                                    </span>
                                </h3>
                                <p className="range">{job.range}</p>
                                <ul>
                                    {job.duties.map((duty, i) => (
                                        <li key={i}>{duty}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
