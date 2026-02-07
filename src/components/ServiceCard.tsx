import React from 'react';
import { motion } from 'framer-motion';
import type { ServiceItem } from '../data/types';
import { DynamicIcon } from './ui/DynamicIcon';

interface ServiceCardProps {
    item: ServiceItem;
    index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item, index }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleFlip = () => {
        if (!isFlipped) setIsFlipped(true);
    };

    // Entry animation values
    const isEven = index % 2 === 0;
    const initialX = isEven ? -50 : 50;

    return (
        <motion.div
            initial={{ opacity: 0, x: initialX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onMouseEnter={handleFlip}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
            className="w-full h-[500px] perspective-2000 group cursor-pointer"
        >
            <motion.div
                className="relative w-full h-full text-center"
                style={{
                    transformStyle: 'preserve-3d',
                    willChange: 'transform'
                }}
                animate={{
                    rotateY: isFlipped ? 180 : 0
                }}
                transition={{
                    rotateY: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }}
            >
                {/* FRONT FACE (Title + Description) */}
                <div
                    className="absolute inset-0 w-full h-full rounded-3xl border border-white/10 overflow-hidden bg-surface flex flex-col p-8 bg-cover bg-center"
                    style={{
                        backfaceVisibility: 'hidden',
                        zIndex: 2,
                        backgroundImage: item.image ? `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${item.image})` : 'none'
                    }}
                >
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                        <div className="mb-6 p-4 rounded-2xl bg-white/10 w-fit backdrop-blur-2xl border border-white/10 shadow-2xl">
                            <DynamicIcon name={item.iconName} className="text-white" size={40} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed text-lg max-w-xs">
                            {item.description}
                        </p>

                        <div className="mt-8 text-white/40 text-sm font-medium animate-pulse">
                            Hover to see sub-services
                        </div>
                    </div>
                </div>

                {/* BACK FACE (Details) */}
                <div
                    className="absolute inset-0 w-full h-full rounded-3xl border border-white/20 overflow-hidden bg-surface flex flex-col p-8"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        zIndex: 1
                    }}
                >
                    {/* Background gradient for the back */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 to-black z-0" />

                    <div className="relative z-10 flex flex-col h-full text-left">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                                <DynamicIcon name={item.iconName} className="text-white" size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white uppercase tracking-wider">{item.title} Details</h4>
                        </div>

                        {item.details && (
                            <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                                <ul className="space-y-4">
                                    {item.details.map((detail, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : 20 }}
                                            transition={{ delay: 0.3 + (idx * 0.05), duration: 0.4 }}
                                            className="flex items-start text-sm text-gray-200"
                                        >
                                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)] flex-shrink-0" />
                                            {detail}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-auto pt-6 border-t border-white/10 text-center">
                            <p className="text-xs text-white/40 italic">Narrativlyy Strategic Solutions</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
