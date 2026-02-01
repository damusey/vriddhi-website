export interface MediaAsset {
    type: 'image' | 'video';
    src: string;
    alt: string;
    poster?: string; // For video placeholders
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

export interface SectionContent {
    id: string;
    title: string;
    content: string;
    media?: MediaAsset; // Side visual
    items?: ServiceItem[];
}

export interface PageContent {
    slug: string;
    title: string;
    hero?: HeroSection;
    sections: SectionContent[];
}

export interface SiteConfig {
    name: string;
    navItems: { label: string; href: string }[];
    footerText: string;
    socialLinks: { platform: string; url: string }[];
    pages: Record<string, PageContent>;
}
