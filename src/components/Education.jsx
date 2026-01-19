import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="numbered-heading">Education</h2>
                <div className="education-card">
                    <h3>B.E – Electronics and Telecommunication</h3>
                    <p className="school">Ramrao Adik Institute of Technology</p>
                    <p className="year">2019 – 2023</p>
                    <p className="cgpa">CGPA: <span className="text-green">6.76 / 10</span></p>
                </div>

                <h3 className="cert-heading">Certifications</h3>
                <ul className="cert-list">
                    <li>Web Development – Udemy (Level 2)</li>
                    <li>MERN CRUD – Udemy (Level 1)</li>
                </ul>
            </motion.div>
        </section>
    );
};

export default Education;
