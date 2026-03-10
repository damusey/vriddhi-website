import React from 'react';
import { content } from '../data/content';
import { Hero } from '../components/Hero';
import { AnimatedSection } from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Lightbulb, Palette, Megaphone, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';

import { MetricsShowcase } from '../components/home/MetricsShowcase';
import { BrandSlider } from '../components/home/BrandSlider';
import { GlobalPresence } from '../components/home/GlobalPresence';

const pillarIcons = [Lightbulb, Palette, Megaphone, Sparkles];
const pillarColors = [
    { border: 'border-brand-blue/30', hoverBorder: 'hover:border-brand-blue/60', gradient: 'from-brand-blue/10 to-brand-blue/5', glow: 'group-hover:shadow-brand-blue/20' },
    { border: 'border-purple-500/20', hoverBorder: 'hover:border-purple-500/50', gradient: 'from-purple-500/10 to-purple-900/10', glow: 'group-hover:shadow-purple-500/20' },
    { border: 'border-brand-peach/20', hoverBorder: 'hover:border-brand-peach/50', gradient: 'from-brand-peach/10 to-brand-peach/5', glow: 'group-hover:shadow-brand-peach/20' },
    { border: 'border-emerald-500/20', hoverBorder: 'hover:border-emerald-500/50', gradient: 'from-emerald-500/10 to-emerald-900/10', glow: 'group-hover:shadow-emerald-500/20' },
];

// For the Home page summary, we pick 4 top-level concepts to match the original layout
const homePillarsSummary = [
    { title: 'THINK', tagline: 'We architect brand strategy, positioning, and go-to-market frameworks that drive clarity, decisive action, and long-term competitive advantage.', link: '/services#think', image: '/images/marketing-spectrum/THINK.webp' },
    { title: 'CREATE', tagline: 'We build integrated design systems, campaigns, scalable AI solutions, and visual assets for ambitious brands who refuse to be ordinary.', link: '/services#create', image: '/images/marketing-spectrum/CREATE.webp' },
    { title: 'INFLUENCE', tagline: 'We deploy performance-driven digital marketing, SEO, paid media, and analytics ecosystems optimized for measurable ROI and sustained growth.', link: '/services#influence', image: '/images/marketing-spectrum/INFLUENCE.webp' },
    { title: 'EXPERIENCE', tagline: 'We build connected ecosystems to create immersive brand experiences that drive engagement and measurable impact across every touchpoint.', link: '/services#experience', image: '/images/marketing-spectrum/EXPERIENCE.webp' }
];

export const Home: React.FC = () => {
    const { hero, sections } = content.pages.home;
    const missionSection = sections.find(s => s.id === 'mission');

    return (
        <div className="flex flex-col">
            {hero && <Hero data={hero} />}

            {/* Mission Strip */}
            {missionSection && (
                <AnimatedSection className="text-center bg-brand-black !py-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-brand-offwhite tracking-tight font-sans uppercase">{missionSection.title}</h2>
                        <p className="text-base md:text-xl text-text-muted leading-relaxed ">{missionSection.content}</p>
                    </div>
                </AnimatedSection>
            )}

            {/* Service Pillars Overview */}
            <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-peach tracking-tight my-8 text-center font-sans uppercase">The Full Marketing Spectrum</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 container-wide">
                    {homePillarsSummary.map((pillar, idx) => {
                        const IconComponent = pillarIcons[idx];
                        const colors = pillarColors[idx];
                        return (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group perspective-2000"
                            >
                                <div
                                    className={`card-hover relative rounded-2xl border ${colors.border} ${colors.hoverBorder} p-8 h-full flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl ${colors.glow} overflow-hidden`}
                                    style={{
                                        backgroundImage: `url(${pillar.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    {/* Dark overlay for text readability */}
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500" />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    <div className="relative z-10 flex flex-col items-center h-full">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent size={32} className="text-brand-silver" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-brand-silver mb-3 tracking-tight uppercase">{pillar.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed flex-grow font-bold">{pillar.tagline}</p>
                                        <NavLink
                                            to={pillar.link}
                                            className="mt-6 inline-flex items-center gap-2 text-brand-peach/70 hover:text-brand-peach text-sm font-medium transition-colors group/link"
                                        >
                                            Know More
                                            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                        </NavLink>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </AnimatedSection>

            {/* NEW: Metrics Showcase */}
            <MetricsShowcase />

            {/* NEW: Brand Slider */}
            <BrandSlider />

            {/* Key Differentiators */}
            <AnimatedSection className="bg-brand-black !py-20">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-offwhite tracking-tight mb-4 font-sans uppercase">One-Stop Hub for Brand, Marketing & Growth</h2>
                    <p className="text-base md:text-lg text-text-muted max-w-3xl mx-auto ">We are a collective of sharp thinkers and creative makers delivering scalable, strategic solutions that redefine how brands think, communicate, and influence.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {content.differentiators.map((diff, idx) => (
                        <motion.div
                            key={diff.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                            className="card-hover group p-8 rounded-2xl bg-surface/60 border border-white/5 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/5 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                        >
                            <h3 className="text-lg font-bold text-brand-peach mb-2 uppercase">{diff.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed">{diff.description}</p>
                        </motion.div>
                    ))}
                </div>
            </AnimatedSection>

            {/* Case Studies Preview
            {content.caseStudies.length > 0 && (
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-offwhite tracking-tight mb-4 font-sans uppercase">Trusted By Ambitious Brands & Global Leaders</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {content.caseStudies.map((cs, idx) => (
                            <motion.div
                                key={cs.brand}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="card-hover p-8 rounded-2xl bg-surface border border-white/5 hover:border-brand-blue/30 transition-all group"
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-brand-blue-light mb-3 uppercase">{cs.brand}</h3>
                                <p className="text-sm text-text-muted uppercase tracking-wider mb-2">Services Provided</p>
                                <p className="text-brand-silver/80">{cs.servicesProvided}</p>
                                {cs.impact && (
                                    <>
                                        <p className="text-sm text-text-muted uppercase tracking-wider mt-4 mb-2">Impact</p>
                                        <p className="text-brand-silver/80">{cs.impact}</p>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            )} */}

            {/* NEW: Global Presence */}
            <GlobalPresence />

            {/* CTA Section */}
            <AnimatedSection className="text-center !py-24">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-offwhite tracking-tight mb-6 font-sans uppercase">Ready To Make Your Brand Inevitable?</h2>
                    <p className="text-lg md:text-xl text-text-muted mb-10 ">Let's Make It Happen!</p>
                    <Button to="/contact" variant="primary">
                        Get In Touch
                        <ArrowRight size={18} />
                    </Button>
                </div>
            </AnimatedSection>
        </div>
    );
};
