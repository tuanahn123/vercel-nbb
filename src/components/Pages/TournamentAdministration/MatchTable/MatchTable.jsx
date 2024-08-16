import '/src/assets/styles/MatchTable/MatchTable.scss'
import add from '/src/assets/images/MatchTable/add.svg'
import btnGradient from '/src/assets/images/MatchTable/btn-gradient.svg'
import btnStroke from '/src/assets/images/MatchTable/btn-stroke.svg'
import clock from '/src/assets/images/MatchTable/clock.svg'
import edit from '/src/assets/images/MatchTable/edit.svg'
import del from '/src/assets/images/MatchTable/delete.svg'
import { Button } from '../../../common/Button'
import Navbar from '../../../common/Navbar'

const images = {
  add,
  btnGradient,
  btnStroke,
  clock,
  edit,
  del
}

export default function MatchTable () {
  return (
    <div className='bg-[#050518]'>
      <Navbar />
      <div className='border-t border-matchTable-50'></div>
      <div className='grid grid-cols-3 gap-4 mt-2 mb-2'>
        <div></div>
        <div className='flex justify-evenly'>
          <div className='webkit-center'>
            <div className='rounded-full bg-[#4E4E5B] w-16 h-16 flex justify-center items-center text-white'>1</div>
            <span className='text'>Tạo giải</span>
          </div>
          <div className='webkit-center'>
            <div className='rounded-full bg-gradient w-16 h-16 flex justify-center items-center text-white'>2</div>
            <span className='text'>Bàn đấu</span>
          </div>
          <div className='webkit-center'>
            <div className='rounded-full bg-[#4E4E5B] w-16 h-16 flex justify-center items-center text-white'>3</div>
            <span className='text'>Kiểm tra</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className='border-t border-matchTable-50'></div>
      <div className='container m-auto'>
        <div className='text-white mt-5 mb-10 text-2xl font-sora'>
          <span>Danh sách bàn đấu</span>
          <span>(6)</span>
        </div>
        <div className='rounded-[16px] overflow-hidden'>
          <table className='min-w-full divide-y divide-[#09082A] border border-[#09082A] border-collapse'>
            <thead className='bg-[#09082A]'>
              <tr>
                <th className='border border-[#4B4885] px-6 py-3 text-xs font-medium text-white font-sora text-center tracking-wider rounded-tl-[16px]'></th>
                <th className='border border-[#4B4885] px-6 py-3 text-xs font-medium text-white font-sora text-center tracking-wider'>
                  STT
                </th>
                <th className='border border-[#4B4885] px-6 py-3 text-xs font-medium text-white font-sora text-center tracking-wider'>
                  Tên bàn
                </th>
                <th className='border border-[#4B4885] px-6 py-3 text-xs font-medium text-white font-sora text-center tracking-wider'>
                  Kích thước
                </th>
                <th className='border border-[#4B4885] px-6 py-3 text-xs font-medium text-white font-sora text-center tracking-wider'>
                  Lịch trận đấu
                </th>
                <th className='border border-[#4B4885] px-6 py-3 text-xs font-medium text-white font-sora text-center tracking-wider'>
                  Trạng thái
                </th>
                <th className='border border-[#4B4885] px-6 py-3 text-xs font-medium text-white font-sora text-center tracking-wider'>
                  Xoá
                </th>
              </tr>
            </thead>
            <tbody className='bg-[#09082A] divide-y divide-[#09082A]'>
              <tr>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600' />
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  1
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  Bàn 1
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  6.5 Foot
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex items-center gap-2 justify-center'>
                    <img src={images.clock} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    07:00 AM 11/11/2023
                  </div>
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                  Đã xác nhận
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex gap-5 justify-center'>
                    <img src={images.edit} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    <img src={images.del} width={25} height={25} alt='xóa' className='cursor-pointer' />
                  </div>
                </td>
              </tr>
              <tr>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600' />
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  2
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  Bàn 1
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  6.5 Foot
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex items-center gap-2 justify-center'>
                    <img src={images.clock} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    07:00 AM 11/11/2023
                  </div>
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                  Đã xác nhận
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex gap-5 justify-center'>
                    <img src={images.edit} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    <img src={images.del} width={25} height={25} alt='xóa' className='cursor-pointer' />
                  </div>
                </td>
              </tr>
              <tr>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600' />
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  3
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  Bàn 1
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  6.5 Foot
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex items-center gap-2 justify-center'>
                    <img src={images.clock} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    07:00 AM 11/11/2023
                  </div>
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center unconfirm'>
                  Chưa xác nhận
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex gap-5 justify-center'>
                    <img src={images.edit} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    <img src={images.del} width={25} height={25} alt='xóa' className='cursor-pointer' />
                  </div>
                </td>
              </tr>
              <tr>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600' />
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  4
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  Bàn 1
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  6.5 Foot
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex items-center gap-2 justify-center'>
                    <img src={images.clock} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    07:00 AM 11/11/2023
                  </div>
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center unconfirm'>
                  Chưa xác nhận
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex gap-5 justify-center'>
                    <img src={images.edit} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    <img src={images.del} width={25} height={25} alt='xóa' className='cursor-pointer' />
                  </div>
                </td>
              </tr>
              <tr>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600' />
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  5
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  Bàn 1
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  6.5 Foot
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex items-center gap-2 justify-center'>
                    <img src={images.clock} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    07:00 AM 11/11/2023
                  </div>
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                  Đã xác nhận
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex gap-5 justify-center'>
                    <img src={images.edit} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    <img src={images.del} width={25} height={25} alt='xóa' className='cursor-pointer' />
                  </div>
                </td>
              </tr>
              <tr>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600' />
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  6
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  Bàn 1
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  6.5 Foot
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex items-center gap-2 justify-center'>
                    <img src={images.clock} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    07:00 AM 11/11/2023
                  </div>
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                  Đã xác nhận
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex gap-5 justify-center'>
                    <img src={images.edit} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    <img src={images.del} width={25} height={25} alt='xóa' className='cursor-pointer' />
                  </div>
                </td>
              </tr>
              <tr>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600' />
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  7
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  Bàn 1
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  6.5 Foot
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex items-center gap-2 justify-center'>
                    <img src={images.clock} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    07:00 AM 11/11/2023
                  </div>
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                  Đã xác nhận
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex gap-5 justify-center'>
                    <img src={images.edit} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    <img src={images.del} width={25} height={25} alt='xóa' className='cursor-pointer' />
                  </div>
                </td>
              </tr>
              <tr>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600' />
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  8
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  Bàn 1
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  6.5 Foot
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex items-center gap-2 justify-center'>
                    <img src={images.clock} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    07:00 AM 11/11/2023
                  </div>
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                  Đã xác nhận
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex gap-5 justify-center'>
                    <img src={images.edit} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    <img src={images.del} width={25} height={25} alt='xóa' className='cursor-pointer' />
                  </div>
                </td>
              </tr>
              <tr>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600' />
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  9
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  Bàn 1
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  6.5 Foot
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex items-center gap-2 justify-center'>
                    <img src={images.clock} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    07:00 AM 11/11/2023
                  </div>
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                  Đã xác nhận
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex gap-5 justify-center'>
                    <img src={images.edit} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    <img src={images.del} width={25} height={25} alt='xóa' className='cursor-pointer' />
                  </div>
                </td>
              </tr>
              <tr>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600' />
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  10
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  Bàn 1
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  6.5 Foot
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                  <div className='flex items-center gap-2 justify-center'>
                    <img src={images.clock} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    07:00 AM 11/11/2023
                  </div>
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                  Đã xác nhận
                </td>
                <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center rounded-br-[16px]'>
                  <div className='flex gap-5 justify-center'>
                    <img src={images.edit} width={25} height={25} alt='sửa' className='cursor-pointer' />
                    <img src={images.del} width={25} height={25} alt='xóa' className='cursor-pointer' />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex justify-center pt-10 pb-20'>
        <Button name={'Quay lại'} image={images.btnStroke} className={'flex button-container'} />
        <Button name={'Tiếp tục'} image={images.btnGradient} className={'flex button-container'} />
      </div>
    </div>
  )
}
