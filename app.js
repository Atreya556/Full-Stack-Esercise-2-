const express = require('express')
const app = express()

// Use PORT from environment or default to 5001 (Render default)
const PORT = process.env.PORT || 5001

// Serve static files from 'dist' (Webpack build output)
app.use(express.static('dist'))

// Version endpoint (your existing one)
app.get('/version', (req, res) => {
  res.send('1')
})

// Health check endpoint (REQUIRED for Exercise 12)
app.get('/health', (req, res) => {
  res.send('ok')
})

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})