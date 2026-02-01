import React from 'react';
import { content } from '../data/content';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/ui/Button';

export const GettingStarted: React.FC = () => {
    const { title, sections } = content.pages['getting-started'];

    return (
        <div className="pt-20">
            <div className="px-6 py-20 bg-surface/30">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
                </div>
            </div>

            {sections.map((section) => (
                <AnimatedSection key={section.id} className="max-w-3xl mx-0">
                    <h2 className="text-3xl font-bold mb-6 text-white">{section.title}</h2>
                    <p className="text-lg text-text-muted mb-8">{section.content}</p>

                    <div className="space-y-6 p-8 rounded-2xl border border-white/5 bg-surface">
                        <h3 className="text-xl font-semibold text-white">Project Inquiry</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-muted">Company Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-brand-black border border-white/5 focus:border-white/20 focus:outline-none transition-colors text-white" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-muted">Project Goals</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-brand-black border border-white/5 focus:border-white/20 focus:outline-none transition-colors text-white" />
                            </div>
                            <Button variant="primary" className="w-full">Start Project</Button>
                        </form>
                    </div>
                </AnimatedSection>
            ))}
        </div>
    );
};
