import {
  ArrowRightIcon,
  AwardIcon,
  ClarityUsersIcon,
  NotebookIcon,
  SearchIcon,
  ShopTwotoneIcon,
  TruckIcon,
} from '../assets/icons';
import SwiperCompanies from '../components/SwiperCompanies';
import SwiperComponent from '../components/SwiperComponent';
import Map from '../assets/images/map.png';
import { FormContact } from '../components/FormContact';

const Home = () => {
  return (
    <main className="z-10">
      <section className="h-screen grid place-content-center text-white">
        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="xl:text-[58px] lg:text-5xl text-3xl font-extrabold  max-w-[780px]">
            Tu protección es nuestra especialidad
          </h1>
          <p className="font-medium xl:text-xl lg:text-lg text-md max-w-sm">
            Somos una empresa de vigilancia que cuenta con mas de 25 años de
            experiencia
          </p>
          <a href='/contacto' className="font-bold text-sm bg-[#0263A5] py-[10px] px-9 rounded-full hover:scale-110">
            Contactanos
          </a>
        </div>
      </section>
      <section className="bg-[#0263A5] xl:h-24 h-52 relative flex justify-center mt-10">
        <div className="bg-white max-w-[768px] p-4 grid xl:grid-cols-3 grid-cols-1 gap-3 absolute -top-10">
          <div className="flex items-center gap-2">
            <span>
              <ClarityUsersIcon className="text-[45px]" />
            </span>
            <div>
              <span className="font-bold text-[24px] text-[#252B42]">
                +1000
              </span>
              <p className="font-semibold text-sm text-[#737373]">Empleados</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <ShopTwotoneIcon className="text-[45px] text-[#0D5C63]" />
            </span>
            <div>
              <span className="font-bold text-[24px] text-[#252B42]">
                +5000
              </span>
              <p className="font-semibold text-sm text-[#737373]">
                Clientes felíces
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <AwardIcon className="text-[45px]" />
            </span>
            <div>
              <span className="font-bold text-[24px] text-[#252B42]">25+</span>
              <p className="font-semibold text-sm text-[#737373]">
                Años en el mercado
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFA]">
        <div className="grid xl:grid-cols-4 gap-10 max-w-5xl mx-auto py-20 px-5">
          <div className="bg-white p-8 flex flex-col justify-between h-72">
            <div>
              <span>
                <SearchIcon className="text-[45px]" />
              </span>
            </div>
            <h2 className="font-bold text-[#252B42]">Investigación</h2>
            <p className="font-bold text-sm text-[#737373]">
              Enfocado en la investigación de casos
            </p>
            <div className="flex justify-center">
              <a href='/investigaciones' className="border border-[#0263A5] px-[30px] py-[10px] rounded-full text-sm font-medium text-[#0263A5] flex items-center gap-2">
                Más info{' '}
                <span>
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>
          <div className="bg-white p-8 flex flex-col justify-between h-72">
            <div>
              <span>
                <ShopTwotoneIcon className="text-[45px] text-[#0263A5]" />
              </span>
            </div>
            <h2 className="font-bold text-[#252B42]">Seguridad física</h2>
            <p className="font-bold text-sm text-[#737373]">
              Personal de seguridad en todas las tiendas
            </p>
            <div className="flex justify-center">
              <a href='/seguridad-fisica' className="border border-[#0263A5] px-[30px] py-[10px] rounded-full text-sm font-medium text-[#0263A5] flex items-center gap-2">
                Más info{' '}
                <span>
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>
          <div className="bg-white p-8 flex flex-col justify-between h-72">
            <div>
              <span>
                <TruckIcon className="text-[45px]" />
              </span>
            </div>
            <h2 className="font-bold text-[#252B42]">Custodia de mercaderia</h2>
            <p className="font-bold text-sm text-[#737373]">
              Ofrecemos un servicio de Custodia Armada
            </p>
            <div className="flex justify-center">
              <a href='/custodia-de-mercaderia' className="border border-[#0263A5] px-[30px] py-[10px] rounded-full text-sm font-medium text-[#0263A5] flex items-center gap-2">
                Más info{' '}
                <span>
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>
          <div className="bg-[#252B42] p-8 flex flex-col justify-between h-72 text-white">
            <div>
              <span>
                <NotebookIcon className="text-[45px]" />
              </span>
            </div>
            <h2 className="font-bold">Seguridad electrónica</h2>
            <p className="font-bold text-sm">
              Poseemos un Centro de Monitoreo Propio
            </p>
            <div className="flex justify-center">
              <a href='/seguridad-electronica' className="bg-white px-[30px] py-[10px] rounded-full text-sm font-medium text-[#0263A5] flex items-center gap-2">
                Más info{' '}
                <span>
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-sm px-5 mx-auto">
            <h3 className="text-[#252B42] font-bold text-[40px]">
              Sobre <span className="text-[#0263A5]">Latin</span>
              <span className="text-[#FF0000]">Sec</span>
            </h3>
            <p className="text-[#737373] font-medium text-sm">
              Somos una empresa con una trayectoria empresarial con mas de 25
              años en el mercado y mas de 5000 clientes.
            </p>
          </div>
          <div className="lg:flex py-16 items-center px-5 justify-between">
            <div className="lg:w-[597px]">
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/eeFbKDrLOUw"
                title="Youtube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="aspect-video"
              ></iframe>
            </div>
            <div className="w-[336px] grid place-content-center">
              <div>
                <h3 className="font-bold text-[40px] text-[#252B42]">
                  Líderes en el mercado
                </h3>
                <p className="text-[#737373] font-medium">
                  LatinSec es una compañía de seguridad y protección
                  patrimonial, con más de 26 años de trayectoria. En constante
                  crecimiento y actualización, hoy somos unas de las más
                  completas organizaciones del país, desafiando los complejos
                  problemas de seguridad con abordajes integrales de excelencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0263A5] py-16 px-5">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-white font-bold text-[40px]">
            Opiniones de nuestros clientes
          </h3>
          <p className="text-white font-medium text-sm">
            Opiniones de nuestros clientes potenciales.
          </p>
        </div>
        <div className="mt-10">
          <SwiperComponent />
        </div>
      </section>
      <section className="bg-[#FAFAFA] py-16 px-5">
        <div className="text-center">
          <h3 className="text-[#252B42] font-bold text-[32px]">
            Compañías con la que trabaja{' '}
            <span className="text-[#0263A5]">Latin</span>
            <span className="text-[#FF0000]">Sec</span>
          </h3>
        </div>
        <div className="mt-10">
          <SwiperCompanies />
        </div>
      </section>
      <section className="bg-[#252B42] pt-16 pb-96 text-white px-5">
        <div className="max-w-5xl mx-auto lg:flex items-center justify-between">
          <div className="lg:w-1/2">
            <h3 className="font-bold text-[40px]">
              We Have Branches All Over The World
            </h3>
            <p className="font-medium text-sm text-[#D5D5D5] line-clamp-4">
              Lorem ipsum dolor sit amet consectetur. Quis porta habitasse eget
              id neque id blandit dolor in. Pellentesque leo penatibus orci
              egestas mauris nam nunc donec ac. Elementum feugiat eget egestas.
            </p>
          </div>
          <div className="flex justify-center ">
            <img src={Map} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFA] h-96 px-5">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-64 w-full">
            <FormContact />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;