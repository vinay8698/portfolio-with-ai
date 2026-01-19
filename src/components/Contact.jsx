import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="contact-container"
            >
                <p className="overline">What’s Next?</p>
                <h2 className="title">Get In Touch</h2>
                <p className="contact-desc">
                    I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>

                <div className="contact-links">
                    <a className="email-link" href="mailto:vinodkumarkanike@outlook.com">
                        Say Hello
                    </a>
                </div>

                <div className="contact-details">
                    <div className="detail-item">
                        <FaEnvelope className="icon" />
                        <span>vinodkumarkanike@outlook.com</span>
                    </div>
                    <div className="detail-item">
                        <FaPhone className="icon" />
                        <span>+91 9158096089</span>
                    </div>
                    <div className="detail-item socials">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Contact;
