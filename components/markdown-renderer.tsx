"use client"

import React from "react"
import Image from "next/image"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Simple markdown parser for basic formatting
  const parseMarkdown = (text: string): React.ReactNode[] => {
    const elements: React.ReactNode[] = []
    const lines = text.split("\n")
    let inList = false
    const listItems: React.ReactNode[] = []

    lines.forEach((line, lineIndex) => {
      const isListItem = line.trim().startsWith("- ")
      
      // Handle list start
      if (isListItem && !inList) {
        inList = true
        listItems.length = 0 // Clear previous items
      }
      
      // Handle list end
      if (!isListItem && inList) {
        elements.push(
          <ul key={`ul-${lineIndex}`} className="list-disc list-inside mb-6 space-y-2 text-muted-foreground leading-relaxed">
            {listItems.map((item, idx) => (
              <React.Fragment key={idx}>{item}</React.Fragment>
            ))}
          </ul>,
        )
        inList = false
        listItems.length = 0
      }
      
      if (inList && isListItem) {
        listItems.push(
          <li key={`li-${lineIndex}`} className="ml-4 text-muted-foreground leading-relaxed">
            {parseInlineFormatting(line.substring(2))}
          </li>,
        )
        return // Skip other processing for list items
      }
      // Headers
      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={`h3-${lineIndex}`} className="text-2xl font-semibold mb-3 mt-8 text-foreground">
            {line.substring(4)}
          </h3>,
        )
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={`h2-${lineIndex}`} className="text-3xl font-bold mb-4 mt-12 text-foreground">
            {line.substring(3)}
          </h2>,
        )
      } else if (line.startsWith("# ")) {
        elements.push(
          <h1 key={`h1-${lineIndex}`} className="text-4xl font-bold mb-6 mt-12 text-foreground">
            {line.substring(2)}
          </h1>,
        )
      }
      // Images: ![alt](url)
      else if (line.match(/^!\[.*?\]\(.*?\)$/)) {
        const match = line.match(/^!\[(.*?)\]\((.*?)\)$/)
        if (match) {
          const [, alt, url] = match
          elements.push(
            <div key={`img-${lineIndex}`} className="my-8">
              <Image
                src={url}
                alt={alt || "Blog image"}
                width={800}
                height={450}
                className="w-full h-auto rounded-lg shadow-lg"
                unoptimized
              />
            </div>,
          )
        }
      }
      // Links: [text](url)
      else if (line.includes("](") && line.includes("[")) {
        const parts: React.ReactNode[] = []
        let remaining = line
        let keyIndex = 0

        while (remaining.length > 0) {
          const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/)
          if (linkMatch) {
            const beforeLink = remaining.substring(0, linkMatch.index)
            if (beforeLink) {
              parts.push(
                <span key={`text-${keyIndex++}`} className="text-muted-foreground leading-relaxed">
                  {parseInlineFormatting(beforeLink)}
                </span>,
              )
            }
            parts.push(
              <a
                key={`link-${keyIndex++}`}
                href={linkMatch[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {linkMatch[1]}
              </a>,
            )
            remaining = remaining.substring((linkMatch.index || 0) + linkMatch[0].length)
          } else {
            parts.push(
              <span key={`text-${keyIndex++}`} className="text-muted-foreground leading-relaxed">
                {parseInlineFormatting(remaining)}
              </span>,
            )
            break
          }
        }
        if (parts.length > 0) {
          elements.push(<p key={`p-${lineIndex}`} className="mb-6">{parts}</p>)
        }
      }
      // Regular paragraphs
      else if (line.trim()) {
        elements.push(
          <p key={`p-${lineIndex}`} className="text-muted-foreground leading-relaxed mb-6">
            {parseInlineFormatting(line)}
          </p>,
        )
      } else {
        // Empty line for spacing
        elements.push(<br key={`br-${lineIndex}`} />)
      }
    })

    // Close any remaining list
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`ul-end`} className="list-disc list-inside mb-6 space-y-2 text-muted-foreground leading-relaxed">
          {listItems.map((item, idx) => (
            <React.Fragment key={idx}>{item}</React.Fragment>
          ))}
        </ul>,
      )
    }

    return elements
  }

  const parseInlineFormatting = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = []
    let remaining = text
    let keyIndex = 0

    // Handle bold **text**
    while (remaining.length > 0) {
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
      if (boldMatch) {
        const beforeBold = remaining.substring(0, boldMatch.index)
        if (beforeBold) {
          parts.push(<span key={`text-${keyIndex++}`}>{beforeBold}</span>)
        }
        parts.push(<strong key={`bold-${keyIndex++}`}>{boldMatch[1]}</strong>)
        remaining = remaining.substring((boldMatch.index || 0) + boldMatch[0].length)
      } else {
        // Handle italic *text*
        const italicMatch = remaining.match(/\*(.+?)\*/)
        if (italicMatch && !remaining.match(/^\*\*/)) {
          const beforeItalic = remaining.substring(0, italicMatch.index)
          if (beforeItalic) {
            parts.push(<span key={`text-${keyIndex++}`}>{beforeItalic}</span>)
          }
          parts.push(<em key={`italic-${keyIndex++}`}>{italicMatch[1]}</em>)
          remaining = remaining.substring((italicMatch.index || 0) + italicMatch[0].length)
        } else {
          parts.push(<span key={`text-${keyIndex++}`}>{remaining}</span>)
          break
        }
      }
    }

    return parts.length > 0 ? parts : [text]
  }

  return <div className="prose prose-lg dark:prose-invert max-w-none">{parseMarkdown(content)}</div>
}
