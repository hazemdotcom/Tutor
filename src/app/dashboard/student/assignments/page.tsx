'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function StudentAssignmentsPage() {
  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
            <p className="text-gray-600">View and submit your course assignments</p>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>My Assignments</CardTitle>
            <CardDescription>Track your assignment progress and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Calculus Assignment #6</h4>
                    <p className="text-sm text-gray-600">Advanced Calculus</p>
                    <p className="text-xs text-gray-500">Due: Tomorrow, 11:59 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-orange-100 text-orange-800">Due Soon</Badge>
                  <Button size="sm">Submit</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Physics Lab Report</h4>
                    <p className="text-sm text-gray-600">Physics Fundamentals</p>
                    <p className="text-xs text-gray-500">Due: Friday, 11:59 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                  <Button variant="outline" size="sm">Continue</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Chemistry Quiz</h4>
                    <p className="text-sm text-gray-600">Chemistry Lab</p>
                    <p className="text-xs text-gray-500">Completed: 2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
