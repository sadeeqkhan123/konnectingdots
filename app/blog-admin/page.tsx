"use client"

import { useState, useEffect } from "react"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Upload, Eye, Edit, Trash2, FileText, CheckCircle, XCircle } from "lucide-react"
import { RichTextEditor } from "@/components/rich-text-editor"

export default function BlogAdminPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "The Science Behind Rapid Personal Transformation",
      category: "NLP Techniques",
      author: "Yousif Mangi",
      date: "March 15, 2024",
      status: "Published",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "5 NLP Anchoring Techniques That Actually Work",
      category: "NLP Techniques",
      author: "Yousif Mangi",
      date: "March 12, 2024",
      status: "Published",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Building Inclusive Teams: A Practical Guide",
      category: "Corporate Training",
      author: "Yousif Mangi",
      date: "March 8, 2024",
      status: "Draft",
      image: "/placeholder.svg",
    },
  ])

  const [newPost, setNewPost] = useState({
    title: "",
    category: "",
    content: "",
    excerpt: "",
    author: "",
    image: "",
    submittedBy: "",
    submittedByEmail: "",
  })

  const [isCreating, setIsCreating] = useState(false)

  const handleCreatePost = async () => {
    if (!newPost.title || !newPost.category || !newPost.author || !newPost.content || !newPost.excerpt) {
      alert("Please fill in all required fields")
      return
    }

    setIsCreating(true)

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newPost.title,
          category: newPost.category,
          author: newPost.author,
          excerpt: newPost.excerpt,
          content: newPost.content,
          image: newPost.image || "/placeholder.svg",
          status: "pending",
          submittedBy: newPost.submittedBy || newPost.author,
          submittedByEmail: newPost.submittedByEmail?.trim() || undefined,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        const errorMessage = data.error || data.details?.map((d: any) => d.message).join(", ") || `HTTP error! status: ${response.status}`
        throw new Error(errorMessage)
      }

      if (data.success) {
        // Refresh the blog posts list
        const postsResponse = await fetch("/api/blog")
        const postsData = await postsResponse.json()
        if (postsData.success) {
          setBlogPosts(
            postsData.posts.map((post: any) => ({
              id: post.id,
              title: post.title,
              category: post.category,
              author: post.author,
              date: new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }),
              status: post.status === "published" ? "Published" : post.status === "pending" ? "Pending" : post.status === "rejected" ? "Rejected" : "Draft",
              image: post.image,
            })),
          )
        }
        setNewPost({ title: "", category: "", content: "", excerpt: "", author: "", image: "", submittedBy: "", submittedByEmail: "" })
        setIsDialogOpen(false)
        alert("Blog post created successfully!")
      } else {
        throw new Error(data.error || "Failed to create post")
      }
    } catch (error) {
      console.error("Error creating blog post:", error)
      const errorMessage = error instanceof Error ? error.message : "Failed to create blog post. Please try again."
      alert(`Error: ${errorMessage}`)
    } finally {
      setIsCreating(false)
    }
  }

  // Load blog posts on component mount
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch("/api/blog")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if (data.success) {
          setBlogPosts(
            data.posts.map((post: any) => ({
              id: post.id,
              title: post.title,
              category: post.category,
              author: post.author,
              date: new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }),
              status: post.status === "published" ? "Published" : post.status === "pending" ? "Pending" : post.status === "rejected" ? "Rejected" : "Draft",
              image: post.image,
            })),
          )
        }
      } catch (error) {
        console.error("Error loading blog posts:", error)
      }
    }
    loadPosts()
  }, [])

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Blog Management</h1>
              <p className="text-gray-600 dark:text-gray-400">Create and manage your blog posts</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Create New Post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Create New Blog Post</DialogTitle>
                  <DialogDescription>Fill in the details to create a new blog post</DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Blog Title *</Label>
                    <Input
                      id="title"
                      placeholder="Enter blog title..."
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    />
                  </div>

                  {/* Category and Author */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={newPost.category}
                        onValueChange={(value) => setNewPost({ ...newPost, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NLP Techniques">NLP Techniques</SelectItem>
                          <SelectItem value="Hypnosis & Healing">Hypnosis & Healing</SelectItem>
                          <SelectItem value="Corporate Training">Corporate Training</SelectItem>
                          <SelectItem value="Personal Development">Personal Development</SelectItem>
                          <SelectItem value="Case Study">Case Study</SelectItem>
                          <SelectItem value="Wellness">Wellness</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="author">Author Name *</Label>
                      <Input
                        id="author"
                        placeholder="Enter author name..."
                        value={newPost.author}
                        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Short Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      placeholder="Write a brief description (150-200 characters)..."
                      rows={3}
                      value={newPost.excerpt}
                      onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                    />
                  </div>

                  {/* Featured Image */}
                  <div className="space-y-2">
                    <Label htmlFor="image">Featured Image URL</Label>
                    <div className="flex gap-2">
                      <Input
                        id="image"
                        placeholder="Enter image URL or upload from computer..."
                        value={newPost.image}
                        onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                      />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="featured-image-upload"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (!file) return
                          if (!file.type.startsWith("image/")) {
                            alert("Please select an image file")
                            return
                          }
                          const reader = new FileReader()
                          reader.onload = (event) => {
                            const dataUrl = event.target?.result as string
                            setNewPost({ ...newPost, image: dataUrl })
                          }
                          reader.readAsDataURL(file)
                        }}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => document.getElementById("featured-image-upload")?.click()}
                        title="Upload from computer"
                      >
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                    {newPost.image && newPost.image.startsWith("data:image") && (
                      <p className="text-xs text-muted-foreground">
                        Image uploaded (using base64). For production, consider using a cloud storage service.
                      </p>
                    )}
                  </div>

                  {/* Submitted By (Optional) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="submittedBy">Submitted By (Optional)</Label>
                      <Input
                        id="submittedBy"
                        placeholder="Name of submitter..."
                        value={newPost.submittedBy}
                        onChange={(e) => setNewPost({ ...newPost, submittedBy: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="submittedByEmail">Submitter Email (Optional)</Label>
                      <Input
                        id="submittedByEmail"
                        type="email"
                        placeholder="email@example.com"
                        value={newPost.submittedByEmail}
                        onChange={(e) => setNewPost({ ...newPost, submittedByEmail: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <Label htmlFor="content">Blog Content *</Label>
                    <RichTextEditor
                      value={newPost.content}
                      onChange={(value) => setNewPost({ ...newPost, content: value })}
                      placeholder="Write your blog content here..."
                      rows={12}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={handleCreatePost}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                      disabled={!newPost.title || !newPost.category || !newPost.author || !newPost.content || isCreating}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      {isCreating ? "Creating..." : "Create Post"}
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{blogPosts.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Published</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {blogPosts.filter((p) => p.status === "Published").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">
                {blogPosts.filter((p) => p.status === "Pending").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">6</div>
            </CardContent>
          </Card>
        </div>

        {/* Blog Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{post.category}</Badge>
                      </TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            post.status === "Published"
                              ? "bg-green-100 text-green-800"
                              : post.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : post.status === "Rejected"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }
                        >
                          {post.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {post.status === "Pending" && (
                            <>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-green-600 hover:text-green-700 hover:bg-green-50"
                                onClick={async () => {
                                  try {
                                    const response = await fetch(`/api/blog/${post.id}`, {
                                      method: "PUT",
                                      headers: { "Content-Type": "application/json" },
                                      body: JSON.stringify({ status: "published" }),
                                    })
                                    if (response.ok) {
                                      const postsResponse = await fetch("/api/blog")
                                      const postsData = await postsResponse.json()
                                      if (postsData.success) {
                                        setBlogPosts(
                                          postsData.posts.map((p: any) => ({
                                            id: p.id,
                                            title: p.title,
                                            category: p.category,
                                            author: p.author,
                                            date: new Date(p.createdAt).toLocaleDateString("en-US", {
                                              month: "long",
                                              day: "numeric",
                                              year: "numeric",
                                            }),
                                            status: p.status === "published" ? "Published" : p.status === "pending" ? "Pending" : p.status === "rejected" ? "Rejected" : "Draft",
                                            image: p.image,
                                          })),
                                        )
                                      }
                                    }
                                  } catch (error) {
                                    console.error("Error approving post:", error)
                                    alert("Failed to approve post")
                                  }
                                }}
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Approve
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                onClick={async () => {
                                  if (confirm("Are you sure you want to reject this post?")) {
                                    try {
                                      const response = await fetch(`/api/blog/${post.id}`, {
                                        method: "PUT",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({ status: "rejected" }),
                                      })
                                      if (response.ok) {
                                        const postsResponse = await fetch("/api/blog")
                                        const postsData = await postsResponse.json()
                                        if (postsData.success) {
                                          setBlogPosts(
                                            postsData.posts.map((p: any) => ({
                                              id: p.id,
                                              title: p.title,
                                              category: p.category,
                                              author: p.author,
                                              date: new Date(p.createdAt).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                              }),
                                              status: p.status === "published" ? "Published" : p.status === "pending" ? "Pending" : p.status === "rejected" ? "Rejected" : "Draft",
                                              image: p.image,
                                            })),
                                          )
                                        }
                                      }
                                    } catch (error) {
                                      console.error("Error rejecting post:", error)
                                      alert("Failed to reject post")
                                    }
                                  }
                                }}
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Reject
                              </Button>
                            </>
                          )}
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
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

        {/* Instructions Card */}
        <Card className="mt-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">How to Upload Blog Posts</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-800 dark:text-blue-200">
            <ol className="list-decimal list-inside space-y-2">
              <li>Click the "Create New Post" button in the top right corner</li>
              <li>Fill in the required fields: title, category, author, excerpt, and content</li>
              <li>Optionally upload a featured image or provide an image URL</li>
              <li>Click "Create Post" to save as a draft</li>
              <li>Use the Actions menu to edit, preview, or publish your post</li>
            </ol>
            <p className="mt-4 text-sm">
              <strong>Note:</strong> You can access this page directly at{" "}
              <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">/blog-admin</code>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
