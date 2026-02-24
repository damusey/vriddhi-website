import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

const pillarAccents: Record<string, { border: string; dot: string; badge: string }> = {
    THINK: { border: 'border-brand-blue/30', dot: 'bg-brand-blue-light', badge: 'bg-brand-blue/10 text-brand-blue-light border-brand-blue/20' },
    CREATE: { border: 'border-purple-500/30', dot: 'bg-purple-400', badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    INFLUENCE: { border: 'border-brand-peach/30', dot: 'bg-brand-peach', badge: 'bg-brand-peach/10 text-brand-peach border-brand-peach/20' },
    EXPERIENCE: { border: 'border-emerald-500/30', dot: 'bg-emerald-400', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
};

export const Services: React.FC = () => {
    const { title, sections } = content.pages.services;
    const introSection = sections.find(s => s.id === 'services-intro');

    return (
        <div>
            {/* Page Header */}
            <div className="px-5 py-10">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-silver font-sans leading-[60px] uppercase"
                    >
                        {title}
                    </motion.h1>
                </div>
            </div>

            {/* Intro */}
            {introSection && (
                <AnimatedSection className="text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-peach mb-8 font-sans uppercase">{introSection.title}</h2>
                        <div className="space-y-4 text-lg text-text-muted leading-relaxed font-serif">
                            {introSection.content.split('\n\n').map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            )}

            {/* Service Pillars */}
            {content.servicePillars.map((pillar, pillarIdx) => {
                const accent = pillarAccents[pillar.pillarName] || pillarAccents.THINK;
                return (
                    <div key={pillar.pillarName} id={pillar.pillarName.toLowerCase()} className="scroll-mt-24">
                        {/* Pillar Header */}
                        <AnimatedSection className="text-center !pb-8">
                            <div className="flex flex-col items-center gap-4">
                                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border ${accent.badge}`}>
                                    {pillar.pillarName}
                                </span>
                                <h2 className="text-3xl md:text-3xl font-bold text-brand-silver-cool tracking-tight font-sans uppercase">{pillar.headline}</h2>
                            </div>
                        </AnimatedSection>

                        {/* Categories */}
                        {pillar.categories.map((cat, catIdx) => (
                            <AnimatedSection key={cat.categoryTitle}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: catIdx * 0.05, duration: 0.5 }}
                                    className={`rounded-2xl border ${accent.border} bg-surface/40 p-8 md:p-10`}
                                >
                                    <div className="flex flex-col lg:flex-row gap-8">
                                        {/* Left: Title & Description */}
                                        <div className="lg:w-2/5">
                                            <p className="text-sm text-brand-peach/70 uppercase tracking-widest font-medium mb-2">{cat.tagline}</p>
                                            <h3 className="text-xl md:text-2xl font-bold text-brand-blue-light mb-4 uppercase">{cat.categoryTitle}</h3>
                                            <p className="text-text-muted leading-relaxed font-serif">{cat.description}</p>
                                        </div>
                                        {/* Right: Services List */}
                                        <div className="lg:w-3/5">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {cat.services.map((svc, svcIdx) => (
                                                    <motion.li
                                                        key={svc}
                                                        initial={{ opacity: 0, x: 10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.1 + svcIdx * 0.03, duration: 0.3 }}
                                                        className="flex items-start text-sm text-brand-silver/80"
                                                    >
                                                        <span className={`mr-3 mt-1.5 w-1.5 h-1.5 rounded-full ${accent.dot} flex-shrink-0 shadow-[0_0_8px_currentColor]`} />
                                                        {svc}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}

                        {/* Separator between pillars */}
                        {pillarIdx < content.servicePillars.length - 1 && (
                            <div className="max-w-7xl mx-auto px-6">
                                <div className="border-t border-white/5 my-8" />
                            </div>
                        )}
                    </div>
                );
            })}

            {/* CTA */}
            <AnimatedSection className="text-center !py-24">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-peach tracking-tight mb-6 font-sans uppercase">Let's Make Your Brand Inevitable</h2>
                    <Button to="/contact" variant="primary">
                        Start a Conversation
                        <ArrowRight size={18} />
                    </Button>
                </div>
            </AnimatedSection>
        </div>
    );
};
