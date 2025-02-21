import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from "@/components/Footer";
import HeaderPhone from "@/components/HeaderPhone";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code-System | Sistemas de Acceso por Código",
  description: "Sistemas de Acceso por Código",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto`}
      >
        <GoogleCaptchaWrapper>
          <div className="block sm:hidden">
            <HeaderPhone />
          </div>
          <div className=" hidden sm:block">
            <Header />
          </div>
          {children}
          <Footer />
        </GoogleCaptchaWrapper>
        <SpeedInsights />
      </body>
      
    </html>
  );
}
