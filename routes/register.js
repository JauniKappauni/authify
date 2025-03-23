const express = require('express')
const connection = require('../database')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('register')
})
router.post('/', (req,res) => {
    const {username, email, password} = req.body
    const query = 'INSERT INTO users (username, email, password) VALUES (?,?,?)'
    connection.query(query, [username, email, password], (err, results) =>{
        if(err){
            console.error('Error:' + err)
            res.send('Error' + err)
        }
        res.send(`User registered with Username: ${username} Email: ${email} Password: ${password}`)
    })
})

module.exports = router