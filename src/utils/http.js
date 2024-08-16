import axios from 'axios'
import HttpStatusCode from '../constants/httpStatusCode'
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setProfileToLS,
  setRefreshTokenToLS
} from './auth'
import config from '../constants/config'
import { URL_LOGIN, URL_REFRESH_TOKEN, URL_REGISTER } from '../api/authApi'
import { isAxiosExpiredTokenError, isAxiosUnauthorizedError } from './utils'
import { URL_GET_ME } from '../api/userApi'

class Http {
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.refreshToken = getRefreshTokenFromLS()
    this.refreshTokenRequest = null
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = `Bearer ${this.accessToken}`
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const url = response.config.url
        if (url === URL_LOGIN || url === URL_REGISTER) {
          const data = response.data
          this.accessToken = data.metadata.access_token
          this.refreshToken = data.metadata.refresh_token
          setAccessTokenToLS(this.accessToken)
          setRefreshTokenToLS(this.refreshToken)
        } else if (url === URL_GET_ME) {
          const data = response.data
          setProfileToLS(data.metadata)
        }
        return response
      },
      (error) => {
        // Only toast errors that are not 422 and 401
        if (![HttpStatusCode.UnprocessableEntity, HttpStatusCode.Unauthorized].includes(error.response?.status)) {
          const data = error.response?.data
          const message = data
          //   toast.error(message)
          return message
        }
        // Unauthorized (401) errors have multiple cases
        // - Invalid token
        // - No token provided
        // - Expired token*
        // If it's a 401 error
        if (isAxiosUnauthorizedError(error)) {
          this.handleRefreshToken()
          console.log(error)
          const config = error.response?.config || { headers: {}, url: '' }
          const url = config.url
          // Nếu là lỗi token hết hạn và yêu cầu không phải là request refresh token
          // thì thực hiện gọi hàm handleRefreshToken
          if (isAxiosExpiredTokenError(error) && url !== URL_REFRESH_TOKEN) {
            // Giới hạn việc gọi handleRefreshToken hai lần
            this.refreshTokenRequest = this.refreshTokenRequest
              ? this.refreshTokenRequest
              : this.handleRefreshToken().finally(() => {
                  // Giữ refreshTokenRequest trong vòng 10 giây nếu có lỗi 401, sau đó sử dụng lại
                  setTimeout(() => {
                    this.refreshTokenRequest = null
                  }, 10000)
                })
            return this.refreshTokenRequest.then((access_token) => {
              // Điều này có nghĩa là chúng ta thử lại request ban đầu đã thất bại
              return this.instance({ ...config, headers: { ...config.headers, authorization: access_token } })
            })
          }

          // Các trường hợp khác như token không hợp lệ, không có token được cung cấp,
          // token hết hạn nhưng gọi refresh token thất bại
          // thì tiến hành xóa local storage và hiển thị thông báo lỗi
          clearLS()
          this.accessToken = ''
          this.refreshToken = ''
          //   toast.error(error.response?.data.data?.message || error.response?.data.message)
          //   console.log(error.response?.data.data?.message || error.response?.data.message)
          window.location.reload()
          return error.response?.data.data?.message || error.response?.data.message
        }
        return Promise.reject(error)
      }
    )
  }

  handleRefreshToken() {
    if (this.refreshTokenRequest) {
      return this.refreshTokenRequest // Nếu đã có yêu cầu làm mới token đang chờ xử lý, trả về nó
    }

    this.refreshTokenRequest = this.instance
      .post(URL_REFRESH_TOKEN, {
        refresh_token: this.refreshToken
      })
      .then((res) => {
        console.log(res)
        const access_token = res.data.metadata.access_token
        const refresh_token = res.data.metadata.refresh_token
        setAccessTokenToLS(access_token)
        setRefreshTokenToLS(refresh_token)
        this.accessToken = access_token
        this.refreshToken = refresh_token
        return access_token
      })
      .catch((error) => {
        clearLS()
        this.accessToken = ''
        this.refreshToken = ''
        throw error
      })
      .finally(() => {
        // Xóa refreshTokenRequest sau 10 giây
        setTimeout(() => {
          this.refreshTokenRequest = null
        }, 10000)
      })

    return this.refreshTokenRequest
  }
}

const http = new Http().instance
export default http
