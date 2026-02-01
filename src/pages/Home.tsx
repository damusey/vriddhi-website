import React from 'react';
import { content } from '../data/content';
import { Hero } from '../components/Hero';
import { AnimatedSection } from '../components/AnimatedSection';

export const Home: React.FC = () => {
    const { hero, sections } = content.pages.home;

    return (
        <div className="flex flex-col">
            {hero && <Hero data={hero} />}

            {sections.map((section) => (
                <AnimatedSection key={section.id} className={section.id === 'intro' ? 'text-center' : ''}>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{section.title}</h2>
                        <p className="text-lg text-text-muted leading-relaxed">{section.content}</p>
                    </div>
                </AnimatedSection>
            ))}
        </div>
    );
};
