'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  MapPin,
  Plus,
  CheckCircle
} from 'lucide-react'

export default function TutorCalendarPage() {
  const upcomingSessions = [
    {
      id: 1,
      title: 'Advanced Calculus - Chapter 5',
      time: 'Today, 2:00 PM - 3:30 PM',
      students: 24,
      type: 'online',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Physics Fundamentals - Lab Session',
      time: 'Tomorrow, 10:00 AM - 12:00 PM',
      students: 18,
      type: 'in-person',
      status: 'confirmed'
    },
    {
      id: 3,
      title: 'Chemistry Lab - Safety Review',
      time: 'Wednesday, 4:00 PM - 5:00 PM',
      students: 15,
      type: 'online',
      status: 'pending'
    }
  ]

  const getTypeIcon = (type: string) => {
    return type === 'online' ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />
  }

  const getStatusBadge = (status: string) => {
    return status === 'confirmed' 
      ? <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
      : <Badge className="bg-orange-100 text-orange-800">Pending</Badge>
  }

  return (
    <DashboardLayout role="tutor">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
            <p className="text-gray-600">Manage your teaching schedule and sessions</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Session
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Today's Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <p className="text-xs text-gray-600">2 confirmed, 1 pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">This Week</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <p className="text-xs text-green-600">+2 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Students</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">57</div>
              <p className="text-xs text-green-600">Across all courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Hours This Month</CardTitle>
              <Clock className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">48</div>
              <p className="text-xs text-green-600">+8 from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Calendar View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar Widget */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>January 2024</CardTitle>
                <CardDescription>
                  Your teaching schedule
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="p-2 text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                    <div key={day} className="p-2 text-sm border rounded hover:bg-gray-50 cursor-pointer">
                      {day}
                      {day === 15 && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mt-1"></div>
                      )}
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
                  Next scheduled classes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="p-3 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{session.title}</h4>
                        {getStatusBadge(session.status)}
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
                        <Clock className="h-3 w-3" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-gray-600">
                          <Users className="h-3 w-3" />
                          <span>{session.students} students</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                          {getTypeIcon(session.type)}
                          <span className="capitalize">{session.type}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Full Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Sessions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Sessions</CardTitle>
            <CardDescription>
              Your completed teaching sessions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Advanced Calculus - Chapter 4</h4>
                    <p className="text-sm text-gray-600">Yesterday, 2:00 PM - 3:30 PM</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">24 students</p>
                  <p className="text-xs text-green-600">Completed</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Video className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Physics Fundamentals - Online Q&A</h4>
                    <p className="text-sm text-gray-600">2 days ago, 10:00 AM - 11:00 AM</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">18 students</p>
                  <p className="text-xs text-green-600">Completed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
