// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import styles from './Footer.module.css'; // CSS styles for the footer

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Footer Top - Social Media Links and Quick Links */}
                <div className={styles.footerTop}>
                    {/* Social Media Links */}
                    <div className={styles.socialLinks}>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                        >
                            <FaFacebook size={30} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                        >
                            <FaTwitter size={30} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                        >
                            <FaInstagram size={30} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                        >
                            <FaLinkedin size={30} />
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.quickLinks}>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom - Contact Info and Copyright */}
                <div className={styles.footerBottom}>
                    {/* Contact Details */}
                    <div className={styles.contactInfo}>
                        <p><strong>Contact us:</strong></p>
                        <p>
                            <a href="tel:+919167716998">+91 91677 16998</a> /{' '}
                            <a href="tel:+917738013749">+91 77380 13749</a>
                        </p>
                    </div>
                    <p>&copy; {new Date().getFullYear()} TURFOO. All Rights Reserved.</p>
                    <p>Contact us: <a href="mailto:info@TURFOO.com">info@TURFOO.com</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
