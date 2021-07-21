import api from '../helpers/api'
import types from './types'

export const loginUser  = (email, password) => async (dispatch) =>{
    try{
        const res = await api.post('/auth/login', { email, password})
        const token = res.data.token
        localStorage.setItem("token", JSON.stringify(token))
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        dispatch({
            type: types.SIGN_IN,
            payload: {
                isAuthenticated: true,
                email: res.data.email, 
                error: "",
                token
            }
        })
    }
    catch(e){
        if (!e.response) return dispatch({
            type: types.AUTH_ERROR,
            payload: "Check your network connection"
        })

        dispatch({
            type: types.AUTH_ERROR,
            payload: e.response.data.message
        })
    }
}

export const signupUser  = (name, email, password) => async (dispatch) =>{
    try{
        await api.post('/auth/register', { email, name, password})
        dispatch({
            type: types.SIGN_UP,
            payload: {
                isAuthenticated: false,
                email: email, 
                error: "",
            }
        })
        return true
    }
    
    catch(e){
        if (!e.response) return dispatch({
            type: types.AUTH_ERROR,
            payload: "Check your network connection"
        })

        dispatch({
            type: types.AUTH_ERROR,
            payload: e.response.data.message
        })
        return false
    }
}

export const getUser = () => async dispatch => {
    const token = JSON.parse(localStorage.getItem('token'))
    try{
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const res = await api.get('/auth/user')
        console.log(res.data)
        dispatch({
            type: types.GET_USER,
            payload: {isAuthenticated: true, ...res.data}
        })
    }

    catch(e){
        console.log(e)
    }
}

export const logout = () => async dispatch => {
    localStorage.removeItem('token')
    dispatch({
        type: types.LOGOUT,
        payload: {isAuthenticated: false}
    })
}