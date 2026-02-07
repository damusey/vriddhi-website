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
            value: 'hello@narrativlyy.com',
            link: 'mailto:hello@narrativlyy.com'
        },
        {
            icon: 'Phone',
            label: 'Call Us',
            value: '+91 98765 43210',
            link: 'tel:+919876543210'
        },
        {
            icon: 'MapPin',
            label: 'Visit Us',
            value: 'South Extension II, New Delhi, India',
            link: 'https://goo.gl/maps/example'
        }
    ];

    return (
        <div className="relative min-h-screen pt-28 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-purple-500/10 rounded-full blur-[140px]"
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
                            <motion.h1
                                className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-300% pb-2"
                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            >
                                {title}
                            </motion.h1>

                            <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-xl leading-relaxed">
                                {sections[0]?.content || "Let's build something exceptional together. Connect with us to transform your vision into reality."}
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, idx) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.link}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (idx * 0.1), duration: 0.6 }}
                                        className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                                    >
                                        <div className="p-4 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                                            <DynamicIcon name={info.icon} size={28} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-text-muted uppercase tracking-widest mb-1">{info.label}</p>
                                            <p className="text-lg text-white font-semibold">{info.value}</p>
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
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

                            <h2 className="text-3xl font-bold mb-8 text-white relative z-10">Start a conversation</h2>

                            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group relative">
                                        <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-blue-400 transition-colors">Your Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 rounded-2xl bg-black/20 border border-white/5 focus:border-blue-500/50 focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all text-white placeholder-white/20"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="group relative">
                                        <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-blue-400 transition-colors">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-6 py-4 rounded-2xl bg-black/20 border border-white/5 focus:border-blue-500/50 focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all text-white placeholder-white/20"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="group relative">
                                    <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-blue-400 transition-colors">How can we help?</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-black/20 border border-white/5 focus:border-blue-500/50 focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all text-white appearance-none cursor-pointer">
                                        <option>Digital Strategy</option>
                                        <option>Brand Identity</option>
                                        <option>Product Development</option>
                                        <option>Marketing & Communication</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="group relative">
                                    <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-blue-400 transition-colors">Message</label>
                                    <textarea
                                        rows={6}
                                        className="w-full px-6 py-4 rounded-2xl bg-black/20 border border-white/5 focus:border-blue-500/50 focus:bg-black/40 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all text-white placeholder-white/20 resize-none"
                                        placeholder="Tell us about your project or vision..."
                                    />
                                </div>

                                <Button
                                    variant="primary"
                                    className="w-full py-5 rounded-2xl text-lg font-bold group shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-blue-500/20"
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
