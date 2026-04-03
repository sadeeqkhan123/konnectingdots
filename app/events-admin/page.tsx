"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PlusCircle, Edit, Ban, Upload, Sparkles } from "lucide-react"

type EventStatus = "upcoming" | "ongoing" | "completed" | "cancelled"
type EventFormat = "in-person" | "online" | "hybrid"

interface EventItem {
  id: string
  title: string
  description: string
  category: string
  date: string
  time: string
  location: string
  format: EventFormat
  price: number
  capacity: number
  registered: number
  status: EventStatus
}

const initialForm = {
  title: "",
  description: "",
  category: "",
  date: "",
  time: "",
  location: "",
  format: "in-person" as EventFormat,
  price: "0",
  capacity: "30",
  status: "upcoming" as EventStatus,
  image: "",
}

const CAPACITY_OPTIONS = [
  { label: "Theatre Style (120)", value: "120" },
  { label: "Classroom Style (60)", value: "60" },
  { label: "Workshop Style (40)", value: "40" },
  { label: "Boardroom Style (20)", value: "20" },
  { label: "VIP Session (12)", value: "12" },
]

export default function EventsAdminPage() {
  const [events, setEvents] = useState<EventItem[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [editingEventId, setEditingEventId] = useState<string | null>(null)
  const [uploadedImageName, setUploadedImageName] = useState("")
  const [form, setForm] = useState(initialForm)

  const loadEvents = async () => {
    try {
      const response = await fetch("/api/events")
      const data = await response.json()
      if (response.ok && data.success) {
        setEvents(data.events || [])
      }
    } catch (error) {
      console.error("Error loading events:", error)
    }
  }

  useEffect(() => {
    loadEvents()
  }, [])

  const resetForm = () => {
    setForm(initialForm)
    setEditingEventId(null)
    setUploadedImageName("")
  }

  const handleImageUpload = (file?: File) => {
    if (!file) return
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file")
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string
      setForm((prev) => ({ ...prev, image: dataUrl }))
      setUploadedImageName(file.name)
    }
    reader.readAsDataURL(file)
  }

  const handleSave = async () => {
    if (!form.title || !form.description || !form.category || !form.date || !form.time || !form.location) {
      alert("Please fill all required fields")
      return
    }

    setIsSaving(true)
    try {
      const payload = {
        title: form.title,
        description: form.description,
        category: form.category,
        date: form.date,
        time: form.time,
        location: form.location,
        format: form.format,
        price: Number(form.price),
        capacity: Number(form.capacity),
        status: form.status,
        image: form.image || undefined,
      }

      const url = editingEventId ? `/api/events/${editingEventId}` : "/api/events"
      const method = editingEventId ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to save event")
      }

      await loadEvents()
      setIsDialogOpen(false)
      resetForm()
    } catch (error) {
      console.error("Error saving event:", error)
      alert(error instanceof Error ? error.message : "Failed to save event")
    } finally {
      setIsSaving(false)
    }
  }

  const handleEdit = (event: EventItem) => {
    setEditingEventId(event.id)
    setForm({
      title: event.title,
      description: event.description,
      category: event.category,
      date: event.date,
      time: event.time,
      location: event.location,
      format: event.format,
      price: String(event.price),
      capacity: String(event.capacity),
      status: event.status,
      image: "",
    })
    setUploadedImageName("")
    setIsDialogOpen(true)
  }

  const handleCancel = async (eventId: string) => {
    if (!confirm("Mark this event as cancelled?")) return
    try {
      const response = await fetch(`/api/events/${eventId}`, { method: "DELETE" })
      const data = await response.json()
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to cancel event")
      }
      await loadEvents()
    } catch (error) {
      console.error("Error cancelling event:", error)
      alert("Failed to cancel event")
    }
  }

  const statusBadgeClass: Record<EventStatus, string> = {
    upcoming: "bg-blue-100 text-blue-800",
    ongoing: "bg-green-100 text-green-800",
    completed: "bg-gray-100 text-gray-800",
    cancelled: "bg-red-100 text-red-800",
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Events Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Create, update, and control training events from one panel</p>
          </div>
          <Dialog
            open={isDialogOpen}
            onOpenChange={(open) => {
              setIsDialogOpen(open)
              if (!open) resetForm()
            }}
          >
            <DialogTrigger asChild>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <PlusCircle className="mr-2 h-5 w-5" />
                Create Event
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto border-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50 shadow-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-2xl">
                  <Sparkles className="h-5 w-5 text-cyan-600" />
                  {editingEventId ? "Edit Event" : "Create New Event"}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 py-2 rounded-xl border border-cyan-100 bg-white/80 backdrop-blur-sm p-4">
                <div className="space-y-2">
                  <Label>Title *</Label>
                  <Input
                    className="bg-white/90 border-cyan-100 focus-visible:ring-cyan-300"
                    value={form.title}
                    onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Description *</Label>
                  <Textarea
                    className="bg-white/90 border-cyan-100 focus-visible:ring-cyan-300"
                    rows={4}
                    value={form.description}
                    onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category *</Label>
                    <Input
                      className="bg-white/90 border-cyan-100 focus-visible:ring-cyan-300"
                      value={form.category}
                      onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Format *</Label>
                    <Select value={form.format} onValueChange={(value: EventFormat) => setForm((prev) => ({ ...prev, format: value }))}>
                      <SelectTrigger className="bg-white/90 border-cyan-100 focus:ring-cyan-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-person">In-person</SelectItem>
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Date *</Label>
                    <Input
                      className="bg-white/90 border-cyan-100 focus-visible:ring-cyan-300"
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Time *</Label>
                    <Input
                      className="bg-white/90 border-cyan-100 focus-visible:ring-cyan-300"
                      value={form.time}
                      onChange={(e) => setForm((prev) => ({ ...prev, time: e.target.value }))}
                      placeholder="9:00 AM - 5:00 PM"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Status *</Label>
                    <Select value={form.status} onValueChange={(value: EventStatus) => setForm((prev) => ({ ...prev, status: value }))}>
                      <SelectTrigger className="bg-white/90 border-cyan-100 focus:ring-cyan-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Location *</Label>
                    <Input
                      className="bg-white/90 border-cyan-100 focus-visible:ring-cyan-300"
                      value={form.location}
                      onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Price (0 for free) *</Label>
                    <Input
                      className="bg-white/90 border-cyan-100 focus-visible:ring-cyan-300"
                      type="number"
                      min="0"
                      value={form.price}
                      onChange={(e) => setForm((prev) => ({ ...prev, price: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Capacity *</Label>
                    <Select value={form.capacity} onValueChange={(value) => setForm((prev) => ({ ...prev, capacity: value }))}>
                      <SelectTrigger className="bg-white/90 border-cyan-100 focus:ring-cyan-300">
                        <SelectValue placeholder="Select capacity style" />
                      </SelectTrigger>
                      <SelectContent>
                        {CAPACITY_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Event Image (optional upload)</Label>
                  <div className="flex gap-2">
                    <Input
                      className="bg-white/90 border-cyan-100"
                      value={uploadedImageName || "No image selected"}
                      readOnly
                    />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="event-image-upload"
                      onChange={(e) => handleImageUpload(e.target.files?.[0])}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="border-cyan-200 bg-white"
                      onClick={() => document.getElementById("event-image-upload")?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button onClick={handleSave} disabled={isSaving} className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    {isSaving ? "Saving..." : editingEventId ? "Update Event" : "Create Event"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsDialogOpen(false)
                      resetForm()
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{events.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{events.filter((e) => e.status === "upcoming").length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Ongoing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{events.filter((e) => e.status === "ongoing").length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Cancelled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">{events.filter((e) => e.status === "cancelled").length}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Training Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell className="font-medium">{event.title}</TableCell>
                      <TableCell>{new Date(event.date).toLocaleDateString("en-US")}</TableCell>
                      <TableCell>{event.location}</TableCell>
                      <TableCell>{event.price > 0 ? `$${event.price.toLocaleString()}` : "FREE"}</TableCell>
                      <TableCell>
                        <Badge className={statusBadgeClass[event.status]}>{event.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" onClick={() => handleEdit(event)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleCancel(event.id)}
                            disabled={event.status === "cancelled"}
                          >
                            <Ban className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
