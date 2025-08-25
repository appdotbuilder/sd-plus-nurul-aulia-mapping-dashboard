import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

interface SidebarContextType {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    toggle: () => void;
    state: 'expanded' | 'collapsed';
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
}

interface SidebarProviderProps {
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function SidebarProvider({ children, defaultOpen = true }: SidebarProviderProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggle = () => setIsOpen(!isOpen);
    const state = isOpen ? 'expanded' : 'collapsed';

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, toggle, state }}>
            <div className="flex min-h-screen">
                {children}
            </div>
        </SidebarContext.Provider>
    );
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: 'inset' | 'sidebar';
}

export function Sidebar({ 
    children, 
    className, 
    variant = 'sidebar',
    ...props 
}: SidebarProps) {
    const { isOpen } = useSidebar();
    
    return (
        <aside 
            className={cn(
                'bg-sidebar border-r border-sidebar-border',
                variant === 'inset' && 'p-2',
                isOpen ? 'w-64' : 'w-16',
                'transition-all duration-300',
                className
            )}
            {...props}
        >
            {children}
        </aside>
    );
}

export function SidebarHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('p-4 border-b border-sidebar-border', className)} {...props}>
            {children}
        </div>
    );
}

export function SidebarContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('flex-1 p-2', className)} {...props}>
            {children}
        </div>
    );
}

export function SidebarFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('p-4 border-t border-sidebar-border mt-auto', className)} {...props}>
            {children}
        </div>
    );
}

export function SidebarGroup({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('mb-4', className)} {...props}>
            {children}
        </div>
    );
}

export function SidebarGroupLabel({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('text-xs font-semibold text-sidebar-foreground/70 px-3 py-2', className)} {...props}>
            {children}
        </div>
    );
}

export function SidebarMenu({ children, className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <ul className={cn('space-y-1', className)} {...props}>
            {children}
        </ul>
    );
}

export function SidebarMenuItem({ children, className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
    return (
        <li className={className} {...props}>
            {children}
        </li>
    );
}

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    isActive?: boolean;
    size?: 'default' | 'lg';
    tooltip?: { children: string };
}

export function SidebarMenuButton({ 
    children, 
    className, 
    asChild = false, 
    isActive = false,
    size = 'default',
    tooltip,
    ...props 
}: SidebarMenuButtonProps) {
    const { isOpen } = useSidebar();
    
    const buttonClasses = cn(
        'w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors',
        isActive && 'bg-sidebar-accent text-sidebar-accent-foreground',
        size === 'lg' && 'px-4 py-3',
        className
    );
    
    if (asChild) {
        return (
            <div className={buttonClasses} title={!isOpen ? tooltip?.children : undefined}>
                {children}
            </div>
        );
    }
    
    return (
        <button className={buttonClasses} title={!isOpen ? tooltip?.children : undefined} {...props}>
            {children}
        </button>
    );
}

export function SidebarInset({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('flex-1 flex flex-col min-h-screen', className)} {...props}>
            {children}
        </div>
    );
}

export function SidebarTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { toggle } = useSidebar();
    
    return (
        <button
            className={cn('p-2 hover:bg-gray-100 rounded-md', className)}
            onClick={toggle}
            {...props}
        >
            ☰
        </button>
    );
}

export function SidebarGroupContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('space-y-1', className)} {...props}>
            {children}
        </div>
    );
}