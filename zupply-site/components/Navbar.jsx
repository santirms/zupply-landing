'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Integraciones', href: '#integraciones' },
  { label: 'Planes', href: '#planes' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 h-[72px] flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'bg-zupply-dark/95 backdrop-blur-xl border-b border-zupply-primary/10'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2">
        <span className="bg-zupply-primary text-zupply-dark font-black text-2xl w-9 h-9 flex items-center justify-center rounded-lg font-nunito">
          Z
        </span>
        <span className="text-zupply-primary font-bold text-[22px] font-nunito tracking-tight">
          zupply
        </span>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-400 text-sm font-medium hover:text-zupply-primary transition-colors font-nunito"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contacto"
          className="bg-zupply-primary text-zupply-dark px-6 py-2.5 rounded-lg text-sm font-bold font-nunito hover:bg-zupply-primary-light hover:-translate-y-0.5 transition-all"
        >
          Solicitar demo
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-gray-400 hover:text-zupply-primary transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-zupply-dark/98 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-400 text-base font-medium hover:text-zupply-primary transition-colors font-nunito"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-zupply-primary text-zupply-dark px-6 py-3 rounded-lg text-sm font-bold font-nunito text-center hover:bg-zupply-primary-light transition-all mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Solicitar demo
          </a>
        </div>
      )}
    </nav>
  );
}
