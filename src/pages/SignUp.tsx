import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import BannerImg from '../assets/img/banner_auth2.jpg';

const SignUp = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-no-repeat bg- flex items-center justify-center select-none animate-blur"
      style={{
        backgroundImage: `linear-gradient(to top, rgb(0 0 0 / 0.4), rgb(0 0 0 / 0.4)), url('${BannerImg}')`,
      }}
    >
      <div className="animate-onto relative flex flex-col items-center py-6 px-2 bg-white rounded w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2">
        <h1 className="text-32 tracking-wide font-bold mt-6">ĐĂNG KÝ</h1>

        {/* Form */}
        <div className="min-h-[150px]"></div>

        <span>
          Bạn chưa có tài khoản?
          <Link to="/dang-nhap" className="text-main ml-1">
            Đăng nhập
          </Link>
        </span>

        {/* go back btn */}
        <Link
          to="/"
          className="absolute top-3 left-3 flex items-center space-x-1 hover:text-main effect font-semibold"
        >
          <MdKeyboardBackspace />
          <span>VỀ TRANG CHỦ</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
