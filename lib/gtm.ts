export type GtmEventPayload = Record<string, string | number | boolean | null | undefined>

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export const trackGtmEvent = (event: string, payload: GtmEventPayload = {}) => {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    ...payload,
  })
}
