import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdminSideBar from '../Sidebar/AdminSideBar';
import { checkTokens, getAuthToken } from '@/Actions/Controllers/TokenControllers';

const AdminLayout = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const router = useRouter();

    const decodeJWT = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const decoded = JSON.parse(atob(base64));
        return decoded;
    };
    useEffect(() => {
        if (!checkTokens()) {
            router.push('/');
            return;
        }

        try {
            const token = getAuthToken()
            const decodedToken = decodeJWT(token);
            console.log(decodedToken);

            if (decodedToken.role === 'ADMIN') {
                setIsAuthorized(true);
            } else {
                router.push('/');
            }
        } catch (error) {
            console.error('Error decoding JWT:', error);
            router.push('/');
        }
    }, [router]);

    if (!isAuthorized) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ display: 'flex' }}>
            <AdminSideBar /> {/* Sidebar component */}
            <div style={{ marginLeft: '250px', padding: '20px', width: "100%" }}>
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
