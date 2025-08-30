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
  Users,
  GraduationCap
} from 'lucide-react'

export default function ParentProgressPage() {
  const childrenProgress = [
    {
      id: 1,
      name: 'Alex Chen',
      age: 16,
      grade: '10th Grade',
      overallGPA: 3.8,
      courses: 4,
      assignments: 18,
      studyHours: 24,
      status: 'excellent',
      recentAchievement: 'Perfect score on Calculus quiz'
    },
    {
      id: 2,
      name: 'Emma Chen',
      age: 14,
      grade: '8th Grade',
      overallGPA: 3.6,
      courses: 3,
      assignments: 12,
      studyHours: 18,
      status: 'good',
      recentAchievement: 'Completed Science project early'
    }
  ]

  const coursePerformance = [
    {
      id: 1,
      child: 'Alex Chen',
      course: 'Advanced Calculus',
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
      child: 'Alex Chen',
      course: 'Physics Fundamentals',
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
      child: 'Emma Chen',
      course: 'English Literature',
      tutor: 'Prof. David Brown',
      progress: 90,
      grade: 'A',
      assignments: 4,
      completed: 4,
      nextDeadline: 'Completed',
      status: 'completed'
    },
    {
      id: 4,
      child: 'Emma Chen',
      course: 'Chemistry Lab',
      tutor: 'Dr. Emily Wilson',
      progress: 45,
      grade: 'B',
      assignments: 5,
      completed: 2,
      nextDeadline: 'Next Monday',
      status: 'in-progress'
    }
  ]

  const recentAchievements = [
    {
      id: 1,
      child: 'Alex Chen',
      title: 'Perfect Score on Calculus Quiz',
      course: 'Advanced Calculus',
      date: 'Yesterday',
      type: 'quiz',
      points: '+10'
    },
    {
      id: 2,
      child: 'Emma Chen',
      title: 'Completed Science Project',
      course: 'Chemistry Lab',
      date: '3 days ago',
      type: 'project',
      points: '+15'
    },
    {
      id: 3,
      child: 'Alex Chen',
      title: 'Attended 5 Study Sessions',
      course: 'All Courses',
      date: 'Last week',
      type: 'participation',
      points: '+20'
    },
    {
      id: 4,
      child: 'Emma Chen',
      title: 'Submitted Assignment Early',
      course: 'English Literature',
      date: '2 weeks ago',
      type: 'bonus',
      points: '+5'
    }
  ]

  const overallStats = [
    {
      title: 'Combined GPA',
      value: '3.7',
      change: '+0.3',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Total Courses',
      value: '7',
      change: '+1',
      trend: 'up',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Assignments Completed',
      value: '30',
      change: '+8',
      trend: 'up',
      icon: FileText,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Study Hours',
      value: '42h',
      change: '+12h',
      trend: 'up',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  const gradeBreakdown = [
    { grade: 'A', count: 4, percentage: 30 },
    { grade: 'A-', count: 3, percentage: 22 },
    { grade: 'B+', count: 4, percentage: 30 },
    { grade: 'B', count: 2, percentage: 15 },
    { grade: 'B-', count: 1, percentage: 8 }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'excellent':
        return <Badge variant="secondary" className="bg-green-100 text-green-700">Excellent</Badge>
      case 'good':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700">Good</Badge>
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
      case 'project':
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
    <DashboardLayout role="parent">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Children's Progress</h1>
            <p className="text-gray-600">Track your children's academic performance and achievements</p>
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
          {/* Children Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Children Overview</CardTitle>
              <CardDescription>
                Academic performance summary for each child
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {childrenProgress.map((child) => (
                  <div key={child.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">{child.name}</h4>
                          {getStatusBadge(child.status)}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{child.grade} • Age {child.age}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                          <span>GPA: <span className={`font-medium ${getGradeColor(child.overallGPA.toString())}`}>{child.overallGPA}</span></span>
                          <span>{child.courses} courses</span>
                          <span>{child.assignments} assignments</span>
                          <span>{child.studyHours}h study time</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Overall Progress</span>
                        <span className="text-sm font-medium">{Math.round(child.overallGPA * 25)}%</span>
                      </div>
                      <Progress value={Math.round(child.overallGPA * 25)} />
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Recent: {child.recentAchievement}</p>
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
                Latest accomplishments from your children
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
                        <p className="text-sm text-gray-600 mb-1">{achievement.child} • {achievement.course}</p>
                        <p className="text-xs text-gray-500">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Course Performance</CardTitle>
            <CardDescription>
              Detailed progress for each child's courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {coursePerformance.map((course) => (
                <div key={course.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium text-gray-900">{course.course}</h4>
                        {getStatusBadge(course.status)}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{course.child} • Tutor: {course.tutor}</p>
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

        {/* Grade Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
            <CardDescription>
              Combined grade breakdown across all children
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
              Academic objectives for your children
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Alex Chen - Goals</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Maintain 3.8+ GPA</span>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                  <Progress value={95} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Complete Calculus Course</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <Progress value={75} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Study 30+ Hours/Month</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <Progress value={80} />
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Emma Chen - Goals</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Improve to 3.7+ GPA</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Complete Science Project</span>
                    <span className="text-sm text-gray-500">100%</span>
                  </div>
                  <Progress value={100} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Read 5 Books This Semester</span>
                    <span className="text-sm text-gray-500">60%</span>
                  </div>
                  <Progress value={60} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
