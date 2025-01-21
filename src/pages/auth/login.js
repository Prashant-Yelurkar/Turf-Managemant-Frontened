import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Login.module.css'; // Importing the CSS Module
import { login } from '@/Actions/Controllers/AuthController';
import { setAuthToken } from '@/Actions/Controllers/TokenControllers';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill out both fields.');
            return;
        }

        try {
            const res = await login({
                username: email,
                password: password,
            })
            if (res.status == 201) {
                setAuthToken(res.data.token)
                router.push('/')
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className={styles['login-container']}>
            <div className={styles['login-card']}>
                <h2>Login</h2>
                {error && <p className={styles['error-message']}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className={styles['input-group']}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles['input-group']}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
