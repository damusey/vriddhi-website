import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { AnimatedSection } from '../components/AnimatedSection';
import { EthosCard } from '../components/EthosCard';
import { Quote, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
    const { title, sections } = content.pages.about;
    const originSection = sections.find(s => s.id === 'origin');
    const philosophySection = sections.find(s => s.id === 'philosophies');

    return (
        <div className="">
            {/* Hero Section: heading + origin */}
            <div className="px-6 py-10 mb-10 relative overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src="/images/ethos/about-us-intro.webp" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-black/80" />
                </div>
                <div className="container-wide relative z-10">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-0 tracking-tighter text-brand-offwhite pb-2 uppercase">
                            {title}
                        </h1>
                    </div>
                    {originSection && (
                        <div className="mx-0 text-center">
                            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-brand-peach italic mb-8 font-sans uppercase">{originSection.title}</h2>
                            <div className="space-y-6 text-base md:text-lg text-brand-silver/90 leading-relaxed">
                                {originSection.content.split('\n\n').map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Philosophy Cards */}
            {philosophySection && (
                <>
                    <AnimatedSection className="text-center !pb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-offwhite tracking-tight font-sans uppercase">{philosophySection.title}</h2>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="flex flex-col gap-8 max-w-4xl mx-auto px-5">
                            {philosophySection.items?.map((item, index) => (
                                <EthosCard key={item.title} item={item} index={index} />
                            ))}
                        </div>
                    </AnimatedSection>
                </>
            )}

            {/* Testimonials */}
            <AnimatedSection className="bg-brand-charcoal/30 !py-24">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-peach tracking-tight mb-4 font-sans px-5 uppercase">Helping ambitious brands and leaders unlock their next dimension of growth!</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-5">
                    {content.testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            className="card-hover p-8 rounded-2xl bg-surface border border-white/5 hover:border-brand-blue/30 transition-all flex flex-col"
                        >
                            <Quote size={24} className="text-brand-peach/50 mb-4 flex-shrink-0" />
                            <p className="text-text-muted text-sm leading-relaxed italic flex-grow mb-6 ">"{t.quote}"</p>
                            <div className="border-t border-white/5 pt-4">
                                <p className="text-brand-offwhite font-semibold text-sm">{t.attribution}</p>
                                <p className="text-text-muted text-xs">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection className="text-center !py-24">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-offwhite tracking-tight mb-6 font-sans uppercase">Let's Discuss Possibilities</h2>
                    <Button to="/contact" variant="primary">
                        Get In Touch
                        <ArrowRight size={18} />
                    </Button>
                </div>
            </AnimatedSection>
        </div>
    );
};
