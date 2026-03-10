import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useScrollEffects';
import clsx from 'clsx';

interface ParallaxSectionProps {
    children: React.ReactNode;
    /** Parallax speed: 0 = none, 0.5 = half scroll speed, negative = reverse */
    speed?: number;
    /** Additional CSS classes */
    className?: string;
    /** id for the section */
    id?: string;
}

/**
 * ParallaxSection — wraps content with a scroll-driven parallax translation.
 *
 * Usage:
 * ```tsx
 * <ParallaxSection speed={0.2} className="bg-brand-black">
 *     <h2>This content floats</h2>
 * </ParallaxSection>
 * ```
 */
export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
    children,
    speed = 0.3,
    className,
    id,
}) => {
    const { ref, y } = useParallax(speed);

    return (
        <div ref={ref} className={clsx('relative overflow-hidden', className)} id={id}>
            <motion.div style={{ y }} className="will-change-transform">
                {children}
            </motion.div>
        </div>
    );
};
