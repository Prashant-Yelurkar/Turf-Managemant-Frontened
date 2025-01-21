// components/Testimonials.js
import React from 'react';
import styles from './Testimonials.module.css'; // We'll create the CSS for this section

const testimonials = [
    {
        name: 'John Doe',
        review: 'Had a fantastic experience! The booking process was easy, and the turf quality was top-notch. Highly recommended!',
        rating: 5,
        image: 'https://via.placeholder.com/100?text=John',
    },
    {
        name: 'Alice Smith',
        review: 'Great platform to book turfs. The ground was well-maintained and perfect for our football match.',
        rating: 4,
        image: 'https://via.placeholder.com/100?text=Alice',
    },
    {
        name: 'Michael Lee',
        review: 'The turf was excellent, and the facilities were great! Will definitely be booking again for our next event.',
        rating: 5,
        image: 'https://via.placeholder.com/100?text=Michael',
    },
];

const Testimonials = () => {
    return (
        <section className={styles.testimonials} id='testimonials'>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
                <div className={styles.testimonialContainer}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.testimonialCard}>
                            <img src={testimonial.image} alt={testimonial.name} className={styles.customerImage} />
                            <div className={styles.testimonialContent}>
                                <h3 className={styles.customerName}>{testimonial.name}</h3>
                                <p className={styles.reviewText}>"{testimonial.review}"</p>
                                <div className={styles.rating}>
                                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                                        <span key={idx} className={styles.star}>⭐</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
