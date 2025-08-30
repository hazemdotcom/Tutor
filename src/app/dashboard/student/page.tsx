'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  BookOpen, 
  FileText, 
  HelpCircle, 
  TrendingUp, 
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Play,
  Target
} from 'lucide-react'

export default function StudentDashboard() {
  const stats = [
    {
      title: 'Enrolled Courses',
      value: '4',
      change: '+1',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Completed Assignments',
      value: '18',
      change: '+3',
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Quiz Score Average',
      value: '87%',
      change: '+5%',
      icon: HelpCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Study Hours',
      value: '24h',
      change: '+8h',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  const currentCourses = [
    {
      id: 1,
      name: 'Advanced Calculus',
      tutor: 'Dr. Sarah Johnson',
      progress: 75,
      nextClass: 'Today, 2:00 PM',
      assignments: 3
    },
    {
      id: 2,
      name: 'Physics Fundamentals',
      tutor: 'Prof. Michael Chen',
      progress: 60,
      nextClass: 'Tomorrow, 10:00 AM',
      assignments: 2
    },
    {
      id: 3,
      name: 'Chemistry Lab',
      tutor: 'Dr. Emily Wilson',
      progress: 45,
      nextClass: 'Wednesday, 4:00 PM',
      assignments: 1
    },
    {
      id: 4,
      name: 'English Literature',
      tutor: 'Prof. David Brown',
      progress: 90,
      nextClass: 'Friday, 1:00 PM',
      assignments: 0
    }
  ]

  const upcomingAssignments = [
    {
      id: 1,
      title: 'Calculus Assignment #6',
      course: 'Advanced Calculus',
      dueDate: 'Tomorrow, 11:59 PM',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      course: 'Physics Fundamentals',
      dueDate: 'Friday, 11:59 PM',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Chemistry Quiz',
      course: 'Chemistry Lab',
      dueDate: 'Next Monday, 11:59 PM',
      status: 'pending'
    }
  ]

  const recentAchievements = [
    {
      id: 1,
      title: 'Perfect Score on Math Quiz',
      course: 'Advanced Calculus',
      date: '2 days ago'
    },
    {
      id: 2,
      title: 'Completed 10 Assignments',
      course: 'Physics Fundamentals',
      date: '1 week ago'
    },
    {
      id: 3,
      title: 'Attended 5 Classes in a Row',
      course: 'Chemistry Lab',
      date: '2 weeks ago'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'in-progress':
        return <Clock className="h-4 w-4 text-blue-600" />
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-orange-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
            <p className="text-gray-600">Welcome back, Alex Chen</p>
          </div>
          <Button>
            <Play className="h-4 w-4 mr-2" />
            Join Next Class
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
          {/* Current Courses */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Current Courses</CardTitle>
                <CardDescription>
                  Your enrolled courses and progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentCourses.map((course) => (
                    <div key={course.id} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{course.name}</h4>
                          <p className="text-sm text-gray-600">{course.tutor}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{course.progress}%</p>
                          <p className="text-xs text-gray-500">{course.assignments} pending</p>
                        </div>
                      </div>
                      <Progress value={course.progress} className="mb-3" />
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Next class: {course.nextClass}</span>
                        <Button variant="outline" size="sm">
                          View Course
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Assignments */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
                <CardDescription>
                  Deadlines and tasks to complete
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment) => (
                    <div key={assignment.id} className="p-3 border rounded-lg">
                      <div className="flex items-start space-x-3">
                        {getStatusIcon(assignment.status)}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-gray-900">{assignment.title}</h4>
                          <p className="text-xs text-gray-600 mb-1">{assignment.course}</p>
                          <p className="text-xs text-gray-500">Due: {assignment.dueDate}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Assignments
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
            <CardDescription>
              Your accomplishments and milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentAchievements.map((achievement) => (
                <div key={achievement.id} className="p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-medium text-sm text-gray-900 mb-1">{achievement.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{achievement.course}</p>
                  <p className="text-xs text-gray-500">{achievement.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Study Goals */}
        <Card>
          <CardHeader>
            <CardTitle>Study Goals</CardTitle>
            <CardDescription>
              Track your learning objectives
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Complete Calculus Course</span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <Progress value={75} />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Improve Physics Score</span>
                  <span className="text-sm text-gray-500">60%</span>
                </div>
                <Progress value={60} />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Attend All Classes</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <Progress value={90} />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Submit Assignments on Time</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <Progress value={85} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
