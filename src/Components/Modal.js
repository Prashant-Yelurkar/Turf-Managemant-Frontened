import { useState } from "react";
import styles from '@/styles/modal.module.css';

function Dialog({ open, onOpenChange, children }) {
    if (!open) return null;
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {children}
                <button onClick={() => onOpenChange(false)} className={styles.closeButton}>Close</button>
            </div>
        </div>
    );
}

export default function BookingConfirmation() {
    const [open, setOpen] = useState(true);

    return (
        <div className={styles.container}>
            <Dialog open={open} onOpenChange={setOpen}>
                <h2 className={styles.modalTitle}>Booking Confirmed!</h2>
                <p className={styles.modalText}>Your turf booking has been successfully confirmed. Enjoy your game!</p>
            </Dialog>
        </div>
    );
}
