import React from 'react';
import { content } from '../data/content';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
    const { title, sections } = content.pages.contact;

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

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-muted">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-surface border border-white/5 focus:border-white/20 focus:outline-none transition-colors text-white" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-muted">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-surface border border-white/5 focus:border-white/20 focus:outline-none transition-colors text-white" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-muted">Message</label>
                            <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-surface border border-white/5 focus:border-white/20 focus:outline-none transition-colors text-white" placeholder="Tell us about your project..." />
                        </div>
                        <Button variant="primary" className="w-full md:w-auto">Send Message</Button>
                    </form>
                </AnimatedSection>
            ))}
        </div>
    );
};
