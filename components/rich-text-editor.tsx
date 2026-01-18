"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Image, Bold, Italic, List, Link as LinkIcon } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  rows?: number
}

export function RichTextEditor({ value, onChange, placeholder = "Write your content here...", rows = 12 }: RichTextEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const insertAtCursor = (text: string) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)
    const before = value.substring(0, start)
    const after = value.substring(end)

    let newText = ""
    if (text.includes("{{SELECTION}}")) {
      newText = before + text.replace("{{SELECTION}}", selectedText || "") + after
    } else {
      newText = before + text + (selectedText ? selectedText : "") + after
    }

    onChange(newText)

    // Restore cursor position
    setTimeout(() => {
      const newCursorPos = start + (text.includes("{{SELECTION}}") ? text.replace("{{SELECTION}}", selectedText || "").length : text.length)
      textarea.focus()
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)
  }

  const handleImageUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if it's an image
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file")
      return
    }

    // For now, we'll convert to base64 data URL
    // In production, you'd upload to a cloud service like Cloudinary, AWS S3, etc.
    const reader = new FileReader()
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string
      const altText = prompt("Enter image description (optional):") || "Image"
      insertAtCursor(`\n![${altText}](${dataUrl})\n`)
    }
    reader.readAsDataURL(file)
    
    // Reset input
    e.target.value = ""
  }

  const insertImage = () => {
    const imageUrl = prompt("Enter image URL (or click Upload to select from computer):")
    if (imageUrl) {
      insertAtCursor(`\n![Image description](${imageUrl})\n`)
    }
  }

  const insertLink = () => {
    const url = prompt("Enter URL:")
    if (url) {
      const linkText = prompt("Enter link text (or leave empty to use URL):") || url
      insertAtCursor(`[${linkText}](${url})`)
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2 p-2 border rounded-t-lg bg-muted/50">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertAtCursor("**{{SELECTION}}**")}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertAtCursor("*{{SELECTION}}*")}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertAtCursor("\n- {{SELECTION}}\n")}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={insertLink}
          title="Insert Link"
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleImageUpload}
          title="Upload Image from Computer"
        >
          <Image className="h-4 w-4" />
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="font-mono text-sm rounded-t-none"
      />
      <p className="text-xs text-muted-foreground">
        Supports Markdown formatting. Use the toolbar above to insert images, links, and formatting.
      </p>
    </div>
  )
}
