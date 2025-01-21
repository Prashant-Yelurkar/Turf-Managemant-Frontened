import { useState } from 'react';
import styles from './Sidebar.module.css'; // Import the sidebar styles

const AdminSideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Toggle the sidebar collapse/expand state
    const toggleSidebar = () => {
        // setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
            <div className={styles.sidebarHeader}>
                {/* Title for expanded state */}
                <h2 className={styles.title}>Dashboard</h2>
                {/* Button to toggle collapse/expand */}
                <button className={styles.toggleButton} onClick={toggleSidebar}>

                </button>
            </div>
            {/* Links for the sidebar */}
            <div className={styles.navLinks}>
                <ul>
                    <li><a href="/admin" className={styles.navLink}>Dashboard</a></li>
                    <li><a href="/admin/users" className={styles.navLink}>Users</a></li>
                    <li><a href="/admin/bookings" className={styles.navLink}>Bookings</a></li>
                    <li><a href="/admin/grounds" className={styles.navLink}>Grounds</a></li>

                </ul>
            </div>
        </div>
    );
};

export default AdminSideBar;
