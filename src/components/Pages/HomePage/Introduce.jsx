import logo from '@assets/images/HomePage/logo.svg'
import ball8 from '@assets/images/HomePage/Introduce/ball8.svg'
import ball0 from '@assets/images/HomePage/Introduce/ball0.svg'
import loginBG from '@assets/images/Btn/bg-login.svg'
import '@assets/styles/Btn/Btn.scss'
import '@assets/styles/HomePage/Introduce/Introduce.scss'
import { Button } from '../../common/Button'
import { Link } from 'react-router-dom'
import path from '../../../constants/path'

const images = {
  logo,
  loginBG,
  ball8,
  ball0
}

export default function Introduce() {
  return (
    <div className="relative flex flex-col items-center justify-center my-5 bg-cover bg-center background h-[500px]">
      <img src={images.ball8} className="absolute hidden md:block top-[-60px] right-10 w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[239px] lg:h-[239px]" alt="Ball 8" />
      <img src={images.logo} className="absolute top-[-50px] w-[150px] md:w-[200px]" alt="Logo" />
      <div className="px-4 text-sm md:text-base text-center text-white w-full max-w-[876px] pt-20 md:px-0 md:pt-28">
        NBB LiveBalls tự hào là một tổ hợp hàng đầu với trang thiết bị chuyên nghiệp và trải nghiệm đỉnh cao. Với cơ sở
        vật chất hàng đầu, chúng tôi là đơn vị tổ chức giải đấu, kết nối cộng đồng và hỗ trợ tìm CLB billiards phù hợp
        cho các cơ thủ.
      </div>
      <div className="py-10 text-center text-white text-base md:text-lg lg:text-xl">
        Hãy cùng chúng tôi trải nghiệm niềm đam mê billiards!
      </div>
      <Link to={path.aboutPage}>
        <Button name={'Xem thêm'} image={images.loginBG} className={'button-container flex justify-center items-center'} />
      </Link>
      <img src={images.ball0} className="absolute hidden md:block bottom-[-30px] left-10 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]" alt="Ball 0" />
    </div>
  )
}
