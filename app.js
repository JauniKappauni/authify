const express = require('express')
const env = require('dotenv')
const app = express()
const port = 3000
const registerRouter = require('./routes/register')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.render('index')
})
app.use('/register', registerRouter);

app.listen(port, () => console.log(`Der Server läuft nun auf http://localhost:${port}`))