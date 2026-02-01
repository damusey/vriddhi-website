import React from 'react';
import { motion } from 'framer-motion';
import type { ServiceItem } from '../data/types';
import { DynamicIcon } from './ui/DynamicIcon';

interface ServiceCardProps {
    item: ServiceItem;
    index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl border border-white/5 bg-surface hover:bg-surface-highlight transition-colors group cursor-default"
        >
            <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                <DynamicIcon name={item.iconName} className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-text-muted leading-relaxed">{item.description}</p>
        </motion.div>
    );
};
