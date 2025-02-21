import Image from "next/image";
import ProductTemplate from "@/components/Products/ProductTemplate";

const TaquillasInteligentes = () => {
  const copyProduct = ({
    titleCarrousel: "Taquillas Inteligentes",
    checkpoints: [
      "Instalación en múltiples entornos",
      "Acceso seguro y eficiente",
      "Accesorios y repuestos",
      "Variedad de opciones",
    ],
    description: "Solución integral de almacenamiento seguro que revoluciona la gestión de accesos y entregas en todo tipo de establecimientos, desde hoteles hasta comunidades residenciales.",
    imageSrc: ["/beige.jpg", "/rojo.jpg", "/beige.jpg"],
    buttonText: "Descubre más",
    buttonLink: "/producto",
    content: [
      {
        title: "Automatización y Seguridad",
        description:
          "Sistema completo de taquillas inteligentes que automatiza la gestión de accesos y entregas. Equipadas con tecnología de última generación, permiten el acceso mediante código único y pantalla táctil, eliminando la necesidad de personal dedicado. Ideal para hoteles, residencias universitarias y zonas comunitarias que buscan optimizar la gestión de llaves, paquetería y documentos.",
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
        title: "Versatilidad y Adaptabilidad",
        description:
          "Disponibles en múltiples configuraciones, desde buzones individuales hasta sistemas comunitarios completos. Fabricadas con materiales de alta calidad y disponibles en diversos acabados, nuestras taquillas se adaptan a cualquier entorno. Las opciones incluyen modelos de alta seguridad, taquillas ignífugas y unidades especialmente diseñadas para uso exterior, garantizando una solución para cada necesidad.",
        content: (
          <div className="h-full w-full flex items-center justify-center text-white">
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
    ],
    content2: [
      {
        title: "Control Total",
        imageSrc: "/rojo.jpg",
        description: "Sistema de gestión centralizado que permite monitorizar y controlar el acceso a cada taquilla de forma remota y segura.",
      },
      {
        title: "Diseño Flexible",
        imageSrc: "/beige.jpg",
        description: "Múltiples configuraciones y acabados disponibles para adaptarse perfectamente a las necesidades específicas de cada instalación.",
      },
      {
        title: "Máxima Seguridad",
        imageSrc: "/rojo.jpg",
        description: "Tecnología avanzada de control de accesos con sistemas anti-manipulación y registro detallado de todas las operaciones.",
      },
    ],
  });

  return (
    <section>
      <ProductTemplate copyProduct={copyProduct} />
    </section>
  );
};
export default TaquillasInteligentes;