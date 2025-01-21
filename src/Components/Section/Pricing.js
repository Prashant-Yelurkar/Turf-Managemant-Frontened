import React from 'react';
import styles from './Pricing.module.css';
import { useRouter } from 'next/router';

const pricingPlans = [
  {
    name: 'Standard Plan',
    price: 'Rs. 50/hr',
    features: [
      'Access to Football Turf',
      'Basic Equipment',
      '1 Hour Booking',
    ],
    buttonText: 'Book Now',
  },
  {
    name: 'Premium Plan',
    price: 'Rs. 80/hr',
    features: [
      'Access to Football & Cricket Turf',
      'Premium Equipment',
      '2 Hour Booking',
      'Priority Support',
    ],
    buttonText: 'Book Now',
  },
  {
    name: 'Ultimate Plan',
    price: 'Rs. 120/hr',
    features: [
      'Access to All Turfs (Football, Cricket, Tennis)',
      'VIP Equipment',
      '3 Hour Booking',
      'Priority Support & Free Drinks',
    ],
    buttonText: 'Book Now',
  },
];

const Pricing = () => {
  const router = useRouter()
  const handelClick = () => {
    router.push('/booking')
  }

  return (
    <section className={styles.pricing} id='pricing'>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Affordable Pricing Plans</h2>
        <p className={styles.sectionSubtitle}>
          Choose the perfect plan based on your needs and get started!
        </p>
        <div className={styles.planContainer}>
          {pricingPlans.map((plan, index) => (
            <div key={index} className={styles.pricingCard}>
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planPrice}>{plan.price}</p>
              <ul className={styles.planFeatures}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={styles.feature}>{feature}</li>
                ))}
              </ul>
              <button className={styles.bookButton} onClick={handelClick}>{plan.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
