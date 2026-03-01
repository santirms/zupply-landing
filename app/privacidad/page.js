import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad - Zupply',
  description: 'Política de privacidad y protección de datos de Zupply.',
};

export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>
        <p className="text-sm text-gray-500 font-nunito mb-12">
          Última actualización: Febrero 2026
        </p>

        <div className="prose-custom">
          <h2>1. Información que recopilamos</h2>
          <p>
            En Zupply recopilamos la información necesaria para brindar nuestro
            servicio de gestión logística. Esto incluye:
          </p>
          <p>
            <strong>Datos de cuenta:</strong> nombre, correo electrónico,
            teléfono y datos de la empresa al momento del registro.
            <br />
            <strong>Datos operativos:</strong> información de envíos,
            direcciones de entrega, estados de paquetes y datos de choferes
            necesarios para la operación logística.
            <br />
            <strong>Datos de integraciones:</strong> tokens de acceso y datos de
            pedidos obtenidos a través de las integraciones con MercadoLibre y
            Tienda Nube, siempre con la autorización previa del usuario.
            <br />
            <strong>Datos de uso:</strong> información sobre cómo interactúa con
            la plataforma para mejorar el servicio.
          </p>

          <h2>2. Cómo utilizamos la información</h2>
          <p>Utilizamos los datos recopilados para:</p>
          <p>
            — Proveer y mantener el servicio de gestión logística.
            <br />— Sincronizar envíos desde las plataformas integradas.
            <br />— Enviar notificaciones de estado a los compradores finales.
            <br />— Generar reportes y métricas para los operadores logísticos.
            <br />— Facturación del servicio.
            <br />— Mejorar y optimizar la plataforma.
            <br />— Comunicarnos con usted sobre el servicio.
          </p>

          <h2>3. Compartición de datos</h2>
          <p>
            No vendemos ni compartimos sus datos personales con terceros con
            fines comerciales. Los datos pueden ser compartidos únicamente en los
            siguientes casos:
          </p>
          <p>
            — Con las plataformas integradas (MercadoLibre, Tienda Nube) en la
            medida necesaria para la sincronización de envíos y actualización de
            estados.
            <br />— Con compradores finales, limitado a la información de
            seguimiento de su envío.
            <br />— Cuando sea requerido por ley o autoridad competente.
          </p>

          <h2>4. Seguridad de los datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para
            proteger sus datos, incluyendo cifrado en tránsito (HTTPS),
            almacenamiento seguro de credenciales y tokens de acceso, acceso
            restringido basado en roles, y respaldos periódicos de la
            información.
          </p>

          <h2>5. Retención de datos</h2>
          <p>
            Mantenemos sus datos mientras su cuenta esté activa y durante el
            tiempo necesario para cumplir con nuestras obligaciones legales. Los
            datos operativos de envíos se conservan por un período de 12 meses
            después de su creación. Puede solicitar la eliminación de sus datos
            en cualquier momento contactándonos.
          </p>

          <h2>6. Multi-tenancy</h2>
          <p>
            Zupply opera bajo un modelo multi-tenant donde cada operador
            logístico tiene su propio espacio aislado. Los datos de un operador
            nunca son accesibles por otro operador. Cada tenant gestiona
            únicamente los datos de sus propios clientes y envíos.
          </p>

          <h2>7. Sus derechos</h2>
          <p>
            De acuerdo con la Ley 25.326 de Protección de Datos Personales de
            Argentina, usted tiene derecho a acceder a sus datos personales
            almacenados, solicitar la rectificación de datos inexactos,
            solicitar la eliminación de sus datos, y revocar el consentimiento
            para el tratamiento de sus datos.
          </p>
          <p>
            Para ejercer estos derechos, contacte a{' '}
            <a href="mailto:hola@zupply.tech">hola@zupply.tech</a>.
          </p>

          <h2>8. Integraciones y datos de terceros</h2>
          <p>
            Al conectar cuentas de MercadoLibre o Tienda Nube a Zupply, usted
            autoriza el acceso a los datos de envíos necesarios para la
            operación. Los tokens de acceso se almacenan de forma segura y se
            utilizan únicamente para la sincronización del servicio. Puede
            revocar el acceso en cualquier momento desde la configuración de su
            cuenta.
          </p>

          <h2>9. Cambios en esta política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política de privacidad.
            Los cambios serán notificados a través de la plataforma. La fecha de
            la última actualización se indica al inicio de este documento.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Para consultas sobre privacidad y protección de datos:
            <br />
            Email:{' '}
            <a href="mailto:hola@zupply.tech">hola@zupply.tech</a>
            <br />
            Responsable: Zupply
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
