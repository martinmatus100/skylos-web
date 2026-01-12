import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout = ({ children }) => {
    return (
        <div id="top">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};
