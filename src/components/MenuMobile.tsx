import { memo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuItems from '../constants/MenuItems';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';

interface Props {
  isMenuMobileOpen: boolean;
  setIsMenuMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile = ({ isMenuMobileOpen, setIsMenuMobileOpen }: Props) => {
  const [subMenuOpen, setSubmenuOpen] = useState('');

  const { pathname } = useLocation();

  const handleOpenSubmenu = (item: typeof MenuItems[0]) => {
    if (item.children && item.children.length > 0) {
      setSubmenuOpen(item.path);
    }
  };

  const handleCloseSubmenu = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    e.stopPropagation();

    setSubmenuOpen('');
  };

  return (
    <div
      className={`fixed top-24 left-0 w-screen min-h-[calc(100vh-6rem)] shadow-topShadow bg-white ${
        isMenuMobileOpen ? 'block' : 'hidden'
      }`}
    >
      {/* menu */}
      <div className="p-3 text-16">
        <ul className="w-full">
          {MenuItems.map((item) => (
            <li
              key={item.path}
              className="flex items-center justify-between border-b-2"
              onClick={() => handleOpenSubmenu(item)}
            >
              <Link
                to={item.path}
                className={`block py-4 uppercase font-semibold ${
                  pathname === item.path ? 'text-main' : ''
                }`}
                onClick={() => setIsMenuMobileOpen(false)}
              >
                {item.value}
              </Link>

              {item.children && (
                <div className="text-18 mr-1">
                  <MdOutlineKeyboardArrowRight />
                </div>
              )}

              {/* Sub menu */}
              {item.children && (
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-white p-3 effect ${
                    item.path === subMenuOpen ? '' : 'translate-x-full'
                  }`}
                >
                  <ul className="w-full">
                    <li
                      className="flex items-center space-x-1 uppercase hover:text-main text-16 font-semibold cursor-pointer"
                      onClick={handleCloseSubmenu}
                    >
                      <MdOutlineKeyboardArrowLeft />
                      <span>Quay về</span>
                    </li>

                    {item.children.map((subItem) => (
                      <li className="border-b-2" key={subItem.path}>
                        <Link
                          to={subItem.path}
                          className="block py-4 capitalize hover:text-main"
                          onClick={() => setIsMenuMobileOpen(false)}
                        >
                          - {subItem.value}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Login/ signin */}
      <div className="p-3 flex items-center space-x-4">
        <Link to="/dang-nhap" className="button">
          Đăng nhập
        </Link>
        <Link to="/dang-ky" className="button">
          Đăng ký
        </Link>
      </div>

      {/* arrow */}
      <div className="absolute block sm:hidden w-0 h-0 top-0 left-6 -translate-y-full border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-white"></div>
    </div>
  );
};

export default memo(MenuMobile);
