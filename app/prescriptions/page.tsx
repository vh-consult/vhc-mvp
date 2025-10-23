"use client"

import * as React from "react"
import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Pill, 
  User,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  Filter,
  Download,
  Eye
} from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// Sample prescription data
const prescriptionsData = [
  {
    id: 1,
    prescriptionNumber: "RX-2024-001",
    patientName: "John Smith",
    doctorName: "Dr. Sarah Wilson",
    medication: "Lisinopril 10mg",
    dosage: "10mg once daily",
    quantity: 30,
    refills: 3,
    datePrescribed: "2024-01-10",
    dateFilled: "2024-01-10",
    expiryDate: "2024-07-10",
    status: "filled",
    notes: "Take with food"
  },
  {
    id: 2,
    prescriptionNumber: "RX-2024-002",
    patientName: "Sarah Johnson",
    doctorName: "Dr. Michael Brown",
    medication: "Metformin 500mg",
    dosage: "500mg twice daily",
    quantity: 60,
    refills: 2,
    datePrescribed: "2024-01-08",
    dateFilled: "2024-01-08",
    expiryDate: "2024-07-08",
    status: "filled",
    notes: "Monitor blood sugar"
  },
  {
    id: 3,
    prescriptionNumber: "RX-2024-003",
    patientName: "Mike Wilson",
    doctorName: "Dr. Lisa Davis",
    medication: "Atorvastatin 20mg",
    dosage: "20mg once daily",
    quantity: 30,
    refills: 0,
    datePrescribed: "2024-01-05",
    dateFilled: null,
    expiryDate: "2024-07-05",
    status: "pending",
    notes: "Take in the evening"
  },
  {
    id: 4,
    prescriptionNumber: "RX-2024-004",
    patientName: "Lisa Brown",
    doctorName: "Dr. Robert Taylor",
    medication: "Amlodipine 5mg",
    dosage: "5mg once daily",
    quantity: 30,
    refills: 1,
    datePrescribed: "2024-01-03",
    dateFilled: "2024-01-03",
    expiryDate: "2024-07-03",
    status: "expired",
    notes: "Check blood pressure regularly"
  },
  {
    id: 5,
    prescriptionNumber: "RX-2024-005",
    patientName: "Robert Davis",
    doctorName: "Dr. Jennifer Lee",
    medication: "Omeprazole 20mg",
    dosage: "20mg once daily",
    quantity: 30,
    refills: 2,
    datePrescribed: "2024-01-01",
    dateFilled: "2024-01-01",
    expiryDate: "2024-07-01",
    status: "filled",
    notes: "Take before breakfast"
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "filled":
      return <Badge variant="default" className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Filled</Badge>
    case "pending":
      return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800"><Clock className="w-3 h-3 mr-1" />Pending</Badge>
    case "expired":
      return <Badge variant="destructive"><AlertTriangle className="w-3 h-3 mr-1" />Expired</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function PrescriptionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const statuses = ["all", "filled", "pending", "expired"]

  const filteredData = prescriptionsData.filter(prescription => {
    const matchesSearch = prescription.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prescription.medication.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prescription.prescriptionNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prescription.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || prescription.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const filledPrescriptions = prescriptionsData.filter(p => p.status === "filled")
  const pendingPrescriptions = prescriptionsData.filter(p => p.status === "pending")
  const expiredPrescriptions = prescriptionsData.filter(p => p.status === "expired")

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Prescription Management</h1>
            <p className="text-muted-foreground">
              Manage prescriptions, track refills, and monitor patient medications.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Prescription
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Prescription</DialogTitle>
                  <DialogDescription>
                    Add a new prescription to the system.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="patient" className="text-right">Patient</Label>
                    <Input id="patient" className="col-span-3" placeholder="Patient name" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="doctor" className="text-right">Doctor</Label>
                    <Input id="doctor" className="col-span-3" placeholder="Doctor name" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="medication" className="text-right">Medication</Label>
                    <Input id="medication" className="col-span-3" placeholder="Medication name" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="dosage" className="text-right">Dosage</Label>
                    <Input id="dosage" className="col-span-3" placeholder="Dosage instructions" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="quantity" className="text-right">Quantity</Label>
                    <Input id="quantity" type="number" className="col-span-3" placeholder="30" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsAddDialogOpen(false)}>
                    Add Prescription
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Prescriptions</CardTitle>
              <Pill className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{prescriptionsData.length}</div>
              <p className="text-xs text-muted-foreground">
                All prescriptions
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Filled</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{filledPrescriptions.length}</div>
              <p className="text-xs text-muted-foreground">
                Successfully filled
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{pendingPrescriptions.length}</div>
              <p className="text-xs text-muted-foreground">
                Awaiting fulfillment
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expired</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{expiredPrescriptions.length}</div>
              <p className="text-xs text-muted-foreground">
                Need attention
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search prescriptions by patient, medication, or prescription number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map(status => (
                    <SelectItem key={status} value={status}>
                      {status === "all" ? "All Status" : status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Prescriptions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Prescription List</CardTitle>
            <CardDescription>
              Manage prescriptions and track their status.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prescription #</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Medication</TableHead>
                  <TableHead>Dosage</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Refills</TableHead>
                  <TableHead>Date Filled</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((prescription) => (
                  <TableRow key={prescription.id}>
                    <TableCell className="font-medium">{prescription.prescriptionNumber}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {prescription.patientName}
                      </div>
                    </TableCell>
                    <TableCell>{prescription.doctorName}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Pill className="h-4 w-4" />
                        {prescription.medication}
                      </div>
                    </TableCell>
                    <TableCell>{prescription.dosage}</TableCell>
                    <TableCell>{prescription.quantity}</TableCell>
                    <TableCell>
                      <div className="text-center">
                        <div className="font-medium">{prescription.refills}</div>
                        <div className="text-xs text-muted-foreground">remaining</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <Calendar className="h-3 w-3" />
                        {prescription.dateFilled ? new Date(prescription.dateFilled).toLocaleDateString() : "Not filled"}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(prescription.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
