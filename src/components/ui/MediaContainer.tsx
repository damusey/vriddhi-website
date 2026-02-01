import React, { useRef, useState, useEffect } from 'react';
import type { MediaAsset } from '../../data/types';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface MediaContainerProps {
    media: MediaAsset;
    className?: string;
    cover?: boolean; // If true, acts as absolute background cover
    fixed?: boolean; // If true, uses fixed positioning
}

export const MediaContainer: React.FC<MediaContainerProps> = ({ media, className, cover = false, fixed = false }) => {
    // ... (keep refs and hook) ...
    const containerRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    // Simple intersection observer to lazy load media
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const baseClass = clsx(
        fixed ? "fixed inset-0 w-full h-full object-cover -z-10" :
            cover ? "absolute inset-0 w-full h-full object-cover" :
                "w-full h-auto rounded-lg"
    );

    return (
        <div ref={containerRef} className={className}>
            {inView && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full"
                >
                    {media.type === 'video' ? (
                        <video
                            className={baseClass}
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={media.poster}
                        >
                            <source src={media.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img
                            src={media.src}
                            alt={media.alt}
                            className={baseClass}
                            loading="lazy"
                        />
                    )}
                </motion.div>
            )}
        </div>
    );
};
