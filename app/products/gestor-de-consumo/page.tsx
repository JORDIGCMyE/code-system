import Image from "next/image";
import ProductTemplate from "@/components/Products/ProductTemplate";

const GestorConsumo = () => {
  const copyProduct = ({
    titleCarrousel: "Gestor de Consumo",
    checkpoints: [
      "Conecte y desconecte la parte que quiera del cuadro eléctrico",
      "Personalice el tiempo de actuación del sensor",
      "Hasta 7 programaciones horarias diferentes",
      "Conecte entre 1 y 4 sensores de movimiento",
    ],
    description: "Sistema inteligente de gestión energética que garantiza un ahorro significativo en tu factura eléctrica, evitando el consumo innecesario en climatización y otros sistemas.",
    imageSrc: ["/beige.jpg", "/rojo.jpg", "/beige.jpg"],
    buttonText: "Descubre más",
    buttonLink: "/producto",
    content: [
      {
        title: "Control Energético Total",
        description:
          "Sistema avanzado de gestión energética que te permite ahorrar hasta 300€ anuales por unidad. Configura hasta 7 programaciones horarias diferentes y personaliza los tiempos de actuación de los sensores según las necesidades de cada franja horaria. La flexibilidad del sistema permite adaptar el consumo energético a los patrones reales de uso de cada espacio.",
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
        title: "Automatización Inteligente",
        description:
          "Optimiza el consumo energético de forma automática conectando hasta 4 sensores de movimiento que detectan la presencia real en cada espacio. El sistema permite controlar selectivamente diferentes circuitos del cuadro eléctrico, priorizando la gestión de los mayores consumidores como climatización, iluminación y equipos específicos. Ideal para hoteles, apartamentos turísticos y espacios comerciales.",
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
        title: "Programación Flexible",
        imageSrc: "/rojo.jpg",
        description: "Configura hasta 7 programaciones horarias diferentes adaptadas a los patrones de uso de tu negocio, maximizando el ahorro energético.",
      },
      {
        title: "Control Multi-Sensor",
        imageSrc: "/beige.jpg",
        description: "Amplía la cobertura con hasta 4 sensores de movimiento para una gestión precisa en espacios grandes o múltiples plantas.",
      },
      {
        title: "Ahorro Garantizado",
        imageSrc: "/rojo.jpg",
        description: "Reduce significativamente tu factura eléctrica eliminando consumos innecesarios en climatización y otros sistemas.",
      },
    ],
  });

  return (
    <section>
      <ProductTemplate copyProduct={copyProduct} />
    </section>
  );
};
export default GestorConsumo;