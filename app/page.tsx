'use client'
import Image from "next/image";
import Button from "../components/Button";
import Input from "../components/Input";
import { poppins } from "./ui/fonts";
import { HiBadgeCheck } from "react-icons/hi";
import HowItWorks from "@/components/Landing/HowItWorks";
import AboutUsSection from "@/components/Landing/AboutUsSection";
import ProductSectionLand from "@/components/Landing/ProductSectionLand";
import Map from "@/components/Landing/Map";
import GridPhotoSection from "@/components/Landing/GridPhotoSection";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    router.push(`/contact?message=${encodeURIComponent(message)}`);
  };
  return (
    <section
      className={`${poppins.className} w-full`}
    >
      <div className="w-full">
        <div id="hero-banner" className="container pt-20 pb-20  sm:pt-40 sm:pb-72  mx-auto flex flex-col md:flex-row justify-between items-center overflow-hidden duration-300 ease-in custom-screen text-black md:flex w-full">
          <div className="flex-none space-y-5 max-w-2xl px-4 md:px-0">
            <h1 className="text-center sm:text-start text-3xl font-extrabold sm:text-4xl md:text-5xl pb-2">
              Code-System: Sistema de Acceso por Códiga
            </h1>
            <p className="text-center sm:text-start text-lg md:text-xl pt-4">
              Gestiona remotamente tus propiedades.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center md:">
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <Input
                  type="text"
                  name="message"
                  required
                  placeholder="Escribe tu mensaje"
                  className="w-full pl-12 pr-3 focus:border-[#c21d2c]"
                />
              </div>
              <Button className="block w-full mt-3 text-white bg-[#c21d2c] hover:scale-105 transition-all duration-300 ease-in-out sm:w-auto sm:mt-0">
                Escribenos
              </Button>
              <p className="inline-flex items-center text-lg pl-4 mt-3 sm:mt-0">
                <HiBadgeCheck /> Certificado por la UE
              </p>
            </form>

            <div className="flex items-center pt-12 justify-center gap-6 md:gap-12">
              <Image
                src={"/logos/alsa.png"}
                alt="alsa-logo"
                width={80}
                height={80}
                objectFit="contain"
              />
              <Image
                src={"/logos/grupo_julia.jpg"}
                alt="grupo-julia-logo"
                width={150}
                height={150}
                objectFit="contain"
                className="pr-4"
              />
              <Image
                src={"/logos/unvi.png"}
                alt="unvi-logo"
                width={80}
                height={80}
                objectFit="contain"
              />
              <Image
                src={"/logos/paris_opentour.png"}
                alt="unvi-logo"
                width={80}
                height={80}
                objectFit="contain"
                className="hidden sm:block"
              />
              <Image
                src={"/logos/citytour.png"}
                alt="unvi-logo"
                width={80}
                height={80}
                objectFit="contain"
                className="hidden sm:block"
              />
            </div>
          </div>
          <div className=" mr-6 ml-6 sm:mr-0 sm:ml-0 mb-8 flex-end lg:pr-4 mt-8 md:mt-0">
            <Image
              src="/rojo.jpg"
              width="700"
              height="400"
              alt="Starboard Desktop App"
              className="w-full rounded-3xl md:max-w-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              priority
            />
          </div>
        </div>
      </div>


      <ProductSectionLand />
      <HowItWorks />
      <GridPhotoSection />
      <AboutUsSection />
      <Map />
      <ScrollToTopButton />
    </section>
  );
}
