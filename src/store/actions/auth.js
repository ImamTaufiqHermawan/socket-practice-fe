import AuthService from "../../services/authService"
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

export const login = (params, history) => async function (dispatch) {
  try {
    const data = await AuthService.login(params)
    dispatch({ type: LOGIN, payload: data })
    history('/')
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const register = (params, history) => async function (dispatch) {
  try {
    const data = await AuthService.register(params)
    dispatch({ type: REGISTER, payload: data })
    history('/')
  } catch (error) {
    console.log(error)
    throw error
  }
}
