import React from 'react';
import { content } from '../data/content';
import { AnimatedSection } from '../components/AnimatedSection';
import { CaseStudyCard } from '../components/CaseStudyCard';

export const CaseStudies: React.FC = () => {
    const { title } = content.pages['case-studies'];
    const caseStudies = content.caseStudies;

    return (
        <div className="pt-12">
            <div className="px-6 bg-surface/30">
                <div className="container-wide text-center">
                    <h1 className="text-6xl font-bold text-brand-offwhite mb-6 uppercase">{title}</h1>
                </div>
            </div>

            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-peach uppercase font-sans text-center">
                    Trusted By Ambitious Brands & Global Leaders
                </h2>
                <p className="text-lg text-text-muted leading-relaxed max-w-4xl mx-auto mb-12 text-center">
                    See how we have partnered with ambitious brands to deliver measurable impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((cs, idx) => (
                        <CaseStudyCard key={cs.brand} item={cs} index={idx} />
                    ))}
                </div>
            </AnimatedSection>
        </div>
    );
};
