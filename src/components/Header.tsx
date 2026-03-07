import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { content } from '../data/content';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-lg border-b border-white/5">
            <div className="container-wide px-6 h-[80px] flex items-center justify-between">
                <NavLink to="/" className="flex items-center relative">
                    <img src="/logo.png" alt="Narrativlyy" className="h-[135px] w-auto object-contain brightness-200" />
                </NavLink>

                {/* Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {content.navItems.map((item) => (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={({ isActive }) =>
                                clsx(
                                    "text-sm font-medium transition-colors duration-200 font-sans",
                                    isActive ? "text-brand-silver" : "text-text-muted hover:text-brand-silver"
                                )
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <NavLink
                        to={content.ctaButton.href}
                        className="px-6 py-2.5 rounded-full bg-brand-peach text-brand-black text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-peach/20"
                    >
                        {content.ctaButton.label}
                    </NavLink>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-silver p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-surface border-b border-white/5 overflow-hidden absolute top-20 left-0 right-0"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {content.navItems.map((item) => (
                                <NavLink
                                    key={item.href}
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        clsx(
                                            "text-lg font-medium transition-colors duration-200",
                                            isActive ? "text-brand-silver" : "text-text-muted hover:text-brand-silver"
                                        )
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                            <NavLink
                                to={content.ctaButton.href}
                                onClick={() => setIsOpen(false)}
                                className="mt-2 px-6 py-3 rounded-full bg-brand-peach text-brand-black text-center text-lg font-semibold"
                            >
                                {content.ctaButton.label}
                            </NavLink>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};
