import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiRedux, SiPostman, SiLinux } from 'react-icons/si'; // Added some logical backend icons
import './Skills.css';

const Skills = () => {
    const techStack = [
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3/SCSS', icon: <FaCss3Alt /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Linux', icon: <SiLinux /> },
    ];

    return (
        <section id="skills" className="skills-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="numbered-heading">Technical Skills</h2>
                <div className="skills-grid">
                    {techStack.map((tech, index) => (
                        <motion.div
                            className="skill-card"
                            key={index}
                            whileHover={{ y: -5 }}
                        >
                            <div className="skill-icon">{tech.icon}</div>
                            <p>{tech.name}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
