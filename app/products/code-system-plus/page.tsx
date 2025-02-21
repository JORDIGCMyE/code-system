import Image from "next/image";
import ProductTemplate from "@/components/Products/ProductTemplate";

const CodeSystemPlus = () => {
  const copyProduct = ({
    titleCarrousel: "Code-System-Plus",
    checkpoints: [
      "Sistema antirrobo y antipánico",
      "Sin manipulación de teclado",
      "Resiste agua, sol y polvo",
      "Sistema Braille",
    ],
    description: "Sistema avanzado de control de accesos que permite la gestión remota de múltiples propiedades. Genera códigos seguros desde cualquier lugar del mundo para apartamentos turísticos, coworkings y todo tipo de negocios.",
    imageSrc: ["/beige.jpg", "/rojo.jpg", "/beige.jpg"],
    buttonText: "Descubre más",
    buttonLink: "/producto",
    content: [
      {
        title: "Gestión Remota Avanzada",
        description:
          "Sistema integral de control de accesos que revoluciona la gestión de propiedades múltiples. Genera códigos seguros desde cualquier lugar del mundo a través de nuestro software propietario, sin necesidad de conexión permanente a internet. Ideal para apartamentos turísticos, coworkings y negocios que requieren flexibilidad máxima.",
        content: (
          <div className="h-full w-full flex items-center justify-center text-white">
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
        title: "Tecnología Sin Límites",
        description:
          "Disfruta de una libertad total en la gestión de accesos con un sistema que combina seguridad máxima y facilidad de uso. El teclado resistente a la intemperie incluye sistema Braille para accesibilidad universal, mientras que la tecnología anti-manipulación y antipánico garantiza la seguridad en todo momento. Sin necesidad de conexión a internet, elimina vulnerabilidades manteniendo todas las funcionalidades.",
        content: (
          <div className="h-full w-full flex items-center justify-center text-white">
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
    ],
    content2: [
      {
        title: "Software Intuitivo",
        imageSrc: "/rojo.jpg",
        description: "Genera y gestiona códigos de acceso desde cualquier ordenador con nuestro software propietario, diseñado para máxima facilidad de uso.",
      },
      {
        title: "Automatización Total",
        imageSrc: "/beige.jpg",
        description: "Automatiza completamente el proceso de check-in y check-out en tus propiedades turísticas, eliminando la necesidad de personal in situ.",
      },
      {
        title: "Máxima Seguridad",
        imageSrc: "/rojo.jpg",
        description: "Sistema antirrobo y antipánico con tecnología anti-manipulación, garantizando la seguridad de tus instalaciones en todo momento.",
      },
    ],
  });
  
  return (
    <section>
      <ProductTemplate copyProduct={copyProduct} />
    </section>
  );
};
export default CodeSystemPlus;