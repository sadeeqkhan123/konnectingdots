const DEFAULT_SITE_URL = "https://konnectingdots.org"

const normalizeUrl = (value: string): string => {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`
  const parsed = new URL(withProtocol)
  return `${parsed.protocol}//${parsed.host}`
}

export const getCanonicalSiteUrl = (): string => {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (!configured) {
    return DEFAULT_SITE_URL
  }

  try {
    const normalized = normalizeUrl(configured)
    const hostname = new URL(normalized).hostname.toLowerCase()

    // Never use preview domains for canonical/SEO URLs.
    if (hostname.endsWith(".vercel.app")) {
      return DEFAULT_SITE_URL
    }

    return normalized
  } catch {
    return DEFAULT_SITE_URL
  }
}

export const SITE_URL = getCanonicalSiteUrl()
