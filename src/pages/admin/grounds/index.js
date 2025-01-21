import React, { useState, useEffect } from 'react';
import { getTurf } from '@/Actions/Controllers/ManagementController'; // Assuming this function fetches turf data
import AdminLayout from '@/Components/Layout/AdminLayout';
import { useRouter } from 'next/router';

const TurfDetailsPage = () => {
    const [turfs, setTurfs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTurf, setSelectedTurf] = useState(null); // State to hold selected turf's details

    // Fetch turf details on load
    useEffect(() => {
        const fetchTurfs = async () => {
            try {
                setLoading(true);
                const response = await getTurf();
                if (response.status === 200) {
                    console.log(response.data);

                    setTurfs(response.data); // Assuming the response data contains turfs
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching turfs:', error);
            }
        };
        fetchTurfs();
    }, []);

    // Handle showing detailed info for a selected turf
    const handleTurfClick = (turf) => {
        setSelectedTurf(turf); // Set selected turf to show its details
    };

    // Render detailed information of selected turf
    const renderTurfDetails = () => {
        if (!selectedTurf) {
            return null;
        }

        return (
            <div style={styles.detailsContainer}>
                <h2>Turf Details</h2>
                <p><strong>Ground Type :</strong> {selectedTurf.ground_type}</p>
                <p><strong>Time :</strong> {selectedTurf.opening_time}{selectedTurf.closing_time}</p>
                <p><strong>Location:</strong> {selectedTurf.location}</p>
                <p><strong>Price:</strong> {selectedTurf.price_per_hour}</p>
                <p><strong>Description:</strong> {selectedTurf.description}</p>
            </div>
        );
    };

    const router = useRouter()
    return (
        <AdminLayout>
            <div style={styles.container}>
                <div style={styles.btnContainer}>
                    <button
                        onClick={() => router.push("/admin/grounds/create")}
                        style={styles.btn}
                        onMouseEnter={(e) => e.target.style.backgroundColor = styles.btnHover.backgroundColor}
                        onMouseLeave={(e) => e.target.style.backgroundColor = styles.btn.backgroundColor}
                    >
                        Create Turf
                    </button>
                </div>

                <h1 style={styles.heading}>Turf Details</h1>
                {loading ? (
                    <p style={styles.loading}>Loading turfs...</p>
                ) : (
                    <div>
                        <h2 style={styles.subHeading}>Available Turfs</h2>
                        <div style={styles.turfList}>
                            {turfs.map((turf) => (
                                <div
                                    key={turf._id}
                                    style={styles.turfItem}
                                    onClick={() => handleTurfClick(turf)}
                                >
                                    <h3>{turf.ground_type}</h3>
                                    <p>{turf.size} | {turf.location}</p>
                                </div>
                            ))}
                        </div>
                        {renderTurfDetails()}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

// Styling for the page
const styles = {
    btnContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "flex-end", // Align button to the right
    },

    btn: {
        backgroundColor: "#4CAF50", // Green background color
        color: "white", // Text color white
        padding: "10px 20px", // Add padding for better spacing
        fontSize: "16px", // Set font size
        border: "none", // Remove default border
        borderRadius: "5px", // Rounded corners
        cursor: "pointer", // Change cursor to pointer on hover
        transition: "background-color 0.3s ease", // Smooth background color transition
        textAlign: "center", // Center the text inside the button
    },

    btnHover: {
        backgroundColor: "#45a049", // Darker green for hover effect
    },

    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '20px',
    },
    subHeading: {
        fontSize: '1.5rem',
        marginBottom: '10px',
    },
    loading: {
        textAlign: 'center',
        fontSize: '1.2rem',
    },
    turfList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '20px',
    },
    turfItem: {
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'transform 0.3s',
    },
    turfItemHover: {
        transform: 'scale(1.05)',
    },
    detailsContainer: {
        marginTop: '30px',
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
    },
};

export default TurfDetailsPage;
