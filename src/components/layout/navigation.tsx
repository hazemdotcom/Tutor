'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { 
  BookOpen, FileText, HelpCircle, Calendar, Receipt, FolderOpen, Users, 
  Settings, LogOut, Menu, X, Home, BarChart3, Video, MessageSquare
} from 'lucide-react'

interface NavigationProps {
  role: 'tutor' | 'student' | 'parent' | 'admin'
}

const navigationItems = {
  tutor: [
    { name: 'Dashboard', href: '/dashboard/tutor', icon: Home },
    { name: 'Courses', href: '/dashboard/tutor/courses', icon: BookOpen },
    { name: 'Assignments', href: '/dashboard/tutor/assignments', icon: FileText },
    { name: 'Quizzes', href: '/dashboard/tutor/quizzes', icon: HelpCircle },
    { name: 'Calendar', href: '/dashboard/tutor/calendar', icon: Calendar },
    { name: 'Students', href: '/dashboard/tutor/students', icon: Users },
    { name: 'Invoices', href: '/dashboard/tutor/invoices', icon: Receipt },
    { name: 'Documents', href: '/dashboard/tutor/documents', icon: FolderOpen },
  ],
  student: [
    { name: 'Dashboard', href: '/dashboard/student', icon: Home },
    { name: 'Courses', href: '/dashboard/student/courses', icon: BookOpen },
    { name: 'Assignments', href: '/dashboard/student/assignments', icon: FileText },
    { name: 'Quizzes', href: '/dashboard/student/quizzes', icon: HelpCircle },
    { name: 'Calendar', href: '/dashboard/student/calendar', icon: Calendar },
    { name: 'Meetings', href: '/dashboard/student/meetings', icon: Video },
    { name: 'Progress', href: '/dashboard/student/progress', icon: BarChart3 },
    { name: 'Documents', href: '/dashboard/student/documents', icon: FolderOpen },
  ],
  parent: [
    { name: 'Dashboard', href: '/dashboard/parent', icon: Home },
    { name: 'Children', href: '/dashboard/parent/children', icon: Users },
    { name: 'Progress', href: '/dashboard/parent/progress', icon: BarChart3 },
    { name: 'Invoices', href: '/dashboard/parent/invoices', icon: Receipt },
    { name: 'Calendar', href: '/dashboard/parent/calendar', icon: Calendar },
    { name: 'Messages', href: '/dashboard/parent/messages', icon: MessageSquare },
    { name: 'Documents', href: '/dashboard/parent/documents', icon: FolderOpen },
  ],
  admin: [
    { name: 'Dashboard', href: '/dashboard/admin', icon: Home },
    { name: 'Users', href: '/dashboard/admin/users', icon: Users },
    { name: 'Courses', href: '/dashboard/admin/courses', icon: BookOpen },
    { name: 'Invoices', href: '/dashboard/admin/invoices', icon: Receipt },
    { name: 'Reports', href: '/dashboard/admin/reports', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/admin/settings', icon: Settings },
  ]
}

export function Navigation({ role }: NavigationProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const items = navigationItems[role]

  const userInfo = {
    tutor: { name: 'Dr. Sarah Johnson', email: 'sarah@tutor.com', avatar: 'SJ' },
    student: { name: 'Alex Chen', email: 'alex@student.com', avatar: 'AC' },
    parent: { name: 'Maria Rodriguez', email: 'maria@parent.com', avatar: 'MR' },
    admin: { name: 'Admin User', email: 'admin@platform.com', avatar: 'AU' }
  }[role]

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-xl font-bold text-gray-900">Tutor Platform</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {items.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* User profile */}
          <div className="p-4 border-t border-gray-200">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start space-x-3 p-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-100 text-blue-700">
                      {userInfo.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-gray-900">{userInfo.name}</p>
                    <p className="text-xs text-gray-500">{userInfo.email}</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Topbar */}
      <div className="fixed top-0 right-0 left-0 lg:left-64 z-30 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <h1 className="text-lg font-semibold text-gray-900">
            {items.find(item => item.href === pathname)?.name || 'Dashboard'}
          </h1>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
