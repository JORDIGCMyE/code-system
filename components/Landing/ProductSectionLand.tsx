
import Image from "next/image";


const callouts = [
  {
    name: 'Code-System.',
    description: 'Sistema de Acceso por Código',
    imageSrc: '/beige.jpg',
    imageAlt: '',
    href: '/products/code-system-plus',
  },
  {
    name: 'Gestor de consumo.',
    description: 'Medidor de Consumo Eléctrico',
    imageSrc: '/beige.jpg',
    imageAlt: '',
    href: '/products/gestor-de-consumo',
  },
  {
    name: 'Taquillas Inteligentes.',
    description: 'Equipos Inteligentes de Almacenaje',
    imageSrc: '/beige.jpg',
    imageAlt: '',
    href: '/products/taquillas-inteligentes',
  },
]

export default function Example() {
  return (
    <div className="bg-[#c21d2c] mt-25 sm:mt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-white">Nuestros Productos</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <Image
                  width={600}
                  height={600}
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-white">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-white">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
