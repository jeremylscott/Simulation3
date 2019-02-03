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

const getPostInfo = (req,res) => {
    const db = req.app.get('db')
    db.get_post_info(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json('Post was not found')
        console.log(err);
    })
}

const addPost = (req,res) => {
    const {title,user_img,content} = req.body 
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
    db.edit_post(req.params.id, req.body.title)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json('Error editing post')
        console.log(err);
    })
}

const deletePost = (req,res) => {
    const db = req.app.get('db')
    db.delete_post(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json('Error deleting post')
        console.log(err);
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
                    userid: users[0].userid,
                    user_img: users[0].user_img
                }    
                res.status(200).json(req.session.user)
            }
            else {
                res.status(401).json('Incorrect password')
            }
        }
    })
}

const logout = (req,res) => {
    req.session.destroy()
}

const register = async (req,res) => {
    const db = req.app.get('db')
    const hash = await bcrypt.hash(req.body.password,10)

    try {
    const {username,user_img} = req.body
    const response = await db.add_user({username, password: hash, user_img})
    res.json({username: response[0].username})
    }
    catch(e) {
        console.log(e)
        res.status(401).json('An error occurred - signup')
    }
}

const findPostAmount = (req,res) => {
    const db = req.app.get('db')
    db.get_user_posts(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json('Error finding post amount')
        console.log(err);
    })
}

 module.exports = {
     getPosts,
     addPost,
     editPost,
     deletePost,
     login,
     findPostAmount,
     register,
     logout,
     getPostInfo
 }