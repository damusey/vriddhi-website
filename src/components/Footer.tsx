import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { content } from '../data/content';
import { DynamicIcon } from './ui/DynamicIcon';
import { Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
    const { footer } = content;

    return (
        <footer className="w-full mt-auto border-t border-white/5 bg-brand-charcoal">
            <div className="container-wide px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Logo & Tagline */}
                    <div className="lg:col-span-2">
                        <NavLink to="/" className="inline-block mb-4 overflow-hidden h-[80px]">
                            <img src="/logo.png" alt="Narrativlyy" className="h-[200px] w-auto object-contain brightness-200 -mt-[60px]" />
                        </NavLink>
                        <p className="text-text-muted text-sm leading-relaxed max-w-md ">
                            {footer.tagline}
                        </p>
                        <NavLink
                            to="/contact"
                            className="inline-block mt-6 px-6 py-2.5 rounded-full bg-brand-peach text-brand-black text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-peach/20"
                        >
                            Let's Talk
                        </NavLink>
                    </div>

                    {/* Navigation */}
                    <div>
                        <ul className="space-y-3">
                            {footer.navLinks.map((link) => (
                                <li key={link.href}>
                                    <NavLink
                                        to={link.href}
                                        className="text-text-muted hover:text-brand-peach transition-colors text-sm"
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-brand-silver text-sm font-semibold uppercase tracking-widest mb-6">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href={`mailto:${footer.email}`} className="flex items-center gap-2 text-text-muted hover:text-brand-peach transition-colors text-sm">
                                    <Mail size={14} />
                                    {footer.email}
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${footer.phone}`} className="flex items-center gap-2 text-text-muted hover:text-brand-peach transition-colors text-sm">
                                    <Phone size={14} />
                                    {footer.phone}
                                </a>
                            </li>
                        </ul>

                        <h4 className="text-brand-silver text-sm font-semibold uppercase tracking-widest mt-8 mb-4">Social</h4>
                        <div className="flex gap-3">
                            {footer.socialLinks.map((link) => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-text-muted hover:text-brand-peach hover:border-brand-peach/30 transition-all"
                                    aria-label={link.platform}
                                >
                                    <DynamicIcon name={link.iconName} size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="container-wide px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs  text-brand-silver">
                    <p>{content.footer.copyright}</p>
                    <div className="flex gap-4">
                        <Link to="/privacy-policy" className="hover:text-brand-peach transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-brand-peach transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
