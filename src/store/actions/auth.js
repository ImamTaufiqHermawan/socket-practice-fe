import AuthService from "../../services/authService";
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';

export const login = (params, history) => async function (dispatch) {
  try {
    const response = await AuthService.login(params)
    dispatch({ type: LOGIN, payload: response.data })
    history('/')
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const register = (params, history) => async function (dispatch) {
  try {
    const response = await AuthService.register(params)
    dispatch({ type: REGISTER, payload: response.data })
    history('/')
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const logout = (params, history) => async function (dispatch) {
  try {
    AuthService.logout(params)
    dispatch({ type: LOGOUT })
  } catch (error) {
    console.log(error)
    throw error
  }
}