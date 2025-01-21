import React from 'react';
import styles from './TurfDetails.module.css';
import { useRouter } from 'next/router';

const turfs = [
    {
        name: 'Football Turf',
        description: 'Perfect for casual and competitive football matches.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRD8HWBkhK2Bxeyk--YgrumrBaM6KEC-WebA&s',
        price: 'Starting at Rs. 500/hr',
    },
    {
        name: 'Cricket Turf',
        description: 'Book the best cricket ground with high-quality turf.',
        image: 'https://turftown.in/_next/image?url=https%3A%2F%2Fturftown.s3.ap-south-1.amazonaws.com%2Fsuper_admin%2Ftt-1716560961734.webp&w=3840&q=75',
        price: 'Starting at Rs. 400/hr',
    },
    {
        name: 'Tennis Turf',
        description: 'Book the ideal space for tennis games and practice.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZpglJdhBno1obyTLNdtNGFFfueuLJm6xGA&s',
        price: 'Starting at Rs. 600/hr',
    },
    {
        name: 'Multi-purpose Turf',
        description: 'A versatile turf for various sports and activities.',
        image: 'https://playglobal.in/assets/images/turf/artificial-cricket-turftop.jpg',
        price: 'Starting at Rs.1200/hr',
    },
];

const TurfDetails = () => {

    const router = useRouter()
    const handelClick = () => {
        router.push('/booking')
    }
    return (
        <section className={styles.turfDetails} id='turfDetails'>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Our Turf Grounds</h2>
                <p className={styles.sectionSubtitle}>
                    Choose the best turf for your game, event, or practice session.
                </p>
                <div className={styles.cardContainer}>
                    {turfs.map((turf, index) => (
                        <div key={index} className={styles.turfCard}>
                            <img src={turf.image} alt={turf.name} className={styles.turfImage} />
                            <h3 className={styles.turfName}>{turf.name}</h3>
                            <p className={styles.turfDescription}>{turf.description}</p>
                            <p className={styles.turfPrice}>{turf.price}</p>
                            <button className={styles.bookButton} onClick={handelClick}>Book Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TurfDetails;
