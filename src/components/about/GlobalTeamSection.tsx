import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../AnimatedSection';
import { DynamicIcon } from '../ui/DynamicIcon';

export const GlobalTeamSection: React.FC = () => {
    return (
        <section className="py-24 bg-brand-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-peach/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="container-wide px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <AnimatedSection className="!mb-0">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light mb-6">
                            Global Team & Culture
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-sans text-brand-offwhite mb-6 leading-tight">
                            A Collective of Sharp Thinkers & Creative Makers
                        </h2>
                        <div className="space-y-6 text-lg text-brand-silver  leading-relaxed">
                            <p>
                                We are not confined by geography. Our network spans across continents, bringing together diverse perspectives, cultural intelligence, and specialized expertise.
                            </p>
                            <p>
                                At Narrativlyy, culture is our operating system. We foster an environment of intellectual rigor, creative freedom, and uncompromising standards. We believe that when brilliant minds are given the space to challenge the expected, extraordinary outcomes follow.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 rounded-lg bg-surface border border-white/5 text-brand-peach">
                                    <DynamicIcon name="Globe" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-offwhite">Borderless Talent</h4>
                                    <p className="text-sm text-brand-silver/70 mt-1">Sourcing the best minds, wherever they are.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 rounded-lg bg-surface border border-white/5 text-brand-peach">
                                    <DynamicIcon name="Zap" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-offwhite">High Velocity</h4>
                                    <p className="text-sm text-brand-silver/70 mt-1">Decisive action over bureaucratic friction.</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Visual / Image */}
                    <AnimatedSection className="!mb-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                                alt="Narrativlyy Global Team Collaboration"
                                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-60" />
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};
