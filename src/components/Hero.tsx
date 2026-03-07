import React from 'react';
import { motion } from 'framer-motion';
import type { HeroSection } from '../data/types';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { MediaContainer } from './ui/MediaContainer';

interface HeroProps {
    data: HeroSection;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 bg-transparent">
                {data.backgroundMedia ? (
                    <MediaContainer media={data.backgroundMedia} cover />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-charcoal to-brand-black" />
                )}
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-[1px]" />
            </div>

            <div className="relative z-10 container-wide px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-brand-offwhite font-sans"
                >
                    {data.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-base sm:text-lg md:text-xl text-brand-silver/80 mb-10 max-w-2xl mx-auto leading-relaxed font-bold"
                >
                    {data.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button to={data.ctaLink} variant="primary">
                        {data.ctaText}
                        <ArrowRight size={18} />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
