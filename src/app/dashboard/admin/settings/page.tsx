'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Settings, 
  Shield, 
  Users, 
  Bell, 
  Database, 
  Save,
  Eye,
  Trash2,
  Download,
  Upload,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react'

export default function AdminSettingsPage() {
  // ✅ Mock data
  const systemStatus = {
    uptime: '99.9%',
    lastBackup: '2 hours ago',
    storageUsed: 75,
    activeUsers: 892,
    systemVersion: 'v2.1.4',
    lastUpdate: '3 days ago'
  }

  const securitySettings = {
    twoFactorEnabled: true,
    sessionTimeout: 30,
    passwordPolicy: 'Strong',
    failedLoginAttempts: 3,
    lastSecurityAudit: '1 week ago',
    sslEnabled: true
  }

  const notificationSettings = {
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    weeklyReports: true,
    securityAlerts: true,
    maintenanceAlerts: true
  }

  const platformSettings = {
    maintenanceMode: false,
    registrationEnabled: true,
    emailVerification: true
  }

  const recentActivities = [
    { action: 'Security audit completed', time: '1 hour ago', status: 'success' },
    { action: 'System backup completed', time: '2 hours ago', status: 'success' },
    { action: 'New user registration', time: '3 hours ago', status: 'info' },
    { action: 'Payment processed', time: '4 hours ago', status: 'success' },
    { action: 'Course created', time: '5 hours ago', status: 'info' }
  ]

  const getActivityIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-blue-600" />
    }
  }

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Platform Settings</h1>
            <p className="text-gray-600">Manage platform configuration and preferences</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStatus.uptime}</div>
              <p className="text-xs text-gray-600">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage Usage</CardTitle>
              <Database className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStatus.storageUsed}%</div>
              <Progress value={systemStatus.storageUsed} className="h-2 mt-2" />
              <p className="text-xs text-gray-600">Used space</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStatus.activeUsers}</div>
              <p className="text-xs text-gray-600">Currently online</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Version</CardTitle>
              <Settings className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStatus.systemVersion}</div>
              <p className="text-xs text-gray-600">Last updated {systemStatus.lastUpdate}</p>
            </CardContent>
          </Card>
        </div>

        {/* Security + Quick Actions + Platform Settings + Recent Activity + Notifications */}
        {/* ... keep your sections exactly as you wrote them ... */}

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notification Settings</span>
            </CardTitle>
            <CardDescription>Configure system notifications and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            {/* notificationSettings mapped exactly as before */}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
