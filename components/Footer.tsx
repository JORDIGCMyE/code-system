'use client';

import Link from 'next/link';
import Image from 'next/image';
import {poppins} from '@/app/ui/fonts';
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" }
  ];

  const navLinks = [
    { name: "Sobre Nosotros", url: "/about" },
    { name: "Noticias", url: "/news" },
    { name: "Contacto", url: "/contact" }
  ];

  return (
    <footer className={`${poppins.className} bg-[#c21d2c] text-white`}>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-xl font-bold">
                <Link href="/">
                <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    alt='code-system-logo'
                />
                </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="text-white-300 space-y-2">
              <p> Calle Espronceda 19,</p>
              <p>Barcelona, 08018</p>
              <p>(+34) 933 20 82 21</p>
              <p>contact@meingenieria.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-white-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Siguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition duration-300 text-2xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-8 text-white">
          <p className="text-center text-white opacity-90">
            © {new Date().getFullYear()} ME Ingenieria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;