"use client"

import * as React from "react"
import { Home, Package, ShoppingCart, Users, BarChart3, Settings, Pill, FileText, Calendar } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

/**
 * Navigation configuration for the main sidebar
 * Each item represents a major section of the pharmacy POS system
 */
const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
    description: "Overview of daily operations and key metrics"
  },
  {
    name: "POS System",
    href: "/pos",
    icon: ShoppingCart,
    description: "Point of sale interface for processing transactions"
  },
  {
    name: "Products",
    href: "/products",
    icon: Package,
    description: "Product catalog and inventory management"
  },
  {
    name: "Inventory",
    href: "/inventory",
    icon: Package,
    description: "Stock levels, suppliers, and warehouse management"
  },
  {
    name: "Customers",
    href: "/customers",
    icon: Users,
    description: "Customer database and relationship management"
  },
  {
    name: "Prescriptions",
    href: "/prescriptions",
    icon: Pill,
    description: "Digital prescription management and tracking"
  },
  {
    name: "Reports",
    href: "/reports",
    icon: BarChart3,
    description: "Analytics, reports, and business insights"
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
    description: "System configuration and user preferences"
  },
]

/**
 * MainSidebar Component
 * 
 * The primary navigation sidebar for the pharmacy POS system.
 * Provides navigation to all major sections of the application including:
 * - Dashboard for overview and metrics
 * - POS System for transaction processing
 * - Inventory management
 * - Customer management
 * - Prescription handling
 * - Reports and analytics
 * - System settings
 * 
 * Features:
 * - Active route highlighting
 * - Responsive design
 * - User profile display
 * - Clean, accessible navigation
 * 
 * @returns JSX element containing the complete sidebar navigation
 */
export function MainSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Header section with pharmacy branding */}
      <div className="flex h-16 items-center px-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          {/* Pharmacy icon */}
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <Pill className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
          {/* Pharmacy name and description */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-sidebar-foreground">Pharmacy POS</span>
            <span className="text-xs text-sidebar-foreground/70">Management System</span>
          </div>
        </div>
      </div>
      
      {/* Main navigation menu */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Button
              key={item.name}
              asChild
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-10",
                isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
              )}
            >
              <Link href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          )
        })}
      </nav>
      
      {/* Separator before user profile */}
      <Separator className="mx-4" />
      
      {/* User profile section */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          {/* User avatar */}
          <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center">
            <span className="text-xs font-medium text-sidebar-accent-foreground">JD</span>
          </div>
          {/* User information */}
          <div className="flex flex-col">
            <span className="text-sm font-medium text-sidebar-foreground">John Doe</span>
            <span className="text-xs text-sidebar-foreground/70">Pharmacist</span>
          </div>
        </div>
      </div>
    </div>
  )
}
