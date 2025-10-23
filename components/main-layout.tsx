"use client"

import * as React from "react"
import { MainSidebar } from "./main-sidebar"
import { MainHeader } from "./main-header"

/**
 * Props interface for the MainLayout component
 */
interface MainLayoutProps {
  /** The content to be rendered within the main layout */
  children: React.ReactNode
}

/**
 * MainLayout Component
 * 
 * This is the primary layout component that provides the overall structure
 * for the pharmacy POS application. It includes:
 * - A sidebar for navigation
 * - A header with user controls and notifications
 * - A main content area for page-specific content
 * 
 * The layout is designed to be responsive and provides a consistent
 * user experience across all pages of the application.
 * 
 * @param children - The page content to be rendered in the main area
 * @returns JSX element containing the complete application layout
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar navigation - contains main menu items */}
      <MainSidebar />
      
      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header with user controls, notifications, and search */}
        <MainHeader />
        
        {/* Main content area where page content is rendered */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
