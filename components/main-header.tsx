"use client"

import * as React from "react"
import { Bell, Search, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
 * MainHeader Component
 * 
 * The top header bar for the pharmacy POS system containing:
 * - Mobile menu toggle (responsive)
 * - Global search functionality
 * - Notification center with badge count
 * - User profile dropdown with account options
 * 
 * Features:
 * - Responsive design with mobile menu toggle
 * - Global search for products and customers
 * - Notification system with unread count badge
 * - User profile management
 * - Clean, accessible interface
 * 
 * @returns JSX element containing the complete header with navigation and user controls
 */
export function MainHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      {/* Left section: Mobile menu and search */}
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle - only visible on mobile devices */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        
        {/* Global search input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products, customers..."
            className="w-80 pl-10"
          />
        </div>
      </div>
      
      {/* Right section: Notifications and user profile */}
      <div className="flex items-center gap-4">
        {/* Notification bell with unread count badge */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          >
            3
          </Badge>
        </Button>
        
        {/* User profile dropdown menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            {/* User information header */}
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">
                  john.doe@pharmacy.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            {/* Profile management options */}
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            
            {/* Logout option */}
            <DropdownMenuItem>
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
