import Image from "next/image";
import ProductTemplate from "@/components/Products/ProductTemplate";

const CodeSystemBasic = () => {
  const copyProduct = ({
    titleCarrousel: "Code-System-Basic",
    checkpoints: [
      "Compatible con cerradero eléctrico.",
      "Teclado de acero inoxidable.",
      "Configuración sencilla.",
      "Códigos de 4 dígitos.",
    ],
    description: "Sistema de acceso mediante código ideal para negocios que requieren códigos permanentes. Perfecto para gestionar el acceso de empleados en coworkings, oficinas y comercios con una solución robusta y duradera.",
    imageSrc: ["/beige.jpg", "/rojo.jpg", "/beige.jpg"],
    buttonText: "Descubre más",
    buttonLink: "/producto",
    content: [
      {
        title: "Control Total de Accesos",
        description:
          "Gestiona hasta 60 códigos diferentes directamente desde el teclado, sin necesidad de software adicional. Ideal para asignar accesos permanentes a empleados, personal de mantenimiento y servicios regulares. La programación directa en el teclado permite modificar o eliminar códigos de forma instantánea, manteniendo el control total sobre quién accede a tus instalaciones.",
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
        title: "Seguridad Profesional",
        description:
          "Fabricado en acero inoxidable de alta resistencia, nuestro teclado garantiza años de funcionamiento sin mantenimiento. El sistema incluye códigos maestros para administradores y cerradero eléctrico reforzado, proporcionando múltiples capas de seguridad. La instalación profesional incluye cerradura anti-tarjeta y anti-pánico, asegurando la máxima protección para tu negocio.",
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
        title: "Instalación Simple",
        imageSrc: "/rojo.jpg",
        description: "Diseñado para una instalación rápida y sencilla por cualquier electricista profesional. Incluye manual detallado de instalación y programación.",
      },
      {
        title: "Gestión Autónoma",
        imageSrc: "/beige.jpg",
        description: "Programa y gestiona códigos directamente desde el teclado, sin necesidad de software o conexiones adicionales. Ideal para negocios que buscan autonomía.",
      },
      {
        title: "Máxima Durabilidad",
        imageSrc: "/rojo.jpg",
        description: "Construido con materiales de alta calidad y diseñado para soportar uso intensivo en entornos comerciales, garantizando años de funcionamiento fiable.",
      },
    ],
  });

  return (
    <section>
      <ProductTemplate copyProduct={copyProduct} />
    </section>
  );
};
export default CodeSystemBasic;