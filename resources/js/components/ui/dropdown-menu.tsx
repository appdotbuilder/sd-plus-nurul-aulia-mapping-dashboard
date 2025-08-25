import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

interface DropdownContextType {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

export function DropdownMenu({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
            <div className="relative inline-block text-left">
                {children}
            </div>
        </DropdownContext.Provider>
    );
}

interface DropdownMenuTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export function DropdownMenuTrigger({ children, asChild = false }: DropdownMenuTriggerProps) {
    const context = useContext(DropdownContext);
    if (!context) throw new Error('DropdownMenuTrigger must be used within DropdownMenu');

    const { isOpen, setIsOpen } = context;

    const handleClick = () => setIsOpen(!isOpen);

    if (asChild) {
        const childElement = React.Children.only(children) as React.ReactElement<{
            onClick?: (e: React.MouseEvent) => void;
        }>;
        return React.cloneElement(childElement, {
            onClick: (e: React.MouseEvent) => {
                if (childElement.props.onClick) {
                    childElement.props.onClick(e);
                }
                handleClick();
            }
        });
    }

    return (
        <button onClick={handleClick}>
            {children}
        </button>
    );
}

interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    align?: 'start' | 'center' | 'end';
    side?: 'top' | 'right' | 'bottom' | 'left';
}

export function DropdownMenuContent({ 
    children, 
    className, 
    align = 'start',
    side = 'bottom',
    ...props 
}: DropdownMenuContentProps) {
    const context = useContext(DropdownContext);
    if (!context) throw new Error('DropdownMenuContent must be used within DropdownMenu');

    const { isOpen } = context;

    if (!isOpen) return null;

    const alignmentClasses = {
        start: 'left-0',
        center: 'left-1/2 transform -translate-x-1/2',
        end: 'right-0',
    };

    const sideClasses = {
        top: 'bottom-full mb-2',
        right: 'left-full ml-2 top-0',
        bottom: 'top-full mt-2',
        left: 'right-full mr-2 top-0',
    };

    return (
        <div
            className={cn(
                'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-popover-foreground shadow-md',
                alignmentClasses[align],
                sideClasses[side],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}

export function DropdownMenuItem({ 
    children, 
    className,
    asChild = false,
    ...props 
}: DropdownMenuItemProps) {
    if (asChild) {
        const childElement = React.Children.only(children) as React.ReactElement<{
            className?: string;
        }>;
        return React.cloneElement(childElement, {
            className: cn(
                'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                className,
                childElement.props.className
            )
        });
    }

    return (
        <div
            className={cn(
                'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function DropdownMenuLabel({ 
    children, 
    className, 
    ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn('px-2 py-1.5 text-sm font-semibold', className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function DropdownMenuSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn('-mx-1 my-1 h-px bg-muted', className)}
            {...props}
        />
    );
}

export function DropdownMenuGroup({ 
    children, 
    className, 
    ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
}