import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div>
            <div className="px-5 py-5">
                <div className="container-wide text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-offwhite font-sans leading-[60px] uppercase"
                    >
                        Privacy Policy
                    </motion.h1>
                </div>
            </div>

            <AnimatedSection>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8 text-text-muted leading-relaxed ">
                        <p>
                            At Narrativlyy (referred to as "Narrativlyy", "we", "our", or "us"), we believe that trust is built through transparency. As a full-service marketing agency, we work closely with people, ideas, and businesses — and we treat your data with the same care and respect we bring to our work.
                        </p>
                        <p>
                            This Privacy Policy outlines how we collect, use, and safeguard information shared by our website visitors, partners, clients, collaborators, and prospective talent. References to "you" or "your" apply to you as an individual and, where relevant, the organization you represent.
                        </p>
                        <p>
                            Please read this Privacy Policy carefully. By accessing or using our website, you agree to the practices described herein. As our business and legal environment evolves, this policy may be updated from time to time. Continued use of our website signifies acceptance of any such revisions and updates.
                        </p>

                        <h2 className="text-2xl font-bold text-brand-peach font-sans">1. Information We Collect</h2>
                        <p>We may collect information through direct interactions with you or automatically through your use of our website.</p>

                        <h3 className="text-xl font-semibold text-brand-blue-light">a. Information You Provide</h3>
                        <p>We collect personally identifiable and professional information that you voluntarily provide through a variety of ways, including but not limited to:</p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Contact forms, email, or business contact number</li>
                            <li>Services or proposals requests</li>
                            <li>Application for roles, freelance opportunities or collaborations</li>
                            <li>Subscription to updates or communications</li>
                        </ul>
                        <p>This information may include your name, email address, company or role, LinkedIn profile, and any context you choose to provide.</p>

                        <h3 className="text-xl font-semibold text-brand-blue-light">b. Automatically Collected Information</h3>
                        <p>When you access our website, certain technical data may be collected automatically to ensure smooth operation and performance, such as:</p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>IP address</li>
                            <li>Browser type and device information</li>
                            <li>Pages viewed and interaction patterns</li>
                        </ul>
                        <p>This data helps us understand usage trends and improve our digital experience.</p>

                        <h2 className="text-2xl font-bold text-brand-peach font-sans">2. How We Use Information</h2>
                        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We strictly use the collected information for legitimate business and operational purposes, including but not limited to:</p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Operate and maintain our website</li>
                            <li>Respond to inquiries and professional correspondence</li>
                            <li>Deliver marketing, branding, strategy, and creative services</li>
                            <li>Improve our offerings, content, and user experience</li>
                            <li>Communicate updates, insights, or relevant information</li>
                            <li>Maintain security and prevent misuse or unauthorized activity</li>
                            <li>Meet legal or regulatory requirements</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-brand-peach font-sans">3. Cookies & Similar Technologies</h2>
                        <p>We use cookies, web beacons, and tracking pixels to enhance your experience and to understand how visitors interact with our website and to ensure optimal performance. These technologies help us manage sessions, analyze engagement, and maintain security.</p>
                        <p>You may control or disable cookies through your browser settings. Please note that restricting certain cookies may impact website functionality or performance.</p>

                        <h2 className="text-2xl font-bold text-brand-peach font-sans">4. Data Protection & Security</h2>
                        <p>We implement reasonable technical and organizational safeguards to protect your information from unauthorized access, misuse, or loss. While we follow industry-standard practices to secure data, no digital system can be guaranteed to be completely secure.</p>
                        <p>Narrativlyy does not sell, rent, or commercially trade personal information.</p>

                        <h2 className="text-2xl font-bold text-brand-peach font-sans">5. Disclosure of Information</h2>
                        <p>We may share information only in limited circumstances, including:</p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>With trusted service providers who support our website or operations, under confidentiality obligations</li>
                            <li>When required by applicable law, regulation, or legal process</li>
                            <li>To protect the rights, safety, or integrity of Narrativlyy, our clients, or our operations</li>
                        </ul>
                        <p>We do not disclose personal information to third parties for independent marketing or promotional use.</p>

                        <h2 className="text-2xl font-bold text-brand-peach font-sans">6. International Access & Data Transfers</h2>
                        <p>Narrativlyy operates globally and is headquartered in India. If you access our website from outside India, your information may be processed or stored in jurisdictions where we or our service providers operate.</p>
                        <p>By using our website, you consent to the transfer and processing of information across borders, including regions that may have different data protection standards.</p>

                        <h2 className="text-2xl font-bold text-brand-peach font-sans">7. Children's Privacy</h2>
                        <p>This website is not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.</p>

                        <h2 className="text-2xl font-bold text-brand-peach font-sans">8. External Links</h2>
                        <p>Our website may include links to third-party websites or platforms. Narrativlyy is not responsible for the privacy practices or content of those external sites. We encourage you to review their privacy policies independently.</p>

                        <h2 className="text-2xl font-bold text-brand-peach font-sans">9. Updates to This Policy</h2>
                        <p>This Privacy Policy may be updated periodically to reflect changes in legal requirements, business practices, or technology. Any updates will be published on this page. Continued use of the website constitutes acceptance of the revised policy.</p>

                        <h2 className="text-2xl font-bold text-brand-peach font-sans">10. Contact Us</h2>
                        <p>For questions or concerns regarding this Privacy Policy or our data practices, please contact us at: <a href="mailto:info@narrativlyy.com" className="text-brand-peach hover:text-brand-peach/80 underline">info@narrativlyy.com</a></p>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};
