import React from 'react';
import styles from './Hero.module.css';
import { useRouter } from 'next/router';

const Hero = () => {
    const router = useRouter()
    const handelClick = () => {
        router.push('/booking')
    }
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Book Your Perfect Turf Ground with TURFOO</h1>
                <p className={styles.heroSubtitle}>
                    Play, Practice, and Compete on the Best Turf Grounds Near You
                </p>
                <button className={styles.heroButton} onClick={handelClick}>Book a Turf Now</button>
            </div>
        </section>
    );
};

export default Hero;
