import type { SiteConfig } from './types';

export const content: SiteConfig = {
    name: 'Narrativlyy',
    navItems: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Ethos', href: '/ethos' },
        { label: 'Contact', href: '/contact' },
        { label: 'Getting Started', href: '/getting-started' },
    ],
    footerText: '© 2024 Narrativlyy. All rights reserved.',
    socialLinks: [
        { platform: 'Twitter', url: '#' },
        { platform: 'LinkedIn', url: '#' },
    ],
    pages: {
        home: {
            slug: '/',
            title: 'Home',
            hero: {
                title: 'Future Ready Digital',
                subtitle: 'Crafting lightweight, high-performance digital experiences.',
                ctaText: 'Start Your Journey',
                ctaLink: '/getting-started',
                backgroundMedia: {
                    type: 'video',
                    src: 'https://framerusercontent.com/assets/53oqoRSg9UvyNuylUWkzwJklqM.mp4',
                    alt: 'Abstract digital background',
                }
            },
            sections: [
                {
                    id: 'intro',
                    title: 'Precision Engineering',
                    content: 'We build websites that fly. No bloat, just performance.',
                },
            ],
        },
        services: {
            slug: '/services',
            title: 'Our Services',
            sections: [
                {
                    id: 'service-categories',
                    title: 'Broad Categories',
                    content: 'Comprehensive solutions across the digital spectrum.',
                    items: [
                        {
                            title: 'Design',
                            description: 'Crafting intuitive and beautiful user experiences.',
                            iconName: 'PenTool',
                            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop',
                            details: [
                                'Brand Identity & Logo Design',
                                'User Interface (UI) & Experience (UX) Design',
                                'Brand Storytelling & Narrative',
                                'Visual Design & Graphics',
                                'Packaging Design',
                                'Creative & Art Direction',
                                'Concept Development',
                                'Campaign Ideation & Execution'
                            ]
                        },
                        {
                            title: 'Content',
                            description: 'Strategic storytelling that resonates with your audience.',
                            iconName: 'FileText',
                            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop',
                            details: [
                                'Copywriting & Strategic Content',
                                'Content Marketing',
                                'Scriptwriting',
                                'Podcast Production',
                                'Blog & Article Creation',
                                'Social Media Content Creation'
                            ]
                        },
                        {
                            title: 'Technology',
                            description: 'Robust engineering and cutting-edge development.',
                            iconName: 'Cpu',
                            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
                            details: [
                                'Website Development (Custom & Framer)',
                                'Mobile App Development',
                                'eCommerce Platform Development',
                                'AI-Powered Solutions',
                                'Custom Software Development',
                                'Cloud Solutions & Services',
                                'IT Infrastructure Management',
                                'Technical Support & Maintenance'
                            ]
                        },
                        {
                            title: 'Consulting',
                            description: 'Expert guidance to navigate complex challenges.',
                            iconName: 'Briefcase',
                            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
                            details: [
                                'Business Strategy Development',
                                'Go-to-Market Strategy',
                                'Market Research & Analysis',
                                'Competitive Landscape Assessment',
                                'Customer Journey Mapping',
                                'Predictive Modeling & Statistical Analysis',
                                'Data-Driven Insights',
                                'Strategic Partnerships'
                            ]
                        },
                        {
                            title: 'Communication',
                            description: 'Clear and effective messaging strategies.',
                            iconName: 'MessageCircle',
                            image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop',
                            details: [
                                'Performance Marketing (PPC, Paid Social)',
                                'SEO & SEM',
                                'Social Media Marketing & Management',
                                'Influencer Marketing & Vetting',
                                'PR Strategy & Media Buying',
                                'Email Marketing & WhatsApp Broadcasts',
                                'Conversion Rate Optimization (CRO)',
                                'Cross-Channel Media Measurement'
                            ]
                        },
                        {
                            title: 'Production',
                            description: 'High-quality asset creation and media production.',
                            iconName: 'Camera',
                            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
                            details: [
                                'Film & Video Production',
                                'VFX & Motion Graphics',
                                'Photography & Image Editing',
                                'Event Planning & Management',
                                'Brand Activations & Pop-ups',
                                'Live Commerce Management',
                                'Experiential Marketing',
                                'Sponsorships & Partnerships'
                            ]
                        },
                    ],
                },
            ],
        },
        'case-studies': {
            slug: '/case-studies',
            title: 'Case Studies',
            sections: [
                {
                    id: 'recent-work',
                    title: 'Recent Work',
                    content: 'See how we have transformed businesses.',
                    items: [
                        { title: 'TechCorp Rebrand', description: 'Complete overhaul decreasing load time by 40%.', iconName: 'Briefcase' },
                        { title: 'FinStream App', description: 'Real-time financial dashboard.', iconName: 'BarChart' },
                    ],
                },
            ],
        },
        ethos: {
            slug: '/ethos',
            title: 'Our Ethos',
            sections: [
                {
                    id: 'values',
                    title: 'Brand Ethos',
                    content: 'Our core principles that drive every decision.',
                    items: [
                        {
                            title: 'Intelligence, Then Imagination',
                            description: "Great ideas begin with rigorous thinking. Strategy gives imagination its edge, direction, and power.\n\nThinking precedes expression. Always. Rigor fuels the spark.",
                            iconName: 'Brain',
                            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop' // Artificial Intelligence/Brain abstract
                        },
                        {
                            title: 'Your Story Matters',
                            description: "We choose our work carefully. We partner with brands whose stories are worth shaping, protecting, and amplifying.\n\nWe select only narratives worth building. Worth believing in. Worth betting on.",
                            iconName: 'BookOpen',
                            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' // Digital particles/Abstract light
                        },
                        {
                            title: 'Clarity Is Power',
                            description: "Clarity creates confidence. When brands are clear about who they are and what they stand for, everything moves faster, sharper, and further.\n\nClear strategy forges confident brands. No noise. No compromise.",
                            iconName: 'Zap',
                            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop' // Cyberpunk/Laser focused
                        },
                        {
                            title: 'Ideas That Hold',
                            description: "We build ideas designed to endure. Not trends. Not noise. But work that holds its ground over time, culture, and change.\n\nBuilt to endure, not expire. Timeless over trendy.",
                            iconName: 'Anchor',
                            image: 'https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?q=80&w=800&auto=format&fit=crop' // Concrete aesthetic/Solid structure

                        },
                        {
                            title: 'Ahead, On Purpose',
                            description: "We don't react. We anticipate. Every decision is made with intent, foresight, and a long-term view of value.\n\nWe don't chase tomorrow—we define it. Intentional bets on what wins.",
                            iconName: 'Telescope',
                            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' // Earth/Network
                        },
                        {
                            title: 'Don\'t Blend In',
                            description: "Distinctiveness is not decoration — it's strategy. We help brands stand apart in ways that are meaningful, credible, and lasting.\n\nDistinction is non-negotiable. Stand out. Or step aside.",
                            iconName: 'Fingerprint',
                            image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop' // Neon/Unique light
                        },
                    ]
                },
            ]
        },
        contact: {
            slug: '/contact',
            title: 'Contact',
            sections: [
                { id: 'contact-form', title: 'Get in Touch', content: 'Let\'s build something together.' }
            ]
        },
        'getting-started': {
            slug: '/getting-started',
            title: 'Start Your Project',
            sections: [
                { id: 'onboarding', title: 'Kickoff', content: 'Tell us about your vision and we will handle the rest.' }
            ]
        }
    },
};
