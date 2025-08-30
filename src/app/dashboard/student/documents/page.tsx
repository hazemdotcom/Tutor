'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  FolderOpen, 
  FileText, 
  Download, 
  Upload, 
  Search,
  Filter,
  Calendar,
  User,
  BookOpen,
  Image,
  Video,
  Music,
  Archive,
  Plus,
  MoreHorizontal,
  Eye,
  Share
} from 'lucide-react'

export default function StudentDocumentsPage() {
  const recentDocuments = [
    {
      id: 1,
      name: 'Calculus_Chapter_3_Notes.pdf',
      type: 'pdf',
      course: 'Advanced Calculus',
      tutor: 'Dr. Sarah Johnson',
      size: '2.4 MB',
      date: 'Today',
      status: 'new'
    },
    {
      id: 2,
      name: 'Physics_Lab_Report_Template.docx',
      type: 'docx',
      course: 'Physics Fundamentals',
      tutor: 'Prof. Michael Chen',
      size: '1.8 MB',
      date: 'Yesterday',
      status: 'updated'
    },
    {
      id: 3,
      name: 'Chemistry_Safety_Protocols.pdf',
      type: 'pdf',
      course: 'Chemistry Lab',
      tutor: 'Dr. Emily Wilson',
      size: '3.1 MB',
      date: '3 days ago',
      status: 'new'
    },
    {
      id: 4,
      name: 'English_Essay_Guidelines.pdf',
      type: 'pdf',
      course: 'English Literature',
      tutor: 'Prof. David Brown',
      size: '1.2 MB',
      date: 'Last week',
      status: 'updated'
    }
  ]

  const courseFolders = [
    {
      id: 1,
      name: 'Advanced Calculus',
      tutor: 'Dr. Sarah Johnson',
      files: 12,
      size: '45.2 MB',
      lastUpdated: 'Today',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      name: 'Physics Fundamentals',
      tutor: 'Prof. Michael Chen',
      files: 8,
      size: '32.1 MB',
      lastUpdated: 'Yesterday',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      name: 'Chemistry Lab',
      tutor: 'Dr. Emily Wilson',
      files: 15,
      size: '67.8 MB',
      lastUpdated: '3 days ago',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      name: 'English Literature',
      tutor: 'Prof. David Brown',
      files: 6,
      size: '18.5 MB',
      lastUpdated: 'Last week',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ]

  const documentStats = [
    {
      title: 'Total Documents',
      value: '41',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Course Materials',
      value: '28',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Assignments',
      value: '8',
      icon: FileText,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Storage Used',
      value: '163.6 MB',
      icon: Archive,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  const getFileTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-4 w-4" />
      case 'docx':
        return <FileText className="h-4 w-4" />
      case 'jpg':
      case 'png':
        return <Image className="h-4 w-4" />
      case 'mp4':
        return <Video className="h-4 w-4" />
      case 'mp3':
        return <Music className="h-4 w-4" />
      case 'zip':
        return <Archive className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge variant="secondary" className="bg-green-100 text-green-700">New</Badge>
      case 'updated':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700">Updated</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getFileTypeColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'text-red-600'
      case 'docx':
        return 'text-blue-600'
      case 'jpg':
      case 'png':
        return 'text-green-600'
      case 'mp4':
        return 'text-purple-600'
      case 'mp3':
        return 'text-orange-600'
      case 'zip':
        return 'text-gray-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
            <p className="text-gray-600">Access and manage your course materials</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Folder
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documentStats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
              <CardDescription>
                Recently added or updated files
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDocuments.map((doc) => (
                  <div key={doc.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${getFileTypeColor(doc.type).replace('text-', 'bg-').replace('-600', '-100')}`}>
                          {getFileTypeIcon(doc.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-gray-900 truncate">{doc.name}</h4>
                            {getStatusBadge(doc.status)}
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{doc.course}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>Tutor: {doc.tutor}</span>
                            <span>{doc.size}</span>
                            <span>{doc.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Course Folders */}
          <Card>
            <CardHeader>
              <CardTitle>Course Folders</CardTitle>
              <CardDescription>
                Organized by subject and tutor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courseFolders.map((folder) => (
                  <div key={folder.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`p-3 rounded-lg ${folder.color}`}>
                          <BookOpen className={`h-6 w-6 ${folder.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">{folder.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">Tutor: {folder.tutor}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>{folder.files} files</span>
                            <span>{folder.size}</span>
                            <span>Updated {folder.lastUpdated}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <FolderOpen className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common document tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Upload className="h-6 w-6" />
                <span>Upload File</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <FolderOpen className="h-6 w-6" />
                <span>Create Folder</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Download className="h-6 w-6" />
                <span>Download All</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Share className="h-6 w-6" />
                <span>Share Files</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* File Types Overview */}
        <Card>
          <CardHeader>
            <CardTitle>File Types</CardTitle>
            <CardDescription>
              Overview of your document types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="p-3 bg-red-100 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">PDF</div>
                <div className="text-xs text-gray-500">18 files</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="p-3 bg-blue-100 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">DOCX</div>
                <div className="text-xs text-gray-500">12 files</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="p-3 bg-green-100 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                  <Image className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Images</div>
                <div className="text-xs text-gray-500">8 files</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="p-3 bg-purple-100 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                  <Video className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Videos</div>
                <div className="text-xs text-gray-500">3 files</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="p-3 bg-orange-100 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                  <Music className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Audio</div>
                <div className="text-xs text-gray-500">2 files</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="p-3 bg-gray-100 rounded-lg mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                  <Archive className="h-6 w-6 text-gray-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Other</div>
                <div className="text-xs text-gray-500">5 files</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
