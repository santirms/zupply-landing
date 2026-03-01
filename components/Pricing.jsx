import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$70.000',
    perPackage: '+$28',
    desc: 'Para logísticas de hasta 1.000 envíos/mes',
    features: [
      'Hasta 1.000 envíos/mes',
      'Integración MercadoLibre y Tienda Nube',
      'Asignación por QR',
      'Panel de seguimiento',
      'Soporte por email',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$150.000',
    perPackage: '+$20',
    desc: 'Sin límites, la mejor relación precio/calidad',
    features: [
      'Envíos ilimitados',
      'Todas las integraciones',
      'Asignación desde el mapa',
      'Seguimiento de choferes por GPS',
      'Liquidación de clientes y choferes',
      'Soporte por WhatsApp',
    ],
    highlighted: true,
    saving: '28% menos por paquete',
  },
  {
    name: 'Enterprise',
    price: '$300.000',
    perPackage: '+$18',
    desc: 'Para operaciones que necesitan personalización',
    features: [
      'Todo lo del plan Pro',
      'Automatizaciones',
      'Scripts personalizados',
      'Bot de WhatsApp incluido',
      'Soporte con SLA',
    ],
    highlighted: false,
    saving: '36% menos por paquete',
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
          <p className="text-sm text-gray-400 mt-3 font-nunito">
            Todos los precios + IVA
          </p>
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

              <h3 className="text-[22px] font-bold text-white font-nunito mb-1 text-center">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-400 font-nunito mb-6 text-center">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-2 text-center">
                <span className="text-[32px] font-extrabold text-zupply-primary font-nunito">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500 font-nunito">/mes</span>
              </div>

              {/* Per package */}
              <div className="flex items-center gap-2 mb-6 justify-center flex-wrap">
                <span className="text-base font-bold text-gray-300 font-nunito">
                  {plan.perPackage}
                </span>
                <span className="text-sm text-gray-500 font-nunito">
                  por paquete
                </span>
                {plan.saving && (
                  <span className="text-[11px] font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full font-nunito">
                    {plan.saving}
                  </span>
                )}
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
                Empezar ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
