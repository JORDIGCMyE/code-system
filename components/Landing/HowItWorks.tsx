"use client";
import React from "react";
import { FaKey, FaHome, FaTimesCircle } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";
import SingleFeature from "../ui/SingleFeature";

export type Feature = {
  id: number;
  icon: React.ComponentType<IconBaseProps>; // Referencia al componente del ícono
  title: string;
  description: string;
};

const HowItWorks = () => {
  const steps1: Feature[] = [
    {
      id: 1,
      icon: FaHome, // Pasamos la referencia al componente del ícono
      title: "1. Reserva y alojamiento",
      description: "El turista alquila una habitación o apartamento adaptado a sus necesidades.",
    },
    {
      id: 2,
      icon: FaKey,
      title: "2. Generación de códigos",
      description:
        "El propietario crea códigos de acceso según duración y horarios establecidos en el software.",
    },
    {
      id: 3,
      icon: FaTimesCircle,
      title: "3. Autónomo y simple",
      description:
        "No requiere Internet ni teclado físico; el código se genera y funciona automáticamente.",
    },
    {
      id: 4,
      icon: FaHome,
      title: "4. Entrega del código",
      description: "El código puede enviarse por llamada, SMS, correo o cualquier método preferido.",
    },
    {
      id: 5,
      icon: FaKey,
      title: "5. Acceso sin problemas",
      description:
        "El turista usa el código para todas las instalaciones durante las fechas asignadas.",
    },
    {
      id: 6,
      icon: FaTimesCircle,
      title: "6. Expiración automática",
      description:
        "El acceso deja de funcionar automáticamente tras finalizar la estancia del cliente.",
    },
  ];

  return (
    <>
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <h2 className="text-center text-6xl font-bold text-primary pt-12 mb-20 sm:mb-0">
            Rápido y facil
          </h2>
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {steps1.map((step) => (
              <SingleFeature key={step.id} feature={step} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
