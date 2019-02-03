require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const app = express()
const {getPosts,addPost,editPost,deletePost,login,findPostAmount,register,logout,getPostInfo} = require('./controller')

app.use(json())

// connect the database
massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db',db)
        console.log('Database Connected');
    })
    .catch(err => console.log(err))

// create a session
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUnitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))


app.get('/api/post', getPosts)
app.get('/api/amount/:id', findPostAmount)
app.get('/api/logout', logout)
app.get('/api/postinfo', getPostInfo)

app.post('/api/post', addPost)
app.post('/api/login', login)
app.post('/api/register', register)

app.put('/api/post/:id', editPost)

app.delete('/api/post/:id', deletePost)


app.listen(process.env.PORT, ()=> console.log(`Server listening on port: ${process.env.PORT}`))