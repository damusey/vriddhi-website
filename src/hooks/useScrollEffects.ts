import { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

/**
 * useParallax — attaches a parallax translation to a container element.
 * @param speed  Multiplier: 0 = no movement, 0.5 = half scroll speed, 1 = full speed.
 *               Negative values reverse direction.
 * @returns { ref, y }  Attach `ref` to the container and `y` to a `motion` child's `style.y`.
 */
export function useParallax(speed = 0.3) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],   // full element travel
    });

    // Map 0→1 scroll progress to a pixel range driven by speed
    const y: MotionValue<number> = useTransform(
        scrollYProgress,
        [0, 1],
        [-100 * speed, 100 * speed],
    );

    return { ref, y };
}

/**
 * Preset variant factories for ScrollReveal.
 * Each returns { hidden, visible } variant objects.
 */
export type RevealEffect =
    | 'fade-up'
    | 'fade-down'
    | 'fade-left'
    | 'fade-right'
    | 'scale'
    | 'blur';

interface RevealConfig {
    distance?: number;
    duration?: number;
    delay?: number;
}

export function getRevealVariants(
    effect: RevealEffect = 'fade-up',
    { distance = 60, duration = 0.7, delay = 0 }: RevealConfig = {},
) {
    const base = {
        transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
    };

    switch (effect) {
        case 'fade-up':
            return {
                hidden: { opacity: 0, y: distance },
                visible: { opacity: 1, y: 0, ...base },
            };
        case 'fade-down':
            return {
                hidden: { opacity: 0, y: -distance },
                visible: { opacity: 1, y: 0, ...base },
            };
        case 'fade-left':
            return {
                hidden: { opacity: 0, x: -distance },
                visible: { opacity: 1, x: 0, ...base },
            };
        case 'fade-right':
            return {
                hidden: { opacity: 0, x: distance },
                visible: { opacity: 1, x: 0, ...base },
            };
        case 'scale':
            return {
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1, ...base },
            };
        case 'blur':
            return {
                hidden: { opacity: 0, filter: 'blur(12px)' },
                visible: { opacity: 1, filter: 'blur(0px)', ...base },
            };
        default:
            return {
                hidden: { opacity: 0, y: distance },
                visible: { opacity: 1, y: 0, ...base },
            };
    }
}
