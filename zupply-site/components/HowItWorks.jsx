'use client';

import { Link2, Package, Truck, MapPin } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Link2,
    title: 'Conectá las tiendas de tus clientes',
    desc: 'Vinculá las cuentas de MercadoLibre o Tienda Nube de tus clientes. Los envíos se importan solos a tu panel.',
  },
  {
    num: '02',
    icon: Package,
    title: 'Organizá los envíos',
    desc: 'Todos los paquetes centralizados. Filtrá por cliente, estado, zona o chofer asignado.',
  },
  {
    num: '03',
    icon: Truck,
    title: 'Asigná a tus choferes',
    desc: 'Distribuí la carga de trabajo entre tu equipo con un click. Cada chofer ve sus envíos del día.',
  },
  {
    num: '04',
    icon: MapPin,
    title: 'Seguí todo en tiempo real',
    desc: 'Mapa en vivo con el estado de cada envío. Los compradores reciben actualizaciones automáticas.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-gradient-to-b from-zupply-dark to-[#0D1525] py-24 px-6"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-zupply-primary text-sm font-bold uppercase tracking-[2px] font-nunito">
            Cómo funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 font-nunito">
            Del ingreso al destino, sin complicaciones
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-9 pb-8 relative group hover:bg-zupply-primary/5 hover:border-zupply-primary/20 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <span className="absolute top-4 right-5 text-5xl font-black text-zupply-primary/[0.06] font-nunito">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-zupply-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-zupply-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 font-nunito">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-nunito">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
