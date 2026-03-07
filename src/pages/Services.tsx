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
            {/* Hero Section: heading + intro */}
            <div className="px-5 py-10 mb-10 relative overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src="/images/services/services-intro.webp" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-black/80" />
                </div>
                <div className="container-wide relative z-10">
                    <div className="text-center mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-brand-offwhite font-sans leading-tight uppercase"
                        >
                            {title}
                        </motion.h1>
                    </div>
                    {introSection && (
                        <div className="mx-10 text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-offwhite mb-8 font-sans uppercase">{introSection.title}</h2>
                            <div className="space-y-4 text-base md:text-lg text-brand-silver/90 leading-relaxed">
                                {introSection.content.split('\n\n').map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Service Pillars */}
            {(() => {
                let globalCardIdx = -1;
                return content.servicePillars.map((pillar, pillarIdx) => {
                    const accent = pillarAccents[pillar.pillarName] || pillarAccents.THINK;
                    return (
                        <div key={pillar.pillarName} id={pillar.pillarName.toLowerCase()} className="scroll-mt-24">
                            {/* Pillar Header */}
                            <AnimatedSection className="text-center !pb-8">
                                <div className="flex flex-col items-center gap-8">
                                    <span className={`inline-block px-4 py-1.5 rounded-full text-base sm:text-xl font-semibold uppercase tracking-[0.2em] border ${accent.badge}`}>
                                        {pillar.pillarName}
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-brand-peach tracking-tight font-sans uppercase">{pillar.headline}</h2>
                                </div>
                            </AnimatedSection>

                            {/* Categories */}
                            {pillar.categories.map((cat, catIdx) => {
                                globalCardIdx++;
                                const imageOnRight = globalCardIdx % 2 === 1;

                                const contentCol = (
                                    <div className="lg:w-[30%]">
                                        <p className="text-sm text-brand-peach/70 uppercase tracking-widest font-medium mb-2">{cat.tagline}</p>
                                        <h3 className="text-xl md:text-2xl font-bold text-brand-blue-light mb-4 uppercase">{cat.categoryTitle}</h3>
                                        <p className="text-text-muted leading-relaxed">{cat.description}</p>
                                    </div>
                                );

                                const bulletsCol = (
                                    <div className="lg:w-[40%]">
                                        <ul className="grid grid-cols-2 gap-3">
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
                                );

                                const imageCol = cat.image ? (
                                    <div className="lg:w-[30%] flex items-center">
                                        <div className="w-full rounded-xl overflow-hidden border border-white/10">
                                            <img
                                                src={cat.image}
                                                alt={cat.categoryTitle}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                ) : null;

                                return (
                                    <AnimatedSection key={cat.categoryTitle} className="lg:w-[75%] lg:mx-auto">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: catIdx * 0.05, duration: 0.5 }}
                                            className={`card-hover rounded-2xl border ${accent.border} bg-surface/40 p-8 md:p-10`}
                                        >
                                            <div className="flex flex-col lg:flex-row gap-8">
                                                {imageOnRight ? (
                                                    <>
                                                        {contentCol}
                                                        {bulletsCol}
                                                        {imageCol}
                                                    </>
                                                ) : (
                                                    <>
                                                        {imageCol}
                                                        {bulletsCol}
                                                        {contentCol}
                                                    </>
                                                )}
                                            </div>
                                        </motion.div>
                                    </AnimatedSection>
                                );
                            })}

                            {/* Separator between pillars */}
                            {pillarIdx < content.servicePillars.length - 1 && (
                                <div className="container-wide px-6">
                                    <div className="border-t border-white/5 my-8" />
                                </div>
                            )}
                        </div>
                    );
                });
            })()
            }

            {/* CTA */}
            <AnimatedSection className="text-center !py-24">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-peach tracking-tight mb-6 font-sans uppercase">Let's Make Your Brand Inevitable</h2>
                    <Button to="/contact" variant="primary">
                        Start a Conversation
                        <ArrowRight size={18} />
                    </Button>
                </div>
            </AnimatedSection>
        </div>
    );
};
