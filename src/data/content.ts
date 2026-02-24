import type { SiteConfig } from './types';

export const content: SiteConfig = {
    name: 'Narrativlyy',
    navItems: [
        { label: 'About Us', href: '/about' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Services', href: '/services' },
    ],
    ctaButton: { label: "Let's Talk", href: '/contact' },

    footer: {
        tagline: 'Powering global brands with integrated marketing solutions and performance-first ecosystems to unlock your next dimension of growth.',
        email: 'info@narrativlyy.com',
        phone: '9953655919',
        navLinks: [
            { label: 'About Us', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Case Studies', href: '/case-studies' },
        ],
        socialLinks: [
            { platform: 'LinkedIn', url: 'https://linkedin.com/company/narrativlyy', iconName: 'Linkedin' },
            { platform: 'Instagram', url: 'https://instagram.com/narrativlyy', iconName: 'Instagram' },
        ],
        copyright: '© 2026 Narrativlyy. All rights reserved.',
    },

    testimonials: [
        {
            quote: "What sets Narrativlyy apart is how deeply they understand business, not just branding. They operate like true partners — challenging assumptions, sharpening strategy, and building narratives that actually move the needle.",
            attribution: "Chief Marketing Officer",
            role: "Consumer Brand",
        },
        {
            quote: "Working with Narrativlyy feels less like hiring an agency and more like gaining a strategic advantage. We have greatly benefited from their consulting & advisory, and brand identity building. Their thinking is calm, deliberate, and built for long-term relevance — exactly what global brands need.",
            attribution: "Business Lead",
            role: "International Brand",
        },
        {
            quote: "Narrativlyy didn't just help us communicate better — they helped us think better. Their clarity-first approach brought alignment across leadership, marketing, and product, and that shift directly reflected in our growth trajectory.",
            attribution: "Founder & CEO",
            role: "Global Technology Company",
        },
    ],

    differentiators: [
        {
            title: 'One-Stop Hub for Brand, Marketing & Growth',
            description: 'We are a collective of sharp thinkers and creative makers delivering scalable, strategic solutions that redefine how brands think, communicate, and influence to help your brand stand out across all growth channels.',
        },
        {
            title: 'Hyper-Customized Strategies',
            description: 'We craft bespoke brand positioning and go-to-market frameworks carefully tailored to align with your category, competitive landscape, and business needs.',
        },
        {
            title: 'Performance-First Ecosystems',
            description: 'We design integrated performance marketing systems across SEO, paid media, analytics, and demand generation — built to deliver measurable ROI and sustainable revenue growth.',
        },
        {
            title: 'Global Reach, Native Execution',
            description: 'We empower global brands across geographies with culturally intelligent, market-native brand, marketing, and communication solutions that scale without losing relevance.',
        },
        {
            title: 'Technology As Leverage',
            description: 'We utilize advanced, AI-integrated stacks and intelligent systems to act as a digital nervous system for your brand, providing the technical edge you need to stay ahead of the curve.',
        },
        {
            title: 'End-To-End Lifecycle Management',
            description: 'From brand development and creative production to full-funnel activation, optimization, and growth—we manage the entire marketing lifecycle under one unified system.',
        },
    ],

    metrics: [
        { value: '250', suffix: '+', label: 'Projects Completed' },
        { value: '15', suffix: '+', label: 'Years Experience' },
        { prefix: '$', value: '50', suffix: 'M+', label: 'Enterprise Managed' },
        { value: '98', suffix: '%', label: 'Client Retention' }
    ],

    clientBrands: [
        'Bharat Semi', 'Retailabs', 'Acme Corp', 'TechFlow', 'Stellar', 'GlobalEdge', 'Nexus', 'Pinnacle'
    ],

    globalLocations: [
        { city: 'New Delhi', country: 'India', address: 'Cyber Hub, Sector 29' },
        { city: 'Dubai', country: 'UAE', address: 'Dubai Design District' },
        { city: 'London', country: 'UK', address: 'Soho Square' },
        { city: 'Singapore', country: 'Singapore', address: 'Marina Bay Financial Centre' },
    ],

    leadership: [
        { name: 'Sarah Jenkins', role: 'Chief Executive Officer' },
        { name: 'David Chen', role: 'Head of Strategy' },
        { name: 'Elena Rodriguez', role: 'Creative Director' },
        { name: 'Marcus Sterling', role: 'Chief Technology Officer' },
    ],

    servicePillars: [
        {
            pillarName: 'THINK',
            headline: 'We architect brand strategy, positioning, and go-to-market frameworks that drive clarity, decisive action, and long-term competitive advantage.',
            categories: [
                {
                    tagline: 'Clarity Is A Competitive Edge',
                    categoryTitle: 'Strategic Advisory & Consulting',
                    description: 'Clarity before execution. We align business ambition with market intelligence to create focused, scalable growth pathways.',
                    services: [
                        'Market Research & Analysis',
                        'Customer Journey Mapping',
                        'Competitive Landscape Assessment',
                        'Go-To-Market Strategy',
                        'Brand Positioning & Messaging',
                        'Scenario Planning & Foresight',
                        'KPI & Performance Frameworks',
                        'Business & Growth Strategy',
                        'Strategic Partnerships & Alliances',
                    ],
                },
                {
                    tagline: 'Intelligence That Drives Action',
                    categoryTitle: 'CRM, Data & Intelligence',
                    description: 'We combine cutting-edge technology with industry expertise to transform fragmented information into actionable insights to help you maximise your business potential.',
                    services: [
                        'Customer Segmentation & Profiling',
                        'Lead Management & Automation',
                        'Data Interpretation & Visualization',
                        'Predictive Modeling & Statistical Analysis',
                        'Customer Behavior Analytics',
                        'Data-Driven Marketing Insights',
                        'Privacy & Compliance Advisory',
                        'CRM Strategy & Implementation',
                    ],
                },
            ],
        },
        {
            pillarName: 'CREATE',
            headline: 'We build integrated design systems, campaigns, scalable AI solutions, and visual assets for ambitious brands who refuse to be ordinary.',
            categories: [
                {
                    tagline: 'Design That Cannot Be Ignored',
                    categoryTitle: 'Brand, Creative & Identity Systems',
                    description: 'Distinct brands are built with consistency, clarity, and conviction across every touchpoint.',
                    services: [
                        'Brand Storytelling & Positioning',
                        'Messaging Frameworks',
                        'Brand Identity Design',
                        'Visual Identity Systems',
                        'Copywriting & Content Creation',
                        'Campaign Ideation & Execution',
                        'Graphic & Packaging Design',
                        'Brand Guidelines & Governance',
                        'Creative Direction & Visualization',
                    ],
                },
                {
                    tagline: 'The Architecture Of Interaction',
                    categoryTitle: 'Platforms & Development',
                    description: 'The digital backbone for your brand initiatives. We build high-performance environments with a user-first approach.',
                    services: [
                        'Experience Strategy & UX Architecture',
                        'UI/UX Design & High-Fidelity Prototyping',
                        'Custom Website Development',
                        'Mobile App Design & Development',
                        'eCommerce Platform Development',
                        'API & Platform Integrations',
                        'Performance Optimization & Scalability',
                        'Ongoing Technical Maintenance',
                    ],
                },
                {
                    tagline: 'Innovation With Intent',
                    categoryTitle: 'AI & Innovation',
                    description: 'We combine tech-powered progress with human-centered solutions and deploy emerging tech to give your brand a future-proof edge.',
                    services: [
                        'Custom Software & Platform Development',
                        'AI-Powered Marketing Solutions',
                        'Generative AI Strategy (Content & Automation)',
                        'Marketing Technology (MarTech) Stack Design',
                        'Cloud Infrastructure & Managed Services',
                        'Automation & Workflow Systems',
                        'Data Engineering & Management',
                    ],
                },
                {
                    tagline: 'Where Stories Come Alive',
                    categoryTitle: 'Content, Film & Production',
                    description: 'From cinematic brand films to platform-native short-form, we create the visual assets that carry your narrative to the world - with relevance, resonance, and recall.',
                    services: [
                        'Film Production & Commercials',
                        'Post-Production, VFX & CGI',
                        '3D Visualization & Rendering',
                        'Professional Photography & Image Editing',
                        'Podcast & Audio Narrative Production',
                        'Scriptwriting & Storyboarding',
                        'Live Commerce & Shoppable Content Management',
                        'Production Management & Line Producing',
                    ],
                },
            ],
        },
        {
            pillarName: 'INFLUENCE',
            headline: 'We deploy performance-driven digital marketing, SEO, paid media, and analytics ecosystems optimized for measurable ROI and sustained growth.',
            categories: [
                {
                    tagline: 'Turn Attention into Advantage',
                    categoryTitle: 'Organic Growth & Digital Marketing',
                    description: 'We engineer demand ecosystems across paid, organic, and owned channels — ensuring media investments translate into measurable business growth.',
                    services: [
                        'Search Engine Optimization (SEO)',
                        'AI-Search Optimization (GEO)',
                        'Pay Per Click (PPC) Advertising',
                        'Keyword & Search Intent Mapping',
                        'eCommerce Strategy (D2C & Marketplace)',
                        'Marketplace Management (Amazon, Flipkart, etc.)',
                        'Product Listing Optimization',
                        'Conversion Funnel Optimization',
                        'Search Performance Analytics',
                        'Website & Platform Audit',
                        'Analytics & Performance Reporting',
                    ],
                },
                {
                    tagline: 'Own The Conversation',
                    categoryTitle: 'Social Media, Community & Influence',
                    description: 'Authentic resonance through platform-native storytelling. We manage the end-to-end ecosystem of your brand’s social voice.',
                    services: [
                        'Social Media Marketing',
                        'Platform-Native Storytelling (LinkedIn, X, Instagram)',
                        'Online Reputation Management (ORM)',
                        'Founder & Leadership Profiling',
                        'Influencer Identification & Vetting',
                        'Campaign Strategy & Planning',
                        'Community Building & Engagement',
                        'Social Listening & Sentiment Intelligence',
                        'Performance Tracking & Reporting',
                    ],
                },
                {
                    tagline: 'Precision That Powers Growth',
                    categoryTitle: 'Performance Marketing & Growth Media',
                    description: 'We craft precision-led acquisition strategies to ensure every interaction is optimised to drive measurable growth and maximize ROI.',
                    services: [
                        'Performance Strategy & Growth Planning',
                        'Paid Search (Google, Bing)',
                        'Paid Social (Meta, LinkedIn, X, TikTok)',
                        'Programmatic & Display Advertising',
                        'OTT & Connected TV Advertising',
                        'Funnel & Conversion Strategy',
                        'Conversion Rate Optimization (CRO)',
                        'Retargeting & Remarketing',
                        'A/B Testing & Experimentation',
                        'Attribution Modeling & Measurement',
                    ],
                },
                {
                    tagline: 'Authority Beyond The Screen',
                    categoryTitle: 'PR, Media & Communications',
                    description: 'Visibility without credibility is noise. We build reputation, manage perception, and scale reach across earned, owned, and paid channels.',
                    services: [
                        'Media Strategy & Multi-Channel Planning',
                        'Digital & Traditional Media Buying',
                        'Programmatic Media & OTT/Connected TV',
                        'Print, Outdoor & Traditional Media (OOH)',
                        'Media Negotiation & Optimization',
                        'ROI & Effectiveness Analysis',
                        'Reputation & Press Relations Strategy',
                    ],
                },
                {
                    tagline: 'The Science Of Retention',
                    categoryTitle: 'Direct, Lifecycle & Commerce Marketing',
                    description: 'Our team helps you build deep, lasting connections through direct channels by creating loyalty loops that turn one-time interactions into long-term brand advocacy.',
                    services: [
                        'Email Marketing & Lifecycle Campaigns',
                        'WhatsApp Marketing & Automation',
                        'Click To WhatsApp Ads(CTWA)',
                        'SMS & Push Notifications',
                        'Loyalty & Retention Programs',
                        'Commerce & Marketplace Management',
                        'D2C & Omnichannel Enablement',
                    ],
                },
            ],
        },
        {
            pillarName: 'EXPERIENCE',
            headline: 'We build connected ecosystems to create immersive brand experiences that drive engagement and measurable impact across every touchpoint.',
            categories: [
                {
                    tagline: 'Experience Is Everything',
                    categoryTitle: 'Experiential, Retail & Offline',
                    description: 'Moments without emotion are forgettable. We help you create immersive brand experiences that drive engagement and measurable impact beyond the screen.',
                    services: [
                        'Brand Activations & Experiences',
                        'Event Strategy & Execution',
                        'Product Launches',
                        'Pop-Ups & Installations',
                        'Retail & Spatial Experiences',
                        'Trade Shows & Exhibitions',
                        'Sponsorships & Partnerships',
                        'Phygital Experiences',
                        'Experiential Technology Integration',
                        'Corporate Events & Leadership Summits',
                    ],
                },
            ],
        },
    ],

    serviceCategories: [
        {
            categoryTitle: 'Strategic Consulting',
            services: [
                'Brand Positioning & Narrative Systems',
                'Market & Cultural Research',
                'Go-To-Market Strategy',
                'Fractional CMO / Advisory',
            ],
        },
        {
            categoryTitle: 'Brand, Creative & Design',
            services: [
                'Brand Identity & Visual Language',
                'Naming & Verbal Identity',
                'Creative Direction',
                'Narrative Design',
                'Design Systems',
            ],
        },
        {
            categoryTitle: 'Digital Marketing',
            services: [
                'Technical SEO',
                'Content & Editorial Strategy',
                'Organic Growth & Visibility',
                'Search Performance Analytics',
            ],
        },
        {
            categoryTitle: 'Direct & Commerce',
            services: [
                'Email & Lifecycle Campaigns',
                'WhatsApp Marketing & Automation',
                'CTWA',
                'Commerce & Marketplace Management',
            ],
        },
        {
            categoryTitle: 'Platforms & Development',
            services: [
                'UI/UX Architecture',
                'Website Development (Headless/Framer)',
                'Mobile App Design',
                'CMS & Platform Architecture',
            ],
        },
        {
            categoryTitle: 'Performance & Growth',
            services: [
                'Paid Search/Social',
                'Programmatic Advertising',
                'Conversion Rate Optimization (CRO)',
                'Attribution Modeling',
            ],
        },
        {
            categoryTitle: 'CRM, Data & Intelligence',
            services: [
                'Customer Segmentation',
                'Lead Automation',
                'Predictive Analytics',
                'Dashboards & Visualization',
                'Data Privacy',
            ],
        },
        {
            categoryTitle: 'Technology, AI & Innovation',
            services: [
                'Generative AI solutions',
                'Custom Software',
                'MarTech Stack Design',
                'Automation & Workflow Systems',
            ],
        },
        {
            categoryTitle: 'Social Media & Community',
            services: [
                'Platform-Native Storytelling',
                'Founder & Leadership Profiling',
                'Online Reputation Management (ORM)',
            ],
        },
        {
            categoryTitle: 'Experiential & Retail',
            services: [
                'Brand Activations & Experiences',
                'Phygital Experiences',
                'Experiential Technology Integration',
            ],
        },
        {
            categoryTitle: 'Content, Film & Production',
            services: [
                'Brand Films & Commercials',
                'VFX/CGI/3D',
                'Short-Form & Social Content',
                'Podcast Production',
            ],
        },
    ],

    caseStudies: [
        {
            brand: 'Bharat Semi',
            servicesProvided: 'Website, Brand Identity, Strategic Consulting',
        },
        {
            brand: 'Retailabs',
            servicesProvided: 'Strategic Consulting, Social Media',
        },
    ],

    philosophies: [
        {
            title: 'Clarity Creates Momentum',
            description: 'Clarity forges confidence! When a brand is unequivocal about its purpose, decisions accelerate and impact compounds. We strip away the peripheral to reveal the essential—so every narrative moves with intent and growth becomes inevitable, never accidental.',
            iconName: 'Zap',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
        },
        {
            title: 'Intelligence, Then Imagination',
            description: 'Thinking precedes expression, always! We believe that strategy gives imagination its edge, its direction, and its power. We lead with erudition to ensure that when we speak, the world listens and remembers.',
            iconName: 'Brain',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
        },
        {
            title: 'Distinction Is Non-Negotiable',
            description: 'Blending in is the fastest way to disappear. True differentiation is strategic, not stylistic. We help brands stand apart in ways that are meaningful, credible, and difficult to replicate.',
            iconName: 'Fingerprint',
            image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
        },
        {
            title: 'The Power Of One',
            description: 'A fragmented brand is an expensive mistake! We ensure every touchpoint—from high-level strategy to granular wireframes — speaks with one unshakeable voice. In a world of fleeting attention, consistency isn\'t just a virtue; it\'s the ultimate competitive advantage.',
            iconName: 'Target',
            image: 'https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?q=80&w=800&auto=format&fit=crop',
        },
        {
            title: 'Partnership, Not Dependency',
            description: 'We don\'t aim to be an extension of execution — we aim to be your thinking partner. Our goal is to elevate internal clarity, sharpen decision-making, and leave brands stronger than we found them.',
            iconName: 'Handshake',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
        },
        {
            title: 'Ahead, On Purpose',
            description: 'Every decision we make is an intentional bet on what wins. We operate with strategic foresight, making decisions based on a long-term view of value. Our work is a catalyst for momentum, ensuring our partners are always positioned several moves ahead of the curve.',
            iconName: 'Telescope',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
        },
        {
            title: 'Systems Over Moments',
            description: 'One-off moments don\'t build brands — connected systems do. We design narratives that compound over time, where strategy, content, performance, and experience reinforce each other instead of operating in silos.',
            iconName: 'Network',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
        },
        {
            title: 'Your Wins Are Our Wins',
            description: 'We\'re committed to your growth. We internalize your audience, purpose, and challenges as our own — crafting compelling campaigns that translate into measurable market authority. Because staying ahead requires breakthrough ideas, unparalleled conviction, and a balanced approach — that\'s precisely what we offer!',
            iconName: 'Trophy',
            image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop',
        },
        {
            title: 'Nothing Ordinary Endures',
            description: 'Ordinary thinking leads to ordinary outcomes. We don\'t do either. We exist to challenge the expected — combining strategic clarity with creative intelligence and tech-forward methodologies to serve founders, industry leaders, and ambitious brands who refuse to be ordinary.',
            iconName: 'Flame',
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
        },
    ],

    pages: {
        home: {
            slug: '/',
            title: 'Home',
            hero: {
                title: 'MAKE YOUR BRAND STORY INEVITABLE',
                subtitle: 'Powering global brands with integrated marketing solutions and performance-first ecosystems to unlock your next dimension of growth.',
                ctaText: 'Get In Touch',
                ctaLink: '/contact',
                backgroundMedia: {
                    type: 'video',
                    src: 'https://framerusercontent.com/assets/53oqoRSg9UvyNuylUWkzwJklqM.mp4',
                    alt: 'Abstract digital background',
                }
            },
            sections: [
                {
                    id: 'mission',
                    title: 'What Drives Us?',
                    content: 'In a world where algorithms dictate visibility and culture shifts in real time, brands need more than just messages — they need coherence. At Narrativlyy, we help brands reclaim that control, by designing powerful narratives and the intelligent systems that carry them forward — across markets, platforms, and cultures.',
                },
            ],
        },
        about: {
            slug: '/about',
            title: 'About Us',
            sections: [
                {
                    id: 'origin',
                    title: 'The name reflects our conviction',
                    content: 'Narratives don\'t just describe realities — they create them.\n\nNarrativlyy is a deliberate deviation. In an era of accelerating technologies and global ambition, brands need more than just messages—they need inevitability.\n\nBorn from the intuition that traditional agency models are fracturing under global complexity, Narrativlyy was built to help brands reclaim that control, by designing powerful narratives and the intelligent systems that carry them forward — across markets, platforms, and cultures.',
                },
                {
                    id: 'philosophies',
                    title: 'Our Philosophy',
                    content: '',
                    items: [
                        {
                            title: 'Clarity Creates Momentum',
                            description: 'Clarity forges confidence! When a brand is unequivocal about its purpose, decisions accelerate and impact compounds. We strip away the peripheral to reveal the essential—so every narrative moves with intent and growth becomes inevitable, never accidental.',
                            iconName: 'Zap',
                        },
                        {
                            title: 'Intelligence, Then Imagination',
                            description: 'Thinking precedes expression, always! We believe that strategy gives imagination its edge, its direction, and its power. We lead with erudition to ensure that when we speak, the world listens and remembers.',
                            iconName: 'Brain',
                        },
                        {
                            title: 'Distinction Is Non-Negotiable',
                            description: 'Blending in is the fastest way to disappear. True differentiation is strategic, not stylistic. We help brands stand apart in ways that are meaningful, credible, and difficult to replicate.',
                            iconName: 'Fingerprint',
                        },
                        {
                            title: 'The Power Of One',
                            description: 'A fragmented brand is an expensive mistake! We ensure every touchpoint—from high-level strategy to granular wireframes — speaks with one unshakeable voice. In a world of fleeting attention, consistency isn\'t just a virtue; it’s the ultimate competitive advantage.',
                            iconName: 'Layers',
                        },
                        {
                            title: 'Partnership, Not Dependency',
                            description: 'We don’t aim to be an extension of execution — we aim to be your thinking partner. Our goal is to elevate internal clarity, sharpen decision-making, and leave brands stronger than we found them.',
                            iconName: 'Users',
                        },
                        {
                            title: 'Ahead, On Purpose',
                            description: 'Every decision we make is an intentional bet on what wins. We operate with strategic foresight, making decisions based on a long-term view of value. Our work is a catalyst for momentum, ensuring our partners are always positioned several moves ahead of the curve.',
                            iconName: 'Telescope',
                        },
                        {
                            title: 'Systems Over Moments',
                            description: 'One-off moments don’t build brands — connected systems do. We design narratives that compound over time, where strategy, content, performance, and experience reinforce each other instead of operating in silos.',
                            iconName: 'Network',
                        },
                        {
                            title: 'Your Wins Are Our Wins',
                            description: 'We\'re committed to your growth. We internalize your audience, purpose, and challenges as our own - crafting compelling campaigns that translate into measurable market authority. Because staying ahead requires breakthrough ideas, unparalleled conviction, and a balanced approach - that\'s precisely what we offer!',
                            iconName: 'Award',
                        },
                        {
                            title: 'Nothing Ordinary Endures',
                            description: 'Ordinary thinking leads to ordinary outcomes. We don\'t do either. We exist to challenge the expected - combining strategic clarity with creative intelligence and tech-forward methodologies to to serve founders, industry leaders, and ambitious brands who refuse to be ordinary.',
                            iconName: 'Star',
                        },
                    ],
                }
            ],
        },
        services: {
            slug: '/services',
            title: 'Our Services',
            sections: [
                {
                    id: 'services-intro',
                    title: 'Redefining how brands think, communicate, and influence.',
                    content: 'In a limitless landscape of choices and possibilities, the brands that lead are those that create clarity, relevance, and measurable impact.\n\nWe believe true influence is found where human meaning and modern technology converge. Our aim is to help you discover that edge — by designing the narratives that define your brand and the intelligent systems that carry them forward.\n\nAt Narrativlyy, we don\'t just play the game — we command the scoreboard. We combine data-driven insights, creative intelligence, and strategic intuition with advanced tech-forward methodologies to serve founders, industry leaders, and ambitious brands who refuse to be ordinary.',
                },
            ],
        },
        'case-studies': {
            slug: '/case-studies',
            title: 'Case Studies',
            sections: [
                {
                    id: 'portfolio',
                    title: 'Trusted By Ambitious Brands & Global Leaders',
                    content: 'See how we have partnered with ambitious brands to deliver measurable impact.',
                    items: [
                        { title: 'TechCorp Rebrand', description: 'Complete overhaul decreasing load time by 40%.', iconName: 'Briefcase' },
                        { title: 'FinStream App', description: 'Real-time financial dashboard.', iconName: 'BarChart' },
                    ]
                },
            ],
        },
        contact: {
            slug: '/contact',
            title: 'Contact',
            sections: [
                {
                    id: 'contact-form',
                    title: 'Ready To Make Your Brand Inevitable?',
                    content: "Let's Make It Happen!",
                },
            ],
        },
        'privacy-policy': {
            slug: '/privacy-policy',
            title: 'Privacy Policy',
            sections: [],
        },
    },
};
