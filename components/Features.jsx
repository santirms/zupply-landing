'use client';

import {
  MapPin,
  Bell,
  Users,
  BarChart3,
  Receipt,
  Map,
} from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Seguimiento en tiempo real',
    desc: 'Mapa interactivo con todos los envíos del día. Sabé dónde está cada paquete y cada chofer en todo momento.',
  },
  {
    icon: Bell,
    title: 'Notificaciones al comprador',
    desc: 'Los compradores reciben actualizaciones automáticas del estado de su envío. Menos reclamos para vos y tu cliente.',
  },
  {
    icon: Users,
    title: 'Gestión de choferes',
    desc: 'Asigná envíos, controlá el rendimiento y gestioná tu flota desde una sola pantalla.',
  },
  {
    icon: BarChart3,
    title: 'Reportes y métricas',
    desc: 'Visualizá entregas, tiempos, incidencias y rendimiento por chofer o por cliente. Datos claros para decidir.',
  },
  {
    icon: Receipt,
    title: 'Facturación integrada',
    desc: 'Generá la facturación de tus clientes según los envíos operados. Todo dentro de la plataforma.',
  },
  {
    icon: Map,
    title: 'Zonas y listas de precios',
    desc: 'Configurá zonas de cobertura y precios diferenciados para cada cliente de tu logística.',
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="bg-[#0D1525] py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-zupply-primary text-sm font-bold uppercase tracking-[2px] font-nunito">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 font-nunito">
            Todo lo que tu logística necesita para operar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white/[0.02] border border-white/5 rounded-xl p-8 flex gap-4 items-start group hover:bg-zupply-primary/[0.04] hover:border-zupply-primary/15 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-zupply-primary/[0.08] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-zupply-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 font-nunito">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-nunito">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
