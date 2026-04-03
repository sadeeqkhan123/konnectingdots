"use client"

import { useEffect } from "react"
import { trackGtmEvent } from "@/lib/gtm"

const isWhatsappLink = (href: string) =>
  href.includes("wa.link") || href.includes("whatsapp.com") || href.includes("api.whatsapp.com")

export default function GtmEventsListener() {
  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href") || ""
      if (!href || !isWhatsappLink(href)) return

      const label = (anchor.textContent || "").trim().slice(0, 80)
      trackGtmEvent("whatsapp_click", {
        link_url: href,
        link_text: label || "whatsapp_link",
        page_path: window.location.pathname,
      })
    }

    document.addEventListener("click", onDocumentClick)
    return () => document.removeEventListener("click", onDocumentClick)
  }, [])

  return null
}
