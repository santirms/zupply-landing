export default function CTA() {
  return (
    <section id="contacto" className="bg-zupply-dark py-24 px-6 text-center relative">
      {/* Subtle radial glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-zupply-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[600px] mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white font-nunito mb-4 leading-tight">
          ¿Listo para ordenar tu operación?
        </h2>
        <p className="text-base text-gray-400 font-nunito mb-9 leading-relaxed">
          Escribinos y te mostramos cómo Zupply puede simplificar la gestión de
          tu logística de última milla.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/5491127810543?text=Hola!%20Quiero%20saber%20más%20sobre%20Zupply"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zupply-primary text-zupply-dark px-9 py-4 rounded-xl text-base font-bold font-nunito shadow-[0_4px_24px_rgba(245,166,35,0.3)] hover:shadow-[0_8px_32px_rgba(245,166,35,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            💬 Escribinos por WhatsApp
          </a>
          <a
            href="mailto:hola@zupply.tech"
            className="border border-gray-700 text-gray-300 px-9 py-4 rounded-xl text-base font-semibold font-nunito hover:border-zupply-primary hover:text-zupply-primary transition-all"
          >
            ✉️ hola@zupply.tech
          </a>
        </div>
      </div>
    </section>
  );
}
