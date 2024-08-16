import http from '../utils/http'

export const URL_LOGIN = 'user/login'
export const URL_REGISTER = 'user'
export const URL_REFRESH_TOKEN = 'user/refresh-token'

const authApi = {
  registerAccount: function (body) {
    return http.post(URL_REGISTER, body)
  },
  login: function (body) {
    return http.post(URL_LOGIN, body)
  }
}
export default authApi
