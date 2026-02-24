import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { DynamicIcon } from '../components/ui/DynamicIcon';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
    const { title, sections } = content.pages.contact;

    const contactInfo = [
        {
            icon: 'Mail',
            label: 'Email Us',
            value: content.footer.email,
            link: `mailto:${content.footer.email}`
        },
        {
            icon: 'Phone',
            label: 'Call Us',
            value: content.footer.phone,
            link: `tel:${content.footer.phone}`
        },
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-blue/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-brand-peach/5 rounded-full blur-[140px]"
                />
            </div>

            <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Column: Info & Text */}
                    <div className="flex-1 w-full lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-brand-offwhite font-sans leading-[60px] uppercase">
                                {sections[0]?.title || title}
                            </h1>

                            <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-xl leading-relaxed font-serif">
                                {sections[0]?.content || "Let's build something exceptional together."}
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, idx) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.link}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (idx * 0.1), duration: 0.6 }}
                                        className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-blue/30 transition-all group"
                                    >
                                        <div className="p-4 rounded-xl bg-brand-blue/20 text-brand-silver group-hover:scale-110 transition-transform">
                                            <DynamicIcon name={info.icon} size={28} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-text-muted uppercase tracking-widest mb-1">{info.label}</p>
                                            <p className="text-lg text-brand-offwhite font-semibold">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative p-8 md:p-12 rounded-[2.5rem] bg-surface/40 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-peach/5 pointer-events-none" />

                            <h2 className="text-3xl font-bold mb-8 text-brand-peach relative z-10 font-sans">Start a conversation</h2>

                            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group relative">
                                        <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">Your Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl bg-brand-black/40 border border-white/5 focus:border-brand-blue/50 focus:bg-brand-black/60 focus:outline-none focus:ring-1 focus:ring-brand-blue/50 transition-all text-brand-silver placeholder-white/20"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="group relative">
                                        <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-6 py-4 rounded-2xl bg-brand-black/40 border border-white/5 focus:border-brand-blue/50 focus:bg-brand-black/60 focus:outline-none focus:ring-1 focus:ring-brand-blue/50 transition-all text-brand-silver placeholder-white/20"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group relative">
                                        <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">Company / Organization</label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl bg-brand-black/40 border border-white/5 focus:border-brand-blue/50 focus:bg-brand-black/60 focus:outline-none focus:ring-1 focus:ring-brand-blue/50 transition-all text-brand-silver placeholder-white/20"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                    <div className="group relative">
                                        <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">Your Role</label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl bg-brand-black/40 border border-white/5 focus:border-brand-blue/50 focus:bg-brand-black/60 focus:outline-none focus:ring-1 focus:ring-brand-blue/50 transition-all text-brand-silver placeholder-white/20"
                                            placeholder="e.g. Founder, CMO"
                                        />
                                    </div>
                                </div>
                                <div className="group relative">
                                    <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">How can we help?</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-brand-black/40 border border-white/5 focus:border-brand-blue/50 focus:bg-brand-black/60 focus:outline-none focus:ring-1 focus:ring-brand-blue/50 transition-all text-brand-silver appearance-none cursor-pointer">
                                        <option value="">Select a service</option>
                                        <option>Strategic Advisory & Consulting</option>
                                        <option>Brand, Creative & Identity</option>
                                        <option>Platforms & Development</option>
                                        <option>AI & Innovation</option>
                                        <option>Digital Marketing & SEO</option>
                                        <option>Performance Marketing</option>
                                        <option>Social Media & Community</option>
                                        <option>Content, Film & Production</option>
                                        <option>PR, Media & Communications</option>
                                        <option>Experiential & Events</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="group relative">
                                    <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">Message</label>
                                    <textarea
                                        rows={6}
                                        className="w-full px-6 py-4 rounded-2xl bg-brand-black/40 border border-white/5 focus:border-brand-blue/50 focus:bg-brand-black/60 focus:outline-none focus:ring-1 focus:ring-brand-blue/50 transition-all text-brand-silver placeholder-white/20 resize-none"
                                        placeholder="Tell us about your project or vision..."
                                    />
                                </div>

                                <Button
                                    variant="primary"
                                    className="w-full py-5 rounded-2xl text-lg font-bold group"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Send Message
                                        <DynamicIcon name="Send" size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </Button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};
