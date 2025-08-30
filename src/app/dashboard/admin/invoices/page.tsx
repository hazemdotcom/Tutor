'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Download, Eye, Filter, AlertCircle, CheckCircle } from 'lucide-react'

export default function AdminInvoicesPage() {
  // ✅ Dummy invoices data
  const invoices = [
    {
      id: 'INV-001',
      customer: 'John Doe',
      date: '2025-08-20',
      amount: 250.0,
      status: 'paid',
    },
    {
      id: 'INV-002',
      customer: 'Sarah Smith',
      date: '2025-08-22',
      amount: 480.0,
      status: 'pending',
    },
    {
      id: 'INV-003',
      customer: 'Michael Brown',
      date: '2025-08-25',
      amount: 320.0,
      status: 'overdue',
    },
  ]

  // ✅ Status Badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case 'overdue':
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  // ✅ Status Icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      case 'overdue':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
            <p className="text-gray-600">Manage all platform invoices and payments</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Invoices List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Invoices</CardTitle>
          </CardHeader>
          <CardContent className="divide-y">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between py-4 hover:bg-gray-50 rounded-md px-2"
              >
                <div className="flex items-center space-x-3">
                  {getStatusIcon(invoice.status)}
                  <div>
                    <p className="font-medium text-gray-900">{invoice.customer}</p>
                    <p className="text-sm text-gray-500">
                      {invoice.id} • {invoice.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold">${invoice.amount.toFixed(2)}</p>
                  {getStatusBadge(invoice.status)}
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
