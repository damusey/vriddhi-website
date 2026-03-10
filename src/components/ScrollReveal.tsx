import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { getRevealVariants, type RevealEffect } from '../hooks/useScrollEffects';
import clsx from 'clsx';

interface ScrollRevealProps {
    children: React.ReactNode;
    /** Animation preset */
    effect?: RevealEffect;
    /** Seconds to wait after element enters viewport */
    delay?: number;
    /** Transition duration in seconds */
    duration?: number;
    /** Pixel distance for slide effects */
    distance?: number;
    /** If > 0, the component acts as a stagger container for its children */
    stagger?: number;
    /** Animate only once (default) or every time element scrolls in */
    once?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Render as a different HTML element */
    as?: keyof typeof motion;
    /** id for the element */
    id?: string;
}

/**
 * ScrollReveal — a reusable wrapper that animates its content on scroll.
 *
 * Usage:
 * ```tsx
 * <ScrollReveal effect="fade-up" delay={0.2}>
 *     <h2>Hello</h2>
 * </ScrollReveal>
 *
 * // Stagger children in a grid
 * <ScrollReveal stagger={0.1} className="grid grid-cols-3 gap-4">
 *     {items.map(item => (
 *         <ScrollReveal key={item.id} effect="fade-up">
 *             <Card {...item} />
 *         </ScrollReveal>
 *     ))}
 * </ScrollReveal>
 * ```
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    effect = 'fade-up',
    delay = 0,
    duration = 0.7,
    distance = 60,
    stagger = 0,
    once = true,
    className,
    as = 'div',
    id,
}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const MotionComponent = (motion as any)[as] as React.ComponentType<any>;

    // If stagger > 0, this is a parent container that orchestrates children
    if (stagger > 0) {
        const containerVariants: Variants = {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: stagger,
                    delayChildren: delay,
                },
            },
        };

        return (
            <MotionComponent
                id={id}
                className={clsx(className)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once, margin: '-50px' }}
                variants={containerVariants}
            >
                {children}
            </MotionComponent>
        );
    }

    // Leaf element with its own reveal animation
    const variants = getRevealVariants(effect, { distance, duration, delay });

    return (
        <MotionComponent
            id={id}
            className={clsx(className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-50px' }}
            variants={variants}
        >
            {children}
        </MotionComponent>
    );
};
