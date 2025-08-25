import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Head, Link } from '@inertiajs/react';

interface Props {
    auth?: {
        user: {
            id: number;
            name: string;
            email: string;
        };
    };
    [key: string]: unknown;
}

export default function Welcome({ auth }: Props) {
    return (
        <>
            <Head title="SD PLUS NURUL AULIA - Sistem Pemetaan Kelas" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">🏫</span>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">SD PLUS NURUL AULIA</h1>
                                    <p className="text-sm text-gray-600">Sistem Pemetaan Kelas</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                {auth?.user ? (
                                    <Link href="/dashboard">
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                            Dashboard
                                        </Button>
                                    </Link>
                                ) : (
                                    <>
                                        <Link href="/login">
                                            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                                Masuk
                                            </Button>
                                        </Link>
                                        <Link href="/register">
                                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                                Daftar
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="mb-8">
                            <Badge className="bg-green-100 text-green-800 mb-4">
                                🎯 Sistem Terdepan
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                📊 Dashboard Pemetaan Kelas
                                <span className="block text-blue-600">Modern & Efisien</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                                Kelola data siswa, guru, dan kelas dengan mudah. Sistem otomatis untuk pembagian kelas yang adil dan merata berdasarkan gender, nilai akademik, dan kebutuhan khusus.
                            </p>
                        </div>

                        {/* Screenshot Mockup */}
                        <div className="mb-16">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 h-48 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">👥</div>
                                            <h3 className="font-semibold text-blue-800">Dashboard Siswa</h3>
                                            <p className="text-sm text-blue-600">Visualisasi data lengkap</p>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 h-48 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">🎯</div>
                                            <h3 className="font-semibold text-green-800">Pemetaan Otomatis</h3>
                                            <p className="text-sm text-green-600">Algoritma cerdas</p>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 h-48 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">📈</div>
                                            <h3 className="font-semibold text-purple-800">Laporan Lengkap</h3>
                                            <p className="text-sm text-purple-600">Export PDF & Excel</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                ✨ Fitur-Fitur Unggulan
                            </h2>
                            <p className="text-xl text-gray-600">
                                Solusi lengkap untuk manajemen sekolah modern
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-2xl">👨‍🎓</span>
                                    </div>
                                    <CardTitle className="text-blue-800">Manajemen Siswa</CardTitle>
                                    <CardDescription>
                                        Input, edit, dan kelola data siswa lengkap dengan NIS, NISN, nilai akademik
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Import/Export data siswa</li>
                                        <li>• Tracking kebutuhan khusus</li>
                                        <li>• Riwayat nilai akademik</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-green-200 hover:border-green-400 transition-colors">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-2xl">🏛️</span>
                                    </div>
                                    <CardTitle className="text-green-800">Manajemen Kelas</CardTitle>
                                    <CardDescription>
                                        Kelola kelas dan wali kelas dengan sistem yang terintegrasi
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Setup kelas A, B, C, dst</li>
                                        <li>• Assign wali kelas</li>
                                        <li>• Monitor kapasitas kelas</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-purple-200 hover:border-purple-400 transition-colors">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-2xl">👩‍🏫</span>
                                    </div>
                                    <CardTitle className="text-purple-800">Manajemen Guru</CardTitle>
                                    <CardDescription>
                                        Database guru lengkap dengan NIP dan peran masing-masing
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Data guru & NIP</li>
                                        <li>• Role: Admin, Wali Kelas, BK</li>
                                        <li>• Assignment tracking</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-yellow-200 hover:border-yellow-400 transition-colors">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-2xl">🎯</span>
                                    </div>
                                    <CardTitle className="text-yellow-800">Pemetaan Otomatis</CardTitle>
                                    <CardDescription>
                                        Algoritma cerdas untuk pembagian kelas yang adil dan merata
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Pemerataan gender</li>
                                        <li>• Distribusi nilai akademik</li>
                                        <li>• Drag & drop manual</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-indigo-200 hover:border-indigo-400 transition-colors">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-2xl">📊</span>
                                    </div>
                                    <CardTitle className="text-indigo-800">Dashboard Visual</CardTitle>
                                    <CardDescription>
                                        Statistik dan grafik real-time untuk analisis mendalam
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Grafik distribusi siswa</li>
                                        <li>• Chart gender & akademik</li>
                                        <li>• Real-time analytics</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-red-200 hover:border-red-400 transition-colors">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-2xl">📋</span>
                                    </div>
                                    <CardTitle className="text-red-800">Laporan & Export</CardTitle>
                                    <CardDescription>
                                        Generate laporan lengkap dalam format PDF dan Excel
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Export PDF & Excel</li>
                                        <li>• Laporan per kelas</li>
                                        <li>• Rekap siswa lengkap</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                🚀 Siap Modernisasi Sekolah Anda?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Bergabunglah dengan SD PLUS NURUL AULIA dalam menggunakan teknologi terdepan untuk manajemen kelas yang lebih efisien dan efektif.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {auth?.user ? (
                                    <Link href="/dashboard">
                                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                                            🎯 Buka Dashboard
                                        </Button>
                                    </Link>
                                ) : (
                                    <>
                                        <Link href="/register">
                                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                                                📝 Daftar Sekarang
                                            </Button>
                                        </Link>
                                        <Link href="/login">
                                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                                                🔑 Masuk Sistem
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white/80 backdrop-blur-sm border-t border-blue-200 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center space-x-3 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">🏫</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">SD PLUS NURUL AULIA</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Sistem Pemetaan Kelas Modern untuk Pendidikan Berkualitas
                            </p>
                            <div className="flex justify-center space-x-6 text-sm text-gray-500">
                                <span>🎯 Admin: admin / admiin</span>
                                <span>•</span>
                                <span>👩‍🏫 Multi-role Support</span>
                                <span>•</span>
                                <span>📊 Real-time Analytics</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}