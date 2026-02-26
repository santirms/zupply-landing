import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    desc: 'Para logísticas que recién arrancan',
    features: [
      'Hasta 500 envíos/mes',
      '1 integración (ML o TN)',
      'Panel de seguimiento',
      'Gestión de choferes',
      'Soporte por email',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    desc: 'La mejor relación precio/calidad',
    features: [
      'Envíos ilimitados',
      'Todas las integraciones',
      'Gestión de choferes',
      'Facturación integrada',
      'Reportes avanzados',
      'Zonas y listas de precios',
      'Soporte prioritario',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    desc: 'Para operaciones a medida',
    features: [
      'Todo lo de Pro',
      'Marca blanca',
      'Personalizaciones a medida',
      'API dedicada',
      'Soporte con SLA',
      'Onboarding asistido',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="bg-[#0D1525] py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-zupply-primary text-sm font-bold uppercase tracking-[2px] font-nunito">
            Planes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 font-nunito">
            Elegí el plan que se adapte a tu operación
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-10 relative flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-zupply-primary/5 border border-zupply-primary/30'
                  : 'bg-white/[0.02] border border-white/[0.06]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zupply-primary text-zupply-dark px-4 py-1 rounded-full text-xs font-bold font-nunito">
                  Más popular
                </div>
              )}

              <h3 className="text-[22px] font-bold text-white font-nunito mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-400 font-nunito mb-6">
                {plan.desc}
              </p>
              <div className="text-[28px] font-extrabold text-zupply-primary font-nunito mb-6">
                Consultanos
              </div>

              <div className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-gray-300 font-nunito"
                  >
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className={`block text-center py-3.5 rounded-xl text-[15px] font-bold font-nunito transition-all ${
                  plan.highlighted
                    ? 'bg-zupply-primary text-zupply-dark hover:bg-zupply-primary-light'
                    : 'border border-gray-700 text-gray-300 hover:border-zupply-primary hover:text-zupply-primary'
                }`}
              >
                Contactar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
