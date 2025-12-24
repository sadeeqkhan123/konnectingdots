import fs from "fs"
import path from "path"

const LOG_FILE = path.join(process.cwd(), ".cursor", "debug.log")

export const debugLog = (data: {
  location: string
  message: string
  data?: any
  hypothesisId?: string
  sessionId?: string
  runId?: string
}) => {
  try {
    // Also log to console for immediate visibility
    console.log(`[DEBUG] ${data.location}: ${data.message}`, data.data || {})
    
    const logDir = path.dirname(LOG_FILE)
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true })
    }

    const logEntry = {
      ...data,
      timestamp: Date.now(),
      sessionId: data.sessionId || "debug-session",
      runId: data.runId || "run1",
    }

    fs.appendFileSync(LOG_FILE, JSON.stringify(logEntry) + "\n")
  } catch (error) {
    // Log to console if file write fails
    console.error(`[DEBUG LOG ERROR] ${data.location}:`, error)
  }
}

