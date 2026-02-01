import React from 'react';
import { content } from '../data/content';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 mt-auto border-t border-white/5 bg-surface">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-text-muted text-sm">
                    {content.footerText}
                </div>
                <div className="flex gap-4">
                    {content.socialLinks.map((link) => (
                        <a
                            key={link.platform}
                            href={link.url}
                            className="text-text-muted hover:text-white transition-colors text-sm"
                        >
                            {link.platform}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
