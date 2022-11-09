export const LOGIN = 'LOGIN'
import AuthService from "../services/authService"

export function login(params) {
  return AuthService.login(params)
    .then(data => {
      console.log(data)
      dispatchEvent({ type: LOGIN, payload: data })
    })
}