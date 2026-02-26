const stats = [
  { value: '+30K', label: 'Envíos gestionados' },
  { value: '99%', label: 'Uptime de plataforma' },
  { value: '24/7', label: 'Sistema disponible' },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-b from-zupply-dark to-[#0D1525] py-20 px-6">
      <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl md:text-5xl font-black text-zupply-primary font-nunito leading-none mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 font-nunito font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
