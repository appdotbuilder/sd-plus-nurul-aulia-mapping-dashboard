import React from 'react';
import { Head } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DashboardStats {
    totalStudents: number;
    totalClasses: number;
    totalTeachers: number;
    studentsWithSpecialNeeds: number;
}

interface GenderDistribution {
    male: number;
    female: number;
}

interface AcademicDistribution {
    excellent: number;
    good: number;
    average: number;
    belowAverage: number;
}

interface ClassDistributionItem {
    name: string;
    count: number;
    capacity: number;
}

interface Props {
    statistics: DashboardStats;
    genderDistribution: GenderDistribution;
    academicDistribution: AcademicDistribution;
    classDistribution: ClassDistributionItem[];
    [key: string]: unknown;
}

export default function Dashboard({ 
    statistics, 
    genderDistribution, 
    academicDistribution, 
    classDistribution 
}: Props) {
    return (
        <>
            <Head title="Dashboard - SD PLUS NURUL AULIA" />
            
            <AppShell variant="sidebar">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                        <h1 className="text-3xl font-bold mb-2">
                            🏫 Dashboard Pemetaan Kelas
                        </h1>
                        <p className="text-blue-100 text-lg">
                            SD PLUS NURUL AULIA - Sistem Manajemen Sekolah Modern
                        </p>
                    </div>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-blue-800">
                                    👨‍🎓 Total Siswa
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-blue-900">
                                    {statistics.totalStudents}
                                </div>
                                <p className="text-xs text-blue-600 mt-1">
                                    Siswa aktif terdaftar
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-green-800">
                                    🏛️ Total Kelas
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-green-900">
                                    {statistics.totalClasses}
                                </div>
                                <p className="text-xs text-green-600 mt-1">
                                    Kelas aktif tersedia
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-purple-800">
                                    👩‍🏫 Total Guru
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-purple-900">
                                    {statistics.totalTeachers}
                                </div>
                                <p className="text-xs text-purple-600 mt-1">
                                    Guru aktif mengajar
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-orange-800">
                                    🤝 Kebutuhan Khusus
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-orange-900">
                                    {statistics.studentsWithSpecialNeeds}
                                </div>
                                <p className="text-xs text-orange-600 mt-1">
                                    Siswa dengan perhatian khusus
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Gender Distribution */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg text-gray-900">
                                    👫 Distribusi Gender
                                </CardTitle>
                                <CardDescription>
                                    Perbandingan siswa laki-laki dan perempuan
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                            <span className="text-sm font-medium">Laki-laki</span>
                                        </div>
                                        <Badge className="bg-blue-100 text-blue-800">
                                            {genderDistribution.male} siswa
                                        </Badge>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-500 h-2 rounded-full"
                                            style={{
                                                width: `${(genderDistribution.male / (genderDistribution.male + genderDistribution.female)) * 100}%`
                                            }}
                                        ></div>
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                                            <span className="text-sm font-medium">Perempuan</span>
                                        </div>
                                        <Badge className="bg-pink-100 text-pink-800">
                                            {genderDistribution.female} siswa
                                        </Badge>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-pink-500 h-2 rounded-full"
                                            style={{
                                                width: `${(genderDistribution.female / (genderDistribution.male + genderDistribution.female)) * 100}%`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Academic Distribution */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg text-gray-900">
                                    📊 Distribusi Nilai Akademik
                                </CardTitle>
                                <CardDescription>
                                    Sebaran tingkat prestasi akademik siswa
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Sangat Baik (90-100)</span>
                                        <Badge className="bg-green-100 text-green-800">
                                            {academicDistribution.excellent}
                                        </Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Baik (80-89)</span>
                                        <Badge className="bg-blue-100 text-blue-800">
                                            {academicDistribution.good}
                                        </Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Cukup (70-79)</span>
                                        <Badge className="bg-yellow-100 text-yellow-800">
                                            {academicDistribution.average}
                                        </Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Perlu Bimbingan (&lt;70)</span>
                                        <Badge className="bg-red-100 text-red-800">
                                            {academicDistribution.belowAverage}
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Class Distribution */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg text-gray-900">
                                🏫 Distribusi Siswa per Kelas
                            </CardTitle>
                            <CardDescription>
                                Jumlah siswa dan kapasitas setiap kelas
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {classDistribution.map((classItem, index) => (
                                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="font-semibold text-gray-900">
                                                Kelas {classItem.name}
                                            </h3>
                                            <Badge 
                                                className={
                                                    classItem.count >= classItem.capacity * 0.9
                                                        ? "bg-red-100 text-red-800"
                                                        : classItem.count >= classItem.capacity * 0.7
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-green-100 text-green-800"
                                                }
                                            >
                                                {classItem.count}/{classItem.capacity}
                                            </Badge>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${
                                                    classItem.count >= classItem.capacity * 0.9
                                                        ? "bg-red-500"
                                                        : classItem.count >= classItem.capacity * 0.7
                                                        ? "bg-yellow-500"
                                                        : "bg-green-500"
                                                }`}
                                                style={{
                                                    width: `${(classItem.count / classItem.capacity) * 100}%`
                                                }}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-1">
                                            {Math.round((classItem.count / classItem.capacity) * 100)}% terisi
                                        </p>
                                    </div>
                                ))}
                            </div>
                            {classDistribution.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    <div className="text-4xl mb-2">📚</div>
                                    <p>Belum ada kelas yang terdaftar</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border-blue-200 hover:border-blue-400 transition-colors cursor-pointer">
                            <CardHeader>
                                <CardTitle className="text-blue-800 flex items-center">
                                    👨‍🎓 Kelola Siswa
                                </CardTitle>
                                <CardDescription>
                                    Tambah, edit, atau hapus data siswa
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-green-200 hover:border-green-400 transition-colors cursor-pointer">
                            <CardHeader>
                                <CardTitle className="text-green-800 flex items-center">
                                    🏛️ Kelola Kelas
                                </CardTitle>
                                <CardDescription>
                                    Atur kelas dan wali kelas
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-purple-200 hover:border-purple-400 transition-colors cursor-pointer">
                            <CardHeader>
                                <CardTitle className="text-purple-800 flex items-center">
                                    🎯 Pemetaan Otomatis
                                </CardTitle>
                                <CardDescription>
                                    Jalankan algoritma pembagian kelas
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </AppShell>
        </>
    );
}