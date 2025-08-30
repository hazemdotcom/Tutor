'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  BookOpen,
  Video,
  FileText,
  HelpCircle,
  Plus,
  User
} from 'lucide-react'

export default function ParentCalendarPage() {
  const upcomingEvents = [
    {
      id: 1,
      child: 'Alex Chen',
      title: 'Advanced Calculus Class',
      type: 'class',
      date: 'Today, 2:00 PM - 3:30 PM',
      location: 'Room 201, Math Building',
      tutor: 'Dr. Sarah Johnson',
      participants: 8,
      status: 'upcoming'
    },
    {
      id: 2,
      child: 'Emma Chen',
      title: 'English Literature Discussion',
      type: 'discussion',
      date: 'Tomorrow, 1:00 PM - 2:00 PM',
      location: 'Online - Zoom',
      tutor: 'Prof. David Brown',
      participants: 12,
      status: 'upcoming'
    },
    {
      id: 3,
      child: 'Alex Chen',
      title: 'Physics Lab Session',
      type: 'lab',
      date: 'Wednesday, 10:00 AM - 12:00 PM',
      location: 'Lab 3, Science Center',
      tutor: 'Prof. Michael Chen',
      participants: 6,
      status: 'upcoming'
    },
    {
      id: 4,
      child: 'Emma Chen',
      title: 'Chemistry Quiz',
      type: 'quiz',
      date: 'Friday, 3:00 PM - 4:00 PM',
      location: 'Room 105, Chemistry Building',
      tutor: 'Dr. Emily Wilson',
      participants: 10,
      status: 'upcoming'
    }
  ]

  const thisWeekSchedule = [
    {
      day: 'Monday',
      date: 'Dec 16',
      events: [
        { time: '2:00 PM', child: 'Alex', title: 'Calculus Class', type: 'class' },
        { time: '4:00 PM', child: 'Emma', title: 'Study Group', type: 'study' }
      ]
    },
    {
      day: 'Tuesday',
      date: 'Dec 17',
      events: [
        { time: '10:00 AM', child: 'Alex', title: 'Physics Lab', type: 'lab' },
        { time: '1:00 PM', child: 'Emma', title: 'English Discussion', type: 'discussion' }
      ]
    },
    {
      day: 'Wednesday',
      date: 'Dec 18',
      events: [
        { time: '1:00 PM', child: 'Emma', title: 'English Discussion', type: 'discussion' },
        { time: '3:00 PM', child: 'Alex', title: 'Tutor Meeting', type: 'meeting' }
      ]
    },
    {
      day: 'Thursday',
      date: 'Dec 19',
      events: [
        { time: '2:00 PM', child: 'Emma', title: 'Chemistry Class', type: 'class' }
      ]
    },
    {
      day: 'Friday',
      date: 'Dec 20',
      events: [
        { time: '3:00 PM', child: 'Emma', title: 'Chemistry Quiz', type: 'quiz' }
      ]
    }
  ]

  const calendarStats = [
    {
      title: 'Classes This Week',
      value: '8',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Upcoming Deadlines',
      value: '3',
      icon: FileText,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      title: 'Study Sessions',
      value: '2',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Online Meetings',
      value: '1',
      icon: Video,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'class':
        return <BookOpen className="h-4 w-4" />
      case 'lab':
        return <MapPin className="h-4 w-4" />
      case 'discussion':
        return <Users className="h-4 w-4" />
      case 'quiz':
        return <HelpCircle className="h-4 w-4" />
      case 'meeting':
        return <Video className="h-4 w-4" />
      case 'study':
        return <Users className="h-4 w-4" />
      case 'assignment':
        return <FileText className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  const getEventTypeBadge = (type: string) => {
    switch (type) {
      case 'class':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700">Class</Badge>
      case 'lab':
        return <Badge variant="secondary" className="bg-green-100 text-green-700">Lab</Badge>
      case 'discussion':
        return <Badge variant="secondary" className="bg-purple-100 text-purple-700">Discussion</Badge>
      case 'quiz':
        return <Badge variant="secondary" className="bg-orange-100 text-orange-700">Quiz</Badge>
      case 'meeting':
        return <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">Meeting</Badge>
      case 'study':
        return <Badge variant="secondary" className="bg-teal-100 text-teal-700">Study</Badge>
      case 'assignment':
        return <Badge variant="secondary" className="bg-red-100 text-red-700">Assignment</Badge>
      default:
        return <Badge variant="secondary">Event</Badge>
    }
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'class':
        return 'text-blue-600'
      case 'lab':
        return 'text-green-600'
      case 'discussion':
        return 'text-purple-600'
      case 'quiz':
        return 'text-orange-600'
      case 'meeting':
        return 'text-indigo-600'
      case 'study':
        return 'text-teal-600'
      case 'assignment':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  const getChildColor = (child: string) => {
    switch (child) {
      case 'Alex':
        return 'text-blue-600'
      case 'Emma':
        return 'text-purple-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <DashboardLayout role="parent">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Family Calendar</h1>
            <p className="text-gray-600">Track your children's schedules and events</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Event
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calendarStats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>
                Your children's next scheduled activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${getEventTypeColor(event.type).replace('text-', 'bg-').replace('-600', '-100')}`}>
                        {getEventTypeIcon(event.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">{event.title}</h4>
                          {getEventTypeBadge(event.type)}
                          <Badge variant="secondary" className={`${getChildColor(event.child).replace('text-', 'bg-').replace('-600', '-100')} ${getChildColor(event.child)}`}>
                            {event.child}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">Tutor: {event.tutor}</p>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Users className="h-4 w-4" />
                            <span>{event.participants} participants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* This Week's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>This Week's Schedule</CardTitle>
              <CardDescription>
                Weekly overview for both children
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {thisWeekSchedule.map((day) => (
                  <div key={day.day} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{day.day}</h4>
                      <span className="text-sm text-gray-500">{day.date}</span>
                    </div>
                    <div className="space-y-2">
                      {day.events.map((event, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                          <span className="text-sm font-medium text-gray-600 min-w-[60px]">{event.time}</span>
                          <div className={`p-1 rounded ${getEventTypeColor(event.type).replace('text-', 'bg-').replace('-600', '-100')}`}>
                            {getEventTypeIcon(event.type)}
                          </div>
                          <span className={`text-xs font-medium ${getChildColor(event.child)}`}>{event.child}</span>
                          <span className="text-sm text-gray-700">{event.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Children's Individual Schedules */}
        <Card>
          <CardHeader>
            <CardTitle>Children's Schedules</CardTitle>
            <CardDescription>
              Individual schedules for each child
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Alex's Schedule */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <h4 className="font-medium text-gray-900">Alex Chen</h4>
                </div>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Monday</span>
                      <span className="text-xs text-gray-500">2:00 PM</span>
                    </div>
                    <p className="text-sm text-gray-600">Advanced Calculus Class</p>
                    <p className="text-xs text-gray-500">Dr. Sarah Johnson</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Tuesday</span>
                      <span className="text-xs text-gray-500">10:00 AM</span>
                    </div>
                    <p className="text-sm text-gray-600">Physics Lab Session</p>
                    <p className="text-xs text-gray-500">Prof. Michael Chen</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Wednesday</span>
                      <span className="text-xs text-gray-500">3:00 PM</span>
                    </div>
                    <p className="text-sm text-gray-600">Tutor Meeting</p>
                    <p className="text-xs text-gray-500">Dr. Sarah Johnson</p>
                  </div>
                </div>
              </div>

              {/* Emma's Schedule */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-purple-600" />
                  <h4 className="font-medium text-gray-900">Emma Chen</h4>
                </div>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Monday</span>
                      <span className="text-xs text-gray-500">4:00 PM</span>
                    </div>
                    <p className="text-sm text-gray-600">Study Group</p>
                    <p className="text-xs text-gray-500">Group Session</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Tuesday</span>
                      <span className="text-xs text-gray-500">1:00 PM</span>
                    </div>
                    <p className="text-sm text-gray-600">English Literature Discussion</p>
                    <p className="text-xs text-gray-500">Prof. David Brown</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Thursday</span>
                      <span className="text-xs text-gray-500">2:00 PM</span>
                    </div>
                    <p className="text-sm text-gray-600">Chemistry Class</p>
                    <p className="text-xs text-gray-500">Dr. Emily Wilson</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Friday</span>
                      <span className="text-xs text-gray-500">3:00 PM</span>
                    </div>
                    <p className="text-sm text-gray-600">Chemistry Quiz</p>
                    <p className="text-xs text-gray-500">Dr. Emily Wilson</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common calendar tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Plus className="h-6 w-6" />
                <span>Add Event</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span>View Full Calendar</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Users className="h-6 w-6" />
                <span>Schedule Meeting</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span>Export Schedule</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
