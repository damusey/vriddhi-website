import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { AnimatedSection } from '../AnimatedSection';
import { DynamicIcon } from '../ui/DynamicIcon';

export const GlobalPresence: React.FC = () => {
    if (!content.globalLocations || content.globalLocations.length === 0) return null;

    return (
        <section className="py-32 bg-surface relative">
            <div className="max-w-7xl mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light mb-6">
                        Global Network
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-sans text-brand-peach">Our Global Presence</h2>
                    <p className="mt-4 text-brand-silver font-serif text-lg max-w-2xl mx-auto">
                        We empower global brands across geographies with culturally intelligent, market-native solutions.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.globalLocations.map((loc, idx) => (
                        <AnimatedSection key={loc.city} className="!mb-0">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group p-8 rounded-2xl bg-brand-charcoal/30 border border-white/5 hover:border-brand-peach/30 transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full bg-brand-peach/10 text-brand-peach flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-peach group-hover:text-brand-charcoal transition-all duration-300">
                                    <DynamicIcon name="MapPin" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-offwhite mb-2">{loc.city}</h3>
                                <p className="text-brand-peach font-medium mb-3">{loc.country}</p>
                                {loc.address && (
                                    <p className="text-sm text-brand-silver/60 font-serif leading-relaxed">
                                        {loc.address}
                                    </p>
                                )}
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};
