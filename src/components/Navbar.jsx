import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setNav(!nav);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 1, link: 'about' },
        { id: 2, link: 'skills' },
        { id: 3, link: 'experience' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'education' },
        { id: 6, link: 'contact' },
    ];

    const socialLinks = [
        { id: 1, icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/vinodkumar-kanike' },
        { id: 2, icon: <FaGithub size={20} />, url: 'https://github.com/vinodkumar8698' },
        { id: 3, icon: <FaGlobe size={20} />, url: 'https://portfolio-vinodkumar8698.vercel.app/' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
        >
            <div className="logo">
                <a href="/">VK</a>
            </div>

            <ul className="desktop-menu">
                {links.map(({ id, link }) => (
                    <motion.li
                        key={id}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: id * 0.1 }}
                    >
                        <Link to={link} smooth={true} duration={500} offset={-70}>
                            <span className="nav-number">0{id}.</span>
                            {link}
                        </Link>
                    </motion.li>
                ))}

                {/* Social Links for Desktop */}
                {socialLinks.map(({ id, icon, url }) => (
                    <motion.li
                        key={`social-${id}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="social-icon"
                    >
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {icon}
                        </a>
                    </motion.li>
                ))}

                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <ThemeToggle />
                </motion.li>
            </ul>

            <div className="hamburger" onClick={handleClick}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul>
                    {links.map(({ id, link }) => (
                        <li key={id}>
                            <Link onClick={handleClick} to={link} smooth={true} duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                    <div className="mobile-socials">
                        {socialLinks.map(({ id, icon, url }) => (
                            <a key={id} href={url} target="_blank" rel="noopener noreferrer" className="mobile-social-icon">
                                {icon}
                            </a>
                        ))}
                    </div>
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
