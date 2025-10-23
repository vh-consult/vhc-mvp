"use client"

import * as React from "react"
import { MainSidebar } from "./main-sidebar"
import { MainHeader } from "./main-header"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <MainHeader />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
