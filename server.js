const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
  console.log('you are in Home route!: GET')
  res.status(201).send('Hello')
})

app.delete('/', (req, res) => {
  console.log('Want to delete something ?')
})

app.listen(PORT, console.log(`Server running on port: ${PORT}`))