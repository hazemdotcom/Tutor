'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  BookOpen, 
  Users, 
  Clock, 
  Calendar,
  Play,
  Video
} from 'lucide-react'

export default function StudentCoursesPage() {
  const courses = [
    {
      id: 1,
      name: 'Advanced Calculus',
      tutor: 'Dr. Sarah Johnson',
      progress: 75,
      nextClass: 'Today, 2:00 PM',
      students: 24,
      status: 'active'
    },
    {
      id: 2,
      name: 'Physics Fundamentals',
      tutor: 'Prof. Michael Chen',
      progress: 60,
      nextClass: 'Tomorrow, 10:00 AM',
      students: 18,
      status: 'active'
    },
    {
      id: 3,
      name: 'Chemistry Lab',
      tutor: 'Dr. Emily Wilson',
      progress: 45,
      nextClass: 'Wednesday, 4:00 PM',
      students: 15,
      status: 'active'
    },
    {
      id: 4,
      name: 'English Literature',
      tutor: 'Prof. David Brown',
      progress: 90,
      nextClass: 'Friday, 1:00 PM',
      students: 12,
      status: 'active'
    }
  ]

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
            <p className="text-gray-600">Track your enrolled courses and progress</p>
          </div>
          <Button>
            <BookOpen className="h-4 w-4 mr-2" />
            Browse Courses
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Enrolled Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">4</div>
              <p className="text-xs text-green-600">+1 this semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Avg. Progress</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">68%</div>
              <p className="text-xs text-green-600">+5% this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Next Class</CardTitle>
              <Calendar className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">Today</div>
              <p className="text-xs text-gray-600">2:00 PM - Calculus</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Study Hours</CardTitle>
              <Clock className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">24h</div>
              <p className="text-xs text-green-600">+8h this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>{course.tutor}</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm text-gray-500">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{course.students} students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Next: {course.nextClass}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button className="flex-1" size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Join Class
                    </Button>
                    <Button variant="outline" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Course Activity</CardTitle>
            <CardDescription>
              Your latest interactions with courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Play className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Attended Advanced Calculus class</p>
                  <p className="text-xs text-gray-500">Chapter 5: Derivatives • 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Submitted Physics Assignment #3</p>
                  <p className="text-xs text-gray-500">Physics Fundamentals • 1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Completed Chemistry Lab Quiz</p>
                  <p className="text-xs text-gray-500">Chemistry Lab • 2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
