 const bcrypt = require('bcryptjs')

 const getPosts = (req,res) => {
     const db = req.app.get('db')
     db.get_posts()
     .then(response => {
         res.status(200).json(response)
     })
     .catch(err => {
         res.status(500).json('Error getting posts')
         console.log(err);
    })
 }

 const addPosts = (req,res) => {
     const db = req.app.get('db')
     db.add_post(title,user_img,content)
     .then(response => {
         res.status(200).json(response)
     })
     .catch(err => {
         res.status(500).json('Error adding post')
         console.log(err);
     })
 }

 const editPost = (req,res) => {
     const db = req.app.get('db')
     db.edit_post(req.params.id,title)
     .then(response => {
         res.status(200).json(response)
     })
     .catch(err => {
         res.status(500).json('Error editing post')
     })
 }

 const deletePost = (req,res) => {
     const db = req.app.get('db')
     db.deletePost(req.params.id)
     .then(response => {
         res.status(200).json(response)
     })
     .catch(err => {
         res.status(500).json('Error deleting post')
     })
 }

 const login = (req,res) => {
    const db = req.app.get('db')
    db.find_user(req.body)
    .then(async users => {
        if(!users.length) {
            res.status(401).json('No user found')
        }
        else {
            const isMatch = await bcrypt.compare(req.body.password, users[0].password)
            if(isMatch) {
                req.session.user = {                        // added the user to the session
                    username: users[0].username,
                    userid: users[0].userid
                }    
                res.status(200).json(req.session.user)
            }
            else {
                res.status(401).json('Incorrect password')
            }
        }
        console.log(req.session.user);
    })
}

 module.exports = {
     getPosts,
     addPosts,
     editPost,
     deletePost,
     login
 }