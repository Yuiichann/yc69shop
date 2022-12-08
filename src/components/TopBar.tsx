import { memo } from 'react';
import { FaMapMarker, FaUserAlt, FaRegRegistered } from 'react-icons/fa';
import { IoMailOpen } from 'react-icons/io5';
import {
  MdPhoneIphone,
  MdOutlineKeyboardArrowDown,
  MdLogin,
  MdLogout,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <nav className="bg-gray-200 text-14 hidden md:block">
      <div className="container">
        <div className="h-[47px] flex justify-between items-center p-1">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1 items-center">
              <FaMapMarker />
              <span>194 Trần Bá Giao - Phường 5 - Gò Vâp - TP.HCM</span>
            </div>

            <div className="hidden lg:flex space-x-1 items-center">
              <IoMailOpen />
              <span>y69shop@gmail.com</span>
            </div>

            <div className="hidden lg:flex space-x-1 items-center">
              <MdPhoneIphone />
              <span>+8477439801</span>
            </div>
          </div>

          {/* Login / register / tai khoan */}
          <div className="group relative after:absolute after:w-full after:hidden hover:after:block after:h-5 after:left-0 after:top-5">
            <div className="flex items-center space-x-1 cursor-default hover:text-hoverColor effect">
              <FaUserAlt />
              <span>Tài khoản</span>
              <MdOutlineKeyboardArrowDown />
            </div>

            <ul className="absolute top-[130%] -left-10 hidden group-hover:flex flex-col bg-white shadow-md rounded-md">
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-2 px-4 py-2 cursor-pointer min-w-[150px] hover:text-hoverColor"
                >
                  <MdLogin />
                  <span>Đăng nhập</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-2 px-4 py-2 cursor-pointer min-w-[150px] hover:text-hoverColor"
                >
                  <FaRegRegistered />
                  <span>Đăng ký</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(TopBar);
