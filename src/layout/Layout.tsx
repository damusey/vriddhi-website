import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

export const Layout: React.FC = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen font-sans bg-brand-black text-text-primary selection:bg-surface-highlight selection:text-white">
            <Header />
            <main className="flex-grow pt-20 relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
};
