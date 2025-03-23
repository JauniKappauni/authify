const express = require('express')
const session = require('express-session')
const env = require('dotenv')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get('/', (req,res) => {
    res.render('index')
})
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/logout', require('./routes/logout'));

app.listen(port, () => console.log(`Der Server läuft nun auf http://localhost:${port}`))