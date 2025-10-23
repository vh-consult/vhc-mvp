"use client"

import * as React from "react"
import { MainLayout } from "@/components/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Plus, 
  Package, 
  Edit, 
  Trash2, 
  Filter,
  SortAsc,
  Grid,
  List,
  MoreHorizontal,
  Eye,
  ShoppingCart
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/**
 * Sample product data for the pharmacy inventory
 * Contains medication information, pricing, and stock levels
 */
const products = [
  {
    id: 1,
    name: "Aspirin 100mg",
    category: "Pain Relief",
    sku: "ASP-100-001",
    price: 12.99,
    stock: 45,
    minStock: 20,
    status: "in-stock",
    supplier: "MedSupply Co.",
    expiryDate: "2025-12-31"
  },
  {
    id: 2,
    name: "Ibuprofen 200mg",
    category: "Pain Relief", 
    sku: "IBU-200-001",
    price: 15.50,
    stock: 8,
    minStock: 25,
    status: "low-stock",
    supplier: "HealthPlus Ltd.",
    expiryDate: "2025-10-15"
  },
  {
    id: 3,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    sku: "PAR-500-001", 
    price: 8.75,
    stock: 0,
    minStock: 30,
    status: "out-of-stock",
    supplier: "PharmaCorp",
    expiryDate: "2025-08-20"
  },
  {
    id: 4,
    name: "Vitamin D3 1000IU",
    category: "Vitamins",
    sku: "VIT-D3-001",
    price: 22.99,
    stock: 32,
    minStock: 15,
    status: "in-stock",
    supplier: "NutriLife Inc.",
    expiryDate: "2026-03-10"
  },
  {
    id: 5,
    name: "Metformin 500mg",
    category: "Diabetes",
    sku: "MET-500-001",
    price: 18.25,
    stock: 28,
    minStock: 20,
    status: "in-stock",
    supplier: "DiabCare Pharma",
    expiryDate: "2025-11-30"
  }
]

/**
 * ProductsPage Component
 * 
 * Comprehensive product management interface for the pharmacy POS system.
 * Features include:
 * - Product catalog with search and filtering
 * - Stock level monitoring with alerts
 * - Product information management
 * - Supplier tracking and expiry dates
 * - Bulk operations and inventory actions
 * 
 * @returns JSX element containing the complete products management interface
 */
export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [viewMode, setViewMode] = React.useState<"grid" | "table">("table")
  const [filterStatus, setFilterStatus] = React.useState<string>("all")

  // Filter products based on search term and status
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = filterStatus === "all" || product.status === filterStatus
    
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-stock":
        return <Badge variant="default" className="bg-green-100 text-green-800">In Stock</Badge>
      case "low-stock":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Low Stock</Badge>
      case "out-of-stock":
        return <Badge variant="destructive">Out of Stock</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page header with title and actions */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Products</h1>
            <p className="text-muted-foreground">
              Manage your pharmacy inventory and product catalog.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </div>
        </div>

        {/* Search and filter controls */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products, SKU, category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "table" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("table")}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products table view */}
        {viewMode === "table" && (
          <Card>
            <CardHeader>
              <CardTitle>Product Inventory</CardTitle>
              <CardDescription>
                {filteredProducts.length} products found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Expiry</TableHead>
                    <TableHead className="w-[50px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {product.stock} units
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {product.sku}
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>${product.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{product.stock}</span>
                          {product.stock <= product.minStock && (
                            <Badge variant="destructive" className="text-xs">
                              Min: {product.minStock}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(product.status)}</TableCell>
                      <TableCell className="text-sm">{product.supplier}</TableCell>
                      <TableCell className="text-sm">{product.expiryDate}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Product
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Add to Cart
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Products grid view */}
        {viewMode === "grid" && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription className="font-mono text-sm">
                        {product.sku}
                      </CardDescription>
                    </div>
                    {getStatusBadge(product.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Category:</span>
                      <span>{product.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-medium">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Stock:</span>
                      <span className="font-medium">{product.stock} units</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Supplier:</span>
                      <span className="truncate">{product.supplier}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Package className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground text-center mb-4">
                {searchTerm ? "Try adjusting your search terms" : "Get started by adding your first product"}
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}
