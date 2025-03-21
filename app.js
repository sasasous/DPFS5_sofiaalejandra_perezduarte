const express = require('express')
const app = express()
const port = 3000
const path =

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/addProduct', (req, res) => {
  res.sendFile(__dirname + '/views/products/create.html')
})

app.get('/login', (req, res) => {
  res.send(__dirname + '/views/users/login.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
