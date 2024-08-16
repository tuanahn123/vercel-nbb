import edit from '~/assets/images/PersonalAccount/edit.svg'
import avatar from '~/assets/images/PersonalAccount/avatar-account.png'
import clock from '~/assets/images/PersonalAccount/clock.png'
import product from '~/assets/images/PersonalAccount/product.png'
import delivering from '~/assets/images/PersonalAccount/delivering.png'
import delivered from '~/assets/images/PersonalAccount/delivered.png'
import cancelled from '~/assets/images/PersonalAccount/cancelled.png'
import {TabComponent} from "./TabComponent/TabComponent";
import '~/assets/styles/PersonalAccount/Purchase.scss';
import { Footer } from "../../../common/Footer";
import Navbar from "../../../common/Navbar";


const images = {
    edit,
    avatar,
    clock,
    product,
    delivering,
    delivered,
    cancelled
}


const MuaHang = () => {
    return (
        <div className="container">
            <div className='custom-table-container'>
                <div className='custom-table'>
                    <div className='custom-table-head'>
                        <div className='custom-table-head-cell'>Thời gian</div>
                        <div className='custom-table-head-cell'>Tên sản phẩm</div>
                        <div className='custom-table-head-cell'>Số lượng</div>
                        <div className='custom-table-head-cell'>Giá trị</div>
                        <div className='custom-table-head-cell'>Trạng thái</div>
                    </div>
                    <div className='custom-table-body'>
                        <div className='custom-table-row'>
                            <div className='custom-table-cell gap-2'><img src={images.clock} alt="" />07:00 AM  11/11/2023</div>
                            <div className='custom-table-cell gap-6'><img src={images.product} alt=""/>Phíp</div>
                            <div className='custom-table-cell'>1</div>
                            <div className='custom-table-cell'>300.000</div>
                            <div className='custom-table-cell gap-2'><img src={images.delivering} alt=""/>Đang giao</div>
                        </div>
                        <div className='custom-table-row'>
                            <div className='custom-table-cell gap-2'><img src={images.clock} alt="" />07:00 AM  11/11/2023</div>
                            <div className='custom-table-cell gap-6'><img src={images.product} alt=""/>Phíp</div>
                            <div className='custom-table-cell'>1</div>
                            <div className='custom-table-cell'>300.000</div>
                            <div className='custom-table-cell gap-2'><img src={images.delivered} alt=""/>Đang giao</div>
                        </div>
                        <div className='custom-table-row'>
                            <div className='custom-table-cell gap-2'><img src={images.clock} alt="" />07:00 AM  11/11/2023</div>
                            <div className='custom-table-cell gap-6'><img src={images.product} alt=""/>Phíp</div>
                            <div className='custom-table-cell'>1</div>
                            <div className='custom-table-cell'>300.000</div>
                            <div className='custom-table-cell gap-2'><img src={images.cancelled} alt=""/>Đang giao</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  const KeoDau = () => {
    return (
        <div className="container">
  <div className='custom-table-container'>
    <div className='custom-table'>
      <div className='custom-table-head'>
        <div className='custom-table-head-cell'>Thời gian</div>
        <div className='custom-table-head-cell'>Người chơi</div>
        <div className='custom-table-head-cell'>Kết quả</div>
        <div className='custom-table-head-cell'>Thể thức chơi</div>
        <div className='custom-table-head-cell'>Môn thi đấu</div>
        <div className='custom-table-head-cell'>Địa điểm</div>
      </div>
      <div className='custom-table-body'>
        <div className='custom-table-row'>
          <div className='custom-table-cell gap-2'><img src={images.clock} alt="" />07:00 AM 11/11/2023</div>
          <div className='custom-table-cell gap-6'>Nguyễn Văn A</div>
          <div className='custom-table-cell'><div className="result-status win">Thắng</div></div>
          <div className='custom-table-cell'>Đơn</div>
          <div className='custom-table-cell'>8 bi</div>
          <div className='custom-table-cell'>Paradise Billiards Club</div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  };

  const ThiDau = () => {
    return (
        <div className="container m-auto">
            <div className='rounded-[16px] overflow-hidden'>
                <table className='min-w-full divide-y divide-blue-800 border border-[#2D27FF] border-collapse'>
                    <thead className='bg-blue-800'>
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
                    <tbody className='bg-blue-700 divide-y divide-blue-800'>
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center unconfirm'>
                        Chưa xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center unconfirm'>
                        Chưa xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center rounded-br-[16px]'>
                        Xoá
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
        </div>
    );
  };

  const Voucher = () => {
    return (
        <div className="container m-auto">
            <div className='rounded-[16px] overflow-hidden'>
                <table className='min-w-full divide-y divide-blue-800 border border-[#2D27FF] border-collapse'>
                    <thead className='bg-blue-800'>
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
                    <tbody className='bg-blue-700 divide-y divide-blue-800'>
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center unconfirm'>
                        Chưa xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center unconfirm'>
                        Chưa xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center'>
                        Xoá
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
                        6.5 Foot
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm font-sora text-center confirm'>
                        Đã xác nhận
                        </td>
                        <td className='border border-[#4B4885] px-6 py-4 whitespace-nowrap text-sm text-white font-sora text-center rounded-br-[16px]'>
                        Xoá
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
        </div>
    );
  };
  
  const tabsData = [
    { label: 'Mua hàng', content: <MuaHang /> },
    { label: 'Kèo đấu', content: <KeoDau /> },
    { label: 'Thi đấu', content: <ThiDau /> },
    { label: 'Voucher', content: <Voucher /> },
  ];


export default function Purchase() {
    return (
        <div className="bg-[#060612]">
            <Navbar />
            <div className="container m-auto">
                <div className="grid grid-cols-12 mt-12 justify-center">
                    <div className="col-span-2 col-start-11 text-base font-sora font-normal text-white rounded-lg border-[#0C53FF] bg-[#183ADC] flex gap-2 py-3 justify-center">
                        <img src={images.edit} alt="" />
                        Sửa thông tin
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-2 col-start-3 flex flex-col items-center">
                        <img src={images.avatar} alt="" />
                        <div className="text-white font-sora text-2xl font-semibold mt-3">Nguyễn Văn A</div>
                        <div className="text-[#444] font-sora font-normal text-sm">CLB BJA vjppro</div>
                    </div>
                    <div className="col-span-6 col-start-7">
                        <div className="mt-6">
                            <label htmlFor='EndTime' className='text-lg font-sora pr-3 text-white font-normal col-span-1'>
                                Ngày sinh
                            </label>
                            <input
                                type='date'
                                id='EndTime'
                                className='col-span-1 p-2 bg-[#060612] border-none font-sora font-normal text-base text-[#A0A0A0]'
                            />
                            <label htmlFor='gender' className='text-lg font-sora pr-6 text-white font-normal col-span-1'>
                                Giới tính
                            </label>
                            <input
                                type='input'
                                id='gender'
                                placeholder="nam"
                                className='col-span-1 p-2 bg-[#060612] border-none font-sora font-normal text-base text-[#A0A0A0]'
                            />
                        </div>
                        <div className="mt-7">
                            <label htmlFor='phone' className='text-lg font-sora pr-6 text-white font-normal col-span-1'>
                                Số điện thoại
                            </label>
                            <input
                                type='input'
                                id='phone'
                                placeholder="0335773123"
                                className='col-span-1 p-2 bg-[#060612] border-none font-sora font-normal text-base text-[#A0A0A0]'
                            />
                        </div>
                        <div className="mt-7">
                            <label htmlFor='address' className='text-lg font-sora pr-6 text-white font-normal col-span-1'>
                                Địa chỉ
                            </label>
                            <input
                                type='input'
                                id='address'
                                placeholder="123 Giai Phong, Hoang Mike,Ha Noi"
                                className='col-span-1 p-2 bg-[#060612] border-none font-sora font-normal text-base text-[#A0A0A0]'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <TabComponent tabs={tabsData} />
            <Footer/>
        </div>
    )
}