import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { AnimatedSection } from '../AnimatedSection';
import { DynamicIcon } from '../ui/DynamicIcon';

export const LeadershipSection: React.FC = () => {
    if (!content.leadership || content.leadership.length === 0) return null;

    return (
        <section className="py-24 bg-brand-black relative">
            <div className="container-wide px-6">
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border border-brand-peach/30 bg-brand-peach/10 text-brand-peach mb-6">
                        Our Leadership
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-sans text-brand-offwhite">Driving the Vision</h2>
                    <p className="mt-4 text-brand-silver  text-lg max-w-2xl mx-auto">
                        Guided by experience, rooted in strategy, and driven by a relentless pursuit of excellence.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.leadership.map((leader, idx) => (
                        <AnimatedSection key={leader.name} className="!mb-0">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative rounded-2xl bg-brand-black overflow-hidden border border-white/5 hover:border-brand-peach/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-peach/10"
                            >
                                {/* Image Placeholder / Container */}
                                <div className="aspect-[4/5] bg-brand-blue/10 relative overflow-hidden flex items-center justify-center">
                                    {leader.image ? (
                                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
                                    ) : (
                                        <div className="w-20 h-20 rounded-full bg-surface border border-white/10 flex items-center justify-center text-brand-peach/50 group-hover:text-brand-peach group-hover:scale-110 transition-all duration-500">
                                            <DynamicIcon name="User" size={32} />
                                        </div>
                                    )}
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80" />
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl font-bold text-brand-offwhite mb-1 group-hover:text-brand-peach transition-colors">{leader.name}</h3>
                                    <p className="text-sm text-brand-silver/80 font-medium tracking-wide uppercase">{leader.role}</p>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};
