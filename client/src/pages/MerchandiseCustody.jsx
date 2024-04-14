import Custodia from '../assets/images/custodia-de-mercaderia.jpg';

export const MerchandiseCustody = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div>
        <img src={Custodia} alt="" />
      </div>
      <div className="max-w-5xl mx-auto py-16 flex flex-col gap-5 px-5">
        <section>
          <h1 className="text-[#252B42] text-4xl font-bold mb-4">
            Custodia de mercadería en tránsito
          </h1>
          <p className="text-lg">
            El patrimonio de una empresa va más allá de sus instalaciones,
            incluye también mercadería que en muchos casos debe ser trasladada y
            necesita ser protegida. Ofrecemos un servicio de Custodia Armada, a
            distintos tipos de transportes, no solo de mercadería, sino también
            de personal y equipos técnicos, cuya jurisdicción abarca todo el
            Territorio Nacional. Brindamos la más amplia cobertura, para este
            tipo de custodias, contando con personal con alto grado de
            entrenamiento.
          </p>
        </section>
      </div>
    </section>
  );
};
