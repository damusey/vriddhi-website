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
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    to,
    onClick,
    variant = 'primary',
    className,
    disabled
}) => {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-sans";
    const variants = {
        primary: "bg-brand-peach text-brand-black hover:brightness-110 hover:scale-105 shadow-lg shadow-brand-peach/20",
        outline: "border border-brand-silver/20 text-brand-silver hover:bg-white/10 backdrop-blur-sm"
    };

    const content = (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={clsx(baseStyles, variants[variant], className, disabled && 'opacity-50 cursor-not-allowed')}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );

    if (to) {
        return <NavLink to={to} className="inline-block">{content}</NavLink>;
    }

    return content;
};
