import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonials() {
    const testimonials = [
        {
            quote:
                "La atención al detalle y las características innovadoras han transformado completamente nuestro flujo de trabajo. Esto es exactamente lo que necesitábamos.",
            name: "María López",
            designation: "Gerente de Producto en TechFlow",
            src: "/rojo.jpg",
        },
        {
            quote:
                "La implementación fue perfecta y los resultados superaron nuestras expectativas. La flexibilidad de la plataforma es impresionante.",
            name: "Carlos Martínez",
            designation: "CTO en InnovateSphere",
            src: "/beige.jpg",
        },
        {
            quote:
                "Esta solución ha mejorado significativamente la productividad de nuestro equipo. La interfaz intuitiva simplifica tareas complejas.",
            name: "Elena García",
            designation: "Directora de Operaciones en CloudScale",
            src: "/rojo2.jpg",
        },
        {
            quote:
                "Soporte excepcional y características robustas. Es raro encontrar un producto que cumpla todas sus promesas.",
            name: "Javier Fernández",
            designation: "Líder de Ingeniería en DataPro",
            src: "/beige2.jpg",
        },
    ];

    return <AnimatedTestimonials testimonials={testimonials} />;
}
