import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones - Zupply',
  description: 'Términos y condiciones de uso de la plataforma Zupply.',
};

export default function TerminosPage() {
  return (
    <main className="bg-zupply-dark min-h-screen">
      {/* Navbar simple */}
      <nav className="px-6 h-[72px] flex items-center border-b border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <span className="bg-zupply-primary text-zupply-dark font-black text-2xl w-9 h-9 flex items-center justify-center rounded-lg font-nunito">
            Z
          </span>
          <span className="text-zupply-primary font-bold text-[22px] font-nunito tracking-tight">
            zupply
          </span>
        </Link>
      </nav>

      <div className="max-w-[800px] mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white font-nunito mb-2">
          Términos y Condiciones
        </h1>
        <p className="text-sm text-gray-500 font-nunito mb-12">
          Última actualización: Febrero 2026
        </p>

        <div className="prose-custom">
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al acceder y utilizar la plataforma Zupply (en adelante, "el
            Servicio"), operada por Zupply (en adelante, "nosotros"), usted
            acepta estar sujeto a estos Términos y Condiciones. Si no está de
            acuerdo con alguna parte de estos términos, no podrá acceder al
            Servicio.
          </p>

          <h2>2. Descripción del servicio</h2>
          <p>
            Zupply es una plataforma de gestión logística de última milla que
            permite a operadores logísticos centralizar envíos, gestionar
            choferes y realizar seguimiento en tiempo real. El Servicio incluye
            la plataforma web, aplicaciones móviles y las integraciones con
            plataformas de terceros como MercadoLibre y Tienda Nube.
          </p>

          <h2>3. Registro y cuentas</h2>
          <p>
            Para utilizar el Servicio, debe crear una cuenta proporcionando
            información veraz, completa y actualizada. Usted es responsable de
            mantener la confidencialidad de sus credenciales de acceso y de
            todas las actividades que ocurran bajo su cuenta.
          </p>

          <h2>4. Uso aceptable</h2>
          <p>Usted se compromete a utilizar el Servicio únicamente para:</p>
          <p>
            — Gestionar operaciones logísticas legítimas de última milla.
            <br />— Almacenar y procesar datos de envíos de manera lícita.
            <br />— Utilizar las integraciones de acuerdo con los términos de
            las plataformas de terceros conectadas.
          </p>
          <p>
            Queda prohibido el uso del Servicio para actividades ilegales, el
            intento de acceder a cuentas de otros usuarios, o cualquier acción
            que pueda dañar, sobrecargar o perjudicar el funcionamiento de la
            plataforma.
          </p>

          <h2>5. Integraciones con terceros</h2>
          <p>
            El Servicio permite la integración con plataformas de terceros como
            MercadoLibre y Tienda Nube. Estas integraciones están sujetas a los
            términos y condiciones de dichas plataformas. Zupply no es
            responsable por cambios, interrupciones o limitaciones impuestas por
            estos servicios de terceros.
          </p>

          <h2>6. Planes y facturación</h2>
          <p>
            Los planes y precios del Servicio serán informados al momento de la
            contratación. Nos reservamos el derecho de modificar los precios con
            un aviso previo de 30 días. El uso continuado del Servicio después
            de un cambio de precio constituye la aceptación del nuevo precio.
          </p>

          <h2>7. Propiedad intelectual</h2>
          <p>
            Todos los derechos de propiedad intelectual del Servicio, incluyendo
            pero no limitado a software, diseño, logotipos y contenido, son
            propiedad exclusiva de Zupply. El uso del Servicio no le otorga
            ningún derecho de propiedad sobre el mismo.
          </p>

          <h2>8. Limitación de responsabilidad</h2>
          <p>
            Zupply se esfuerza por mantener el Servicio disponible y
            funcionando correctamente. Sin embargo, no garantizamos que el
            Servicio será ininterrumpido o libre de errores. En ningún caso
            Zupply será responsable por daños indirectos, incidentales o
            consecuentes derivados del uso del Servicio.
          </p>

          <h2>9. Suspensión y terminación</h2>
          <p>
            Nos reservamos el derecho de suspender o cancelar su acceso al
            Servicio en caso de incumplimiento de estos términos, falta de pago,
            o a nuestra discreción con aviso previo razonable.
          </p>

          <h2>10. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos y Condiciones
            en cualquier momento. Los cambios serán notificados a través de la
            plataforma o por correo electrónico. El uso continuado del Servicio
            implica la aceptación de los términos modificados.
          </p>

          <h2>11. Ley aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República Argentina.
            Cualquier disputa será sometida a la jurisdicción de los tribunales
            ordinarios de la Ciudad Autónoma de Buenos Aires.
          </p>

          <h2>12. Contacto</h2>
          <p>
            Para consultas sobre estos términos, puede contactarnos en{' '}
            <a href="mailto:hola@zupply.tech">hola@zupply.tech</a>.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <Link
            href="/"
            className="text-zupply-primary text-sm font-semibold font-nunito hover:underline"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
