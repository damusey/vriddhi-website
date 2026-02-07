import React from 'react';
import { content } from '../data/content';
import { AnimatedSection } from '../components/AnimatedSection';
import { ServiceCard } from '../components/ServiceCard';

import { motion } from 'framer-motion';

export const Services: React.FC = () => {
    const { title, sections } = content.pages.services;

    return (
        <div className="pt-24">
            <div className="px-6 py-32">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-0 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-300% pb-2"
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                        {title}
                    </motion.h1>
                </div>
            </div>

            {sections.map((section) => (
                <AnimatedSection key={section.id}>
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4 text-white">{section.title}</h2>
                        <p className="text-lg text-text-muted">{section.content}</p>
                    </div>

                    {section.items && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
