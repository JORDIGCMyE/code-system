import Image from "next/image";
import Link from "next/link";

interface AboutDataType {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
}

const Aboutdata: AboutDataType[] = [
  {
    heading: "Nosotros.",
    imgSrc: "/aboutus/imgOne.svg",
    paragraph:
      "Code System control de acceso es parte de los productos de Multimedia Ingeniería, una empresa con más de 20 años de experiencia especializada en ofrecer soluciones tecnológicas innovadoras para el sector turístico y otros sectores.",
    link: "Aprende más",
  },
  {
    heading: "Servicios.",
    imgSrc: "/aboutus/imgTwo.svg",
    paragraph:
      "Desarrollamos sistemas de apertura de puerta con código y gestores de energía personalizados para edificios turísticos, oficinas, coworkings y comercios, adaptándonos a las necesidades específicas de cada cliente.",
    link: "Aprende más",
  },
  {
    heading: "Experiencia.",
    imgSrc: "/aboutus/imgThree.svg",
    paragraph:
      "Con más de 20 años de experiencia en ingeniería personalizada, M&E se especializa en sistemas de control de acceso y gestión de energía, ofreciendo soluciones innovadoras y de alta calidad en sectores como el medioambiente, automoción y más.",
    link: "Aprende más",
  },
];

const AboutUsSection = () => {
  return (
    <div id="aboutus-section" className="my-36">
      <div className="mx-auto max-w-7xl px-4 lg:px-10 bg-lightgrey rounded-3xl relative">
        <h3 className="text-center text-blue text-lg tracking-widest text-primary">SOBRE NOSOTROS</h3>
        <h4 className="text-center text-4xl lg:text-65xl font-bold text-primary">
          Aprende mas sobre nuestra empresa.
        </h4>
        <div className="grid grid-cols-1 w-[80%] m-auto lg:w-[100%] lg:grid-cols-3 gap-x-16 lg:gap-x-32">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="hover:bg-[#c21d2c] bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group transition-colors duration-300"
            >
              <h4 className="text-4xl font-semibold text-black mb-5 group-hover:text-white">
                {item.heading}
              </h4>
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={100}
                height={100}
                className="mb-5"
              />
              <h4 className="text-lg font-normal text-black group-hover:text-white mb-5">
                {item.paragraph}
              </h4>
              <Link
                href="/about"
                className="text-lg font-semibold text-primary group-hover:text-white hover-underline"
              >
                {item.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
