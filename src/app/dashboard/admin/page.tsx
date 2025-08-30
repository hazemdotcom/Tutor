'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Users, 
  BookOpen, 
  Receipt, 
  TrendingUp, 
  Settings,
  BarChart3,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Clock,
  Plus
} from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '1,247',
      change: '+23',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Active Courses',
      value: '156',
      change: '+8',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Monthly Revenue',
      value: '$45,230',
      change: '+12%',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Pending Issues',
      value: '12',
      change: '-5',
      icon: AlertCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  const userStats = [
    {
      role: 'Tutors',
      count: 89,
      percentage: 7.1,
      change: '+5'
    },
    {
      role: 'Students',
      count: 1024,
      percentage: 82.1,
      change: '+18'
    },
    {
      role: 'Parents',
      count: 134,
      percentage: 10.8,
      change: '+3'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'user',
      title: 'New tutor registration: Dr. Emily Wilson',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      type: 'course',
      title: 'Course "Advanced Physics" created by Prof. Chen',
      time: '4 hours ago',
      status: 'completed'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment dispute resolved for Invoice #1234',
      time: '1 day ago',
      status: 'completed'
    },
    {
      id: 4,
      type: 'issue',
      title: 'Technical issue reported: Video call quality',
      time: '1 day ago',
      status: 'pending'
    }
  ]

  const topCourses = [
    {
      id: 1,
      name: 'Advanced Calculus',
      tutor: 'Dr. Sarah Johnson',
      students: 24,
      revenue: 4320,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Physics Fundamentals',
      tutor: 'Prof. Michael Chen',
      students: 18,
      revenue: 3240,
      rating: 4.6
    },
    {
      id: 3,
      name: 'Chemistry Lab',
      tutor: 'Dr. Emily Wilson',
      students: 15,
      revenue: 2700,
      rating: 4.7
    },
    {
      id: 4,
      name: 'English Literature',
      tutor: 'Prof. David Brown',
      students: 12,
      revenue: 2160,
      rating: 4.5
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'pending':
        return <Clock className="h-4 w-4 text-orange-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Platform overview and management</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
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
          {/* User Statistics */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>User Statistics</CardTitle>
                <CardDescription>
                  Platform user distribution and growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {userStats.map((stat) => (
                    <div key={stat.role} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{stat.role}</h4>
                          <p className="text-sm text-gray-600">{stat.percentage}% of total users</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
                        <p className="text-xs text-green-600">+{stat.change} this month</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>
                  Latest platform events and updates
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
                <Button variant="outline" className="w-full mt-4">
                  View All Activities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Top Performing Courses */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Courses</CardTitle>
            <CardDescription>
              Most popular courses by enrollment and revenue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCourses.map((course) => (
                <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{course.name}</h4>
                      <p className="text-sm text-gray-600">{course.tutor}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{course.students} students</p>
                        <p className="text-xs text-gray-500">${course.revenue} revenue</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">★ {course.rating}</p>
                        <p className="text-xs text-gray-500">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Platform Health */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Health</CardTitle>
            <CardDescription>
              System performance and key metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Server Uptime</span>
                  <span className="text-sm text-gray-500">99.9%</span>
                </div>
                <Progress value={99.9} />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">User Satisfaction</span>
                  <span className="text-sm text-gray-500">4.6/5</span>
                </div>
                <Progress value={92} />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Payment Success Rate</span>
                  <span className="text-sm text-gray-500">98.5%</span>
                </div>
                <Progress value={98.5} />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Support Response Time</span>
                  <span className="text-sm text-gray-500">2.3 hours</span>
                </div>
                <Progress value={85} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">Manage Users</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm">Review Courses</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Receipt className="h-5 w-5" />
                <span className="text-sm">View Invoices</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Settings className="h-5 w-5" />
                <span className="text-sm">System Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
