"use client"

import * as React from "react"
import { Bell, AlertTriangle, CheckCircle, Info, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

/**
 * Notification data structure
 */
interface Notification {
  id: string
  type: "alert" | "success" | "info" | "warning"
  title: string
  message: string
  timestamp: string
  read: boolean
  action?: {
    label: string
    onClick: () => void
  }
}

/**
 * Sample notifications data
 */
const notifications: Notification[] = [
  {
    id: "1",
    type: "alert",
    title: "Low Stock Alert",
    message: "Aspirin 100mg is running low (5 units remaining)",
    timestamp: "2 minutes ago",
    read: false,
    action: {
      label: "Reorder Now",
      onClick: () => console.log("Reorder clicked")
    }
  },
  {
    id: "2", 
    type: "warning",
    title: "Expiry Warning",
    message: "Ibuprofen 200mg expires in 7 days",
    timestamp: "15 minutes ago",
    read: false,
    action: {
      label: "View Details",
      onClick: () => console.log("View details clicked")
    }
  },
  {
    id: "3",
    type: "success",
    title: "Order Completed",
    message: "Order #12345 has been successfully processed",
    timestamp: "1 hour ago",
    read: true
  },
  {
    id: "4",
    type: "info",
    title: "System Update",
    message: "New features have been added to the inventory module",
    timestamp: "2 hours ago",
    read: true
  }
]

/**
 * NotificationsPanel Component
 * 
 * A comprehensive notification system for the pharmacy POS system.
 * Features:
 * - Real-time alerts and notifications
 * - Different notification types (alerts, warnings, success, info)
 * - Mark as read functionality
 * - Action buttons for notifications
 * - Unread count badge
 * 
 * @returns JSX element containing the notification panel
 */
export function NotificationsPanel() {
  const [notificationsList, setNotificationsList] = React.useState(notifications)
  const [isOpen, setIsOpen] = React.useState(false)

  const unreadCount = notificationsList.filter(n => !n.read).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />
      default:
        return <Info className="h-4 w-4 text-gray-500" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "alert":
        return "border-l-red-500 bg-red-50"
      case "warning":
        return "border-l-yellow-500 bg-yellow-50"
      case "success":
        return "border-l-green-500 bg-green-50"
      case "info":
        return "border-l-blue-500 bg-blue-50"
      default:
        return "border-l-gray-500 bg-gray-50"
    }
  }

  const markAsRead = (id: string) => {
    setNotificationsList(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotificationsList(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    )
  }

  const removeNotification = (id: string) => {
    setNotificationsList(prev => 
      prev.filter(notification => notification.id !== id)
    )
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-96 sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            Notifications
            {unreadCount > 0 && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={markAllAsRead}
                className="text-xs"
              >
                Mark all as read
              </Button>
            )}
          </SheetTitle>
          <SheetDescription>
            {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up!"}
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          {notificationsList.length === 0 ? (
            <div className="text-center py-8">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No notifications yet</p>
            </div>
          ) : (
            notificationsList.map((notification) => (
              <Card 
                key={notification.id} 
                className={`border-l-4 ${getNotificationColor(notification.type)} ${
                  !notification.read ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {notification.timestamp}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 ml-2">
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeNotification(notification.id)}
                            className="h-6 w-6 p-0"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      
                      {notification.action && (
                        <div className="mt-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              notification.action?.onClick()
                              markAsRead(notification.id)
                            }}
                            className="text-xs"
                          >
                            {notification.action.label}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
