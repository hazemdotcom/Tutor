'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Eye, Filter, PlusCircle, CheckCircle, XCircle } from 'lucide-react'

export default function AdminUsersPage() {
  // ✅ Dummy users data
  const users = [
    {
      id: 'USR-001',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Admin',
      status: 'active',
    },
    {
      id: 'USR-002',
      name: 'Bob Smith',
      email: 'bob@example.com',
      role: 'Editor',
      status: 'inactive',
    },
    {
      id: 'USR-003',
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      role: 'Viewer',
      status: 'active',
    },
  ]

  // ✅ Status Badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case 'inactive':
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  // ✅ Status Icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'inactive':
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <XCircle className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-600">Manage all platform users and their roles</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </div>
        </div>

        {/* Users List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent className="divide-y">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between py-4 hover:bg-gray-50 rounded-md px-2"
              >
                <div className="flex items-center space-x-3">
                  {getStatusIcon(user.status)}
                  <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">
                      {user.email} • {user.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {getStatusBadge(user.status)}
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
