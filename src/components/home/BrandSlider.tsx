import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';

export const BrandSlider: React.FC = () => {
    if (!content.clientBrands || content.clientBrands.length === 0) return null;

    // Duplicate array to create a seamless infinite loop
    const brands = [...content.clientBrands, ...content.clientBrands, ...content.clientBrands];

    return (
        <section className="py-20 bg-surface border-y border-white/5 overflow-hidden">
            <div className="container-wide px-6 mb-12 text-center">
                <h3 className="text-sm tracking-[0.2em] text-brand-silver/60 uppercase font-semibold">
                    Trusted By Ambitious Brands
                </h3>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Left/Right Fade Gradients */}
                <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex shrink-0 items-center justify-center space-x-16 px-8 whitespace-nowrap"
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35, // Adjust speed here
                    }}
                >
                    {brands.map((brand, idx) => (
                        <div key={idx} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-2xl md:text-3xl font-sans font-medium text-brand-silver">
                                {brand}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
