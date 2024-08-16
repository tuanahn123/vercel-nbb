import http from '../utils/http'
export const URL_GET_ME = 'user/me'
const userApi = {
  // Lấy thông tin user
  getProfile(accessToken) {
    return http.get(URL_GET_ME, {
      headers: { Authorization: `${accessToken}` }
    })
  }
}

export default userApi
