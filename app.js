const express = require('express')
const path = require('path')
const app = express()

// Use PORT from environment or default
const PORT = process.env.PORT || 5001

// Serve static files from build output
app.use(express.static('dist'))

// Version endpoint
app.get('/version', (req, res) => {
  res.send('1')
})

// Health check endpoint (required for deployment exercises)
app.get('/health', (req, res) => {
  res.send('ok')
})

// Test endpoint
app.get('/test', (req, res) => {
  res.json({
    message: 'Deployment successful!',
    timestamp: new Date().toISOString(),
    status: 'running'
  })
})

// Handle React Router fallback route (IMPORTANT FIX)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
  console.log(`Health: http://localhost:${PORT}/health`)
  console.log(`Version: http://localhost:${PORT}/version`)
  console.log(`Test: http://localhost:${PORT}/test`)
})