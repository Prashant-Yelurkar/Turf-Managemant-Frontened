import React, { useState, useEffect } from 'react';
import { BookSlot, getSlot, getTurf } from '@/Actions/Controllers/ManagementController';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MainLayout from '@/Components/Layout/MainLayout';
import { useRouter } from 'next/router';
import { checkTokens } from '@/Actions/Controllers/TokenControllers';

const BookingForm = () => {



    const [turfList, setTurfList] = useState([]);
    const [selectedTurf, setSelectedTurf] = useState('');
    const [date, setDate] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState([]);
    const [timeSlot, setTimeSlot] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchTurfs = async () => {
            console.log("here");

            try {
                setLoading(true);
                const response = await getTurf();
                if (response.status === 200) {
                    if (response.data == undefined) {
                        alert("Need to login again")
                        router.push('/auth/login')
                    }

                    setTurfList(response.data);
                }
                else {

                }
            } catch (error) {
                console.error('Error fetching turfs', error);
            } finally {
                setLoading(false);
            }
        };
        if (!checkTokens()) {

            router.push('/auth/login');
        }
        else {
            fetchTurfs();

        }
    }, []);

    useEffect(() => {
        console.log(date);

    }, [date])

    const fetchAvailableSlots = async () => {
        if (!selectedTurf || !date) return;
        try {
            setLoading(true);
            console.log(date);

            const response = await getSlot({ turfId: selectedTurf, date: date });
            if (response.status === 200) {
                setAvailableSlots(response.data);
            }
        } catch (error) {
            console.error('Error fetching available slots', error);
            setMessage('Error fetching available slots.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectedTurf && date) {
            fetchAvailableSlots();
        }
    }, [selectedTurf, date]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!timeSlot) {
            setMessage('Please select a time slot.');
            return;
        }

        try {
            setLoading(true);
            const userId = 'user-id'; // Replace with actual user ID
            const response = await BookSlot({
                userId,
                turfId: selectedTurf,
                date,
                time: timeSlot,
            });
            if (response.status == 201) {
                setMessage(response.data.message);

                fetchAvailableSlots()
            }
        } catch (error) {
            console.error('Error booking turf', error);
            setMessage('Error booking turf.');
        } finally {
            setLoading(false);
        }
    };

    const handleDateChange = (newDate) => {
        setDate(new Date(newDate).toLocaleDateString('en-CA'));
        setAvailableSlots([]);
    };

    // Styles as JS objects
    const styles = {
        container: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        },
        heading: {
            textAlign: 'center',
            marginBottom: '20px',
            color: '#333',
            fontSize: '2rem',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        label: {
            fontSize: '1.1rem',
            color: '#444',
        },
        input: {
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            backgroundColor: '#fff',
            width: '100%',
            boxSizing: 'border-box',
        },
        calendar: {
            marginTop: '10px',
            boxSizing: 'border-box',
        },
        button: {
            padding: '12px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        buttonDisabled: {
            padding: '12px',
            backgroundColor: '#ddd',
            color: '#bbb',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'not-allowed',
        },
        buttonHover: {
            backgroundColor: '#45a049',
        },
        slotContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '20px',
        },
        slot: {
            width: '100px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease',
        },
        slotAvailable: {
            backgroundColor: '#4CAF50',
        },
        slotUnavailable: {
            backgroundColor: '#FF5733',
        },
        slotHover: {
            transform: 'scale(1.1)',
        },
        message: {
            marginTop: '20px',
            fontSize: '1rem',
            color: '#333',
            textAlign: 'center',
        },
        loading: {
            marginTop: '20px',
            textAlign: 'center',
            fontSize: '1rem',
            color: '#4CAF50',
        },
    };



    return (
        <MainLayout>
            <div style={styles.container}>
                <h1 style={styles.heading}>Book Turf</h1>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label htmlFor="turf" style={styles.label}>
                        Select Turf Type
                    </label>
                    <select
                        id="turf"
                        value={selectedTurf}
                        onChange={(e) => setSelectedTurf(e.target.value)}
                        required
                        style={styles.input}
                    >
                        <option value="">Select Turf</option>
                        {turfList?.map((turf) => (
                            <option key={turf._id} value={turf._id}>
                                {turf.ground_type}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="date" style={styles.label}>
                        Select Date
                    </label>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date(date)}
                        style={styles.calendar}
                    />

                    <button
                        type="button"
                        onClick={fetchAvailableSlots}
                        style={loading ? styles.buttonDisabled : styles.button}
                        disabled={loading}
                    >
                        Get Available Slots
                    </button>

                    <div>
                        <h3 style={{ ...styles.label, marginTop: '20px' }}>Available Slots</h3>
                        {loading && <div style={styles.loading}>Loading...</div>}
                        <div style={styles.slotContainer}>
                            {availableSlots.map((slot, index) => (
                                <div
                                    key={index}
                                    style={{
                                        ...styles.slot,
                                        ...(slot.available ? styles.slotAvailable : styles.slotUnavailable),
                                    }}
                                    onClick={() => setTimeSlot(slot.time)}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                >
                                    {slot.time}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        style={loading ? styles.buttonDisabled : styles.button}
                        disabled={loading}
                    >
                        {loading ? 'Booking...' : 'Book Turf'}
                    </button>
                </form>

                {message && <p style={styles.message}>{message}</p>}
            </div>
        </MainLayout>
    );
};

export default BookingForm;
