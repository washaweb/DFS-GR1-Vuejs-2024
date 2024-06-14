const express = require('express')
const cors = require('cors')

// import des routes qui viennent du dossier /routes/...
const billRoutes = require('./routes/bills.js')

const app = express()

app.use(express.json()) // ici on définit que les body des requêtes seront automatiquement convertiens en format json dans nos contrôleurs de routes
const port = 3000

app.use(cors({
  origin: 'http://localhost:5173'
  // credentials: true
}))


// utilisation des routes dans l'application
app.use('/bills', billRoutes)

// route de base de l'api
app.get('/', (req, res) => {
  res.send({
    api: 'Bill app API',
    version: '0.1.0'
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})