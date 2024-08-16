import http from '../utils/http'

const URL_UPLOAD_IMAGE = 'media/upload-image'

export const mediaApi = {
  createImageTournament(file) {
    // Tạo đối tượng FormData
    const formData = new FormData()

    // Thêm tệp hình ảnh vào FormData
    formData.append('image', file) // 'image' nên là một chuỗi
    // In ra nội dung của FormData
    return http.post(URL_UPLOAD_IMAGE, formData)
  }
}
