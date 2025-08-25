import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    children: React.ReactNode;
    asChild?: boolean;
}

export function Button({
    className,
    variant = 'default',
    size = 'default',
    children,
    ...props
}: ButtonProps) {
    const variants = {
        default: 'bg-blue-600 hover:bg-blue-700 text-white',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-900',
        ghost: 'bg-transparent hover:bg-gray-100 text-gray-900',
        destructive: 'bg-red-600 hover:bg-red-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    };

    const sizes = {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 py-1 text-sm',
        lg: 'h-12 px-8 py-3 text-lg',
        icon: 'h-10 w-10',
    };

    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}