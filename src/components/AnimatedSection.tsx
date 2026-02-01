import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    id?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className,
    delay = 0,
    id
}) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
            className={clsx("pt-0 pb-20 px-6", className)}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </motion.section>
    );
};
