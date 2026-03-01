'use client';

import { Smartphone, Route, LayoutDashboard, Navigation, Bell, BarChart3 } from 'lucide-react';

const profiles = [
  {
    role: 'Choferes',
    icon: Route,
    color: 'from-zupply-primary/20 to-zupply-primary/5',
    features: [
      { icon: Navigation, text: 'Mis envíos del día con navegación integrada' },
      { icon: Route, text: 'Ruteo optimizado para tus entregas' },
      { icon: Bell, text: 'Actualización de estados con un toque' },
    ],
  },
  {
    role: 'Coordinadores y Admins',
    icon: LayoutDashboard,
    color: 'from-blue-500/20 to-blue-500/5',
    features: [
      { icon: LayoutDashboard, text: 'Dashboard con información en tiempo real' },
      { icon: BarChart3, text: 'Métricas y control de operación' },
      { icon: Bell, text: 'Alertas de incidencias al instante' },
    ],
  },
];

export default function MobileApp() {
  return (
    <section className="bg-gradient-to-b from-[#0D1525] to-zupply-dark py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-zupply-primary text-sm font-bold uppercase tracking-[2px] font-nunito">
            App Móvil
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 font-nunito">
            Tu operación en el bolsillo
          </h2>
          <p className="text-base text-gray-400 mt-4 max-w-[560px] mx-auto font-nunito leading-relaxed">
            Cada usuario ve lo que necesita. Los choferes gestionan sus entregas
            y los coordinadores controlan toda la operación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
          {profiles.map((p) => {
            const RoleIcon = p.icon;
            return (
              <div
                key={p.role}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-zupply-primary/20 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5`}>
                  <RoleIcon className="w-7 h-7 text-zupply-primary" />
                </div>
                <h3 className="text-xl font-bold text-white font-nunito mb-6">
                  {p.role}
                </h3>
                <div className="flex flex-col gap-4">
                  {p.features.map((f) => {
                    const FIcon = f.icon;
                    return (
                      <div key={f.text} className="flex items-start gap-3">
                        <FIcon className="w-5 h-5 text-zupply-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300 font-nunito leading-relaxed">
                          {f.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] rounded-full px-6 py-3">
            <Smartphone className="w-5 h-5 text-zupply-primary" />
            <span className="text-sm text-gray-400 font-nunito">
              Próximamente en{' '}
              <span className="text-white font-semibold">Google Play</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
