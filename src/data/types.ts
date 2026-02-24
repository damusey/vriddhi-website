export interface MediaAsset {
    type: 'image' | 'video';
    src: string;
    alt: string;
    poster?: string;
}

export interface HeroSection {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    backgroundMedia?: MediaAsset;
}

export interface ServiceItem {
    title: string;
    description: string;
    iconName: string;
    image?: string;
    details?: string[];
}

export interface Metric {
    value: string;
    label: string;
    suffix?: string;
    prefix?: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image?: string;
    bio?: string;
}

export interface Location {
    city: string;
    country: string;
    address?: string;
}

export interface ServiceCategory {
    categoryTitle: string;
    tagline?: string;
    description?: string;
    services: string[];
}

export interface ServicePillar {
    pillarName: string;
    headline: string;
    categories: ServiceCategory[];
}

export interface Testimonial {
    quote: string;
    attribution: string;
    role: string;
}

export interface Differentiator {
    title: string;
    description: string;
}

export interface CaseStudyItem {
    brand: string;
    servicesProvided: string;
    impact?: string;
}

export interface SectionContent {
    id: string;
    title: string;
    content: string;
    media?: MediaAsset;
    items?: ServiceItem[];
}

export interface PageContent {
    slug: string;
    title: string;
    hero?: HeroSection;
    sections: SectionContent[];
}

export interface FooterConfig {
    tagline: string;
    email: string;
    phone: string;
    navLinks: { label: string; href: string }[];
    socialLinks: { platform: string; url: string; iconName: string }[];
    copyright: string;
}

export interface SiteConfig {
    name: string;
    navItems: { label: string; href: string }[];
    ctaButton: { label: string; href: string };
    footer: FooterConfig;
    testimonials: Testimonial[];
    differentiators: Differentiator[];
    metrics?: Metric[];
    globalLocations?: Location[];
    leadership?: TeamMember[];
    clientBrands?: string[];
    servicePillars: ServicePillar[];
    serviceCategories: ServiceCategory[];
    caseStudies: CaseStudyItem[];
    philosophies: ServiceItem[];
    pages: Record<string, PageContent>;
}
