import Image from 'next/image';

export default function Integrations() {
  const integrations = [
    { name: 'MercadoLibre', logo: '/logo-mercadolibre.png', width: 160, height: 48 },
    { name: 'Tienda Nube', logo: '/logo-tiendanube.png', width: 160, height: 48 },
  ];

  return (
    <section id="integraciones" className="bg-zupply-dark py-24 px-6 text-center">
      <div className="max-w-[800px] mx-auto">
        <span className="text-zupply-primary text-sm font-bold uppercase tracking-[2px] font-nunito">
          Integraciones
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4 font-nunito">
          Conectá las tiendas de tus clientes
        </h2>
        <p className="text-base text-gray-400 mb-12 font-nunito leading-relaxed">
          Tus clientes venden en MercadoLibre o Tienda Nube y los envíos llegan
          directo a tu panel. Sin carga manual, sin errores, sin demoras.
        </p>

        <div className="flex gap-8 justify-center flex-wrap">
          {integrations.map((i) => (
            <div
              key={i.name}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl px-12 py-10 flex flex-col items-center gap-5 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 cursor-default min-w-[220px] group"
            >
              <div className="h-12 flex items-center justify-center">
                <Image
                  src={i.logo}
                  alt={i.name}
                  width={i.width}
                  height={i.height}
                  className="object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="text-green-400 text-xs font-semibold font-nunito bg-green-400/10 px-3 py-1 rounded-full">
                ● Disponible
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
