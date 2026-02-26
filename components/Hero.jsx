'use client';

import ContainerScroll from './ContainerScroll';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-zupply-dark pt-[100px] overflow-hidden relative">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-zupply-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <ContainerScroll
        titleComponent={
          <div className="relative z-10">
            <div className="inline-block bg-zupply-primary/10 border border-zupply-primary/20 rounded-full px-5 py-1.5 mb-6 text-[13px] text-zupply-primary font-nunito font-semibold">
              🚀 Software para operadores logísticos
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] font-nunito max-w-[800px] mx-auto mb-5">
              Gestioná toda tu{' '}
              <span className="text-zupply-primary">última milla</span> desde
              un solo lugar
            </h1>

            <p className="text-lg text-gray-400 max-w-[580px] mx-auto mb-9 leading-relaxed font-nunito">
              La plataforma que centraliza los envíos de tus clientes, organiza
              tus choferes y te da visibilidad total de tu operación.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#contacto"
                className="bg-zupply-primary text-zupply-dark px-8 py-3.5 rounded-xl text-base font-bold font-nunito shadow-[0_4px_24px_rgba(245,166,35,0.3)] hover:shadow-[0_8px_32px_rgba(245,166,35,0.4)] hover:-translate-y-0.5 transition-all"
              >
                Empezar ahora
              </a>
              <a
                href="#como-funciona"
                className="border border-gray-700 text-gray-300 px-8 py-3.5 rounded-xl text-base font-semibold font-nunito hover:border-zupply-primary hover:text-zupply-primary transition-all"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>
        }
      >
        <div className="rounded-2xl overflow-hidden border border-zupply-primary/15 shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(245,166,35,0.08)]">
          <Image
            src="/dashboard.png"
            alt="Zupply Dashboard - Panel de control logístico"
            width={1456}
            height={816}
            className="w-full block"
            priority
          />
        </div>
      </ContainerScroll>
    </section>
  );
}
