import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { AnimatedSection } from '../components/AnimatedSection';
import { EthosCard } from '../components/EthosCard';

export const Ethos: React.FC = () => {
    const { title, sections } = content.pages.ethos;

    return (
        <div className="">
            <div className="px-6 py-24">
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
                    {/* Section Title (Optional, hidden if redundant) */}
                    {/* <h2 className="text-3xl font-bold mb-12 text-center text-white">{section.title}</h2> */}

                    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                        {section.items?.map((item, index) => (
                            <EthosCard key={item.title} item={item} index={index} />
                        ))}
                    </div>
                </AnimatedSection>
            ))}
        </div>
    );
};
