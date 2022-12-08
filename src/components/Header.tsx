import { memo } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/logo.png';
import { HiMenuAlt2 } from 'react-icons/hi';
import { GrCart, GrClose } from 'react-icons/gr';
import SearchInput from './SearchInput';
import { NavBarDesktop } from './NavBar';
import MenuMobile from './MenuMobile';
import { useState } from 'react';

const Header = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  return (
    <header className="">
      <div className="container">
        <div className="flex flex-col md:flex-row py-2 gap-1">
          {/* Logo, icon buton on mobile */}
          <div className="flex items-center justify-between h-headerMobile md:h-headerDesktop">
            {/* btn menu on mobile */}
            <div className="md:hidden">
              <div className="icon-btn" onClick={handleToggleMenu}>
                {isMenuMobileOpen ? <GrClose /> : <HiMenuAlt2 />}
              </div>

              {/* Menu no Mobile */}
              <MenuMobile
                isMenuMobileOpen={isMenuMobileOpen}
                setIsMenuMobileOpen={setIsMenuMobileOpen}
              />
            </div>

            {/* Logo */}
            <Link to="/" className="h-full">
              <img src={LogoImg} alt="Logo Y69SHOP" className="h-full" />
            </Link>

            {/* btn shopping cart on mobile*/}
            <Link to="/gio-hang" className="icon-btn md:hidden">
              <GrCart />
            </Link>
          </div>

          {/* Search input & Nav */}
          <div className="md:flex-grow flex md:flex-col items-center md:justify-evenly">
            <div className="w-full flex md:space-x-2 lg:space-x-4">
              <SearchInput />

              <Link
                to="/gio-hang"
                className="hidden md:flex items-center px-2 gap-2 cursor-pointer relative select-none"
              >
                <div className="text-xl">
                  <GrCart />
                </div>
                <span>Giỏ hàng</span>
              </Link>
            </div>

            <nav className="w-full hidden md:block px-4">
              <NavBarDesktop />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
