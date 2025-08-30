'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Users, 
  Receipt, 
  TrendingUp, 
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  BookOpen,
  Target
} from 'lucide-react'

export default function ParentDashboard() {
  const stats = [
    {
      title: 'Children Enrolled',
      value: '2',
      change: '+0',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Spent',
      value: '$2,450',
      change: '+$180',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Pending Payments',
      value: '$320',
      change: '-$50',
      icon: Receipt,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Active Courses',
      value: '6',
      change: '+1',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  const children = [
    {
      id: 1,
      name: 'Alex Chen',
      age: 16,
      grade: '11th Grade',
      courses: 3,
      averageScore: 87,
      nextClass: 'Today, 2:00 PM - Calculus',
      progress: 75
    },
    {
      id: 2,
      name: 'Emma Chen',
      age: 14,
      grade: '9th Grade',
      courses: 3,
      averageScore: 92,
      nextClass: 'Tomorrow, 10:00 AM - Physics',
      progress: 60
    }
  ]

  const recentInvoices = [
    {
      id: 1,
      child: 'Alex Chen',
      course: 'Advanced Calculus',
      amount: 180,
      dueDate: 'Tomorrow',
      status: 'pending'
    },
    {
      id: 2,
      child: 'Emma Chen',
      course: 'Physics Fundamentals',
      amount: 140,
      dueDate: 'Next Week',
      status: 'pending'
    },
    {
      id: 3,
      child: 'Alex Chen',
      course: 'Chemistry Lab',
      amount: 200,
      dueDate: 'Paid',
      status: 'paid'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Parent-Teacher Conference',
      child: 'Alex Chen',
      date: 'Tomorrow, 3:00 PM',
      type: 'meeting'
    },
    {
      id: 2,
      title: 'Chemistry Lab Session',
      child: 'Alex Chen',
      date: 'Wednesday, 4:00 PM',
      type: 'class'
    },
    {
      id: 3,
      title: 'Physics Quiz',
      child: 'Emma Chen',
      date: 'Friday, 2:00 PM',
      type: 'quiz'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-orange-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <DashboardLayout role="parent">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Parent Dashboard</h1>
            <p className="text-gray-600">Welcome back, Maria Rodriguez</p>
          </div>
          <Button>
            <DollarSign className="h-4 w-4 mr-2" />
            Make Payment
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
          {/* Children Progress */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Children Progress</CardTitle>
                <CardDescription>
                  Academic performance and course progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {children.map((child) => (
                    <div key={child.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-medium text-gray-900">{child.name}</h4>
                          <p className="text-sm text-gray-600">{child.grade} • {child.age} years old</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{child.averageScore}%</p>
                          <p className="text-xs text-gray-500">Average Score</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500">Course Progress</p>
                          <Progress value={child.progress} className="mt-1" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Active Courses</p>
                          <p className="text-sm font-medium">{child.courses}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Next: {child.nextClass}</span>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Invoices */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Invoices</CardTitle>
                <CardDescription>
                  Payment status and upcoming bills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInvoices.map((invoice) => (
                    <div key={invoice.id} className="p-3 border rounded-lg">
                      <div className="flex items-start space-x-3">
                        {getStatusIcon(invoice.status)}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-gray-900">{invoice.course}</h4>
                          <p className="text-xs text-gray-600 mb-1">{invoice.child}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-gray-500">Due: {invoice.dueDate}</p>
                            <p className="text-sm font-medium">${invoice.amount}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Invoices
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              Important dates and meetings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">{event.title}</h4>
                      <p className="text-xs text-gray-600">{event.child}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financial Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>
              Monthly spending and payment history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">This Month's Spending</span>
                  <span className="text-sm text-gray-500">$450</span>
                </div>
                <Progress value={75} />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Budget Remaining</span>
                  <span className="text-sm text-gray-500">$150</span>
                </div>
                <Progress value={25} />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Payment Success Rate</span>
                  <span className="text-sm text-gray-500">95%</span>
                </div>
                <Progress value={95} />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Average Monthly Cost</span>
                  <span className="text-sm text-gray-500">$380</span>
                </div>
                <Progress value={80} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
