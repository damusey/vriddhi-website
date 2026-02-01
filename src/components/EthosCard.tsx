import React from 'react';
import { motion } from 'framer-motion';
import type { ServiceItem } from '../data/types';
import { DynamicIcon } from './ui/DynamicIcon';
import clsx from 'clsx';
import { MediaContainer } from './ui/MediaContainer';

interface EthosCardProps {
    item: ServiceItem;
    index: number;
}

export const EthosCard: React.FC<EthosCardProps> = ({ item, index }) => {
    const initialX = index % 2 === 0 ? -100 : 100;

    // Colorful border cycles (background color removed to show image)
    const colors = [
        'border-blue-500/30 group-hover:border-blue-500/60',
        'border-purple-500/30 group-hover:border-purple-500/60',
        'border-rose-500/30 group-hover:border-rose-500/60',
        'border-amber-500/30 group-hover:border-amber-500/60',
        'border-emerald-500/30 group-hover:border-emerald-500/60',
        'border-cyan-500/30 group-hover:border-cyan-500/60',
    ];

    const colorClass = colors[index % colors.length];

    return (
        // Outer Wrapper: Handles the Entry Slide-In
        <motion.div
            initial={{ opacity: 0, x: initialX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
            className="w-full"
        >
            {/* Inner Card: Handles the Continuous Oscillation */}
            <motion.div
                animate={{ x: index % 2 === 0 ? [-20, 20] : [20, -20] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 4,
                    ease: "easeInOut"
                }}
                className={clsx(
                    "relative p-8 rounded-2xl border transition-all duration-300 group overflow-hidden min-h-[300px] flex flex-col justify-center",
                    colorClass
                )}
            >
                {/* Background Image Layer */}
                {item.image && (
                    <div className="absolute inset-0 z-0">
                        <MediaContainer
                            media={{ type: 'image', src: item.image, alt: item.title }}
                            cover
                        />
                        {/* Gradient Overlay for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 group-hover:from-black/95 group-hover:to-black/60 transition-colors duration-500" />
                    </div>
                )}

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start text-left">
                    <div className="space-y-4 w-full">
                        <h3 className="text-3xl font-bold text-white tracking-tight drop-shadow-md flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                                <DynamicIcon name={item.iconName} size={28} className="text-white" />
                            </div>
                            {item.title}
                        </h3>
                        <div className="space-y-4 text-gray-200 text-lg leading-relaxed font-medium drop-shadow-sm">
                            {item.description.split('\n\n').map((paragraph, i) => (
                                <p key={i} className={clsx(paragraph.startsWith('>') && "pl-4 border-l-4 border-white/40 italic")}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
