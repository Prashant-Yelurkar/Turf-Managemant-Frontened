// components/Layout.js
import React from 'react';
import Navbar from '../Headers/NavBar';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import { checkTokens } from '@/Actions/Controllers/TokenControllers';
import { useRouter } from 'next/router';

const MainLayout = ({ children }) => {

    return (
        <div>
            <Head>
                <title>TURFOO - Book Turf Grounds</title>
                <meta name="description" content="TURFOO - Book your perfect turf ground for sports, fitness, and events." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Navbar />

            {/* Main Content Area */}
            <main>
                {children}
            </main>

            {/* Include the Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
