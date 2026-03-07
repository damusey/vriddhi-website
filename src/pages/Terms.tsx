import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';

export const Terms: React.FC = () => {
    return (
        <div className="pt-12">
            <div className="px-5 py-5">
                <div className="container-wide text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-offwhite font-sans leading-[60px]"
                    >
                        Terms & Conditions
                    </motion.h1>
                    <p className="mt-4 text-brand-peach/80 ">Last Updated: March 2026</p>
                </div>
            </div>

            <AnimatedSection className="max-w-4xl mx-auto px-5 py-12">
                <div className="prose prose-invert prose-brand max-w-none">
                    <p className="lead text-xl text-brand-silver">
                        Welcome to Narrativlyy. By accessing or using our website and services, you agree to be bound by the following Terms and Conditions.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-peach mt-12 mb-4 font-sans">1. Use of Services</h2>
                    <p className="text-brand-silver/90  leading-relaxed mb-6">
                        Our services, including strategic consulting, creative design, digital marketing, and technological solutions, are provided for legitimate business purposes. You agree not to use our website or services for any unlawful or prohibited activities.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-peach mt-12 mb-4 font-sans">2. Intellectual Property</h2>
                    <p className="text-brand-silver/90  leading-relaxed mb-6">
                        All content, branding, design systems, text, graphics, and underlying source code across the Narrativlyy ecosystem are the intellectual property of Narrativlyy unless otherwise stated or granted under specific client contracts. Unauthorized reproduction or use is strictly prohibited.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-peach mt-12 mb-4 font-sans">3. Client Engagements</h2>
                    <p className="text-brand-silver/90  leading-relaxed mb-6">
                        Specific terms governing project scope, deliverables, payment terms, and confidentiality will be outlined directly in a Master Services Agreement (MSA) or Statement of Work (SOW) mutually signed before work begins. These general terms govern website usage independently of those contracts.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-peach mt-12 mb-4 font-sans">4. Limitation of Liability</h2>
                    <p className="text-brand-silver/90  leading-relaxed mb-6">
                        While we strive to provide the highest quality strategic and executional work, Narrativlyy shall not be held liable for indirect, incidental, special, or consequential damages resulting from the use of our website or general services. We do not guarantee specific business outcomes or ROI unless explicitly committed within performance-based contracts.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-peach mt-12 mb-4 font-sans">5. Links to Third-Party Sites</h2>
                    <p className="text-brand-silver/90  leading-relaxed mb-6">
                        Our website or client portals may contain links to external sites or platforms. We are not responsible for the content, privacy policies, or practices of any third-party websites. Accessing external links is at your own risk.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-peach mt-12 mb-4 font-sans">6. Modifications to Terms</h2>
                    <p className="text-brand-silver/90  leading-relaxed mb-6">
                        Narrativlyy reserves the right to modify or update these terms at any time without prior notice. Continued use of our website after any changes indicates your acceptance of the updated terms.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-peach mt-12 mb-4 font-sans">7. Governing Law</h2>
                    <p className="text-brand-silver/90  leading-relaxed mb-6">
                        These terms shall be governed by and construed in accordance with standard business jurisdictional laws in our primary areas of operation (such as New Delhi, India). Any disputes will be subject to exclusive jurisdiction in these courts.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h3 className="text-xl font-bold text-brand-offwhite mb-4">Contact Information</h3>
                    <p className="text-brand-silver/90  leading-relaxed">
                        If you have questions regarding these Terms and Conditions, please contact us at: <br />
                        <a href="mailto:info@narrativlyy.com" className="text-brand-peach hover:underline mt-2 inline-block">info@narrativlyy.com</a>
                    </p>
                </div>
            </AnimatedSection>
        </div>
    );
};
