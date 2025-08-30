'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  FileText, 
  Clock, 
  Users, 
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function TutorQuizzesPage() {
  const quizzes = [
    {
      id: 1,
      title: 'Calculus Midterm Exam',
      course: 'Advanced Calculus',
      status: 'active',
      students: 24,
      submissions: 22,
      dueDate: '2024-01-15',
      duration: '90 min'
    },
    {
      id: 2,
      title: 'Physics Quiz #3',
      course: 'Physics Fundamentals',
      status: 'draft',
      students: 18,
      submissions: 0,
      dueDate: '2024-01-20',
      duration: '45 min'
    },
    {
      id: 3,
      title: 'Chemistry Lab Safety Test',
      course: 'Chemistry Lab',
      status: 'completed',
      students: 15,
      submissions: 15,
      dueDate: '2024-01-10',
      duration: '30 min'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case 'draft':
        return <Badge className="bg-gray-100 text-gray-800">Draft</Badge>
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800">Completed</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>
    }
  }

  return (
    <DashboardLayout role="tutor">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Quizzes</h1>
            <p className="text-gray-600">Create and manage quizzes for your courses</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Quiz
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Quizzes</CardTitle>
              <FileText className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <p className="text-xs text-green-600">+2 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Quizzes</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <p className="text-xs text-gray-600">Currently running</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Submissions</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">156</div>
              <p className="text-xs text-green-600">+23 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Avg. Score</CardTitle>
              <CheckCircle className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">87%</div>
              <p className="text-xs text-green-600">+5% improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Quizzes List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Quizzes</CardTitle>
            <CardDescription>
              Manage and monitor your course quizzes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {quizzes.map((quiz) => (
                <div key={quiz.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{quiz.title}</h4>
                      <p className="text-sm text-gray-600">{quiz.course}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">Due: {quiz.dueDate}</span>
                        <span className="text-xs text-gray-500">Duration: {quiz.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{quiz.submissions}/{quiz.students} submissions</p>
                      <p className="text-xs text-gray-500">{Math.round((quiz.submissions / quiz.students) * 100)}% completion</p>
                    </div>
                    {getStatusBadge(quiz.status)}
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Quiz Activity</CardTitle>
            <CardDescription>
              Latest submissions and results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Calculus Midterm completed by Alex Chen</p>
                  <p className="text-xs text-gray-500">Score: 92% • 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-orange-50">
                <AlertCircle className="h-4 w-4 text-orange-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Physics Quiz #3 due in 2 days</p>
                  <p className="text-xs text-gray-500">18 students enrolled • 0 submissions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Chemistry Lab Safety Test - All students passed</p>
                  <p className="text-xs text-gray-500">15/15 submissions • 1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
