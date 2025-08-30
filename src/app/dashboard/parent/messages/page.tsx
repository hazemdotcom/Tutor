'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  MessageSquare, 
  Send, 
  Search, 
  Filter,
  User,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  MoreHorizontal,
  Reply,
  Archive,
  Trash2
} from 'lucide-react'

export default function ParentMessagesPage() {
  const recentMessages = [
    {
      id: 1,
      from: 'Dr. Sarah Johnson',
      to: 'Maria Rodriguez',
      subject: 'Alex\'s Progress Update',
      preview: 'I wanted to share some great news about Alex\'s performance in Calculus...',
      date: '2 hours ago',
      status: 'unread',
      type: 'tutor',
      child: 'Alex Chen'
    },
    {
      id: 2,
      from: 'Prof. David Brown',
      to: 'Maria Rodriguez',
      subject: 'Emma\'s Essay Assignment',
      preview: 'Emma has submitted her latest essay and I\'m pleased with her progress...',
      date: '1 day ago',
      status: 'read',
      type: 'tutor',
      child: 'Emma Chen'
    },
    {
      id: 3,
      from: 'Alex Chen',
      to: 'Maria Rodriguez',
      subject: 'Need help with Physics homework',
      preview: 'Mom, I\'m stuck on this physics problem and could use some help...',
      date: '2 days ago',
      status: 'read',
      type: 'child',
      child: 'Alex Chen'
    },
    {
      id: 4,
      from: 'Prof. Michael Chen',
      to: 'Maria Rodriguez',
      subject: 'Physics Lab Schedule Change',
      preview: 'Due to equipment maintenance, we need to reschedule next week\'s lab...',
      date: '3 days ago',
      status: 'read',
      type: 'tutor',
      child: 'Alex Chen'
    },
    {
      id: 5,
      from: 'Emma Chen',
      to: 'Maria Rodriguez',
      subject: 'Chemistry quiz results',
      preview: 'I got an A on my chemistry quiz! Dr. Wilson said I did really well...',
      date: '1 week ago',
      status: 'read',
      type: 'child',
      child: 'Emma Chen'
    }
  ]

  const contacts = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Calculus Tutor',
      child: 'Alex Chen',
      lastMessage: '2 hours ago',
      unreadCount: 1,
      online: true
    },
    {
      id: 2,
      name: 'Prof. David Brown',
      role: 'English Literature Tutor',
      child: 'Emma Chen',
      lastMessage: '1 day ago',
      unreadCount: 0,
      online: false
    },
    {
      id: 3,
      name: 'Prof. Michael Chen',
      role: 'Physics Tutor',
      child: 'Alex Chen',
      lastMessage: '3 days ago',
      unreadCount: 0,
      online: true
    },
    {
      id: 4,
      name: 'Dr. Emily Wilson',
      role: 'Chemistry Tutor',
      child: 'Emma Chen',
      lastMessage: '1 week ago',
      unreadCount: 0,
      online: false
    },
    {
      id: 5,
      name: 'Alex Chen',
      role: 'Son',
      child: 'Alex Chen',
      lastMessage: '2 days ago',
      unreadCount: 0,
      online: false
    },
    {
      id: 6,
      name: 'Emma Chen',
      role: 'Daughter',
      child: 'Emma Chen',
      lastMessage: '1 week ago',
      unreadCount: 0,
      online: false
    }
  ]

  const messageStats = [
    {
      title: 'Unread Messages',
      value: '3',
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Tutor Messages',
      value: '12',
      icon: User,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Children Messages',
      value: '8',
      icon: User,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'This Week',
      value: '15',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'unread':
        return <AlertCircle className="h-4 w-4 text-blue-600" />
      case 'read':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'tutor':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700">Tutor</Badge>
      case 'child':
        return <Badge variant="secondary" className="bg-purple-100 text-purple-700">Child</Badge>
      default:
        return <Badge variant="secondary">Message</Badge>
    }
  }

  const getChildColor = (child: string) => {
    switch (child) {
      case 'Alex Chen':
        return 'text-blue-600'
      case 'Emma Chen':
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
            <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600">Communicate with tutors and your children</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Message
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {messageStats.map((stat) => (
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

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contacts */}
          <Card>
            <CardHeader>
              <CardTitle>Contacts</CardTitle>
              <CardDescription>
                Tutors and family members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <div key={contact.id} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-gray-600" />
                        </div>
                        {contact.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900 truncate">{contact.name}</h4>
                          {contact.unreadCount > 0 && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                              {contact.unreadCount}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{contact.role}</p>
                        <p className="text-xs text-gray-500">{contact.child}</p>
                        <p className="text-xs text-gray-400">{contact.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>
                Latest communications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">{message.subject}</h4>
                          {getTypeBadge(message.type)}
                          <Badge variant="secondary" className={`${getChildColor(message.child).replace('text-', 'bg-').replace('-600', '-100')} ${getChildColor(message.child)}`}>
                            {message.child}
                          </Badge>
                          {message.status === 'unread' && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">New</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">From: {message.from}</p>
                        <p className="text-sm text-gray-700 mb-2">{message.preview}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>{message.date}</span>
                          <span>To: {message.to}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Reply className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common messaging tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Plus className="h-6 w-6" />
                <span>New Message</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <User className="h-6 w-6" />
                <span>Contact Tutors</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Archive className="h-6 w-6" />
                <span>Archive Messages</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Trash2 className="h-6 w-6" />
                <span>Delete Old</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Message Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Message Templates</CardTitle>
            <CardDescription>
              Quick message templates for common communications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Progress Inquiry</h4>
                <p className="text-sm text-gray-600 mb-3">Ask about your child's recent progress and performance</p>
                <Button size="sm" variant="outline">Use Template</Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Schedule Change</h4>
                <p className="text-sm text-gray-600 mb-3">Request to reschedule or modify tutoring sessions</p>
                <Button size="sm" variant="outline">Use Template</Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Concern Discussion</h4>
                <p className="text-sm text-gray-600 mb-3">Discuss any concerns about your child's learning</p>
                <Button size="sm" variant="outline">Use Template</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
