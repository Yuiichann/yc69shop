import { memo } from 'react';
import Footer from './Footer';
import Header from './Header';
import TopBar from './TopBar';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <TopBar />
      <Header />

      <main className="main">{children}</main>

      <Footer />
    </>
  );
};

export default memo(Layout);
