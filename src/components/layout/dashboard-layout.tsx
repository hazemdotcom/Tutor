'use client'

import { Navigation } from './navigation'

interface DashboardLayoutProps {
  children: React.ReactNode
  role: 'tutor' | 'student' | 'parent' | 'admin'
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 fixed inset-y-0 left-0 bg-white shadow-lg">
        <Navigation role={role} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Topbar */}
        <header className="h-16 bg-white shadow flex items-center px-4">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
