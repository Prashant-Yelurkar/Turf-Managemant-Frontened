import React, { useState } from 'react';
import Link from 'next/link';
import styles from './nb.module.css';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className={styles.header}>

            <div className={styles.topNav}>
                <div className={styles.logo}>TURFOO</div>
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/booking">Book a Turf</Link>
                    <Link href="#details">Turf Details</Link>
                    <Link href="#pricing">Pricing</Link>
                    <Link href="#testimonials">Testimonials</Link>

                </nav>

                <div className={styles.hamburger} onClick={toggleSidebar}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            </div>


            <div className={`${styles.sideNav} ${isSidebarOpen ? styles.open : ''}`}>
                <nav className={styles.sideNavLinks}>
                    <Link href="/">Home</Link>
                    <Link href="/booking">Book a Turf</Link>
                    <Link href="/">Turf Details</Link>
                    <Link href="#pricing">Pricing</Link>
                    <Link href="#testimonials">Testimonials</Link>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;
