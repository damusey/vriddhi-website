import React from 'react';
import { content } from '../../data/content';
import { AnimatedSection } from '../AnimatedSection';
import { ScrollReveal } from '../ScrollReveal';
import { DynamicIcon } from '../ui/DynamicIcon';

export const GlobalPresence: React.FC = () => {
    if (!content.globalLocations || content.globalLocations.length === 0) return null;

    return (
        <section className="py-16 bg-brand-black relative">
            <div className="container-wide px-6">
                <AnimatedSection className="text-center">
                    <ScrollReveal effect="fade-up" duration={0.7}>
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light mb-6">
                            Global Network
                        </span>
                    </ScrollReveal>
                    <ScrollReveal effect="fade-up" delay={0.1} duration={0.8}>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-sans text-brand-peach">Our Global Presence</h2>
                    </ScrollReveal>
                    <ScrollReveal effect="blur" delay={0.2} duration={0.9}>
                        <p className="mt-4 text-brand-silver  text-base md:text-lg max-w-2xl mx-auto">
                            We empower global brands across geographies with culturally intelligent, market-native solutions.
                        </p>
                    </ScrollReveal>
                </AnimatedSection>

                <ScrollReveal stagger={0.1} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-[-80px]">
                    {content.globalLocations.map((loc) => (
                        <AnimatedSection key={loc.city} className="!mb-0">
                            <ScrollReveal
                                effect="fade-up"
                                distance={30}
                                duration={0.5}
                            >
                                <div className="group p-8 rounded-2xl bg-brand-charcoal/30 border border-white/5 hover:border-brand-peach/30 transition-all duration-300 text-center">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-brand-peach/10 text-brand-peach flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-peach group-hover:text-brand-charcoal transition-all duration-300">
                                        <DynamicIcon name="MapPin" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-offwhite mb-2">{loc.city}</h3>
                                    <p className="text-brand-peach font-medium mb-3">{loc.country}</p>
                                </div>
                            </ScrollReveal>
                        </AnimatedSection>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
};
