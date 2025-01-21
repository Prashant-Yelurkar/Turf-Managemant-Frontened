import { useState } from 'react';
import styles from './TurfForm.module.css';
import AdminLayout from '@/Components/Layout/AdminLayout';
import { AddTurf } from '@/Actions/Controllers/ManagementController';


const TurfForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        opening_time: '',
        closing_time: '',
        ground_type: '',
        price_per_hour: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.address ||
            !formData.city ||
            !formData.state ||
            !formData.zipCode ||
            !formData.opening_time ||
            !formData.closing_time ||
            !formData.ground_type ||
            !formData.price_per_hour
        ) {
            setError('All fields are required!');
            return;
        }

        console.log(formData);

        try {
            const res = await AddTurf(formData);

            if (res.status == 201) {
                alert('Turf details added successfully!');
                setFormData({
                    name: '',
                    address: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    opening_time: '',
                    closing_time: '',
                    ground_type: '',
                    price_per_hour: '',
                });
                setError('');
            } else {
                setError('Failed to add turf details.');
            }
        } catch (err) {
            setError('Error: ' + err.message);
        }
    };

    return (
        <AdminLayout>
            <div className={styles.formContainer}>
                <h1 className={styles.formTitle}>Add Turf Details</h1>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit} className={styles.turfForm}>
                    <div className={styles.formGroup}>
                        <label>Turf Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter turf name"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Location</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                        />
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                        />
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="State"
                        />
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="Zip Code"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Opening Time</label>
                        <input
                            type="time"
                            name="opening_time"
                            value={formData.opening_time}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Closing Time</label>
                        <input
                            type="time"
                            name="closing_time"
                            value={formData.closing_time}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Ground Type</label>
                        <select
                            name="ground_type"
                            value={formData.ground_type}
                            onChange={handleChange}
                        >
                            <option value="">Select Ground Type</option>
                            <option value="Cricket">Cricket</option>
                            <option value="Football">Football</option>
                            <option value="Tennis">Tennis</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Price Per Hour</label>
                        <input
                            type="number"
                            name="price_per_hour"
                            value={formData.price_per_hour}
                            onChange={handleChange}
                            placeholder="Price per hour"
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>Add Turf</button>
                </form>
            </div>
        </AdminLayout>
    );
};

export default TurfForm;
