'use client'
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaHome, FaKey, FaTimesCircle } from "react-icons/fa";
import Testimonials from "@/components/About/Testimonials";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { poppins } from "../ui/fonts";
export default function About() {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/rojo.jpg"
            width={600}
            height={600}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/beige.jpg"
            width={600}
            height={600}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  const steps1 = [
    {
      icon: <FaHome className="text-4xl text-white" />,
      title: "Apertura con Código",
      description: "Controle sus accesos desde cualquier parte del mundo. Sin necesidad de conexión a internet , llaves o tarjetas"
    },
    {
      icon: <FaKey className="text-4xl text-white" />,
      title: "Configuración infinita de códigos",
      description: "Gestione sus accesos de forma más eficiente y segura. Software integrado"
    },
    {
      icon: <FaTimesCircle className="text-4xl text-white" />,
      title: "Ahorra tiempo",
      description: "No es necesario que te desplaces a entregar el código, mándalo vía online"
    },
    {
      icon: <FaHome className="text-4xl text-white" />,
      title: "Apertura con Código",
      description: "Controle sus accesos desde cualquier parte del mundo. Sin necesidad de conexión a internet , llaves o tarjetas"
    }
  ];
  const data = [
    {
      title: "Equipo",
      content: (
        <div>
          <Testimonials />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <StickyScroll content={content} />
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="space-y-20 my-24 flex flex-col">
          {steps1.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0 rounded-full p-4 bg-[#c21d2c] bg-gradient-to-r from-[#c21d2c] to-[#E44E5A]">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];
  return (
    <div className={`${poppins.className} w-full`}>
      <div className="hidden sm:block">
        <Timeline data={data} />
      </div>
      <div className=" block sm:hidden">
        <h2 className="pl-3 mt-20 text-5xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e05c73] via-[#ff5470] to-[#E75F6B]">
          Nosotros
        </h2>

        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 pr-10 md:gap-10"
          >
            <div className="flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 pb-2 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#EA717B]" />
              </div>
              <h3 className="hidden pb-2 md:block text-xl md:pl-20 md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c21d2c] to-[#EA717B]">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-14 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden pl-6 block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </div>
  );
}
