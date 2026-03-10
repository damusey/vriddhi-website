import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { DynamicIcon } from '../components/ui/DynamicIcon';
import { Button } from '../components/ui/Button';
import emailjs from '@emailjs/browser';

// ── Types ──────────────────────────────────────────────────────────────────────
interface FormData {
    name: string;
    email: string;
    company: string;
    role: string;
    service: string;
    message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;
type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

// ── Validation ─────────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): FormErrors {
    const errors: FormErrors = {};

    if (!data.name.trim()) errors.name = 'Name is required';
    else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';

    if (!data.email.trim()) errors.email = 'Email is required';
    else if (!EMAIL_REGEX.test(data.email.trim())) errors.email = 'Enter a valid email address';

    if (!data.company.trim()) errors.company = 'Company is required';

    if (!data.role.trim()) errors.role = 'Role is required';

    if (!data.service) errors.service = 'Please select a service';

    if (!data.message.trim()) errors.message = 'Message is required';
    else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';

    return errors;
}

// ── Inline error component ─────────────────────────────────────────────────────
const FieldError: React.FC<{ message?: string }> = ({ message }) => (
    <AnimatePresence>
        {message && (
            <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="text-red-400 text-xs mt-2 pl-1"
            >
                {message}
            </motion.p>
        )}
    </AnimatePresence>
);

// ── Constants ──────────────────────────────────────────────────────────────────
const INITIAL_FORM: FormData = {
    name: '', email: '', company: '', role: '', service: '', message: '',
};

// ── Component ──────────────────────────────────────────────────────────────────
export const Contact: React.FC = () => {
    const { title, sections } = content.pages.contact;

    // State
    const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<SubmitStatus>('idle');

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

    // Helpers
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear field error on change
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setStatus('sending');

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    role: formData.role,
                    service: formData.service,
                    message: formData.message,
                    title: `${formData.name} — ${formData.service}`,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setFormData(INITIAL_FORM);
        } catch {
            setStatus('error');
        }
    };

    // Shared input class
    const inputClass = (field: keyof FormData) =>
        `w-full px-6 py-4 rounded-2xl bg-brand-black/40 border transition-all text-brand-silver placeholder-white/20 focus:outline-none focus:ring-1 ${errors[field]
            ? 'border-red-400/60 focus:border-red-400 focus:ring-red-400/50'
            : 'border-white/5 focus:border-brand-blue/50 focus:bg-brand-black/60 focus:ring-brand-blue/50'
        }`;

    // ── Success state ──────────────────────────────────────────────────────────
    if (status === 'success') {
        return (
            <div className="relative min-h-screen overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-blue/10 rounded-full blur-[120px]"
                    />
                </div>
                <div className="relative z-10 px-6 py-20 container-wide flex items-center justify-center min-h-[60vh]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center max-w-lg p-12 rounded-[2.5rem] bg-surface/40 backdrop-blur-2xl border border-white/10 shadow-2xl"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                        >
                            <DynamicIcon name="CheckCircle" size={40} className="text-green-400" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-brand-offwhite mb-4 font-sans">Message Sent!</h2>
                        <p className="text-text-muted mb-8 text-lg leading-relaxed">
                            Thank you for reaching out. We'll get back to you shortly.
                        </p>
                        <Button
                            variant="primary"
                            className="px-8 py-4 rounded-2xl text-base font-bold mx-auto"
                            onClick={() => setStatus('idle')}
                        >
                            Send Another Message
                        </Button>
                    </motion.div>
                </div>
            </div>
        );
    }

    // ── Main form ──────────────────────────────────────────────────────────────
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

            <div className="relative z-10 px-6 py-20 container-wide">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Column: Info & Text */}
                    <div className="flex-1 w-full lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-brand-offwhite font-sans leading-tight uppercase">
                                {sections[0]?.title || title}
                            </h1>

                            <p className="text-lg md:text-2xl text-text-muted mb-12 max-w-xl leading-relaxed ">
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

                            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group relative">
                                        <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={inputClass('name')}
                                            placeholder="John Doe"
                                        />
                                        <FieldError message={errors.name} />
                                    </div>
                                    <div className="group relative">
                                        <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={inputClass('email')}
                                            placeholder="john@example.com"
                                        />
                                        <FieldError message={errors.email} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group relative">
                                        <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">Company / Organization</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className={inputClass('company')}
                                            placeholder="Your Company"
                                        />
                                        <FieldError message={errors.company} />
                                    </div>
                                    <div className="group relative">
                                        <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">Your Role</label>
                                        <input
                                            type="text"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            className={inputClass('role')}
                                            placeholder="e.g. Founder, CMO"
                                        />
                                        <FieldError message={errors.role} />
                                    </div>
                                </div>
                                <div className="group relative">
                                    <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">How can we help?</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`${inputClass('service')} appearance-none cursor-pointer`}
                                    >
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
                                    <FieldError message={errors.service} />
                                </div>
                                <div className="group relative">
                                    <label className="block text-sm font-medium text-text-muted mb-3 group-focus-within:text-brand-peach transition-colors">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className={`${inputClass('message')} resize-none`}
                                        placeholder="Tell us about your project or vision..."
                                    />
                                    <FieldError message={errors.message} />
                                </div>

                                {/* Error banner */}
                                <AnimatePresence>
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            className="p-4 rounded-xl bg-red-500/10 border border-red-400/30 text-red-300 text-sm text-center"
                                        >
                                            Something went wrong. Please try again or email us directly.
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <Button
                                    variant="primary"
                                    className="w-full py-5 rounded-2xl text-lg font-bold group"
                                    disabled={status === 'sending'}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        {status === 'sending' ? (
                                            <>
                                                Sending...
                                                <motion.span
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                                    className="inline-block"
                                                >
                                                    <DynamicIcon name="Loader2" size={20} />
                                                </motion.span>
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <DynamicIcon name="Send" size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
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
