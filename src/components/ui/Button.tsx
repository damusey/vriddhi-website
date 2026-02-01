import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    to?: string;
    onClick?: () => void;
    variant?: 'primary' | 'outline';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    to,
    onClick,
    variant = 'primary',
    className
}) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
    const variants = {
        primary: "bg-text-primary text-brand-black hover:bg-white hover:scale-105",
        outline: "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
    };

    const content = (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={clsx(baseStyles, variants[variant], className)}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );

    if (to) {
        return <NavLink to={to} className="inline-block">{content}</NavLink>;
    }

    return content;
};
