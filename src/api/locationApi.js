import http from '../utils/http'
export const URL_PROVINCES = 'location/province'
export const URL_DISTRICT = 'location/district'
export const URL_WARD = 'location/ward'

export const locationApi = {
  getAllProvinces: function () {
    return http.get(URL_PROVINCES)
  },
  getDistricts: function (codeProvinces) {
    return http.get(`${URL_DISTRICT}/${codeProvinces}`)
  },
  getWard: function (codeDistricts) {
    return http.get(`${URL_WARD}/${codeDistricts}`)
  }
}
