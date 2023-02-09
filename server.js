const express = require('express')
const app = express()
const PORT = 4000

// middleware
app.use(express.json())

// http://172.0.0.1/path-here

app.get('/', (req, res) => {
  console.log('you are in Home route!: GET')
  res.status(201).json({"message": 'Welcome to the json response'})
})

app.post('/api/info', (req, res) => {
  const {information} = req.body
  console.log('THE POSTED MESSAGE WAS:', information)
  res.status(201).json({"yourMessage": information})
})

app.put('/api', (req, res) => {
  res.send('putting something')
})

app.delete('/delete/:id', (req, res) => {
  console.log('Want to delete something ?')
  res.sendStatus(200)
})

app.listen(PORT, console.log(`Server running on port: ${PORT}`))