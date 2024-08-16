import React, { useState } from "react";
import bgLogin from '@assets/images/Login-register/bg-login-register.png';
import logoLogin from '@assets/images/Login-register/logo-login-register.png';
import btnLogin from '@assets/images/Login-register/btn-login-register.png';
import logoGoogle from '@assets/images/Login-register/logo-google.svg';
import '@assets/styles/login/login.scss';
import { Button } from '../../common/Button';
import { googleOAuthUrl } from './_components/Google';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../../api/authApi';
import userApi from '../../../api/userApi';
import path from '../../../constants/path';
import Alert from "../../Alert/Alert";
import { useAuth } from "../../PrivateRouters/AuthContext";
import Loading from "../../Loading/Loading";

const images = {
    bgLogin,
    logoLogin,
    btnLogin,
    logoGoogle
};

export default function Login() {
  const navigate = useNavigate();
  const { loginAuth } = useAuth(); // Lấy hàm login từ context
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { username: '', password: '' };

    if (!username) {
      newErrors.username = 'Tài khoản không được để trống.';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Mật khẩu không được để trống.';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    const newUser = {
      email_or_phone: username,
      password: password,
    };
    setLoading(true);
    authApi.login(newUser)
      .then(response => {
        if (response.status === 200) {
          const accessToken = response.data.metadata.access_token;
          userApi.getProfile(accessToken)
            .then(profileResponse => {
              const userProfile = profileResponse.data.metadata;              
              loginAuth(userProfile); // Gọi hàm login từ context
              navigate(`${path.home}`);
            })
            .catch(profileError => {
              setErrorMessage("Đăng nhập thất bại. Vui lòng thử lại.");
              setShowAlert(true);
            }
          );
        } else {
          setErrorMessage("Tài khoản hoặc mật khẩu không đúng.");
          setShowAlert(true);
        }
        setLoading(false);
      })
      .catch(error => {
        setErrorMessage("Đăng nhập thất bại. Vui lòng thử lại.");
        setShowAlert(true);
      }
    );
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  if(loading) return <Loading />;
  return (
    <div className='relative flex justify-center items-center min-h-screen'>
      <img src={images.bgLogin} alt='' className='absolute -z-10 h-screen xl:h-auto' />
      <div className='container flex justify-center items-center'>
        <div className='font-sora'>
          <div className='flex justify-center'>
            <img src={images.logoLogin} alt='' />
          </div>
          <div className='flex justify-center text-[#A0AEC0] text-sm font-normal mt-2'>Trải nghiệm niềm đam mê billiards!</div>
          <div className='flex justify-center text-white text-3xl font-semibold mt-8'>Đăng nhập</div>
          <form className="">
            <div className="mt-6">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="username">
                Tài khoản
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className={`shadow bg-transparent text-white appearance-none border rounded-[20px] ${errors.username ? 'border-red-500' : ''}  w-full p-4 leading-tight focus:outline-none focus:shadow-outline`}
                id="username"
                type="text"
                placeholder="Nhập email/ số điện thoại"
              />
              {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
            </div>
            <div className="mt-5">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="password">
                Mật khẩu
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className={`shadow bg-transparent text-white appearance-none border rounded-[20px] ${errors.password ? 'border-red-500' : ''}  w-full p-4 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                type="password"
                placeholder="Nhập mật khẩu vào đây"
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
            </div>
            <div className='flex items-center justify-between mt-6'>
              <div className='flex items-center justify-between gap-2'>
                <input
                  className="h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-toggle before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault" />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer text-white text-xs font-medium"
                  htmlFor="flexSwitchCheckDefault"
                >Ghi nhớ đăng nhập</label>
              </div>
              <Link className="inline-block align-baseline text-white text-xs font-medium hover:text-blue-800" href="#">
                Quên mật khẩu?
              </Link>
            </div>
            <div className='mt-6'>
              <Button className={'flex button-container'} name={'Đăng nhập'} image={images.btnLogin} onClick={handleLogin}></Button>
            </div>
            {/* <div className='flex justify-center mt-6 text-white text-sm font-medium'>Hoặc</div> */}
            {/* <Link to={googleOAuthUrl} className='border flex justify-center items-center gap-3 px-[70px] py-[14px] mt-2 rounded-2xl'>
              <img src={images.logoGoogle} alt='' />
              <div>Đăng nhập với Google</div>
            </Link> */}
            <div className='flex gap-1 justify-center text-sm mt-6'>
              <div className='text-[#A0AEC0] font-medium'>Bạn chưa có tài khoản?</div>
              <Link to={path.register}>
                <div className='text-white font-medium'>Đăng ký ngay</div>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {showAlert && 
      <Alert
        show={showAlert}
        title="Đã xảy ra lỗi"
        text={errorMessage}
        type="error"
        onConfirm={handleCloseAlert}
        showButtonConfirm={true}
        showCancelButton={false}
      />}
    </div>
  );
}
