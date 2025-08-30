'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Receipt, 
  DollarSign, 
  CreditCard, 
  Download, 
  Eye,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  Plus
} from 'lucide-react'

export default function ParentInvoicesPage() {
  const recentInvoices = [
    {
      id: 'INV-001',
      child: 'Alex Chen',
      course: 'Advanced Calculus',
      tutor: 'Dr. Sarah Johnson',
      amount: 450.00,
      date: '2024-01-15',
      dueDate: '2024-01-30',
      status: 'paid',
      sessions: 12,
      hours: 18
    },
    {
      id: 'INV-002',
      child: 'Emma Chen',
      course: 'English Literature',
      tutor: 'Prof. David Brown',
      amount: 320.00,
      date: '2024-01-10',
      dueDate: '2024-01-25',
      status: 'pending',
      sessions: 8,
      hours: 12
    },
    {
      id: 'INV-003',
      child: 'Alex Chen',
      course: 'Physics Fundamentals',
      tutor: 'Prof. Michael Chen',
      amount: 380.00,
      date: '2024-01-05',
      dueDate: '2024-01-20',
      status: 'overdue',
      sessions: 10,
      hours: 15
    },
    {
      id: 'INV-004',
      child: 'Emma Chen',
      course: 'Chemistry Lab',
      tutor: 'Dr. Emily Wilson',
      amount: 280.00,
      date: '2023-12-28',
      dueDate: '2024-01-12',
      status: 'paid',
      sessions: 6,
      hours: 9
    }
  ]

  const upcomingPayments = [
    {
      id: 'INV-005',
      child: 'Alex Chen',
      course: 'Advanced Calculus',
      amount: 450.00,
      dueDate: '2024-02-15',
      sessions: 12
    },
    {
      id: 'INV-006',
      child: 'Emma Chen',
      course: 'English Literature',
      amount: 320.00,
      dueDate: '2024-02-10',
      sessions: 8
    }
  ]

  const billingStats = [
    {
      title: 'Total Spent This Month',
      value: '$1,430.00',
      change: '+$180.00',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Outstanding Balance',
      value: '$700.00',
      change: '-$120.00',
      trend: 'down',
      icon: Receipt,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Active Courses',
      value: '4',
      change: '+1',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Sessions',
      value: '36',
      change: '+8',
      trend: 'up',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  const paymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      last4: '4242',
      expiry: '12/25',
      isDefault: true
    },
    {
      id: 2,
      type: 'Bank Account',
      last4: '1234',
      expiry: null,
      isDefault: false
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge variant="secondary" className="bg-green-100 text-green-700">Paid</Badge>
      case 'pending':
        return <Badge variant="secondary" className="bg-orange-100 text-orange-700">Pending</Badge>
      case 'overdue':
        return <Badge variant="secondary" className="bg-red-100 text-red-700">Overdue</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'pending':
        return <Clock className="h-4 w-4 text-orange-600" />
      case 'overdue':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <XCircle className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <DashboardLayout role="parent">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Invoices & Billing</h1>
            <p className="text-gray-600">Manage payments and billing for your children's tutoring</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Payment Method
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {billingStats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center space-x-1">
                      {stat.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      ) : (
                        <TrendingUp className="h-3 w-3 text-red-600 transform rotate-180" />
                      )}
                      <p className="text-xs text-green-600">{stat.change} from last month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Invoices */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
              <CardDescription>
                Latest billing statements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInvoices.map((invoice) => (
                  <div key={invoice.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">{invoice.id}</h4>
                          {getStatusBadge(invoice.status)}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{invoice.child} • {invoice.course}</p>
                        <p className="text-sm text-gray-600 mb-2">Tutor: {invoice.tutor}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                          <span>{invoice.sessions} sessions</span>
                          <span>{invoice.hours} hours</span>
                          <span>Due: {invoice.dueDate}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">${invoice.amount.toFixed(2)}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Payments */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Payments</CardTitle>
              <CardDescription>
                Scheduled payments for next month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingPayments.map((payment) => (
                  <div key={payment.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">{payment.id}</h4>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">Upcoming</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{payment.child} • {payment.course}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
                          <span>{payment.sessions} sessions</span>
                          <span>Due: {payment.dueDate}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">${payment.amount.toFixed(2)}</p>
                        <Button size="sm" className="mt-2">
                          Pay Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>
              Your saved payment options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <CreditCard className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{method.type}</p>
                        <p className="text-sm text-gray-600">
                          **** **** **** {method.last4}
                          {method.expiry && ` • Expires ${method.expiry}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {method.isDefault && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Default</Badge>
                      )}
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Billing Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Billing Summary</CardTitle>
            <CardDescription>
              Monthly breakdown of tutoring costs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Alex Chen</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Advanced Calculus</span>
                    <span className="text-sm font-medium">$450.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Physics Fundamentals</span>
                    <span className="text-sm font-medium">$380.00</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">Total</span>
                      <span className="text-sm font-medium text-gray-900">$830.00</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Emma Chen</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">English Literature</span>
                    <span className="text-sm font-medium">$320.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Chemistry Lab</span>
                    <span className="text-sm font-medium">$280.00</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">Total</span>
                      <span className="text-sm font-medium text-gray-900">$600.00</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Monthly Total</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Subtotal</span>
                    <span className="text-sm font-medium">$1,430.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Tax</span>
                    <span className="text-sm font-medium">$0.00</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-gray-900">$1,430.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
