import { memo } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import MenuItems from '../constants/MenuItems';

export const NavBarDesktop = memo(() => {
  const { pathname } = useLocation();

  return (
    <ul className="w-full flex uppercase gap-8 text-18">
      {MenuItems.map((item) => (
        <li
          key={item.path}
          className="flex items-center relative group hover:text-main"
        >
          <Link
            to={item.path}
            className={`font-semibold ${
              pathname === item.path ? 'text-main font-bold' : ''
            }`}
          >
            {item.value}
          </Link>
          {item.children && (
            <div className="ml-1 group-hover:-rotate-180 effect">
              <MdKeyboardArrowDown />
            </div>
          )}

          {item.children && (
            <ul className="absolute z-10 text-14 top-full left-0 min-w-[180px] text-textColor2 border border-b-0 capitalize hidden group-hover:block bg-white rounded-sm shadow-md">
              {item.children.map((subItem) => (
                <li key={subItem.path}>
                  <Link
                    to={subItem.path}
                    className="px-3 py-2 block border-b hover:text-textColor effect"
                  >
                    {subItem.value}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
});
