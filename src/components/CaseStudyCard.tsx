import React from 'react';
import { motion } from 'framer-motion';
import type { CaseStudyItem } from '../data/types';
import { Briefcase, TrendingUp } from 'lucide-react';

interface CaseStudyCardProps {
    item: CaseStudyItem;
    index: number;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ item, index }) => {
    const isEven = index % 2 === 0;

    // Split services into badges
    const serviceBadges = item.servicesProvided.split(',').map(s => s.trim());

    // Alternate accent colors
    const accents = [
        { gradient: 'from-brand-peach/15 to-amber-900/10', dot: 'bg-brand-peach', badge: 'bg-brand-peach/15 text-brand-peach border-brand-peach/20' },
        { gradient: 'from-brand-peach/10 to-amber-900/10', dot: 'bg-brand-peach', badge: 'bg-brand-peach/15 text-brand-peach border-brand-peach/20' },
    ];
    const accent = accents[index % accents.length];

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8, delay: index * 0.15 }}
            className="w-full"
        >
            <div className={`card-hover rounded-2xl border border-white/10 bg-surface/70 p-8 md:p-10 overflow-hidden group cursor-default`}>
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                    {/* Header with icon */}
                    <div className="flex items-start gap-5 mb-6">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <Briefcase size={28} className="text-brand-silver" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-brand-silver tracking-tight uppercase mb-1">
                                {item.brand}
                            </h3>
                            <p className="text-xs text-text-muted uppercase tracking-[0.15em] font-medium">Client Partner</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-6" />

                    {/* Services */}
                    <div className="mb-6">
                        <p className="text-xs text-text-muted uppercase tracking-[0.15em] font-semibold mb-3">Services Provided</p>
                        <div className="flex flex-wrap gap-2">
                            {serviceBadges.map((service, idx) => (
                                <motion.span
                                    key={service}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${accent.badge} backdrop-blur-sm`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} shadow-[0_0_6px_currentColor]`} />
                                    {service}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Impact */}
                    {item.impact && (
                        <div className="mt-4">
                            <div className="flex items-center gap-2 mb-2">
                                <TrendingUp size={14} className="text-brand-peach/70" />
                                <p className="text-xs text-text-muted uppercase tracking-[0.15em] font-semibold">Impact</p>
                            </div>
                            <p className="text-brand-silver/80 text-sm leading-relaxed">{item.impact}</p>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
