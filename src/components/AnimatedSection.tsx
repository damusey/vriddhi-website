import React, { useRef, useState, useEffect } from 'react';
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
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.05, rootMargin: '-5% 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <motion.section
            ref={ref}
            id={id}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: isVisible ? delay : 0, ease: "easeOut" }}
            className={clsx("pt-0 pb-20 px-6", className)}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </motion.section>
    );
};
