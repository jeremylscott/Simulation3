import axios from 'axios'

const initialState = {
    user: {},
    password: '',
    image: '',
    title: '',
    content: '',
    posts: []
}

// action types
const LOGIN = 'LOGIN'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST = 'DELETE_POST'
const ADD_POST = 'ADD_POST'


// action creators
export function login(username,password) {
    return {
        type: LOGIN,
        payload: axios.post(`/auth/login`, {username,password})
    }
}

export function update_post(userid, title) {
    return {
        type: UPDATE_POST,
        payload: axios.put(`/api/post/${userid}`, title)
    }
}

export function delete_post(userid) {
    return {
        type: DELETE_POST,
        payload: axios.delete(`/api/delete/${userid}`)
    }
}

export function add_post(title,image,content) {
    return {
        type: ADD_POST,
        payload: axios.post(`/api/post`, {title,image,content})
    }
}


// reducer function
function reducer(state=initialState, action) {
    switch(action.type) {
        case `${LOGIN}_FULFILLED`:
            return {
                ...state, user: action.payload.data
            }
        case `${UPDATE_POST}_FULFILLED`:
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
