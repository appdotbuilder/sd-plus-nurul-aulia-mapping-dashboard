import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Student {
    id: number;
    name: string;
    nis: string;
    nisn: string;
    gender: 'male' | 'female';
    academic_score?: number;
    special_needs?: string;
    school_class?: {
        id: number;
        name: string;
    };
}

interface Pagination {
    data: Student[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props {
    students: Pagination;
    [key: string]: unknown;
}

export default function StudentsIndex({ students }: Props) {
    return (
        <>
            <Head title="Data Siswa - SD PLUS NURUL AULIA" />
            
            <AppShell variant="sidebar">
                <div className="space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                👨‍🎓 Data Siswa
                            </h1>
                            <p className="text-gray-600 mt-1">
                                Kelola data siswa SD PLUS NURUL AULIA
                            </p>
                        </div>
                        <Link href="/students/create">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                ➕ Tambah Siswa
                            </Button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Card>
                            <CardContent className="p-4">
                                <div className="text-2xl font-bold text-blue-600">
                                    {students.total}
                                </div>
                                <p className="text-sm text-gray-600">Total Siswa</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <div className="text-2xl font-bold text-green-600">
                                    {students.data.filter(s => s.school_class).length}
                                </div>
                                <p className="text-sm text-gray-600">Sudah Dikelas</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <div className="text-2xl font-bold text-yellow-600">
                                    {students.data.filter(s => !s.school_class).length}
                                </div>
                                <p className="text-sm text-gray-600">Belum Dikelas</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <div className="text-2xl font-bold text-purple-600">
                                    {students.data.filter(s => s.special_needs).length}
                                </div>
                                <p className="text-sm text-gray-600">Kebutuhan Khusus</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Students List */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Daftar Siswa</CardTitle>
                            <CardDescription>
                                Halaman {students.current_page} dari {students.last_page} 
                                ({students.total} total siswa)
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {students.data.length > 0 ? (
                                <div className="space-y-4">
                                    {students.data.map((student) => (
                                        <div
                                            key={student.id}
                                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-semibold">
                                                        {student.gender === 'male' ? '👦' : '👧'}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">
                                                        {student.name}
                                                    </h3>
                                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                        <span>NIS: {student.nis}</span>
                                                        <span>NISN: {student.nisn}</span>
                                                        {student.academic_score && (
                                                            <span>Nilai: {student.academic_score}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center space-x-3">
                                                {student.school_class ? (
                                                    <Badge className="bg-green-100 text-green-800">
                                                        Kelas {student.school_class.name}
                                                    </Badge>
                                                ) : (
                                                    <Badge className="bg-yellow-100 text-yellow-800">
                                                        Belum Dikelas
                                                    </Badge>
                                                )}
                                                
                                                {student.special_needs && (
                                                    <Badge className="bg-purple-100 text-purple-800">
                                                        Kebutuhan Khusus
                                                    </Badge>
                                                )}
                                                
                                                <Badge className={
                                                    student.gender === 'male' 
                                                        ? "bg-blue-100 text-blue-800"
                                                        : "bg-pink-100 text-pink-800"
                                                }>
                                                    {student.gender === 'male' ? 'L' : 'P'}
                                                </Badge>
                                                
                                                <Link href={`/students/${student.id}`}>
                                                    <Button size="sm" variant="outline">
                                                        Detail
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 text-gray-500">
                                    <div className="text-6xl mb-4">📚</div>
                                    <h3 className="text-lg font-semibold mb-2">Belum Ada Data Siswa</h3>
                                    <p className="mb-4">Mulai dengan menambahkan data siswa pertama</p>
                                    <Link href="/students/create">
                                        <Button className="bg-blue-600 hover:bg-blue-700">
                                            ➕ Tambah Siswa Pertama
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Pagination */}
                    {students.last_page > 1 && (
                        <div className="flex justify-center space-x-2">
                            {Array.from({ length: students.last_page }, (_, i) => i + 1).map(page => (
                                <Link
                                    key={page}
                                    href={`/students?page=${page}`}
                                    className={`px-4 py-2 rounded-md ${
                                        page === students.current_page
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    {page}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </AppShell>
        </>
    );
}