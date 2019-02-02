require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const app = express()
const {} = require('./controller')
const {getPosts,addPost,editPost,deletePost} = require('./controller')

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


app.get('/api/posts', getPosts)

app.post('/api/posts', addPost)

app.put('/api/posts', editPost)

app.delete('/api/posts', deletePost)


app.listen(process.env.PORT, ()=> console.log(`Server listening on port: ${process.env.PORT}`))