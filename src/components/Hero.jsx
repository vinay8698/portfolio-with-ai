import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
    const one = <h1 className="intro">Hi, my name is</h1>;
    const two = <h2 className="big-heading">Vinodkumar Kanike.</h2>;
    const three = <h3 className="big-heading text-slate">I build things for the web.</h3>;
    const four = (
        <p className="description">
            I'm a software developer with over 3+ years of experience specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <span className="text-green">Publicis Sapient</span>.
        </p>
    );
    const five = (
        <Link to="projects" smooth={true} duration={500} offset={-70}>
            <motion.button
                className="check-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Check out my work!
            </motion.button>
        </Link>
    );

    const items = [one, two, three, four, five];

    return (
        <section id="hero" className="hero-section">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                >
                    {item}
                </motion.div>
            ))}
        </section>
    );
};

export default Hero;
