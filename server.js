const express = require('express')
const app = express()
const PORT = 4000

// middleware
app.use(express.json())
app.use(express.static('public'))

function middleware(req, res, next) {
  console.log('HIT THE MIDDLEWARE')
  next()
}

// TEMP DATABASE
const db = []

// http://172.0.0.1/path-here

// no need because of 'express.static()'
// app.get('/', (req, res) => {
//   console.log('you are in Home route!: GET')
//   res.sendStatus(200)
// })

app.post('/api/info', middleware, (req, res) => {
  const { information } = req.body
  console.log('THE POSTED MESSAGE WAS:', information)
  db.push(information)
  console.log('DB', db)
  res.status(201).json({"yourMessage": information})
})

app.put('/api', middleware, (req, res) => {
  const { word, potato } = req.query
  console.log(word, potato)
  res.sendStatus(200)
})

app.delete('/delete/:id/:name', middleware, (req, res) => {
  const { id, name } = req.params
  console.log('want to delete what? ', id, name)
  res.sendStatus(200)
})

app.listen(PORT, console.log(`Server running on port: ${PORT}`))