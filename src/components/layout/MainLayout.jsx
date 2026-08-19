import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from '../ui/ScrollToTopButton';
import FloatingContact from '../ui/FloatingContact';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
