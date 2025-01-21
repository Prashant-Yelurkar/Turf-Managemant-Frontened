import React, { useState, useEffect } from 'react';
import { getBookings } from '@/Actions/Controllers/ManagementController'; // Replace with the correct function to fetch bookings
import AdminLayout from '@/Components/Layout/AdminLayout';

const BookingDetailsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                setLoading(true);
                const response = await getBookings();
                if (response.status) {
                    console.log(response.data);

                    setBookings(response.data);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching bookings:', error);
            }
        };
        fetchBookings();
    }, []);

    return (
        <AdminLayout>
            <div style={styles.container}>
                <h1 style={styles.heading}>Booking Details</h1>

                {loading ? (
                    <p style={styles.loading}>Loading bookings...</p>
                ) : (
                    <div style={styles.bookingList}>
                        {bookings?.length === 0 ? (
                            <p>No bookings available.</p>
                        ) : (
                            bookings?.map((booking) => (
                                <div key={booking._id} style={styles.bookingItem}>
                                    <h3>{booking.turf_name}</h3>
                                    <p><strong>Booked By:</strong> {booking.user_id.email}</p>
                                    <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                                    <p><strong>Time:</strong> {booking.time}</p>
                                    <p><strong>Status:</strong> {booking.status}</p>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

// Styles for the page
const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '20px',
    },
    loading: {
        textAlign: 'center',
        fontSize: '1.2rem',
    },
    bookingList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
    },
    bookingItem: {
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    },
};

export default BookingDetailsPage;
