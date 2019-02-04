import axios from 'axios'

const initialState = {
    user: {},
    title: '',
    user_img: '',
    id: '',
    username: '',
    content: '',
    posts: [],
    postsMade: '',
    postInfo: ''
}

// action types
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const REGISTER = 'REGISTER'
const GET_POSTS = 'GET_POSTS'
const GET_POST_INFO = 'GET_POST_INFO'
const EDIT_POST = 'EDIT_POST'
const DELETE_POST = 'DELETE_POST'
const ADD_POST = 'ADD_POST'
const FIND_POST_AMOUNT = 'FIND_POST_AMOUNT'
const UPDATE_TITLE = 'UPDATE_TITLE'
const STATE_UPDATE = 'STATE_UPDATE'


// action creators
export function findPostAmount(id) {
    return {
        type: FIND_POST_AMOUNT,
        payload: axios.get(`/api/amount/${id}`)
    }
}

export function stateUpdate(posts) {
    return {
        type: STATE_UPDATE,
        payload: posts
    }
}

export function getPostInfo(id) {
    return {
        type: GET_POST_INFO,
        payload: axios.get(`/api/postinfo/${id}`)
    }
}

export function updateTitle(title) {
    return {
        type: UPDATE_TITLE,
        payload: title
    }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: axios.get(`/api/logout`)
    }
}

export function register(username,password,user_img) {
    return {
        type: REGISTER,
        payload: axios.post('/api/register', {username,password,user_img})
    }
}

export function login(username,password) {
    return {
        type: LOGIN,
        payload: axios.post('/api/login', {username,password})
    }
}

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: axios.get('/api/post')
    }
}

export function editPost(id,title) {
    return {
        type: EDIT_POST,
        payload: axios.put(`/api/post/${id}`, {title})
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: axios.delete(`/api/post/${id}`)
    }
}

export function addPost(title,user_img,content) {
    return {
        type: ADD_POST,
        payload: axios.post(`/api/post`, {title,user_img,content})
    }
}


// reducer function
function reducer(state=initialState, action) {
    switch(action.type) {
        case `${LOGIN}_FULFILLED`:
            return {
                ...state, user: action.payload.data
            }
        case `${LOGOUT}_FULFILLED`:
            return {
                ...state, user: {}
            }
        case `${REGISTER}_FULFILLED`:
            return {
                ...state, user: action.payload.data
            }
        case `${FIND_POST_AMOUNT}_FULFILLED`:
            return {
                ...state, postsMade: action.payload.data
            }
        case `${GET_POSTS}_FULFILLED`:
            return {
                ...state, posts: action.payload.data
            }
        case `${GET_POST_INFO}_FULFILLED`:
            return {
                ...state, postInfo: action.payload.data
            }
        case UPDATE_TITLE:
            return {
                ...state, title: action.payload
            }
        case `${EDIT_POST}_FULFILLED`:
            return {
                ...state, posts: action.payload.data
            }
        case `${DELETE_POST}_FULFILLED`:
            return {
                ...state, posts: action.payload.data
            }
        case `${ADD_POST}_FULFILLED`:
            return {
                ...state, posts: action.payload.data
            }
        case STATE_UPDATE:
            return {
                ...state, user_img: action.payload.user_img,
                        username: action.payload.username,
                        id: action.payload.id,
                        posts: action.payload,
                        title: action.payload.title
            }

        default: return state;
    }
}

export default reducer
