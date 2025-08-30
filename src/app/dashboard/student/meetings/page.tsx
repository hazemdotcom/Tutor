'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Video, 
  Clock, 
  MapPin, 
  Users, 
  Calendar,
  MessageSquare,
  Plus,
  Play,
  CheckCircle,
  AlertCircle,
  User
} from 'lucide-react'

export default function StudentMeetingsPage() {
  const upcomingMeetings = [
    {
      id: 1,
      title: 'Calculus Problem Solving Session',
      tutor: 'Dr. Sarah Johnson',
      date: 'Today, 3:00 PM - 4:00 PM',
      duration: '1 hour',
      type: 'one-on-one',
      platform: 'Zoom',
      link: 'https://zoom.us/j/123456789',
      status: 'scheduled',
      participants: 2
    },
    {
      id: 2,
      title: 'Physics Study Group',
      tutor: 'Prof. Michael Chen',
      date: 'Tomorrow, 2:00 PM - 3:30 PM',
      duration: '1.5 hours',
      type: 'group',
      platform: 'Google Meet',
      link: 'https://meet.google.com/abc-defg-hij',
      status: 'scheduled',
      participants: 6
    },
    {
      id: 3,
      title: 'English Essay Review',
      tutor: 'Prof. David Brown',
      date: 'Wednesday, 1:00 PM - 1:30 PM',
      duration: '30 minutes',
      type: 'one-on-one',
      platform: 'Microsoft Teams',
      link: 'https://teams.microsoft.com/l/meetup-join/...',
      status: 'scheduled',
      participants: 2
    }
  ]

  const recentMeetings = [
    {
      id: 1,
      title: 'Chemistry Lab Discussion',
      tutor: 'Dr. Emily Wilson',
      date: 'Yesterday, 4:00 PM',
      duration: '45 minutes',
      type: 'one-on-one',
      status: 'completed',
      notes: 'Reviewed lab safety procedures and experiment setup'
    },
    {
      id: 2,
      title: 'Math Homework Help',
      tutor: 'Dr. Sarah Johnson',
      date: 'Last Week',
      duration: '1 hour',
      type: 'one-on-one',
      status: 'completed',
      notes: 'Worked through calculus problems and clarified concepts'
    },
    {
      id: 3,
      title: 'Physics Group Study',
      tutor: 'Prof. Michael Chen',
      date: '2 weeks ago',
      duration: '2 hours',
      type: 'group',
      status: 'completed',
      notes: 'Group discussion on Newton\'s laws and problem solving'
    }
  ]

  const meetingStats = [
    {
      title: 'Upcoming Meetings',
      value: '3',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Meetings This Month',
      value: '12',
      icon: Video,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Average Duration',
      value: '1.2h',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Study Hours',
      value: '14.5h',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  const availableSlots = [
    {
      id: 1,
      tutor: 'Dr. Sarah Johnson',
      subject: 'Calculus',
      date: 'Tomorrow',
      time: '10:00 AM - 11:00 AM',
      type: 'one-on-one'
    },
    {
      id: 2,
      tutor: 'Prof. Michael Chen',
      subject: 'Physics',
      date: 'Thursday',
      time: '2:00 PM - 3:00 PM',
      type: 'one-on-one'
    },
    {
      id: 3,
      tutor: 'Dr. Emily Wilson',
      subject: 'Chemistry',
      date: 'Friday',
      time: '1:00 PM - 2:00 PM',
      type: 'one-on-one'
    }
  ]

  const getMeetingTypeIcon = (type: string) => {
    switch (type) {
      case 'one-on-one':
        return <User className="h-4 w-4" />
      case 'group':
        return <Users className="h-4 w-4" />
      default:
        return <Video className="h-4 w-4" />
    }
  }

  const getMeetingTypeBadge = (type: string) => {
    switch (type) {
      case 'one-on-one':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700">One-on-One</Badge>
      case 'group':
        return <Badge variant="secondary" className="bg-green-100 text-green-700">Group</Badge>
      default:
        return <Badge variant="secondary">Meeting</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Badge variant="secondary" className="bg-orange-100 text-orange-700">Scheduled</Badge>
      case 'completed':
        return <Badge variant="secondary" className="bg-green-100 text-green-700">Completed</Badge>
      case 'cancelled':
        return <Badge variant="secondary" className="bg-red-100 text-red-700">Cancelled</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Meetings</h1>
            <p className="text-gray-600">Schedule and manage your tutoring sessions</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Book Meeting
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {meetingStats.map((stat) => (
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
          {/* Upcoming Meetings */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Meetings</CardTitle>
              <CardDescription>
                Your scheduled tutoring sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div key={meeting.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">{meeting.title}</h4>
                          {getMeetingTypeBadge(meeting.type)}
                          {getStatusBadge(meeting.status)}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Tutor: {meeting.tutor}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{meeting.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{meeting.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{meeting.participants} participants</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">Platform: {meeting.platform}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm">
                          <Play className="mr-2 h-4 w-4" />
                          Join
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Meetings */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Meetings</CardTitle>
              <CardDescription>
                Your completed tutoring sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMeetings.map((meeting) => (
                  <div key={meeting.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">{meeting.title}</h4>
                          {getMeetingTypeBadge(meeting.type)}
                          {getStatusBadge(meeting.status)}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Tutor: {meeting.tutor}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{meeting.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{meeting.duration}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">{meeting.notes}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Notes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Slots */}
        <Card>
          <CardHeader>
            <CardTitle>Available Slots</CardTitle>
            <CardDescription>
              Book a session with your tutors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {availableSlots.map((slot) => (
                <div key={slot.id} className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-medium text-gray-900">{slot.tutor}</h4>
                    {getMeetingTypeBadge(slot.type)}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Subject: {slot.subject}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{slot.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{slot.time}</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    Book Slot
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common meeting tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Plus className="h-6 w-6" />
                <span>Book Meeting</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <MessageSquare className="h-6 w-6" />
                <span>Send Message</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span>View Schedule</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Users className="h-6 w-6" />
                <span>Study Groups</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
