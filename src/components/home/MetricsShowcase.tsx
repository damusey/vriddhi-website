import React from 'react';
import { content } from '../../data/content';
import { AnimatedSection } from '../AnimatedSection';
import { ScrollReveal } from '../ScrollReveal';

export const MetricsShowcase: React.FC = () => {
    if (!content.metrics) return null;

    return (
        <section className="pt-24 bg-brand-black text-brand-offwhite relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] pointer-events-none" />

            <div className="container-wide px-6 relative z-10">
                <ScrollReveal stagger={0.1} className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {content.metrics.map((metric, idx) => (
                        <AnimatedSection key={idx} className="text-center group !mb-0">
                            <ScrollReveal effect="scale" duration={0.5}>
                                <div className="text-2xl sm:text-4xl md:text-6xl font-bold font-sans text-brand-offwhite mb-4 tracking-tighter">
                                    {metric.prefix && <span className="text-brand-peach/80 text-xl sm:text-3xl align-top mr-1">{metric.prefix}</span>}
                                    {metric.value}
                                    {metric.suffix && <span className="text-brand-peach/80">{metric.suffix}</span>}
                                </div>
                                <div className="text-sm md:text-base text-brand-silver/80 uppercase tracking-widest font-semibold group-hover:text-brand-peach transition-colors">
                                    {metric.label}
                                </div>
                            </ScrollReveal>
                        </AnimatedSection>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
};
