const express = require('express')
const env = require('dotenv')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(port, () => console.log(`Der Server läuft nun auf http://localhost:${port}`))