import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#080D1A] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Zupply"
                width={120}
                height={30}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 font-nunito leading-relaxed max-w-[280px]">
              Software para operadores logísticos de última milla. Centralizá
              envíos, organizá choferes y controlá tu operación en tiempo real.
            </p>
          </div>

          {/* Site links */}
          <div>
            <h4 className="text-sm font-bold text-gray-300 font-nunito mb-4 uppercase tracking-wider">
              Producto
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Funcionalidades', href: '#funcionalidades' },
                { label: 'Cómo funciona', href: '#como-funciona' },
                { label: 'Integraciones', href: '#integraciones' },
                { label: 'Planes', href: '#planes' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-zupply-primary transition-colors font-nunito"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-gray-300 font-nunito mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/terminos"
                className="text-sm text-gray-500 hover:text-zupply-primary transition-colors font-nunito"
              >
                Términos y condiciones
              </Link>
              <Link
                href="/privacidad"
                className="text-sm text-gray-500 hover:text-zupply-primary transition-colors font-nunito"
              >
                Política de privacidad
              </Link>
              <a
                href="mailto:hola@zupply.tech"
                className="text-sm text-gray-500 hover:text-zupply-primary transition-colors font-nunito"
              >
                hola@zupply.tech
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex justify-between items-center flex-wrap gap-4">
          <p className="text-gray-600 text-xs font-nunito">
            © 2026 Zupply. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
