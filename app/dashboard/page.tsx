"use client"

import * as React from "react"
import { MainLayout } from "@/components/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  ShoppingCart, 
  Users, 
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  Pill
} from "lucide-react"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts"

/**
 * Sample sales data for the weekly sales chart
 * Contains daily sales and prescription counts for the past week
 */
const salesData = [
  { name: "Mon", sales: 4000, prescriptions: 2400 },
  { name: "Tue", sales: 3000, prescriptions: 1398 },
  { name: "Wed", sales: 2000, prescriptions: 9800 },
  { name: "Thu", sales: 2780, prescriptions: 3908 },
  { name: "Fri", sales: 1890, prescriptions: 4800 },
  { name: "Sat", sales: 2390, prescriptions: 3800 },
  { name: "Sun", sales: 3490, prescriptions: 4300 },
]

/**
 * Inventory status data for the pie chart
 * Shows distribution of stock levels across different categories
 */
const inventoryData = [
  { name: "In Stock", value: 400, color: "#10b981" },
  { name: "Low Stock", value: 100, color: "#f59e0b" },
  { name: "Out of Stock", value: 50, color: "#ef4444" },
]

/**
 * Recent transactions data for the activity feed
 * Displays the latest sales and prescription transactions
 */
const recentTransactions = [
  { id: 1, customer: "John Smith", amount: 45.50, status: "completed", time: "2 min ago" },
  { id: 2, customer: "Sarah Johnson", amount: 78.25, status: "processing", time: "5 min ago" },
  { id: 3, customer: "Mike Wilson", amount: 32.10, status: "completed", time: "8 min ago" },
  { id: 4, customer: "Lisa Brown", amount: 156.75, status: "completed", time: "12 min ago" },
]

/**
 * Low stock items that need attention
 * Critical and warning level items that require restocking
 */
const lowStockItems = [
  { name: "Aspirin 100mg", current: 5, min: 20, status: "critical" },
  { name: "Ibuprofen 200mg", current: 12, min: 25, status: "warning" },
  { name: "Paracetamol 500mg", current: 8, min: 30, status: "critical" },
  { name: "Vitamin D3", current: 15, min: 20, status: "warning" },
]

/**
 * DashboardPage Component
 * 
 * The main dashboard page for the pharmacy POS system.
 * Provides a comprehensive overview of:
 * - Key performance metrics (sales, prescriptions, customers, inventory)
 * - Visual charts showing sales trends and inventory status
 * - Recent transaction activity
 * - Low stock alerts and notifications
 * 
 * Features:
 * - Real-time metrics with trend indicators
 * - Interactive charts for data visualization
 * - Activity feed for recent transactions
 * - Alert system for inventory management
 * - Responsive design for all screen sizes
 * 
 * @returns JSX element containing the complete dashboard interface
 */
export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page header with title and action buttons */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's what's happening at your pharmacy today.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Clock className="mr-2 h-4 w-4" />
              Today
            </Button>
            <Button size="sm">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Reports
            </Button>
          </div>
        </div>

        {/* Key Performance Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Sales Metric */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,345</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+20.1%</span> from last month
              </p>
            </CardContent>
          </Card>
          
          {/* Prescriptions Metric */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prescriptions</CardTitle>
              <Pill className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12%</span> from last month
              </p>
            </CardContent>
          </Card>
          
          {/* Customer Count Metric */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+5.2%</span> from last month
              </p>
            </CardContent>
          </Card>
          
          {/* Inventory Count Metric */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inventory</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600">-2.1%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Data Visualization Charts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Sales Overview Bar Chart */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Daily sales and prescription trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#10b981" />
                  <Bar dataKey="prescriptions" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          {/* Inventory Status Pie Chart */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Inventory Status</CardTitle>
              <CardDescription>Current stock levels</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={inventoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {inventoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed and Alert System */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Recent Transactions Activity Feed */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest sales and prescriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{transaction.customer}</p>
                      <p className="text-xs text-muted-foreground">{transaction.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">${transaction.amount}</span>
                      <Badge 
                        variant={transaction.status === "completed" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Low Stock Alerts and Inventory Management */}
          <Card>
            <CardHeader>
              <CardTitle>Low Stock Alerts</CardTitle>
              <CardDescription>Items that need restocking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lowStockItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.current} in stock (min: {item.min})
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={item.status === "critical" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {item.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Reorder
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
