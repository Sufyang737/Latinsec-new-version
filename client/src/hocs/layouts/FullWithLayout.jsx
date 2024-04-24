import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import BgPrimary from '../../assets/images/bg-primary.jpg';

export const FullWithLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="fixed top-0 z-[-10] h-screen w-screen">
        <div className="bg-black/30 w-full h-screen absolute top-0 left-0"></div>
        <img src={BgPrimary} alt="" className="object-cover h-full w-full" />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};
