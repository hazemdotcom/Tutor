'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Award,
  BookOpen,
  FileText,
  HelpCircle,
  Clock,
  BarChart3,
  Calendar,
  Star,
  CheckCircle,
  Users
} from 'lucide-react'

export default function StudentProgressPage() {
  const overallStats = [
    {
      title: 'Overall GPA',
      value: '3.8',
      change: '+0.2',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Courses Completed',
      value: '12',
      change: '+2',
      trend: 'up',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Assignments Submitted',
      value: '45',
      change: '+8',
      trend: 'up',
      icon: FileText,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Study Hours',
      value: '156h',
      change: '+24h',
      trend: 'up',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  const courseProgress = [
    {
      id: 1,
      name: 'Advanced Calculus',
      tutor: 'Dr. Sarah Johnson',
      progress: 75,
      grade: 'A-',
      assignments: 8,
      completed: 6,
      nextDeadline: 'Tomorrow',
      status: 'in-progress'
    },
    {
      id: 2,
      name: 'Physics Fundamentals',
      tutor: 'Prof. Michael Chen',
      progress: 60,
      grade: 'B+',
      assignments: 6,
      completed: 4,
      nextDeadline: 'Friday',
      status: 'in-progress'
    },
    {
      id: 3,
      name: 'Chemistry Lab',
      tutor: 'Dr. Emily Wilson',
      progress: 45,
      grade: 'B',
      assignments: 5,
      completed: 2,
      nextDeadline: 'Next Monday',
      status: 'in-progress'
    },
    {
      id: 4,
      name: 'English Literature',
      tutor: 'Prof. David Brown',
      progress: 90,
      grade: 'A',
      assignments: 4,
      completed: 4,
      nextDeadline: 'Completed',
      status: 'completed'
    }
  ]

  const recentAchievements = [
    {
      id: 1,
      title: 'Perfect Score on Calculus Quiz',
      course: 'Advanced Calculus',
      date: 'Yesterday',
      type: 'quiz',
      points: '+10'
    },
    {
      id: 2,
      title: 'Completed Physics Lab Report',
      course: 'Physics Fundamentals',
      date: '3 days ago',
      type: 'assignment',
      points: '+15'
    },
    {
      id: 3,
      title: 'Attended 5 Study Sessions',
      course: 'All Courses',
      date: 'Last week',
      type: 'participation',
      points: '+20'
    },
    {
      id: 4,
      title: 'Submitted Assignment Early',
      course: 'Chemistry Lab',
      date: '2 weeks ago',
      type: 'bonus',
      points: '+5'
    }
  ]

  const gradeBreakdown = [
    { grade: 'A', count: 3, percentage: 25 },
    { grade: 'A-', count: 2, percentage: 17 },
    { grade: 'B+', count: 4, percentage: 33 },
    { grade: 'B', count: 2, percentage: 17 },
    { grade: 'B-', count: 1, percentage: 8 }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-progress':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700">In Progress</Badge>
      case 'completed':
        return <Badge variant="secondary" className="bg-green-100 text-green-700">Completed</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600'
    if (grade.startsWith('B')) return 'text-blue-600'
    if (grade.startsWith('C')) return 'text-orange-600'
    return 'text-red-600'
  }

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'quiz':
        return <HelpCircle className="h-4 w-4" />
      case 'assignment':
        return <FileText className="h-4 w-4" />
      case 'participation':
        return <Users className="h-4 w-4" />
      case 'bonus':
        return <Star className="h-4 w-4" />
      default:
        return <Award className="h-4 w-4" />
    }
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Progress</h1>
            <p className="text-gray-600">Track your academic performance and achievements</p>
          </div>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overallStats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center space-x-1">
                      {stat.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-600" />
                      )}
                      <p className="text-xs text-green-600">{stat.change} from last month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Course Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
              <CardDescription>
                Your current course performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courseProgress.map((course) => (
                  <div key={course.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">{course.name}</h4>
                          {getStatusBadge(course.status)}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Tutor: {course.tutor}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                          <span>Grade: <span className={`font-medium ${getGradeColor(course.grade)}`}>{course.grade}</span></span>
                          <span>Assignments: {course.completed}/{course.assignments}</span>
                          <span>Next: {course.nextDeadline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Course Progress</span>
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
              <CardDescription>
                Your latest accomplishments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAchievements.map((achievement) => (
                  <div key={achievement.id} className="p-4 border rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                          <span className="text-sm font-medium text-green-600">{achievement.points}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{achievement.course}</p>
                        <p className="text-xs text-gray-500">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grade Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
            <CardDescription>
              Your grade breakdown across all courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {gradeBreakdown.map((item) => (
                <div key={item.grade} className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{item.grade}</div>
                  <div className="text-sm text-gray-600 mb-2">{item.count} courses</div>
                  <Progress value={item.percentage} className="mb-2" />
                  <div className="text-xs text-gray-500">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Goals */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Goals</CardTitle>
            <CardDescription>
              Track your academic objectives
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Short-term Goals</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Complete Calculus Course</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <Progress value={75} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Improve Physics Grade</span>
                    <span className="text-sm text-gray-500">60%</span>
                  </div>
                  <Progress value={60} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Submit All Assignments</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} />
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Long-term Goals</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Maintain 3.8+ GPA</span>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                  <Progress value={95} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Complete 15 Courses</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <Progress value={80} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Study 200+ Hours</span>
                    <span className="text-sm text-gray-500">78%</span>
                  </div>
                  <Progress value={78} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
