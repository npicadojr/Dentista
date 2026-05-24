const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.redirect('/inicio'))
app.get('/inicio', (req, res) => res.render('inicio'))
app.get('/servicios', (req, res) => res.render('servicios'))
app.get('/equipo', (req, res) => res.render('equipo'))
app.get('/contacto', (req, res) => res.render('contacto', { submitted: false }))

app.post('/contacto', (req, res) => {
  res.render('contacto', { submitted: true })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`CDO Panamá corriendo en http://localhost:${PORT}`)
})
