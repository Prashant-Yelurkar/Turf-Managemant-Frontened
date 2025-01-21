import { useState, useEffect } from 'react';
import axios from 'axios';
import { AddTurf, getAllUsers } from '@/Actions/Controllers/ManagementController';
import AdminLayout from '@/Components/Layout/AdminLayout';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    // Fetch all users and their bookings when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getAllUsers();
                setUsers(response.data);
                console.log(response.data);

            } catch (err) {
                setError('Failed to fetch users. Please try again later.');
            }
        };
        fetchUsers();
    }, []);

    return (
        <AdminLayout>
            <div className="container">
                <h1>All Users and Their Bookings</h1>

                {error && <p className="error">{error}</p>}

                <div className="users-list">
                    {users.length === 0 ? (
                        <p>No users found.</p>
                    ) : (
                        users.map((user, index) => (
                            <div key={index} className="user-card">
                                <h2>{user.userName}</h2>
                                <p><strong>Email:</strong> {user.email}</p>


                                {
                                    user.bookingCount ? <h3>Bookings: {user.bookingCount}</h3> : <p>No bookings found for this user.</p>
                                }

                            </div>
                        ))
                    )}
                </div>

                <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
        }
        .user-card {
          background-color: #f9f9f9;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .error {
          color: red;
          text-align: center;
        }
        .users-list {
          margin-top: 20px;
        }
        h2 {
          color: #333;
        }
        h3 {
          color: #555;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin: 5px 0;
        }
      `}</style>
            </div>
        </AdminLayout>
    );
}
