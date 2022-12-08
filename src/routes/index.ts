import Collections from '../pages/Collections';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Introduce from '../pages/Introduce';
import Products from '../pages/Products';
import Search from '../pages/Search';
import ShoppingCart from '../pages/ShoppingCart';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { RoutesProps } from '../types';

const routes: RoutesProps[] = [
  {
    name: 'Trang chủ',
    path: '/',
    element: Home,
  },
  {
    name: 'Sản phẩm',
    path: '/san-pham',
    element: Products,
  },
  {
    name: 'Danh mục sản phẩm theo category',
    path: '/danh-muc/:category',
    element: Collections,
  },
  {
    name: 'Giới thiệu',
    path: '/gioi-thieu',
    element: Introduce,
  },
  {
    name: 'Liên hệ',
    path: '/lien-he',
    element: Contact,
  },
  {
    name: 'Tìm kiếm',
    path: '/tim-kiem',
    element: Search,
  },
  {
    name: 'Giỏ hàng',
    path: '/gio-hang',
    element: ShoppingCart,
  },
  {
    name: 'Đăng nhập',
    path: '/dang-nhap',
    element: SignIn,
  },
  {
    name: 'Đăng ký',
    path: '/dang-ky',
    element: SignUp,
  },
];

export default routes;
