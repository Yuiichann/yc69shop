import { memo } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/logo.png';
import { HiMenuAlt2 } from 'react-icons/hi';
import { GrCart } from 'react-icons/gr';
import Search from './Search';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex flex-col items-center h-header">
          {/* Logo menu */}
          <div className="w-full flex items-center justify-between">
            <div className="text-32 p-3 cursor-pointer">
              <HiMenuAlt2 />
            </div>

            <Link to="/" className="block w-[100px] h-[100px]">
              <img src={LogoImg} alt="Logo Y69Shop" className="w-full h-full" />
            </Link>

            <div className="text-32 p-3 cursor-pointer">
              <GrCart />
            </div>
          </div>

          <div className="w-full flex-grow">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
