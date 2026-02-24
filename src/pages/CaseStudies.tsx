import React from 'react';
import { content } from '../data/content';
import { AnimatedSection } from '../components/AnimatedSection';
import { ServiceCard } from '../components/ServiceCard';

export const CaseStudies: React.FC = () => {
    const { title, sections } = content.pages['case-studies'];

    return (
        <div className="pt-24">
            <div className="px-6 bg-surface/30">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-6xl font-bold text-brand-silver mb-6 uppercase">{title}</h1>
                </div>
            </div>

            {sections.map((section) => (
                <AnimatedSection key={section.id}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-peach uppercase font-sans">{section.title}</h2>
                    <p className="text-lg text-text-muted leading-relaxed max-w-4xl mb-12">{section.content}</p>

                    {section.items && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {section.items.map((item, idx) => (
                                <ServiceCard key={item.title} item={item} index={idx} />
                            ))}
                        </div>
                    )}
                </AnimatedSection>
            ))}
        </div>
    );
};
