import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="numbered-heading">About Me</h2>
                <div className="inner">
                    <div className="about-content">
                        <p>
                            Hello! My name is Vinodkumar and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was pretty fun!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at an <span className="text-green">advertising agency</span>, a <span className="text-green">start-up</span>, and a <span className="text-green">huge corporation</span>. My main focus these days is building accessible, inclusive products and digital experiences at <span className="text-green">Publicis Sapient</span> for a variety of clients.
                        </p>
                        <p>
                            I am a Frontend Developer with over <span className="text-green">3+ years of experience</span> developing production-grade online applications in ReactJS, NextJS (SSR/SSG), JavaScript, TypeScript, HTML5, and CSS/SCSS. I have extensive experience in real-time data dashboards, performance optimization, and scalable UI architecture.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="skills-list">
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Node.js</li>
                            <li>HTML & CSS/SCSS</li>
                        </ul>
                    </div>
                    <div className="about-img">
                        <div className="img-wrapper">
                            <img src={profileImg} alt="Vinodkumar Kanike" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
