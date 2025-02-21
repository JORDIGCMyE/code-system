import { IconBaseProps } from "react-icons/lib";

export type Feature = {
  id: number;
  icon: React.ComponentType<IconBaseProps>; // Referencia al componente del ícono
  title: string;
  description: string;
};

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon: Icon, title, description } = feature; // Extraer la referencia al ícono

  return (
    <>
      <div className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 xl:p-12.5">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          {/* Renderizamos el componente del ícono */}
          <Icon className="text-4xl text-white" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black  xl:text-itemtitle">
          {title}
        </h3>
        <p className="text-black opacity-80">{description}</p>
      </div>
    </>
  );
};

export default SingleFeature;
