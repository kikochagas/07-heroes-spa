import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

// const initialState = {
//     logged: false
// }

const init = () => {
    const user = localStorage.getItem('user');
    console.log(user)
    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: name,
        }
        localStorage.setItem('user', name)
        dispatch(action)
    }

    const logout = () => {
        const action = {
            type: types.logout
        }
        localStorage.removeItem('user')
        dispatch(action)
    }
  return (
    <AuthContext.Provider value={{...authState, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}
