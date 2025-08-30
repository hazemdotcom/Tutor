'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  HelpCircle, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Play,
  Calendar,
  Target,
  TrendingUp
} from 'lucide-react'

export default function StudentQuizzesPage() {
  const upcomingQuizzes = [
    {
      id: 1,
      title: 'Calculus Midterm Quiz',
      course: 'Advanced Calculus',
      date: 'Tomorrow, 2:00 PM',
      duration: '60 minutes',
      questions: 25,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Physics Chapter 5 Quiz',
      course: 'Physics Fundamentals',
      date: 'Friday, 10:00 AM',
      duration: '45 minutes',
      questions: 20,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Chemistry Lab Safety Quiz',
      course: 'Chemistry Lab',
      date: 'Next Monday, 3:00 PM',
      duration: '30 minutes',
      questions: 15,
      status: 'upcoming'
    }
  ]

  const recentQuizzes = [
    {
      id: 1,
      title: 'Calculus Chapter 3 Quiz',
      course: 'Advanced Calculus',
      date: 'Last Week',
      score: 92,
      totalQuestions: 20,
      correctAnswers: 18,
      status: 'completed'
    },
    {
      id: 2,
      title: 'Physics Chapter 4 Quiz',
      course: 'Physics Fundamentals',
      date: '2 weeks ago',
      score: 85,
      totalQuestions: 18,
      correctAnswers: 15,
      status: 'completed'
    },
    {
      id: 3,
      title: 'English Literature Quiz',
      course: 'English Literature',
      date: '3 weeks ago',
      score: 78,
      totalQuestions: 25,
      correctAnswers: 19,
      status: 'completed'
    }
  ]

  const quizStats = [
    {
      title: 'Total Quizzes Taken',
      value: '12',
      change: '+3',
      icon: HelpCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Average Score',
      value: '87%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Upcoming Quizzes',
      value: '3',
      change: '+1',
      icon: Calendar,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Study Streak',
      value: '7 days',
      change: '+2 days',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="secondary" className="bg-orange-100 text-orange-700">Upcoming</Badge>
      case 'completed':
        return <Badge variant="secondary" className="bg-green-100 text-green-700">Completed</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-blue-600'
    if (score >= 70) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Quizzes</h1>
            <p className="text-gray-600">Track your quiz performance and upcoming assessments</p>
          </div>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Start Practice Quiz
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quizStats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change} from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Quizzes */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Quizzes</CardTitle>
              <CardDescription>
                Prepare for your next assessments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingQuizzes.map((quiz) => (
                  <div key={quiz.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">{quiz.title}</h4>
                          {getStatusBadge(quiz.status)}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{quiz.course}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{quiz.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{quiz.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <HelpCircle className="h-3 w-3" />
                            <span>{quiz.questions} questions</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Study Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Quiz Results */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Quiz Results</CardTitle>
              <CardDescription>
                Your latest quiz performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentQuizzes.map((quiz) => (
                  <div key={quiz.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">{quiz.title}</h4>
                          {getStatusBadge(quiz.status)}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{quiz.course}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                          <span>{quiz.date}</span>
                          <span>{quiz.correctAnswers}/{quiz.totalQuestions} correct</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress value={quiz.score} className="flex-1" />
                          <span className={`text-sm font-medium ${getScoreColor(quiz.score)}`}>
                            {quiz.score}%
                          </span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>
              Your quiz performance trends across subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Advanced Calculus</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Average Score</span>
                    <span className="text-sm font-medium text-green-600">92%</span>
                  </div>
                  <Progress value={92} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Quizzes Taken</span>
                    <span className="text-sm font-medium">4</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Physics Fundamentals</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Average Score</span>
                    <span className="text-sm font-medium text-blue-600">85%</span>
                  </div>
                  <Progress value={85} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Quizzes Taken</span>
                    <span className="text-sm font-medium">3</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">English Literature</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Average Score</span>
                    <span className="text-sm font-medium text-orange-600">78%</span>
                  </div>
                  <Progress value={78} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Quizzes Taken</span>
                    <span className="text-sm font-medium">2</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
