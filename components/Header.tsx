'use client';

import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/ui/fonts';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`${poppins.className} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="code-system-logo"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-2xl"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 items-center">
            {/* Productos con submenú */}
            <li className="relative group">
              <Link href="" className="group relative overflow-hidden">
                <span className="relative z-10">PRODUCTOS</span>
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c21d2c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>

              {/* Submenú */}
              <ul className="z-50 absolute left-0 text-sm top-full mt-2 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 delay-150">
                <li>
                  <Link
                    href="/products/code-system-plus"
                    className="block px-4 py-2 hover:bg-[#f8f8f8] relative group"
                  >
                    <span className="relative z-10">Code-System-Plus</span>
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c21d2c] transform scale-x-0"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/code-system-basic"
                    className="block px-4 py-2 hover:bg-[#f8f8f8] relative group"
                  >
                    <span className="relative z-10">Code-System-Basic</span>
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c21d2c] transform scale-x-0"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/gestor-de-consumo"
                    className="block px-4 py-2 hover:bg-[#f8f8f8] relative group"
                  >
                    <span className="relative z-10">Gestor de Consumo</span>
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c21d2c] transform scale-x-0"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/taquillas-inteligentes"
                    className="block px-4 py-2 hover:bg-[#f8f8f8] relative group"
                  >
                    <span className="relative z-10">Taquillas Inteligentes</span>
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c21d2c] transform scale-x-0"></span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Otras secciones */}
            <li>
              <Link href="/about" className="group relative overflow-hidden">
                <span className="relative z-10">SOBRE NOSOTROS</span>
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c21d2c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li>
              <Link href="/news" className="group relative overflow-hidden">
                <span className="relative z-10">NOTICIAS</span>
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c21d2c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="group relative overflow-hidden">
                <span className="relative z-10">CONTACTO</span>
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c21d2c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
