import bgRegister from '../../../assets/images/Login-register/bg-login-register.png'
import logoRegister from '../../../assets/images/Login-register/logo-login-register.png'
import btnRegister from '../../../assets/images/Login-register/btn-login-register.png'
import logoGoogle from '../../../assets/images/Login-register/logo-google.svg'
import '../../../assets/styles/login/login.scss'
import { Button } from '../../common/Button'
import { useState, useEffect } from 'react'
import authApi from '../../../api/authApi'
import { locationApi } from '../../../api/locationApi'
import { convertTimeToMinutes } from '../../../utils/utils'
import InputField from './InputField/InputField'
import {
    Tab,
    initTWE,
  } from "tw-elements";
import path from '../../../constants/path'
import { Link } from 'react-router-dom'
import Alert from '../../Alert/Alert'
  initTWE({ Tab });

const images = {
    bgRegister,
    logoRegister,
    btnRegister,
    logoGoogle
}

export default function RegisterPlayer() {
  const [activeTab, setActiveTab] = useState('player'); // Tab hiện tại đang hoạt động (player hoặc club)
const [provinces, setProvinces] = useState([]); // Danh sách tỉnh thành
const [districts, setDistricts] = useState([]); // Danh sách quận huyện
const [wards, setWards] = useState([]); // Danh sách xã phường

// State hooks cho thông tin đăng ký câu lạc bộ
const [userNameClb, setUsernameClb] = useState(""); // Tên câu lạc bộ
const [passwordClb, setPasswordClb] = useState(""); // Mật khẩu
const [emailClb, setEmailClb] = useState(""); // Email
const [phonedClb, setPhonedClb] = useState(""); // Số điện thoại
const [provinceCode, setProvinceCode] = useState(""); // Mã tỉnh thành đã chọn
const [provinceName, setProvinceName] = useState(""); // Tên tỉnh thành đã chọn
const [districtCode, setDistrictCode] = useState(""); // Mã quận huyện đã chọn
const [districtName, setDistrictName] = useState(""); // Tên quận huyện đã chọn
const [wardCode, setWardCode] = useState(""); // Mã xã phường đã chọn
const [wardName, setWardName] = useState(""); // Tên xã phường đã chọn
const [numberHomeClb, setNumberHomeClb] = useState(""); // Số nhà
const [tableClb, setTableClb] = useState(""); // Số bàn
const [minPriceClb, setMinPriceClb] = useState(""); // Giá tối thiểu
const [maxPriceClb, setMaxPriceClb] = useState(""); // Giá tối đa
const [openTime, setOpenTime] = useState("08:30"); // Thời gian mở cửa
const [closeTime, setCloseTime] = useState("23:00"); // Thời gian đóng cửa
const [errorClb, setErrorClb] = useState({}); // Lỗi khi đăng ký câu lạc bộ

// State hooks cho thông tin đăng ký người chơi
const [usernameplayer, setUsernamePlayer] = useState(""); // Tài khoản người chơi
const [passwordplayer, setPasswordPlayer] = useState(""); // Mật khẩu người chơi
const [phoneplayer, setPhonePlayer] = useState(""); // Số điện thoại người chơi
const [emailplayer, setEmailPlayer] = useState(""); // Email người chơi
const [errorsPlayer, setErrorsPlayer] = useState({}); // Lỗi khi đăng ký người chơi

// State hooks cho thông báo đăng ký
const [alertRegister, setAlertRegister] = useState(false); // Hiển thị thông báo
const [textAlertRegister, setTextAlertRegister] = useState(''); // Nội dung thông báo
const [typeAlertRegister, setTypeAlertRegister] = useState('success'); // Loại thông báo (success/error)
const [titleAlertRegister, setTitleAlertRegister] = useState('Chúc mừng'); // Tiêu đề thông báo


  useEffect(() => {
    locationApi.getAllProvinces()
      .then((data) => {
        setProvinces(data.data.metadata);
      })
      .catch((error) => {
        console.error('Error fetching provinces:', error);
      });
  }, []);

  useEffect(() => {
    if (provinces.length > 0) {
      setProvinceCode(provinces[0].code);
      setProvinceName(provinces[0].name);
    }
  }, [provinces]);

  const handleProvinceChange = (event) => {
    const selectedProvince = provinces.find((province) => province.code === event.target.value);
    if (selectedProvince) {
      setProvinceCode(selectedProvince.code);
      setProvinceName(selectedProvince.name);
      locationApi.getDistricts(selectedProvince.code)
        .then((data) => {
          setDistricts(data.data.metadata);
        })
        .catch((error) => {
          console.error('Error fetching districts:', error);
        });
    } else {
      setProvinceCode('');
      setProvinceName('');
      setDistricts([]);
    }
  };

  const handleDistrictChange = (event) => {
    const selectedDistrict = districts.find((district) => district.code === event.target.value);
    if (selectedDistrict) {
      setDistrictCode(selectedDistrict.code);
      setDistrictName(selectedDistrict.name);
      fetchWards(selectedDistrict.code);
    } else {
      setDistrictCode('');
      setDistrictName('');
      setWards([]);
    }
  };

  const fetchWards = async (districtCode) => {
    try {
      const data = await locationApi.getWard(districtCode);
      setWards(data.data.metadata);
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };

  const handleWardChange = (event) => {
    const selectedWard = wards.find((ward) => ward.code === event.target.value);
    if (selectedWard) {
      setWardCode(selectedWard.code);
      setWardName(selectedWard.name);
    } else {
      setWardCode('');
      setWardName('');
    }
  };

  const handleNumberHomeChange = (e) => {
    setNumberHomeClb(e.target.value);
  };

  const handleRegisterPlayer = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrorsPlayer = { usernameplayer: '', passwordplayer: '', phone_number: '', email: '' };

    if (!usernameplayer) {
      newErrorsPlayer.usernameplayer = 'Tài khoản không được để trống.';
      isValid = false;
    }

    if (!passwordplayer) {
      newErrorsPlayer.passwordplayer = 'Mật khẩu không được để trống.';
      isValid = false;
    } else if (passwordplayer.length < 6) {
      newErrorsPlayer.passwordplayer = 'Mật khẩu phải có ít nhất 6 ký tự.';
      isValid = false;
    }

    if (!phoneplayer) {
      newErrorsPlayer.phone_number = 'Số điện thoại không được để trống.';
      isValid = false;
    } else if (!/^\d{10,11}$/.test(phoneplayer)) {
      newErrorsPlayer.phone_number = 'Số điện thoại không hợp lệ.';
      isValid = false;
    }

    if (!emailplayer) {
      newErrorsPlayer.email = 'Email không được để trống.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailplayer)) {
      newErrorsPlayer.email = 'Email không hợp lệ.';
      isValid = false;
    }

    setErrorsPlayer(newErrorsPlayer);

    if (!isValid) {
      return;
    }

    const newUserPlayer = {
      name: usernameplayer,
      password: passwordplayer,
      phone_number: phoneplayer,
      email: emailplayer,
      type: 'player'
    };

    authApi.registerAccount(newUserPlayer)
      .then(response => {
        if (response.status === 200) {
          setUsernamePlayer('');
          setEmailPlayer('');
          setPhonePlayer('');
          setPasswordPlayer('');
          setErrorsPlayer({})
          setAlertRegister(true);
          setTextAlertRegister('Chúc mừng bạn đã đăng ký tài khoản người chơi thành công!')
          setTypeAlertRegister('success');
          setTitleAlertRegister('Chúc mừng');
        } else {
          setAlertRegister(true);
          setTextAlertRegister('Đăng ký tài khoản người chơi thất bại!')
          setTypeAlertRegister('error');
          setTitleAlertRegister('Có lỗi xảy ra');
        }
      })
      .catch(error => {
        setAlertRegister(true);
        setTextAlertRegister('Đăng ký tài khoản người chơi thất bại!');
        setTypeAlertRegister('error');
        setTitleAlertRegister('Có lỗi xảy ra');
        console.error(error);
      });
  };

  const handleRegisterClb = (e) => {
    e.preventDefault();
    const newErrorsClb = { 
      name: '', 
      phone_number: '', 
      email: '', 
      password: '', 
      province: '', 
      district: '', 
      ward: '', 
      numberHome: '',
      table: '',
      min_price: '',
      max_price: ''
    };

    if (!userNameClb) {
      newErrorsClb.name = 'Tên không được để trống.';
    }

    if (!passwordClb) {
      newErrorsClb.password = 'Mật khẩu không được để trống.';
    } else if (passwordClb.length < 6) {
      newErrorsClb.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
    }

    if (!phonedClb) {
      newErrorsClb.phone_number = 'Số điện thoại không được để trống.';
    } else if (!/^\d{10,11}$/.test(phonedClb)) {
      newErrorsClb.phone_number = 'Số điện thoại không hợp lệ.';
    }

    if (!emailClb) {
      newErrorsClb.email = 'Email không được để trống.';
    } else if (!/\S+@\S+\.\S+/.test(emailClb)) {
      newErrorsClb.email = 'Email không hợp lệ.';
    }

    if (!provinceCode) {
      newErrorsClb.province = 'Tỉnh thành không được để trống.';
    }

    if (!districtCode) {
      newErrorsClb.district = 'Quận huyện không được để trống.';
    }

    if (!wardCode) {
      newErrorsClb.ward = 'Xã phường không được để trống.';
    }

    if (!numberHomeClb) {
      newErrorsClb.numberHome = 'Số nhà không được để trống.';
    }

    if (!tableClb) {
      newErrorsClb.table = 'Số bàn không được để trống.';
    }

    if (!minPriceClb) {
      newErrorsClb.min_price = 'Giá tối thiểu không được để trống.';
    }

    if (!maxPriceClb) {
      newErrorsClb.max_price = 'Giá tối đa không được để trống.';
    }

    setErrorClb(newErrorsClb);

    if (Object.values(newErrorsClb).some(error => error)) {
      return;
    }

    const newClub = {
      name: userNameClb,
      password: passwordClb,
      phone_number: phonedClb,
      email: emailClb,
      province: provinceName,
      district: districtName,
      ward: wardName,
      numberHome: numberHomeClb,
      table: tableClb,
      min_price: minPriceClb,
      max_price: maxPriceClb,
      open_time: convertTimeToMinutes(openTime),
      close_time: convertTimeToMinutes(closeTime),
      type: 'club'
    };

    authApi.registerClub(newClub)
      .then(response => {
        if (response.status === 200) {
          setUsernameClb('');
          setEmailClb('');
          setPhonedClb('');
          setPasswordClb('');
          setProvinceCode('');
          setDistrictCode('');
          setWardCode('');
          setNumberHomeClb('');
          setTableClb('');
          setMinPriceClb('');
          setMaxPriceClb('');
          setErrorClb({});
          setAlertRegister(true);
          setTextAlertRegister('Chúc mừng bạn đã đăng ký tài khoản câu lạc bộ thành công!')
          setTypeAlertRegister('success');
          setTitleAlertRegister('Chúc mừng');
        } else {
          setAlertRegister(true);
          setTextAlertRegister('Đăng ký tài khoản câu lạc bộ thất bại!')
          setTypeAlertRegister('error');
          setTitleAlertRegister('Có lỗi xảy ra');
        }
      })
      .catch(error => {
        setAlertRegister(true);
        setTextAlertRegister('Đăng ký tài khoản câu lạc bộ thất bại!');
        setTypeAlertRegister('error');
        setTitleAlertRegister('Có lỗi xảy ra');
        console.error(error);
      });
  };
  
  
  return (
    <div className='relative flex justify-center items-center min-h-screen'>
      <img src={images.bgRegister} alt='' className='absolute -z-10 h-full w-full'/>
      <div className='container flex justify-center items-center'>
        <div className='font-sora'>
          <div className='flex justify-center'>
            <img src={images.logoRegister} alt=''  />
          </div>
          <div className='flex justify-center text-[#A0AEC0] text-sm font-normal mt-2'>Trải nghiệm niềm đam mê billiards!</div>
          <div className='flex justify-center text-white text-3xl font-semibold mt-8'>Đăng ký</div>

          <div className='flex justify-center gap-8 mt-3 text-[#A0AEC0] font-sora text-sm font-semibold'>
            <div className={activeTab === 'player' ? 'text-white cursor-pointer' : 'text-[#A0AEC0] cursor-pointer'} onClick={() => setActiveTab('player')}><a>Người chơi</a></div>
            <div className={activeTab === 'club' ? 'text-white cursor-pointer' : 'text-[#A0AEC0] cursor-pointer'} onClick={() => setActiveTab('club')}><a>Câu lạc bộ</a></div>
          </div>
          <form>
          {activeTab === 'player' ? (
            <div>
              <InputField
                label="Tên"
                value={usernameplayer}
                onChange={(e) => setUsernamePlayer(e.target.value)}
                error={errorsPlayer.usernameplayer}
              />
              <InputField
                label="Số điện thoại"
                type="tel"
                value={phoneplayer}
                onChange={(e) => setPhonePlayer(e.target.value)}
                error={errorsPlayer.phone_number}
              />
              <InputField
                label="Email"
                type="email"
                value={emailplayer}
                onChange={(e) => setEmailPlayer(e.target.value)}
                error={errorsPlayer.email}
              />
              <InputField
                label="Mật khẩu"
                type="password"
                value={passwordplayer}
                onChange={(e) => setPasswordPlayer(e.target.value)}
                error={errorsPlayer.passwordplayer}
              />
              <Button onClick={handleRegisterPlayer} className={'flex button-container mt-3'} name={'Đăng ký'} image={images.btnRegister} />
              <div className='flex gap-1 justify-center text-sm mt-3'>
                <div className='text-[#A0AEC0] font-medium'>Bạn chưa có tài khoản?</div>
                <Link to={path.login}>
                  <div className='text-white font-bold'>Đăng nhập ngay</div>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <InputField
                label="Tên"
                value={userNameClb}
                onChange={(e) => setUsernameClb(e.target.value)}
                error={errorClb.name}
              />
              <InputField
                label="Số điện thoại"
                value={phonedClb}
                onChange={(e) => setPhonedClb(e.target.value)}
                error={errorClb.phone_number}
              />
              <InputField
                label="Email"
                type="email"
                value={emailClb}
                onChange={(e) => setEmailClb(e.target.value)}
                error={errorClb.email}
              />
              <InputField
                label="Mật khẩu"
                type="password"
                value={passwordClb}
                onChange={(e) => setPasswordClb(e.target.value)}
                error={errorClb.password}
              />
                <div className="mt-3">
                  <label className="block text-white text-sm font-medium mb-2">
                    Số bàn
                  </label>
                  <input 
                    onChange={(e) => setTableClb(e.target.value)}
                    className={`shadow bg-transparent text-white appearance-none border rounded-[20px] w-full p-3 px-4 mb-2 leading-tight focus:outline-none focus:shadow-outline text-sm ${errorClb.table ? 'border-red-500' : ''}`}
                    required
                    type="text"
                    placeholder="Nhập số bàn vào đây"
                  />
                  {errorClb.table && <p className="text-red-500 text-xs italic">{errorClb.table}</p>}
                </div>

                <div className="mt-3">
                  <label className="block text-white text-sm font-medium mb-2">
                    Giá tối thiểu
                  </label>
                  <input 
                    onChange={(e) => setMinPriceClb(e.target.value)}
                    className={`shadow bg-transparent text-white appearance-none border rounded-[20px] w-full p-3 px-4 mb-2 leading-tight focus:outline-none focus:shadow-outline text-sm ${errorClb.min_price ? 'border-red-500' : ''}`}
                    required
                    type="number"
                    placeholder="Nhập giá tối thiểu vào đây"
                  />
                  {errorClb.min_price && <p className="text-red-500 text-xs italic">{errorClb.min_price}</p>}
                </div>

                <div className="mt-3">
                  <label className="block text-white text-sm font-medium mb-2">
                    Giá tối đa
                  </label>
                  <input 
                    onChange={(e) => setMaxPriceClb(e.target.value)}
                    className={`shadow bg-transparent text-white appearance-none border rounded-[20px] w-full p-3 px-4 mb-2 leading-tight focus:outline-none focus:shadow-outline text-sm ${errorClb.max_price ? 'border-red-500' : ''}`}
                    required
                    type="number"
                    placeholder="Nhập giá tối đa vào đây"
                  />
                  {errorClb.max_price && <p className="text-red-500 text-xs italic">{errorClb.max_price}</p>}
                </div>

                <div className="mt-3">
                  <label className="block text-white text-sm font-medium mb-2">
                    Thời gian mở cửa
                  </label>
                  <input
                    type="time"
                    value={openTime}
                    onChange={(e) => setOpenTime(e.target.value)}
                    className="shadow bg-transparent text-white appearance-none border rounded-[20px] w-full p-3 px-4 mb-2 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  />
                </div>

                <div className="mt-3">
                  <label className="block text-white text-sm font-medium mb-2">
                    Thời gian đóng cửa
                  </label>
                  <input
                    type="time"
                    value={closeTime}
                    onChange={(e) => setCloseTime(e.target.value)}
                    className="shadow bg-transparent text-white appearance-none border rounded-[20px] w-full p-3 px-4 mb-2 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  />
                </div>
                <div className="mt-3">
                <label className="block text-white text-sm font-medium mb-2" htmlFor="address">
                    Địa chỉ
                  </label>
                  <select 
                    onChange={handleProvinceChange} 
                    className={`shadow bg-transparent scrollableSelect text-white border rounded-[20px] w-full p-3 px-4 mb-2 leading-tight focus:outline-none focus:shadow-outline text-sm ${errorClb.province ? 'border-red-500' : ''}`} 
                    required
                  >
                    <option className='bg-black'  value="">Thành phố</option>
                    {provinces.map((province) => (
                      <option className='bg-black' key={province.code} value={province.code}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                  {errorClb.province && <p className="text-red-500 text-xs italic mt-3">{errorClb.province}</p>}
                </div>

                <div className="mt-3">
                  <select 
                    onChange={handleDistrictChange} 
                    className={`shadow bg-transparent scrollableSelect text-white border rounded-[20px] w-full p-3 px-4 mb-2 leading-tight focus:outline-none focus:shadow-outline text-sm ${errorClb.district ? 'border-red-500' : ''}`} 
                    required
                  >
                    <option className='bg-black' value="">Quận</option>
                    {districts.map((district) => (
                      <option className='bg-black' key={district.code} value={district.code}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                  {errorClb.district && <p className="text-red-500 text-xs italic mt-3">{errorClb.district}</p>}
                </div>

                <div className="mt-3">
                  <select 
                    onChange={handleWardChange} 
                    className={`shadow bg-transparent scrollableSelect text-white border rounded-[20px] w-full p-3 px-4 mb-2 leading-tight focus:outline-none focus:shadow-outline text-sm ${errorClb.ward ? 'border-red-500' : ''}`} 
                    required
                  >
                    <option className='bg-black' value="">Xã</option>
                    {wards.map((ward) => (
                      <option className='bg-black' key={ward.code} value={ward.code}>
                        {ward.name}
                      </option>
                    ))}
                  </select>
                  {errorClb.ward && <p className="text-red-500 text-xs italic mt-3">{errorClb.ward}</p>}
                </div>

                <div className="mt-3">
                  <input 
                    onChange={handleNumberHomeChange} 
                    className={`shadow bg-transparent text-white appearance-none border rounded-[20px] w-full p-3 px-4 mb-2 leading-tight focus:outline-none focus:shadow-outline text-sm ${errorClb.numberHome ? 'border-red-500' : ''}`} 
                    required 
                    id="apartment-number" 
                    type="text" 
                    placeholder="Số nhà"
                  />
                  {errorClb.numberHome && <p className="text-red-500 text-xs italic mt-3">{errorClb.numberHome}</p>}
                </div>
                <div className='mt-3'>
                  <Button onClick={handleRegisterClb} className={'flex button-container'} name={'Đăng ký'} image={images.btnRegister}></Button>
                </div>
                <div className='flex gap-1 justify-center text-sm mt-3'>
                  <div className='text-[#A0AEC0] font-medium'>Bạn đã có tài khoản?</div>
                  <Link to={path.login}>
                    <div className='text-white font-bold'>Đăng nhập ngay</div>
                  </Link>
                </div>
              </div>
            )}
          </form>

        </div>
      </div>
      {alertRegister && (
        <Alert
        show={alertRegister}
        title={titleAlertRegister}
        text={textAlertRegister}
        onConfirm={() => setAlertRegister(false)}
        showButtonConfirm={true}
        showCancelButton={false}
        type={typeAlertRegister}
      />
      )}
      
    </div>
  )
}


