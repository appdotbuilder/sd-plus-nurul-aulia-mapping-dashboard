import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, LayoutGrid, Users, School, UserCheck, Target, FileText } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Data Siswa',
        href: '/students',
        icon: Users,
    },
    {
        title: 'Data Kelas',
        href: '/classes',
        icon: School,
    },
    {
        title: 'Data Guru',
        href: '/teachers',
        icon: UserCheck,
    },
    {
        title: 'Pemetaan Kelas',
        href: '/class-mapping',
        icon: Target,
    },
    {
        title: 'Laporan',
        href: '/reports',
        icon: FileText,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'SD PLUS NURUL AULIA',
        href: 'https://nurulaulia.sch.id',
        icon: School,
    },
    {
        title: 'Dokumentasi',
        href: '/help',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
