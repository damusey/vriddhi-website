import React from 'react';
import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
    name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
    const IconComponent = (Icons as any)[name];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent {...props} />;
};
