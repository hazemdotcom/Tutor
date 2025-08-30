'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  Users, 
  FileText, 
  HelpCircle, 
  TrendingUp, 
  Calendar,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function TutorDashboard() {
  const stats = [
    {
      title: 'Active Courses',
      value: '8',
      change: '+2',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Students',
      value: '24',
      change: '+5',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Pending Assignments',
      value: '12',
      change: '-3',
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Quiz Submissions',
      value: '18',
      change: '+8',
      icon: HelpCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'assignment',
      title: 'Math Assignment #5 submitted by Alex Chen',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      type: 'quiz',
      title: 'Physics Quiz completed by Sarah Wilson',
      time: '4 hours ago',
      status: 'completed'
    },
    {
      id: 3,
      type: 'course',
      title: 'New student enrolled in Advanced Calculus',
      time: '1 day ago',
      status: 'completed'
    },
    {
      id: 4,
      type: 'meeting',
      title: 'Scheduled meeting with Parent - Tomorrow 3 PM',
      time: '1 day ago',
      status: 'upcoming'
    }
  ]

  const upcomingSessions = [
    {
      id: 1,
      student: 'Alex Chen',
      course: 'Advanced Calculus',
      time: 'Today, 2:00 PM',
      duration: '1 hour'
    },
    {
      id: 2,
      student: 'Sarah Wilson',
      course: 'Physics Fundamentals',
      time: 'Tomorrow, 10:00 AM',
      duration: '1.5 hours'
    },
    {
      id: 3,
      student: 'Mike Johnson',
      course: 'Chemistry Lab',
      time: 'Tomorrow, 4:00 PM',
      duration: '2 hours'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'pending':
        return <Clock className="h-4 w-4 text-orange-600" />
      case 'upcoming':
        return <AlertCircle className="h-4 w-4 text-blue-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <DashboardLayout role="tutor">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tutor Dashboard</h1>
            <p className="text-gray-600">Welcome back, Dr. Sarah Johnson</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New Course
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>
                  Latest updates from your courses and students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      {getStatusIcon(activity.status)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Sessions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>
                  Your scheduled tutoring sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm text-gray-900">{session.student}</h4>
                        <span className="text-xs text-gray-500">{session.duration}</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{session.course}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {session.time}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Sessions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Plus className="h-5 w-5" />
                <span className="text-sm">New Assignment</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <HelpCircle className="h-5 w-5" />
                <span className="text-sm">Create Quiz</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">Schedule Meeting</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <FileText className="h-5 w-5" />
                <span className="text-sm">Grade Submissions</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
