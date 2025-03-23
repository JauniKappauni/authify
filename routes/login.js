const express = require('express')
const connection = require('../database')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('login')
})
router.post('/', (req,res) => {
    const {username, email, password} = req.body
    const query = 'SELECT * FROM users WHERE username = ?'
    connection.query(query, [username], (err, results) =>{
        if(err){
            console.error('Error:' + err)
            res.send('Error' + err)
        }
        if(results.length == 0){
            res.send('User not found')
        }
        const user = results[0]
        if(user.password == password){
            req.session.user = {id: user.id, username: user.username}
            res.redirect('dashboard')
        }
        else{
            res.send('The password is wrong')
        }
    })
})

module.exports = router