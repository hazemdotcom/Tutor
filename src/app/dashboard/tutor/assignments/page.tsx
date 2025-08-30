'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Users,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'

export default function TutorAssignmentsPage() {
  const assignments = [
    {
      id: 1,
      title: 'Calculus Assignment #6',
      course: 'Advanced Calculus',
      dueDate: '2024-03-15',
      status: 'active',
      submissions: 18,
      totalStudents: 24,
      description: 'Complete problems 1-15 from Chapter 6'
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      course: 'Physics Fundamentals',
      dueDate: '2024-03-20',
      status: 'active',
      submissions: 12,
      totalStudents: 18,
      description: 'Write a detailed report on the pendulum experiment'
    },
    {
      id: 3,
      title: 'Chemistry Quiz',
      course: 'Chemistry Lab',
      dueDate: '2024-03-18',
      status: 'active',
      submissions: 8,
      totalStudents: 15,
      description: 'Online quiz covering chapters 4-6'
    },
    {
      id: 4,
      title: 'Literature Essay',
      course: 'English Literature',
      dueDate: '2024-02-28',
      status: 'completed',
      submissions: 12,
      totalStudents: 12,
      description: 'Critical analysis of Shakespeare\'s Hamlet'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'active':
        return <Clock className="h-4 w-4 text-blue-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-orange-600" />
    }
  }

  return (
    <DashboardLayout role="tutor">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
            <p className="text-gray-600">Manage and track student assignments</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Assignment
          </Button>
        </div>

        {/* Assignment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{assignment.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {assignment.course}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{assignment.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(assignment.status)}
                    <span className={`text-sm font-medium ${
                      assignment.status === 'completed' 
                        ? 'text-green-600' 
                        : assignment.status === 'active'
                        ? 'text-blue-600'
                        : 'text-orange-600'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="h-3 w-3" />
                    <span>Due: {assignment.dueDate}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{assignment.submissions}/{assignment.totalStudents} submitted</span>
                  </div>
                  <span className="font-medium">
                    {Math.round((assignment.submissions / assignment.totalStudents) * 100)}%
                  </span>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    View Submissions
                  </Button>
                  <Button className="flex-1">
                    Grade
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Assignments</CardTitle>
              <FileText className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Active assignments</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Submissions to grade</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">Across all assignments</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Submission Rate</CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">Students submitting on time</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
