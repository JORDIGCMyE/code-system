'use client';

import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/ui/fonts';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const HeaderPhone = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cerrar el menú
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${poppins.className} p-4 lg:hidden`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image src="/logo.png" width={100} height={100} alt="code-system-logo" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-2xl"
        >
          <HiMenu />
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-primary shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50 p-6`}
      > 
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute text-white top-4 right-4 text-2xl"
        >
          <HiX />
        </button>

        <nav className="mt-10">
          <ul className="space-y-4 text-white">
            <li>
              <Link href="/products" className="block text-lg" onClick={handleLinkClick}>
                PRODUCTOS
              </Link>
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link href="/products/code-system-plus" className="block" onClick={handleLinkClick}>
                    Code-System-Plus
                  </Link>
                </li>
                <li>
                  <Link href="/products/code-system-basic" className="block" onClick={handleLinkClick}>
                    Code-System-Basic
                  </Link>
                </li>
                <li>
                  <Link href="/products/gestor-de-consumo" className="block" onClick={handleLinkClick}>
                    Gestor de Consumo
                  </Link>
                </li>
                <li>
                  <Link href="/products/taquillas-inteligentes" className="block" onClick={handleLinkClick}>
                    Taquillas Inteligentes
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about" className="block text-lg" onClick={handleLinkClick}>
                SOBRE NOSOTROS
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-lg" onClick={handleLinkClick}>
                CONTACTO
              </Link>
            </li>
            <li>
              <Link href="/news" className="block text-lg" onClick={handleLinkClick}>
                NOTICIAS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPhone;
