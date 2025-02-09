import React, { useState } from "react";

const styles = {
    container: {
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#00000090"
    },
    card: {
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "300px",
        textAlign: "center",
    },
    options: {
        marginTop: "10px",
    },
    option: {
        display: "flex",
        alignItems: "center",
        padding: "10px",
        background: "#f9f9f9",
        borderRadius: "5px",
        margin: "5px 0",
        cursor: "pointer",
        gap: "20px",
    },
    disabled: {
        color: "gray",
        pointerEvents: "none",
        opacity: "0.6",
    },
    error: {
        color: "red",
        marginTop: "10px",
    },
    payButton: {
        background: "green",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        width: "100%",
        cursor: "pointer",
        marginTop: "10px",
    },
};

const PaymentPage = (props) => {
    const [selectedMethod, setSelectedMethod] = useState("cod");
    const [error, setError] = useState("");

    const handlePayment = () => {
        if (selectedMethod === "cod") {
            props.onPay()
        } else {
            setError("Only Cash on Delivery is available at the moment.");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2>Select Payment Method</h2>
                <div style={styles.options}>
                    <label style={styles.option}>
                        <input type="radio" name="payment" value="cod" checked={selectedMethod === "cod"} onChange={() => setSelectedMethod("cod")} />
                        <span>Cash on Delivery</span>
                    </label>
                    <label style={{ ...styles.option, ...styles.disabled }}>
                        <input type="radio" name="payment" value="credit" disabled />
                        <span>Credit/Debit Card</span>
                    </label>
                    <label style={{ ...styles.option, ...styles.disabled }}>
                        <input type="radio" name="payment" value="upi" disabled />
                        <span>UPI</span>
                    </label>
                    <label style={{ ...styles.option, ...styles.disabled }}>
                        <input type="radio" name="payment" value="netbanking" disabled />
                        <span>Net Banking</span>
                    </label>
                </div>
                {error && <p style={styles.error}>{error}</p>}
                <button onClick={handlePayment} style={styles.payButton}>
                    Proceed to Pay
                </button>
            </div>
        </div>
    );
};

export default PaymentPage;
