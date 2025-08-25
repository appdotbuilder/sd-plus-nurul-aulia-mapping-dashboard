import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
    children: React.ReactNode;
}

export function Badge({
    className,
    variant = 'default',
    children,
    ...props
}: BadgeProps) {
    const variants = {
        default: 'bg-blue-100 text-blue-800 border-blue-200',
        secondary: 'bg-gray-100 text-gray-800 border-gray-200',
        destructive: 'bg-red-100 text-red-800 border-red-200',
        outline: 'bg-transparent border-gray-200 text-gray-800',
    };

    return (
        <div
            className={cn(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}