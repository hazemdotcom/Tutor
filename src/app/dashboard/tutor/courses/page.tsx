'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  BookOpen, 
  Users, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Clock
} from 'lucide-react'

export default function TutorCoursesPage() {
  const courses = [
    {
      id: 1,
      name: 'Advanced Calculus',
      description: 'Comprehensive course covering advanced calculus concepts',
      students: 24,
      maxStudents: 30,
      progress: 75,
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-06-15',
      price: 180,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Physics Fundamentals',
      description: 'Introduction to physics principles and problem-solving',
      students: 18,
      maxStudents: 25,
      progress: 60,
      status: 'active',
      startDate: '2024-02-01',
      endDate: '2024-07-01',
      price: 160,
      rating: 4.6
    },
    {
      id: 3,
      name: 'Chemistry Lab',
      description: 'Hands-on laboratory experience with chemical experiments',
      students: 15,
      maxStudents: 20,
      progress: 45,
      status: 'active',
      startDate: '2024-01-20',
      endDate: '2024-05-20',
      price: 200,
      rating: 4.7
    },
    {
      id: 4,
      name: 'English Literature',
      description: 'Analysis of classic and contemporary literature',
      students: 12,
      maxStudents: 20,
      progress: 90,
      status: 'completed',
      startDate: '2023-09-01',
      endDate: '2024-01-15',
      price: 140,
      rating: 4.5
    }
  ]

  return (
    <DashboardLayout role="tutor">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
            <p className="text-gray-600">Manage your tutoring courses and students</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New Course
          </Button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {course.students}/{course.maxStudents} students
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
                <p className="text-sm text-gray-600">{course.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Course Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Price</p>
                    <p className="font-medium">${course.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Rating</p>
                    <p className="font-medium">★ {course.rating}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Status</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      course.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {course.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500">Duration</p>
                    <p className="font-medium">5 months</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{course.startDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{course.endDate}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    View Students
                  </Button>
                  <Button className="flex-1">
                    Manage Course
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Active courses</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">69</div>
              <p className="text-xs text-muted-foreground">Enrolled students</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <span className="text-2xl">★</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7</div>
              <p className="text-xs text-muted-foreground">Out of 5 stars</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <span className="text-2xl">$</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,240</div>
              <p className="text-xs text-muted-foreground">From all courses</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
