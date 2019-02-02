import axios from 'axios'

const initialState = {
    user: {},
    title: '',
    content: '',
    posts: [],
    postsMade: ''
}

// action types
const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'
const GET_POSTS = 'GET_POSTS'
const EDIT_POST = 'EDIT_POST'
const DELETE_POST = 'DELETE_POST'
const ADD_POST = 'ADD_POST'
const FIND_POST_AMOUNT = 'FIND_POST_AMOUNT'

// action creators
export function findPostAmount(id) {
    return {
        type: FIND_POST_AMOUNT,
        payload: axios.get(`/api/amount/${id}`)
    }
}

export function register(username,password) {
    return {
        type: REGISTER,
        payload: axios.post('/api/register', {username,password})
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

export function editPost(id, title) {
    return {
        type: EDIT_POST,
        payload: axios.put(`/api/post/${id}`, title)
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

        default: return state;
    }
}

export default reducer
